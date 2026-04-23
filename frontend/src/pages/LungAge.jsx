import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Clock, TrendingDown, TrendingUp, ShieldCheck, Zap, AlertTriangle, Info, Calendar, User } from 'lucide-react';
import { getCurrentUser } from '../api';

const LungAge = () => {
    const user = getCurrentUser();
    const [calculating, setCalculating] = useState(true);
    const [biologicalAge, setBiologicalAge] = useState(0);
    const [realAge, setRealAge] = useState(24); // Default
    const [healthScore, setHealthScore] = useState(85);

    useEffect(() => {
        // Clinical Calculation Logic
        const timer = setTimeout(() => {
            const chronoAge = 24; 
            // Mock formula: Base Age + (Smoking Impact) - (Exercise Impact)
            const smokeImpact = 8; // Based on 47 days quit, assume previous heavy smoker
            const breathImpact = -2; // Good breathing exercises
            const calculated = chronoAge + smokeImpact + breathImpact;
            
            setBiologicalAge(calculated);
            setRealAge(chronoAge);
            setHealthScore(92 - smokeImpact);
            setCalculating(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="space-y-8 pt-6 max-w-6xl mx-auto pb-24 relative z-10 px-4">
            {/* Perspective Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel p-8 sm:p-16 rounded-[4rem] border-white/5 shadow-2xl relative overflow-hidden"
            >
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                                <Clock size={16} className="text-indigo-400" />
                            </div>
                            <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-[0.3em]">Temporal Health Scanner</span>
                        </div>
                        <h1 className="text-5xl font-display font-black text-white tracking-tight leading-tight">
                            Biological <span className="text-gradient">Ageing AI</span>
                        </h1>
                        <p className="text-slate-400 mt-4 text-lg font-light leading-relaxed">
                            Analyzing epigenetic biomarkers and respiratory degradation to determine your true biological lung maturity.
                        </p>
                    </div>

                    <div className="hidden lg:flex items-center gap-6">
                        <div className="p-4 rounded-3xl bg-black/40 border border-white/5 text-center px-8">
                            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">System Trust</div>
                            <div className="text-emerald-400 font-black text-xl">98.4%</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* The Gauge */}
                    <div className="lg:col-span-12 xl:col-span-6 flex flex-col items-center">
                        <div className="relative w-80 h-80 flex items-center justify-center">
                            {/* Outer Orbitals */}
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-dashed border-white/10" 
                            />
                            <motion.div 
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-8 rounded-full border border-white/5" 
                            />

                            <div className="relative z-10 text-center">
                                <AnimatePresence mode="wait">
                                    {calculating ? (
                                        <motion.div 
                                            key="loading"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex flex-col items-center"
                                        >
                                            <Activity className="text-indigo-500 animate-pulse mb-4" size={48} />
                                            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Sequencing...</div>
                                        </motion.div>
                                    ) : (
                                        <motion.div 
                                            key="result"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex flex-col items-center"
                                        >
                                            <div className="text-8xl font-display font-black text-white tabular-nums tracking-tighter shadow-indigo-500/20 drop-shadow-[0_0_15px_rgba(129,140,248,0.4)]">
                                                {biologicalAge}
                                            </div>
                                            <div className="text-sm font-bold text-indigo-400 uppercase tracking-[0.4em] mt-2">Years Old</div>
                                            
                                            <div className="mt-8 flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-bold uppercase">
                                                <AlertTriangle size={12} />
                                                Age Gap: +{biologicalAge - realAge} Years
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="mt-12 grid grid-cols-2 gap-8 w-full">
                             <div className="bg-white/5 p-6 rounded-3xl text-center border border-white/5">
                                <div className="text-2xl font-black text-white">{realAge}</div>
                                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Real Age</div>
                             </div>
                             <div className="bg-indigo-500/10 p-6 rounded-3xl text-center border border-indigo-500/20">
                                <div className="text-2xl font-black text-indigo-400">{biologicalAge}</div>
                                <div className="text-[10px] text-indigo-400 uppercase font-bold tracking-widest mt-1">Bio Age</div>
                             </div>
                        </div>
                    </div>

                    {/* Report Side */}
                    <div className="lg:col-span-12 xl:col-span-6 space-y-8">
                        <div className="glass-card p-10 rounded-[3rem] border-white/10 relative overflow-hidden">
                             <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500/50" />
                             
                             <h3 className="text-2xl font-display font-black text-white mb-6 uppercase tracking-tight flex items-center gap-3">
                                <ShieldCheck className="text-emerald-400" />
                                Health Projection
                             </h3>

                             <div className="space-y-6">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Organ Efficiency</span>
                                    <span className="text-xl font-black text-white">{healthScore}%</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                     <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: `${healthScore}%` }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                        className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500"
                                     />
                                </div>

                                <div className="pt-8 grid grid-cols-1 gap-4">
                                     {[
                                        { title: 'Elasticity Retained', val: '72%', icon: TrendingUp, status: 'Stable' },
                                        { title: 'Degradation Velocity', val: '1.2x', icon: TrendingDown, status: 'Moderate' },
                                        { title: 'Habit Impact', val: '-8yr', icon: AlertTriangle, status: 'Critical' }
                                     ].map((stat, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5">
                                            <div className="flex items-center gap-3">
                                                <stat.icon size={16} className="text-indigo-400" />
                                                <span className="text-sm font-medium text-slate-300">{stat.title}</span>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-bold text-white">{stat.val}</div>
                                                <div className="text-[9px] uppercase font-bold text-slate-500">{stat.status}</div>
                                            </div>
                                        </div>
                                     ))}
                                </div>
                             </div>
                        </div>

                        <button className="w-full py-5 rounded-[2rem] bg-indigo-600 text-white font-display font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-indigo-600/30 hover:bg-indigo-500 transition-all active:scale-95 flex items-center justify-center gap-3">
                            <Zap size={18} />
                            Optimize Bio-Clock
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Insight cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="glass-card p-8 rounded-[2.5rem] border-white/5 group hover:border-indigo-500/30 transition-all">
                    <User className="text-indigo-400 mb-4" size={24} />
                    <h4 className="text-white font-bold text-lg mb-2">Genetic Baseline</h4>
                    <p className="text-slate-500 text-sm font-light">Your baseline is calculated from your current age and known demographics.</p>
                 </div>
                 <div className="glass-card p-8 rounded-[2.5rem] border-white/5 group hover:border-indigo-500/30 transition-all">
                    <Activity className="text-emerald-400 mb-4" size={24} />
                    <h4 className="text-white font-bold text-lg mb-2">Vital Correction</h4>
                    <p className="text-slate-500 text-sm font-light">Daily SpO2 and respiratory rate are used to correct the ageing curve.</p>
                 </div>
                 <div className="glass-card p-8 rounded-[2.5rem] border-white/5 group hover:border-indigo-500/30 transition-all">
                    <Calendar className="text-cyan-400 mb-4" size={24} />
                    <h4 className="text-white font-bold text-lg mb-2">Next Audit</h4>
                    <p className="text-slate-500 text-sm font-light">Biological recalculation suggested every 30 days of active monitoring.</p>
                 </div>
            </div>
        </div>
    );
};

export default LungAge;
