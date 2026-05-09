import React from 'react';
import { FastForward, CheckCircle, MessageSquare, Globe, Smartphone, Zap, Code, Layout } from 'lucide-react';

const RapidFixLanding = () => {
  const services = [
    { title: "Business Websites", icon: <Globe className="w-6 h-6" /> },
    { title: "React / NodeJS Dev", icon: <Code className="w-6 h-6" /> },
    { title: "WordPress Fixes", icon: <Layout className="w-6 h-6" /> },
    { title: "Mobile App UI", icon: <Smartphone className="w-6 h-6" /> },
    { title: "AWS Deployment", icon: <Zap className="w-6 h-6" /> },
    { title: "Speed Optimization", icon: <FastForward className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0f1115] text-white font-sans selection:bg-orange-500">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center font-bold text-xl">R⚡</div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">RapidFix <span className="text-orange-500">Cebu</span></span>
        </div>
        <a href="https://m.me/61589331937397" className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full font-bold transition-all text-sm">
          DM NOW
        </a>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-16 max-w-4xl mx-auto text-center">
        <div className="inline-block px-3 py-1 border border-orange-500/30 rounded-full text-orange-500 text-xs font-bold mb-6 tracking-widest uppercase">
          Available for Urgent Projects
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          FAST WEBSITE & <span className="text-orange-500 text-glow">APP SOLUTIONS</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Helping Cebu businesses launch, fix, and improve digital products quickly. 
          Expert React, WordPress, and Mobile development.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all">
            View Services
          </a>
          <a href="https://m.me/61589331937397" className="border border-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
            <MessageSquare className="w-5 h-5" /> Message on Facebook
          </a>
        </div>
      </header>

      {/* Trust Bar */}
      <section className="bg-white/5 border-y border-white/10 py-8 overflow-hidden">
        <div className="flex justify-around items-center opacity-50 grayscale flex-wrap gap-8 px-6">
          <span className="font-bold text-xl tracking-widest">REACT</span>
          <span className="font-bold text-xl tracking-widest">NODE.JS</span>
          <span className="font-bold text-xl tracking-widest">WORDPRESS</span>
          <span className="font-bold text-xl tracking-widest">AWS</span>
          <span className="font-bold text-xl tracking-widest">NEXT.JS</span>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What I Can Help With</h2>
          <p className="text-gray-500">Reliable solutions with a focus on speed and quality.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-8 border border-white/5 bg-white/[0.02] rounded-2xl hover:border-orange-500/50 transition-all group">
              <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <div className="flex items-center gap-2 text-sm text-green-500">
                <CheckCircle className="w-4 h-4" /> Ready to Start
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have an Emergency Fix?</h2>
            <p className="mb-8 text-orange-100 text-lg">WordPress fixes starting at ₱3000. Same-day turnaround available.</p>
            <a href="https://m.me/61589331937397" className="bg-black text-white px-10 py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform inline-block">
              Get a Quote Now
            </a>
          </div>
          {/* Decorative background element */}
          <div className="absolute -bottom-10 -right-10 text-black/20 font-black text-9xl">RAPID</div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-600 border-t border-white/5">
        <p>© 2026 RapidFix Web & Mobile Cebu</p>
      </footer>
    </div>
  );
};

export default RapidFixLanding;