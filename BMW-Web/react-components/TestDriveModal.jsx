import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, User, Mail, Phone, CheckCircle2, Sparkles, Zap } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function TestDriveModal({ isOpen, onClose, defaultModel }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    model: defaultModel ? defaultModel.name : 'BMW i7 xDrive60',
    city: 'New York Flagship Studio',
    name: '',
    email: '',
    phone: '',
    date: '2026-09-15',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    soundFx.playMotorSurge();
    setSubmitted(true);
  };

  const handleClose = () => {
    soundFx.playClick(400);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg rounded-3xl border border-white/15 bg-gradient-to-b from-[#141724] to-[#090b12] p-6 sm:p-8 text-white shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden"
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-bmw-cyan/30 blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-bmw-electric/30 blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-6 animate-pulse">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold uppercase font-display text-white">
              RESERVATION CONFIRMED
            </h3>
            <p className="mt-3 text-slate-300 text-sm max-w-xs font-light">
              Your VIP Private Test Drive for the <span className="text-bmw-cyan font-semibold">{formData.model}</span> has been registered.
            </p>
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 text-left w-full space-y-1">
              <div><strong className="text-white">Location:</strong> {formData.city}</div>
              <div><strong className="text-white">Scheduled:</strong> {formData.date}</div>
              <div><strong className="text-white">Client:</strong> {formData.name || 'BMW VIP Guest'}</div>
            </div>
            <button
              onClick={handleClose}
              className="mt-8 px-8 py-3 rounded-full bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-bmw-cyan transition-all"
            >
              Return to Experience
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-bmw-cyan animate-spin-slow" />
              <span className="text-xs font-mono uppercase tracking-widest text-bmw-cyan">
                EXCLUSIVE ACCESS
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white">
              RESERVE VIP TEST DRIVE
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm font-light mt-1">
              Experience the 544 HP electric surge and Hans Zimmer acoustics in person.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs font-mono">
              <div>
                <label className="block text-slate-400 uppercase tracking-wider mb-1.5">Select Model</label>
                <select
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white focus:outline-none focus:border-bmw-cyan"
                >
                  <option value="BMW i7 xDrive60 (Flagship 544 HP)">BMW i7 xDrive60 (Flagship 544 HP)</option>
                  <option value="BMW i7 M70 xDrive (Performance 660 HP)">BMW i7 M70 xDrive (Performance 660 HP)</option>
                  <option value="BMW i7 eDrive50 (RWD 455 HP)">BMW i7 eDrive50 (RWD 455 HP)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 uppercase tracking-wider mb-1.5">Dealership Hub</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white focus:outline-none focus:border-bmw-cyan"
                  >
                    <option value="New York Flagship Studio">New York Flagship Studio</option>
                    <option value="Munich BMW Welt Experience">Munich BMW Welt</option>
                    <option value="London Mayfair Lounge">London Mayfair Lounge</option>
                    <option value="Dubai Sheikh Zayed Pavilion">Dubai Pavilion</option>
                    <option value="Tokyo Ginza Center">Tokyo Ginza Center</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 uppercase tracking-wider mb-1.5">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white focus:outline-none focus:border-bmw-cyan"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 uppercase tracking-wider mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jacob Thompson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-slate-600 focus:outline-none focus:border-bmw-cyan"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 uppercase tracking-wider mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@executive.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-slate-600 focus:outline-none focus:border-bmw-cyan"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 uppercase tracking-wider mb-1.5">Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-slate-600 focus:outline-none focus:border-bmw-cyan"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-bmw-electric via-blue-600 to-bmw-cyan font-bold uppercase tracking-widest text-xs text-white shadow-[0_0_25px_rgba(0,102,255,0.6)] hover:shadow-[0_0_35px_rgba(0,240,255,0.8)] transition-all"
              >
                Confirm VIP Test Drive
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
