import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Activity, Cpu, Wifi, HeartPulse } from 'lucide-react';
import brandLogo from '../assets/hero_logo.png';

const logoVariants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const floatVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Home({ user }) {
  return (
    <div className="flex flex-col items-center pt-20 pb-20 relative overflow-hidden min-h-screen font-sans">

      {/* Cinematic Spotlight Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-transparent">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/20 rounded-[100%] blur-[120px] mix-blend-screen opacity-60 animate-pulse-slow" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-violet-600/20 rounded-[100%] blur-[80px] mix-blend-screen opacity-40" />

        {/* Dense Micro Grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
            backgroundSize: "24px 24px"
          }} />
      </div>

      {/* Hero Section */}
      <section className="w-full text-center py-32 px-4 relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div
          variants={floatVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-10 px-5 py-2 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400 shadow-[0_0_10px_#818cf8]" />
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-[0.25em]">
              Precision AI Architecture v5.0
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight leading-[0.95] w-full max-w-full text-center px-4">
            {user ? (
              <>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 block mb-2">PROACTIVE</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-orchid-400 uppercase block tracking-tight drop-shadow-[0_0_30px_rgba(129,140,248,0.2)]">
                  HEALTHCARE
                </span>
              </>
            ) : (
              <>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 block mb-2">NEXT-GEN</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-orchid-400 uppercase block tracking-tight drop-shadow-[0_0_30px_rgba(129,140,248,0.2)]">
                  LUNG AI
                </span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-slate-400 mb-14 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
          >
            {user
              ? 'Your respiratory health monitoring is securely encrypted. Select an analysis mode below.'
              : 'Deploy clinical-grade X-ray modeling and Live Acoustic Biomarker tracking inside an uncompromising architecture.'}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {user ? (
              <>
                <Link
                  to="/patient-dashboard"
                  className="group inline-flex items-center px-8 py-4 text-white font-bold rounded-2xl transition-all duration-300 text-sm relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #0284c7 100%)',
                    boxShadow: '0 0 30px rgba(16,185,129,0.4), 0 4px 20px rgba(0,0,0,0.3)',
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Enter Dashboard
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%)' }} />
                </Link>
                <Link
                  to="/upload"
                  className="group inline-flex items-center px-8 py-4 text-white font-bold rounded-2xl transition-all duration-300 text-sm"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                >
                  <Activity className="mr-2 h-4 w-4 text-emerald-400" />
                  New Analysis
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/upload"
                  className="group inline-flex items-center px-8 py-4 text-white font-bold rounded-2xl transition-all duration-300 text-sm relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #0284c7 100%)',
                    boxShadow: '0 0 30px rgba(16,185,129,0.4), 0 4px 20px rgba(0,0,0,0.3)',
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start X-Ray Analysis
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%)' }} />
                </Link>
                <Link
                  to="/login"
                  className="group inline-flex items-center px-8 py-4 text-white font-bold rounded-2xl transition-all duration-300 text-sm"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(2,132,199,0.4)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                >
                  <HeartPulse className="mr-2 h-4 w-4 text-sky-400" />
                  Sign In
                </Link>
              </>
            )}
          </motion.div>

          {/* Live stats ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex justify-center gap-8 text-xs font-mono"
          >
            {[
              { label: 'ACCURACY', value: '94.2%', color: '#34d399' },
              { label: 'UPTIME', value: '99.9%', color: '#38bdf8' },
              { label: 'LATENCY', value: '<200ms', color: '#fb923c' },
            ].map(stat => (
              <div key={stat.label} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: stat.color }} />
                <span className="text-slate-500 uppercase tracking-widest">{stat.label}</span>
                <span className="font-bold" style={{ color: stat.color }}>{stat.value}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Feature Cards */}
      <section className="grid md:grid-cols-3 gap-5 w-full max-w-5xl px-4 relative z-10">
        <FeatureCard
          icon={<Zap className="h-6 w-6" style={{ color: '#34d399' }} />}
          iconBg="rgba(52,211,153,0.12)"
          iconBorder="rgba(52,211,153,0.25)"
          glowColor="rgba(52,211,153,0.15)"
          title="Instant X-Ray AI"
          description="Clinical DenseNet-121 analyzes chest X-rays in under a second with GradCAM heatmaps."
          tag="Vision AI"
          delay={0.1}
        />
        <FeatureCard
          icon={<Activity className="h-6 w-6" style={{ color: '#38bdf8' }} />}
          iconBg="rgba(56,189,248,0.12)"
          iconBorder="rgba(56,189,248,0.25)"
          glowColor="rgba(56,189,248,0.15)"
          title="Cough Analyzer"
          description="ResNet18 audio model classifies cough patterns to detect COVID-19 and respiratory illness."
          tag="Audio AI"
          delay={0.25}
        />
        <FeatureCard
          icon={<ShieldCheck className="h-6 w-6" style={{ color: '#fb923c' }} />}
          iconBg="rgba(251,146,60,0.12)"
          iconBorder="rgba(251,146,60,0.25)"
          glowColor="rgba(251,146,60,0.15)"
          title="Live Monitoring"
          description="Real-time SpO2, heart rate & respiratory tracking with AI-driven critical alerts."
          tag="IoT + ML"
          delay={0.4}
        />
      </section>

      {/* Bottom status bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 flex items-center gap-3 px-5 py-2.5 rounded-full relative z-10"
        style={{
          background: 'rgba(3,7,18,0.7)',
          border: '1px solid rgba(255,255,255,0.06)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <Wifi className="h-3 w-3 text-emerald-400" />
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">System Online</span>
        <span className="w-px h-3 bg-slate-700" />
        <Cpu className="h-3 w-3 text-sky-400" />
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Neural Engine Active</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
      </motion.div>
    </div>
  );
}

function FeatureCard({ icon, iconBg, iconBorder, glowColor, title, description, tag, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
      className="relative p-6 rounded-3xl group cursor-default overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(13,26,45,0.6) 0%, rgba(7,13,26,0.5) 100%)',
        border: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(20px)',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(52,211,153,0.25)';
        e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.5), 0 0 30px ${glowColor}`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Top shimmer line on hover */}
      <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(52,211,153,0.6), transparent)' }} />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
        style={{ background: iconBg, border: `1px solid ${iconBorder}` }}
      >
        {icon}
      </div>

      {/* Tag */}
      <div className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">{tag}</div>

      <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed font-light">
        {description}
      </p>
    </motion.div>
  );
}
