import React from 'react';
import { FastForward, CheckCircle, MessageSquare, Globe, Smartphone, Zap, Code, Layout, Award, History, Database, Cpu } from 'lucide-react';

const RapidFixLanding = () => {
  const services = [
    { title: "Business Websites", icon: <Globe className="w-6 h-6" /> },
    { title: "React / NodeJS Dev", icon: <Code className="w-6 h-6" /> },
    { title: "WordPress Fixes", icon: <Layout className="w-6 h-6" /> },
    { title: "Mobile App UI", icon: <Smartphone className="w-6 h-6" /> },
    { title: "AWS Deployment", icon: <Zap className="w-6 h-6" /> },
    { title: "Speed Optimization", icon: <FastForward className="w-6 h-6" /> },
  ];

  const experienceHighlights = [
    { 
      year: "2021-Present", 
      role: "Senior Architecture", 
      desc: "Leading full-stack architecture for remote teams, focusing on React, Next.js, and Supabase for high-performance systems.",
      icon: <Cpu className="w-5 h-5 text-orange-500" />
    },
    { 
      year: "2017-2020", 
      role: "Enterprise & Web3", 
      desc: "Architected massive data sync systems for Australian companies and pioneered blockchain solutions (ERC20 tokens).",
      icon: <Database className="w-5 h-5 text-orange-500" />
    },
    { 
      year: "2014-2016", 
      role: "Foundation Phase", 
      desc: "Built scalable LAMP-based websites and CMS solutions using PHP, WordPress, and CodeIgniter.",
      icon: <History className="w-5 h-5 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f1115] text-white font-sans selection:bg-orange-500">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="RapidFix Logo" className="w-10 h-10 rounded" />
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
          RAPID WEBSITE & <span className="text-orange-500 text-glow">APP SOLUTIONS</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Helping Cebu businesses and Around the World launch Remotely, fix, and improve digital products quickly. 
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
        <div className="flex justify-around items-center opacity-50 grayscale flex-wrap gap-8 px-6 text-sm font-bold tracking-widest">
          <span>REACT</span>
          <span>NODE.JS</span>
          <span>WORDPRESS</span>
          <span>AWS</span>
          <span>NEXT.JS</span>
          <span>C# .NET</span>
        </div>
      </section>

      {/* NEW: Global Experience Section */}
      {/* <section className="px-6 py-24 max-w-6xl mx-auto bg-white/[0.01] rounded-3xl my-12 border border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 text-orange-500 font-bold mb-4">
              <Award className="w-6 h-6" /> 
              <span>A DECADE OF GLOBAL ENGINEERING</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">Expert Solutions for <br/>Cebu & The World.</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              With over 10 years of professional software engineering, I have delivered high-stakes projects for clients in 
              <strong> Australia, Germany, the US, Canada, Lithuania, and the UK.</strong> From Silicon Valley startups to 
              European enterprise systems, I bridge the gap between complex technical execution and global business goals[cite: 1, 16, 42, 54].
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold text-white">6+</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">Countries Served</div>
              </div>
              <div className="border-l border-white/10 h-12"></div>
              <div>
                <div className="text-3xl font-bold text-white">10Yrs</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">Senior Expertise</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
          
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="text-xs font-bold text-orange-500 uppercase mb-2">Global Remote Leadership [cite: 42, 54]</div>
              <div className="text-lg font-bold mb-1">International Software Architect</div>
              <p className="text-sm text-gray-500">
                Managing and delivering parallel projects for global agencies, specializing in React, Next.js, 
                and scalable cloud infrastructure across varying time zones and technical requirements[cite: 13, 17, 45, 52].
              </p>
            </div>
            
     
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="text-xs font-bold text-orange-500 uppercase mb-2">High-Volume Systems [cite: 12, 71]</div>
              <div className="text-lg font-bold mb-1">Enterprise Integration & Sync</div>
              <p className="text-sm text-gray-500 text-balance">
                Architected massive data synchronization and API integrations for enterprise platforms, 
                ensuring performance and scalability for high-volume global traffic[cite: 9, 14, 49, 71].
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* NEW: 10 Years Experience Section */}
      <section className="px-6 py-24 max-w-6xl mx-auto bg-white/[0.01] rounded-3xl my-12 border border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* <div className="flex items-center gap-2 text-orange-500 font-bold mb-4">
              <Award className="w-6 h-6" /> 
              <span>10 YEARS OF PROFESSIONAL EXPERTISE</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">Proven Results from <br/>Cebu to Australia.</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I bring a full decade of software engineering experience to your project. From publishing Ethereum tokens and building Australian enterprise systems to leading senior-level architecture today—your business is in expert hands.
            </p> */}

            <div className="flex items-center gap-2 text-orange-500 font-bold mb-4">
              <Award className="w-6 h-6" /> 
              <span>A DECADE OF GLOBAL ENGINEERING</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">Expert Solutions for <br/>Cebu & The World.</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              With over 10 years of professional software engineering, I have delivered high-stakes projects for clients in 
              <strong> Australia, Germany, the US, Canada, Lithuania, and the UK.</strong> From Silicon Valley startups to 
              European enterprise systems, I bridge the gap between complex technical execution and global business goals.
            </p>

            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">Global Projects</div>
              </div>
              <div className="border-l border-white/10 h-12"></div>
              <div>
                <div className="text-3xl font-bold text-white">2nd</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">Hackathon Rank</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {experienceHighlights.map((exp, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] transition-colors border border-white/5">
                <div className="mt-1">{exp.icon}</div>
                <div>
                  <div className="text-xs font-bold text-orange-500 uppercase tracking-tighter">{exp.year}</div>
                  <div className="text-lg font-bold mb-1">{exp.role}</div>
                  <p className="text-sm text-gray-500">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
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