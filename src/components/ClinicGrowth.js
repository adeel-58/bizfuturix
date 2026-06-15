import React, { useEffect, useRef, useState } from 'react';
import './ClinicGrowth.css';

/*
  Clinic Growth System — Landing Page
  Target: Hair Transplant / Plastic Surgery / Cosmetic Dentistry / Botox / Laser clinics
  Package B: GEO/AEO + 20 AI UGC ads/month + 24/7 AI chatbot

  HOW TO USE:
  1. Put this file in src/components/ClinicGrowth.js
  2. Put ClinicGrowth.css in the same folder (or src/styles and fix the import path)
  3. Drop your 9:16 demo videos in src/assets and import them (see VIDEO IMPORTS below)
  4. Create a page in src/pages that renders <ClinicGrowth />
  5. Add a route for it in App.js
*/

import { ReactComponent as MoonIcon } from '../assets/moon.svg';
import { ReactComponent as AiIcon } from '../assets/ai.svg';
import { ReactComponent as DeclineIcon } from '../assets/decline.svg';

import demo1 from '../assets/1.mp4';
import demo2 from '../assets/2.mp4';
import demo3 from '../assets/3.mp4';

const DEMO_VIDEOS = [
  { src: demo1, poster: '', label: 'Patient Testimonial' },
  { src: demo2, poster: '', label: 'Before / After Reveal' },
  { src: demo3, poster: '', label: 'Procedure Walkthrough' },
];

// Small hook: adds a class when an element scrolls into view (reveal animation)
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('cg-in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`cg-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ====================  COUNTER (animated stats)  ==================== */
function StatCounter({ end, suffix = '', label }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const dur = 1600;
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(eased * end));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return (
    <div className="cg-stat" ref={ref}>
      <div className="cg-stat-num">{val}{suffix}</div>
      <div className="cg-stat-label">{label}</div>
    </div>
  );
}

