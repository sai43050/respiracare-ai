import React, { useEffect, useState, useRef } from 'react';
import { simulateVitals, getVitalsHistory } from '../api';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ShieldCheck, AlertTriangle, Activity, Heart, Wind, Zap, Mic, Bluetooth, BluetoothConnected, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../components/Toast';

const MetricCard = ({ label, value, unit, icon, trend, type, onClick }) => {
  const typeColors = {
    low: { text: '#00c9a7', bg: 'rgba(0,201,167,0.1)', border: '#00c9a7' },
    mod: { text: '#f5a623', bg: 'rgba(245,166,35,0.1)', border: '#f5a623' },
    high: { text: '#e05c6f', bg: 'rgba(224,92,111,0.1)', border: '#e05c6f' },
    info: { text: '#3d8ef8', bg: 'rgba(61,142,248,0.1)', border: '#3d8ef8' },
  };
  const cfg = typeColors[type] || typeColors.info;

  return (
    <motion.div
      whileHover={{ y: -2 }}
      onClick={onClick}
      className="relative p-5 rounded-2xl cursor-pointer overflow-hidden group"
      style={{
        background: 'rgba(13,21,40,0.8)',
        border: '1px solid rgba(61,142,248,0.12)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: cfg.border }} />
      <div className="text-2xl mb-2">{icon}</div>
      <div className="font-display font-bold text-3xl text-white leading-none">
        {value} <span className="text-sm font-normal text-slate-500">{unit}</span>
      </div>
      <div className="text-xs text-slate-400 mt-2 font-medium uppercase tracking-wider">{label}</div>
      {trend && (
        <div className="text-[10px] mt-2 flex items-center gap-1 font-bold" style={{ color: cfg.text }}>
          {trend}
        </div>
      )}
    </motion.div>
  );
};

const RiskBar = ({ name, percent, color }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-xs font-semibold text-slate-300">{name}</span>
      <span className="text-xs font-bold" style={{ color }}>{percent}%</span>
    </div>
    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ background: color }}
      />
    </div>
  </div>
);

const CustomTooltip = ({ active, payload, label, color }) => {
  if (active && payload && payload.length) {
    return (
      <div className="px-3 py-2 rounded-xl text-xs font-mono"
        style={{
          background: 'rgba(3,7,18,0.95)',
          border: `1px solid ${color}40`,
          backdropFilter: 'blur(12px)',
        }}
      >
        <p className="text-slate-500 mb-1">{label}</p>
        <p className="font-bold" style={{ color }}>{payload[0]?.value}</p>
      </div>
    );
  }
  return null;
};

