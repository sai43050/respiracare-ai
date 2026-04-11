import { motion } from 'framer-motion';
import { Activity, Code, Server, Brain, HeartPulse, Wind, Mic, Radio, Wifi, ShieldCheck } from 'lucide-react';

const techStack = [
  {
    icon: Code,
    title: 'Frontend',
    color: 'text-accent-400',
    bg: 'bg-accent-500/10',
    border: 'border-accent-500/20',
    items: ['React 18 + Vite', 'Tailwind CSS', 'Framer Motion', 'Recharts'],
  },
  {
    icon: Server,
    title: 'Backend',
    color: 'text-vignan-300',
    bg: 'bg-vignan-500/10',
    border: 'border-vignan-500/20',
    items: ['FastAPI (Python)', 'SQLAlchemy + SQLite', 'Socket.IO (WebRTC)', 'JWT Authentication'],
  },
  {
    icon: Brain,
    title: 'AI Models',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    items: ['TorchXRayVision DenseNet-121', 'ResNet-18 Cough Classifier', 'GradCAM Heatmap Viz', 'Google Gemini LLM'],
  },
  {
    icon: Wifi,
    title: 'Infrastructure',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    items: ['Docker + Docker Compose', 'Railway (Backend)', 'Vercel (Frontend)', 'WeatherAPI.com integration'],
  },
];

const features = [
  { icon: HeartPulse, title: 'Live IoT Vitals', desc: 'Real-time SpO2, heart rate, and respiratory rate simulation with auto-alert triage.' },
  { icon: Wind, title: 'X-Ray Diagnostics', desc: 'Clinical DenseNet-121 trained on NIH ChestX-ray14 for instant radiograph classification.' },
  { icon: Mic, title: 'Acoustic Analysis', desc: 'ResNet-18 Mel-spectrogram model classifies cough audio for COVID-19 and symptomatic patterns.' },
  { icon: Brain, title: 'Gemini LLM Reports', desc: 'AI-synthesized clinical assessment reports generated per patient from historical vitals and scans.' },
  { icon: Radio, title: 'WebRTC Telemedicine', desc: 'Peer-to-peer encrypted video consultation between doctors and patients via Socket.IO signaling.' },
  { icon: ShieldCheck, title: 'Secure Auth', desc: 'RBAC with JWT tokens, role-separated dashboards for doctors and patients.' },
];

export default function About() {
  return (
    <div className="max-w-5xl mx-auto pt-4 pb-16 space-y-8 relative z-10">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-10 rounded-[2.5rem] border border-vignan-500/20 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-accent-500/10 blur-3xl rounded-full" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 bg-accent-500/10 border border-accent-500/30 px-5 py-2 rounded-full mb-6">
            <Activity size={18} className="text-accent-400" />
            <span className="text-accent-400 font-bold text-sm uppercase tracking-widest">RespiraCare AI Platform</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-4 tracking-tight">
            Next-Gen <span className="text-gradient">Respiratory Intelligence</span>
          </h1>
          <p className="text-slate-300 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            A multi-modal, production-grade AI platform for real-time respiratory health monitoring, 
            lung disease detection, and doctor-patient telemedicine — built for clinical environments.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-500">
            <span className="glass-card px-4 py-2 rounded-full border-white/5">Deep Learning</span>
            <span className="glass-card px-4 py-2 rounded-full border-white/5">IoT Telemetry</span>
            <span className="glass-card px-4 py-2 rounded-full border-white/5">LLM-Powered Reports</span>
            <span className="glass-card px-4 py-2 rounded-full border-white/5">WebRTC Video</span>
            <span className="glass-card px-4 py-2 rounded-full border-white/5">GradCAM Explainability</span>
          </div>
        </div>
      </motion.div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-2xl font-display font-bold text-white mb-5 px-1">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {techStack.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card p-6 rounded-3xl border ${t.border}`}
              >
                <div className={`inline-flex p-3 rounded-2xl ${t.bg} mb-4 border ${t.border}`}>
                  <Icon size={22} className={t.color} />
                </div>
                <h3 className={`font-display font-bold text-lg mb-3 ${t.color}`}>{t.title}</h3>
                <ul className="space-y-2">
                  {t.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-300 font-light">
                      <div className={`w-1.5 h-1.5 rounded-full ${t.color}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Features grid */}
      <div>
        <h2 className="text-2xl font-display font-bold text-white mb-5 px-1">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="glass-card p-6 rounded-3xl group"
              >
                <div className="bg-vignan-800/60 p-3 rounded-2xl border border-vignan-600/30 inline-flex mb-4 group-hover:border-accent-500/40 transition-colors">
                  <Icon size={22} className="text-accent-400" />
                </div>
                <h3 className="font-display font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">{f.title}</h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="glass-panel p-6 rounded-3xl border border-yellow-500/20 bg-yellow-500/5">
        <p className="text-yellow-300/80 text-sm text-center font-light leading-relaxed">
          <span className="font-bold text-yellow-300">⚠ Research & Educational Tool.</span> RespiraCare AI is intended 
          for academic demonstration and screening assistance only. All outputs must be reviewed by a licensed 
          medical professional. This system does not constitute medical advice or a clinical diagnosis.
        </p>
      </div>
    </div>
  );
}