/* ====================  MAIN COMPONENT  ==================== */
const ClinicGrowth = () => {
  return (
    <div className="cg-page">

      {/* ============ HERO ============ */}
      <section className="cg-hero">
        <div className="cg-hero-overlay" />
        <div className="cg-hero-inner">
          <Reveal>
            <div className="cg-eyebrow">
              <span className="cg-dot"></span> THE CLINIC GROWTH SYSTEM
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="cg-hero-h1">
              Stop losing patients<br />
              <span className="cg-accent">while you sleep.</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="cg-hero-sub">
              Your future patients are searching at 3am, asking ChatGPT for the best clinic,
              and messaging from other time zones. We make sure your clinic shows up and
              answers every single time.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="cg-hero-cta-row">
              <a href="#contact" className="cg-btn cg-btn-primary">Book a Free Audit</a>
              <a href="#system" className="cg-btn cg-btn-ghost">See How It Works</a>
            </div>
          </Reveal>
          <Reveal delay={600}>
            <div className="cg-hero-trust">
              Built for hair transplant, cosmetic surgery, dental &amp; aesthetic clinics
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PROBLEM / STATS BAR ============ */}
      <section className="cg-stats-band">
        <StatCounter end={79} suffix="%" label="of leads never convert without follow-up" />
        <div className="cg-stat-divider" />
        <StatCounter end={30} suffix="%" label="of cold leads recoverable with instant response" />
        <div className="cg-stat-divider" />
        <StatCounter end={18} suffix=" mo" label="patients research before booking a consult" />
      </section>

      {/* ============ THE PROBLEM ============ */}
      <section className="cg-section cg-problem">
        <Reveal>
          <span className="cg-kicker">THE REAL PROBLEM</span>
          <h2 className="cg-h2">You're not short on patients.<br />You're short on <span className="cg-accent">answered patients.</span></h2>
        </Reveal>
        <div className="cg-problem-grid">
          <Reveal delay={100}>
            <div className="cg-prob-card">
              <div className="cg-prob-icon">
                <MoonIcon />
              </div>
              <h3>After-hours inquiries vanish</h3>
              <p>A patient messages at 11pm. By morning they've booked with the clinic that replied first. Most clinics never even see the message in time.</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="cg-prob-card">
              <div className="cg-prob-icon">
                <AiIcon />
              </div>
              <h3>AI search is invisible to you</h3>
              <p>Patients now ask ChatGPT and Gemini "best clinic near me." If you're not the answer, you lose them before Google ads even load.</p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="cg-prob-card">
              <div className="cg-prob-icon">
                <DeclineIcon />
              </div>
              <h3>Stale ads stop converting</h3>
              <p>The same two video ads run for months. The algorithm gets bored, your cost per lead climbs, and your best creative quietly dies.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ THE SYSTEM (3 pillars) ============ */}
      <section className="cg-section cg-system" id="system">
        <Reveal>
          <span className="cg-kicker">THE SYSTEM</span>
          <h2 className="cg-h2">Three engines. One growth machine.</h2>
          <p className="cg-section-lead">
            Each part fixes a leak in your patient pipeline. Together, clinics that
            implement all three typically see <span className="cg-accent">30–40% more booked
              consultations</span> within a few months by recovering leads they were already
            paying to attract.
          </p>
        </Reveal>

        {/* Pillar 1 — GEO/AEO */}
        <div className="cg-pillar">
          <Reveal className="cg-pillar-text">
            <span className="cg-pillar-num">01</span>
            <h3 className="cg-h3">Be the clinic AI recommends</h3>
            <p className="cg-pillar-tag">GEO / AEO — Generative &amp; Answer Engine Optimization</p>
            <p>
              When someone asks ChatGPT, Gemini, or Perplexity "what's the best FUE clinic in
              Oslo?", we make sure your clinic is the name that comes up. We restructure your
              content, add machine-readable schema, build your brand's authority across the web,
              and position you as the cited source so you capture high-intent patients
              <strong> before they ever reach a competitor's ad.</strong>
            </p>
            <ul className="cg-check-list">
              <li>Schema &amp; structured data built for LLMs</li>
              <li>Answer-ready content for the questions patients actually ask</li>
              <li>Brand entity &amp; authority building across trusted sources</li>
            </ul>
          </Reveal>
          <Reveal className="cg-pillar-visual" delay={150}>
            <div className="cg-chat-mock">
              <div className="cg-chat-q">"Best hair transplant clinic near me?"</div>
              <div className="cg-chat-a">
                <span className="cg-chat-badge">AI Answer</span>
                Based on patient reviews and surgeon credentials, <strong>Star Clinic</strong> is
                highly recommended for FUE &amp; DHI procedures...
              </div>
            </div>
          </Reveal>
        </div>

        {/* Pillar 2 — UGC Ads */}
        <div className="cg-pillar cg-pillar-rev">
          <Reveal className="cg-pillar-text">
            <span className="cg-pillar-num">02</span>
            <h3 className="cg-h3">10 fresh ads a month that actually convert</h3>
            <p className="cg-pillar-tag">AI UGC Video Ads — Meta &amp; TikTok tested</p>
            <p>
              We produce <strong>10 authentic-style video ads every month</strong> before/after
              reveals, patient testimonials, procedure walkthroughs and test them against the
              Meta algorithm to find your winners. Nearly 8 in 10 patients say real,
              creator-style video directly influences who they choose. Fresh creative means a
              lower cost per lead and ads that never go stale.
            </p>
            <ul className="cg-check-list">
              <li>10 new 9:16 video ads every month</li>
              <li>Systematic A/B testing to find winning hooks</li>
              <li>Before/after, testimonial &amp; education formats</li>
            </ul>
          </Reveal>
          <Reveal className="cg-pillar-visual" delay={150}>
            <div className="cg-video-row">
              {DEMO_VIDEOS.map((v, i) => (
                <div className="cg-video-card" key={i}>
                  {v.src ? (
                    <video
                      src={v.src}
                      poster={v.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                    />
                  ) : (
                    <div className="cg-video-ph">
                      <span>9:16 Demo Ad</span>
                      <small>Drop your video in /assets</small>
                    </div>
                  )}
                  <div className="cg-video-label">{v.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Pillar 3 — Chatbot */}
        <div className="cg-pillar">
          <Reveal className="cg-pillar-text">
            <span className="cg-pillar-num">03</span>
            <h3 className="cg-h3">A 24/7 assistant that never misses a patient</h3>
            <p className="cg-pillar-tag">WhatsApp &amp; Facebook AI Chatbot</p>
            <p>
              The moment a patient messages 3am, weekend, holiday  your AI assistant replies
              instantly on WhatsApp and Facebook. It answers questions about procedures, pricing,
              and recovery, qualifies the lead, and books the consultation while your competitors
              are still asleep. This single piece recovers
              <strong> 20–30% of leads that would otherwise go cold.</strong>
            </p>
            <ul className="cg-check-list">
              <li>Instant replies on WhatsApp &amp; Facebook Messenger</li>
              <li>Answers FAQs, qualifies &amp; books consultations</li>
              <li>Trained on your clinic's procedures &amp; pricing</li>
            </ul>
          </Reveal>
          <Reveal className="cg-pillar-visual" delay={150}>
            <div className="cg-wa-mock">
              <div className="cg-wa-header">
                <span className="cg-wa-avatar">AI</span>
                <div>
                  <div className="cg-wa-name">Star Clinic Assistant</div>
                  <div className="cg-wa-status">● Online now · replies instantly</div>
                </div>
              </div>
              <div className="cg-wa-body">
                <div className="cg-wa-msg cg-wa-them">Hi, how much is a FUE transplant? 😊</div>
                <div className="cg-wa-msg cg-wa-them">It's 2am here, are you open?</div>
                <div className="cg-wa-msg cg-wa-us">Hi! Great question 👋 FUE starts from 250$. We're here 24/7 — want me to book your free consultation?</div>
                <div className="cg-wa-msg cg-wa-them">Yes please!</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="cg-section cg-process">
        <Reveal>
          <span className="cg-kicker">OUR PROCESS</span>
          <h2 className="cg-h2">From audit to booked patients in 4 steps</h2>
        </Reveal>
        <div className="cg-steps">
          {[
            { n: '01', t: 'Free Growth Audit', d: 'We analyze your current funnel, AI search visibility, ads, and response times to find exactly where patients are slipping away.' },
            { n: '02', t: 'Build Your System', d: 'We set up GEO/AEO, produce your first batch of ads, and deploy your AI chatbot on WhatsApp & Facebook.' },
            { n: '03', t: 'Test & Optimize', d: 'We run your 10 monthly ads against the algorithm, refine the winners, and tune your chatbot from real conversations.' },
            { n: '04', t: 'Scale What Works', d: 'We double down on winning ads and channels, reporting on booked consultations not vanity metrics.' },
          ].map((s, i) => (
            <Reveal delay={i * 120} key={s.n}>
              <div className="cg-step">
                <div className="cg-step-num">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="cg-section cg-testimonials">
        <Reveal>
          <span className="cg-kicker">RESULTS &amp; TRUST</span>
          <h2 className="cg-h2">Clinics that stopped losing patients</h2>
          <p className="cg-section-lead cg-disclaimer">
            Illustrative results — replace with your real clinic testimonials and case studies as you land them.
          </p>
        </Reveal>
        <div className="cg-testi-grid">
          {[
            { q: 'We were missing every after-hours message. The chatbot booked 14 consultations in the first month patients we would have completely lost.', n: 'Dr. A. — Hair Restoration Clinic', r: '+14 consults / mo' },
            { q: 'Someone asked ChatGPT for the best clinic in our city and we actually came up. That has never happened before. The inquiries changed overnight.', n: 'Clinic Director — Cosmetic Surgery', r: 'Top AI recommendation' },
            { q: 'The fresh ads every month made a real difference. Our cost per lead dropped and we finally found hooks that convert.', n: 'Marketing Lead — Aesthetic Clinic', r: 'Lower cost per lead' },
          ].map((t, i) => (
            <Reveal delay={i * 120} key={i}>
              <div className="cg-testi-card">
                <div className="cg-testi-stars">★★★★★</div>
                <p className="cg-testi-q">"{t.q}"</p>
                <div className="cg-testi-foot">
                  <span className="cg-testi-name">{t.n}</span>
                  <span className="cg-testi-result">{t.r}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="cg-section cg-final" id="contact">
        <Reveal>
          <h2 className="cg-final-h2">
            Every unanswered message is a patient<br />walking into a competitor's clinic.
          </h2>
          <p className="cg-final-sub">
            Let's fix the leaks in your funnel. Book a free growth audit and we'll show you
            exactly where you're losing patients and how to win them back.
          </p>
          <a
  href="https://wa.me/971553097736?text=Hi%2C%20I%20saw%20your%20Clinic%20Growth%20System%20landing%20page.%20I%20want%20a%20free%20audit%20for%20my%20clinic."
  className="cg-btn cg-btn-primary cg-btn-lg"
  target="_blank"
  rel="noopener noreferrer"
>
  Book Your Free Growth Audit
</a>
          <p className="cg-final-note">No commitment · 20-minute call · Built for clinics</p>
        </Reveal>
      </section>

    </div>
  );
};

export default ClinicGrowth;