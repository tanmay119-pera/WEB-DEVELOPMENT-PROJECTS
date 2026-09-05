import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Phone, Eye, EyeOff, CheckCircle2, Shield, KeyRound, Sparkles, ArrowRight } from 'lucide-react';
import BmwLogo from './BmwLogo';
import { soundFx } from '../utils/audio';

export default function BmwAuthModal({ isOpen, onClose, initialMode = 'signin' }) {
  const [mode, setMode] = useState(initialMode); // 'signin' | 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    title: 'Mr.',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    rememberMe: true,
    termsAccepted: true,
  });

  const handleChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundFx.playClick(700);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      soundFx.playMotorSurge();
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2200);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundFx.playClick(400);
            onClose();
          }}
          className="fixed inset-0 bg-black/85 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 25 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg rounded-3xl border border-white/20 bg-gradient-to-b from-[#0f1420] via-[#090c14] to-[#04060a] p-6 sm:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.95)] overflow-hidden z-10 my-8"
        >
          {/* Ambient Corner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066B1]/20 blur-[100px] pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={() => {
              soundFx.playClick(400);
              onClose();
            }}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all hover:scale-105"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Brand Header */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="mb-3 transition-transform hover:scale-105 drop-shadow-[0_0_15px_rgba(0,102,177,0.5)]">
              <BmwLogo className="w-14 h-14" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight uppercase">
              BMW ID Customer Portal
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 font-light mt-1 max-w-xs">
              {mode === 'signin'
                ? 'Sign in to access your digital garage, saved builds, and connected services.'
                : 'Create your universal BMW ID to configure vehicles, book test drives, and sync data.'}
            </p>
          </div>

          {/* Mode Tabs (Sign In vs Register) */}
          <div className="flex rounded-xl bg-white/5 border border-white/10 p-1 mb-6">
            <button
              type="button"
              onClick={() => {
                soundFx.playClick(500);
                setMode('signin');
              }}
              className={`flex-1 py-2.5 rounded-lg text-xs font-bold font-display uppercase tracking-wider transition-all ${
                mode === 'signin'
                  ? 'bg-[#0066B1] text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Sign In
            </button>

            <button
              type="button"
              onClick={() => {
                soundFx.playClick(550);
                setMode('signup');
              }}
              className={`flex-1 py-2.5 rounded-lg text-xs font-bold font-display uppercase tracking-wider transition-all ${
                mode === 'signup'
                  ? 'bg-[#0066B1] text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Register New ID
            </button>
          </div>

          {/* Success Notification */}
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_30px_rgba(16,185,129,0.5)] animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-bold font-display text-white uppercase tracking-wider">
                {mode === 'signin' ? 'Welcome Back!' : 'BMW ID Created Successfully!'}
              </h3>
              <p className="text-xs text-slate-300 mt-2">
                Connecting to BMW ConnectedDrive Cloud & Synchronizing Digital Profile...
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Registration Only: Name Fields */}
              {mode === 'signup' && (
                <div className="space-y-4">
                  <div className="flex gap-2">
                    {['Mr.', 'Ms.', 'Mx.'].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => handleChange('title', t)}
                        className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all ${
                          formData.title === t
                            ? 'bg-white text-black border-white'
                            : 'bg-white/5 border-white/10 text-slate-300'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        placeholder="Alexander"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066B1] focus:ring-1 focus:ring-[#0066B1]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        placeholder="Vance"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066B1] focus:ring-1 focus:ring-[#0066B1]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
                      Mobile Number (For Two-Factor Key)
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+1 (555) 019-2834"
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066B1] focus:ring-1 focus:ring-[#0066B1]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Email / BMW ID Field */}
              <div>
                <label className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
                  Email Address / BMW ID
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="name@bmw-customer.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066B1] focus:ring-1 focus:ring-[#0066B1]"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                    Password
                  </label>
                  {mode === 'signin' && (
                    <button
                      type="button"
                      onClick={() => alert('Password recovery link dispatched to your registered email.')}
                      className="text-[10px] font-mono text-[#38bdf8] hover:underline"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-11 pr-11 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066B1] focus:ring-1 focus:ring-[#0066B1]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="pt-1 space-y-2">
                {mode === 'signin' ? (
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300 select-none">
                    <input
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={(e) => handleChange('rememberMe', e.target.checked)}
                      className="w-4 h-4 rounded bg-white/10 border-white/20 text-[#0066B1] focus:ring-0"
                    />
                    <span>Keep me signed in on this device</span>
                  </label>
                ) : (
                  <label className="flex items-start gap-2 cursor-pointer text-[11px] text-slate-300 select-none">
                    <input
                      type="checkbox"
                      required
                      checked={formData.termsAccepted}
                      onChange={(e) => handleChange('termsAccepted', e.target.checked)}
                      className="w-4 h-4 mt-0.5 rounded bg-white/10 border-white/20 text-[#0066B1] focus:ring-0"
                    />
                    <span>I agree to BMW ConnectedDrive Terms of Service & Privacy Policy</span>
                  </label>
                )}
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-[#0066B1] hover:bg-[#0077cc] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(0,102,177,0.6)] hover:scale-[1.02] flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{mode === 'signin' ? 'Sign In with BMW ID' : 'Create My BMW ID'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Social Single Sign-On Options */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-center text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3">
                  Or authenticate with
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playClick(500);
                      handleSubmit({ preventDefault: () => {} });
                    }}
                    className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-all flex items-center justify-center gap-2"
                  >
                    <span>Apple ID</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playClick(500);
                      handleSubmit({ preventDefault: () => {} });
                    }}
                    className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-all flex items-center justify-center gap-2"
                  >
                    <span>Google</span>
                  </button>
                </div>
              </div>

              {/* BMW Connected Perks Footer */}
              <div className="pt-3 flex items-center justify-center gap-4 text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Shield className="w-3 h-3 text-[#0066B1]" /> 256-bit SSL
                </span>
                <span className="flex items-center gap-1">
                  <KeyRound className="w-3 h-3 text-[#0066B1]" /> Digital Key
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#0066B1]" /> VIP Sync
                </span>
              </div>

            </form>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