const PatientDashboard = ({ user }) => {
  const [vitals, setVitals] = useState({ spo2: 98, respiratory_rate: 16, heart_rate: 75 });
  const [history, setHistory] = useState([]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [bluetoothDevice, setBluetoothDevice] = useState(null);
  const intervalRef = useRef(null);
  const dataPushRef = useRef(null);

  const { showToast } = useToast();
  const navigate = useNavigate();

  const fetchHistory = async () => {
    if (!user?.user_id) return;
    try {
      const data = await getVitalsHistory(user.user_id);
      if (Array.isArray(data)) {
        const formatted = data.map(d => ({
          time: new Date(d.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          spo2: d.spo2,
          heart_rate: d.heart_rate,
          respiratory_rate: d.respiratory_rate,
          risk: 20 + Math.random() * 40
        })).slice(-15);
        setHistory(formatted);
      }
    } catch (err) { 
      console.error(err);
    }
  };

  useEffect(() => { 
    if (user?.user_id) {
      fetchHistory(); 
    }
  }, [user]);

  const triggerVitalsUpdate = async (forcedValues = null) => {
    try {
      let payload = forcedValues || {
        spo2: 95 + Math.random() * 5,
        heart_rate: 60 + Math.random() * 40,
        respiratory_rate: 12 + Math.random() * 10
      };
      
      await simulateVitals(user?.user_id || 'guest', payload.spo2, payload.respiratory_rate, payload.heart_rate);
      setVitals(payload);
      fetchHistory();
    } catch (err) { 
      console.error("Vitals update error", err);
    }
  };

  const connectBluetooth = async () => {
    if (!navigator.bluetooth) {
      showToast("Bluetooth not supported.", "error");
      return;
    }
    try {
      setIsConnecting(true);
      const device = await navigator.bluetooth.requestDevice({ filters: [{ services: ['heart_rate'] }] });
      setBluetoothDevice(device);
      showToast(`Connected to ${device.name}`, "success");
    } catch (error) {
      console.error(error);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="space-y-6 relative z-10 pt-4 pb-20">
      {/* Hero Header */}
      <div
        className="p-8 rounded-[2rem] relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0d1a36 0%, #0a1628 60%, #0d0f1e 100%)',
          border: '1px solid rgba(61,142,248,0.12)',
        }}
      >
        <div className="relative z-10 flex justify-between items-start">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-medical mb-1">Good Morning</div>
            <h1 className="text-4xl font-display font-black text-white leading-tight mb-2">
              {user?.full_name || user?.username || 'Patient'} 👋
            </h1>
            <p className="text-slate-400 text-sm font-medium">Respiratory Health Overview · {new Date().toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            <div className="inline-flex items-center gap-2 mt-5 px-3 py-1.5 rounded-full bg-medical/10 border border-medical/20 text-medical text-[10px] font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-medical"></span>
              </span>
              Live Monitoring Active
            </div>
          </div>
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-medical to-clinical flex items-center justify-center text-primary-darker font-black text-xl shadow-lg ring-4 ring-white/5">
            {(user?.full_name || user?.username || 'P').charAt(0).toUpperCase()}
          </div>
        </div>
      </div>

      {/* Metric Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label="Risk Score"
          value="32"
          unit="/ 100"
          icon="🫁"
          trend="▼ improving vs yesterday"
          type="low"
          onClick={() => navigate('/history')}
        />
        <MetricCard
          label="SpO₂ Level"
          value={Math.round(vitals.spo2)}
          unit="%"
          icon="🩸"
          trend="● normal range"
          type="info"
        />
        <MetricCard
          label="Air Quality"
          value="85"
          unit="AQI"
          icon="💨"
          trend="▲ moderate · caution"
          type="mod"
          onClick={() => navigate('/weather')}
        />
        <MetricCard
          label="Exhale Capacity"
          value="12"
          unit="sec"
          icon="🌬️"
          trend="▲ +2s from last week"
          type="low"
          onClick={() => navigate('/breathing')}
        />
      </div>

      {/* Charts & Clinical Data */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider">7-Day Risk Trend</h3>
            <span className="text-[10px] font-bold text-medical cursor-pointer hover:underline">Full History →</span>
          </div>
          <div className="p-6 rounded-3xl bg-primary-dark border border-clinical/10 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={history}>
                <defs>
                  <linearGradient id="riskGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00c9a7" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#00c9a7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
                <XAxis dataKey="time" tick={{ fontSize: 9, fill: '#4a6285' }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 9, fill: '#4a6285' }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip color="#00c9a7" />} />
                <Area type="monotone" dataKey="risk" stroke="#00c9a7" strokeWidth={3} fill="url(#riskGrad)" dot={{ r: 4, fill: '#00c9a7', strokeWidth: 0 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="p-2 rounded-3xl bg-primary-dark border border-clinical/10 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="p-4 text-[9px] font-bold text-slate-500 uppercase tracking-widest">Date</th>
                  <th className="p-4 text-[9px] font-bold text-slate-500 uppercase tracking-widest">Risk</th>
                  <th className="p-4 text-[9px] font-bold text-slate-500 uppercase tracking-widest">SpO₂</th>
                  <th className="p-4 text-[9px] font-bold text-slate-500 uppercase tracking-widest">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { date: 'Apr 15', risk: '32', spo2: '96%', type: 'Morning Check', color: '#00c9a7' },
                  { date: 'Apr 14', risk: '41', spo2: '95%', type: 'Evening Check', color: '#f5a623' },
                  { date: 'Apr 13', risk: '28', spo2: '97%', type: 'Routine', color: '#00c9a7' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-xs text-slate-300">{row.date}</td>
                    <td className="p-4 font-display font-bold text-sm" style={{ color: row.color }}>{row.risk}</td>
                    <td className="p-4 text-xs text-slate-400">{row.spo2}</td>
                    <td className="p-4 text-[10px] text-slate-500 font-medium uppercase">{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-primary-dark border border-clinical/10">
            <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-6">Risk Breakdown</h3>
            <RiskBar name="Inflammation" percent={18} color="#00c9a7" />
            <RiskBar name="Fluid Retention" percent={42} color="#f5a623" />
            <RiskBar name="Obstruction" percent={12} color="#00c9a7" />
            <RiskBar name="Bio-Acoustic Severity" percent={35} color="#3d8ef8" />
            
            <div className="mt-8 pt-6 border-t border-white/5 text-[11px] text-alert-amber leading-relaxed">
              ⚠️ AI Assessment: Fluid retention levels are slightly elevated. Monitor morning cough severity.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Cough AI', icon: '🎙️', path: '/upload-audio' },
              { label: 'X-Ray Hub', icon: '🔬', path: '/upload' },
              { label: 'Breathe', icon: '🌀', path: '/breathing' },
              { label: 'Meds', icon: '💊', path: '/medications' },
            ].map((act, i) => (
              <div
                key={i}
                onClick={() => navigate(act.path)}
                className="p-4 rounded-2xl bg-primary-dark border border-clinical/10 cursor-pointer flex flex-col items-center justify-center text-center gap-2 hover:bg-white/5 transition-all"
              >
                <div className="text-2xl">{act.icon}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{act.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
