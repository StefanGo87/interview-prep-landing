// app/interview__notepad.tsx
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  NotebookPen,
  Brain,
  Shield,
  CreditCard,
  Sparkles,
  CheckCircle2,
  Github,
  Mail,
  Menu,
} from "lucide-react";

// Tailwind color tokens for quick theming
const primary = {
  bg: "from-indigo-600 to-violet-600",
  text: "text-indigo-600",
  ring: "ring-indigo-500",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-inner" />
            <span className="font-semibold tracking-tight">
              Interview <span className="text-neutral-500">Prep</span> Notepad
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="hover:text-neutral-600">Features</a>
            <a href="#how" className="hover:text-neutral-600">How it works</a>
            <a href="#pricing" className="hover:text-neutral-600">Pricing</a>
            <a href="#faq" className="hover:text-neutral-600">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/login" className="hidden sm:inline text-sm hover:text-neutral-600">Log in</a>
            <a
              href="#pricing"
              className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${primary.bg} px-4 py-2 text-white shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 ${primary.ring}`}
            >
              Get started <ArrowRight className="h-4 w-4" />
            </a>
            <button className="md:hidden p-2 rounded-lg hover:bg-neutral-100" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-neutral-100" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-semibold tracking-tight"
            >
              Your smart notepad for{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                job interviews
              </span>
            </motion.h1>
            <p className="mt-4 text-lg text-neutral-600">
              Prepare your interview with a structure guide using best practices, use your Interview Notes during your online job interview as split-screen or dual screen mode
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/notepad"
                className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${primary.bg} px-5 py-3 text-white shadow-md hover:opacity-95 focus:outline-none focus:ring-2 ${primary.ring}`}
              >
                Try for free
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-5 py-3 text-neutral-800 hover:bg-neutral-100"
              >
                See how it works
              </a>
            </div>
          </div>

      {/* Mock card (updated) */}
<div className="rounded-3xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
  {/* Header with timer on the right */}
  <div className="bg-neutral-900 text-white text-xs px-4 py-2 flex items-center justify-between">
    <span>Interview Notes</span>
    <span className="font-mono bg-neutral-800/80 px-2 py-0.5 rounded-md tracking-wider">
      00:00:00
    </span>
  </div>

  <div className="p-6">
    <div className="rounded-2xl border border-neutral-200 p-4">
      <p className="text-sm text-neutral-500 mb-3">Chapters</p>

      <ul className="text-sm space-y-4">
        {/* 1 */}
        <li>
          <div>1. Self Intro</div>
          <div className="mt-2 rounded-lg border border-neutral-200 bg-neutral-50 p-2 text-xs text-neutral-600">
            …
          </div>
        </li>

        {/* 2 */}
        <li>
          <div>2. Company research</div>
          <div className="mt-2 rounded-lg border border-neutral-200 bg-neutral-50 p-2 text-xs text-neutral-600">
            …
          </div>
        </li>

        {/* 3 */}
        <li>
          <div>3. Role research</div>
          <div className="mt-2 rounded-lg border border-neutral-200 bg-neutral-50 p-2 text-xs text-neutral-600">
            …
          </div>
        </li>

        {/* 4 */}
        <li>
          <div>4. Key success stories (STAR)</div>
          <div className="mt-2 rounded-lg border border-neutral-200 bg-neutral-50 p-2 text-xs text-neutral-600">
            …
          </div>
        </li>

        {/* 5 */}
        <li>
          <div>5. Behavioral questions</div>
          <div className="mt-2 rounded-lg border border-neutral-200 bg-neutral-50 p-2 text-xs text-neutral-600">
            …
          </div>
        </li>

        {/* 6 */}
        <li>
          <div>6. Closing message</div>
          <div className="mt-2 rounded-lg border border-neutral-200 bg-neutral-50 p-2 text-xs text-neutral-600">
            …
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>


          {/* Subtle glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="pointer-events-none absolute -bottom-6 -left-6 blur-2xl bg-gradient-to-tr from-indigo-400 to-violet-400 w-40 h-40 rounded-full"
          />
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Everything you need to shine</h2>
            <p className="mt-2 text-neutral-600">Structured Guide, clean template, and smart workflows.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: NotebookPen, title: "Structured Guide", text: "Self-presentation, company & role research, closing message." },
              { icon: Brain, title: "Question prompts (behavioral questions)", text: "Curated question bank — save your own and reuse." },
              { icon: Clock, title: "Interview mode", text: "Focused view with timer and notes per chapter for crisp answers, tailored for split screen or dual screen mode during online interviews. Fully customizable." },
              { icon: Shield, title: "Privacy", text: "Optional local encryption for notes, export to PDF/Markdown." },
              { icon: Sparkles, title: "Online Interview Notes", text: "Write down your notes during the interview for next rounds." },
              { icon: CreditCard, title: "Stripe payments", text: "Secure subscriptions, invoices, and EU-friendly receipts via Stripe." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <f.icon className="h-6 w-6" />
                <h3 className="mt-4 font-medium">{f.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
              <p className="mt-2 text-neutral-600">Three steps from job description to confident answers.</p>
            </div>
            <ol className="lg:col-span-2 space-y-6">
              {[
                { step: "1", title: "Structure your notes with our Guide", text: "Start with chapter 1 until the end." },
                { step: "2", title: "Review, refine, optimize & practice", text: "Iterate on your answers and rehearsal." },
                { step: "3", title: "Perform in the interview", text: "Switch to interview mode: cue words, timer, calm theme — present the best version of yourself!" },
              ].map((s) => (
                <li key={s.step} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white grid place-items-center font-semibold">
                      {s.step}
                    </div>
                    <div>
                      <div className="font-medium">{s.title}</div>
                      <p className="text-sm text-neutral-600 mt-1">{s.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Proven in real interviews</h2>
            <p className="mt-2 text-neutral-600">Used by candidates in Product, Engineering, Data & Consulting.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {["Shorter, sharper answers.", "My STARs became measurable.", "Preparation finally in one place."].map(
              (quote, i) => (
                <figure key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-neutral-200" />
                    <div>
                      <div className="font-medium">Person {i + 1}</div>
                      <div className="text-xs text-neutral-500">Offer accepted</div>
                    </div>
                  </div>
                  <blockquote className="mt-4 text-neutral-700">“{quote}”</blockquote>
                </figure>
              )
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Simple, fair pricing</h2>
            <p className="mt-2 text-neutral-600">Start free. Upgrade when it matters.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {/* Free */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col">
              <div className="text-sm font-medium">Free</div>
              <div className="mt-2 text-3xl font-semibold">
                $0<span className="text-sm font-normal text-neutral-500">/mo</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> 5 STAR notes</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Question bank (core)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> PDF export (watermark)</li>
              </ul>
              <a href="/signup" className="mt-6 inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 hover:bg-neutral-100">
                Get started
              </a>
            </div>

            {/* Pro */}
            <div className="relative rounded-3xl border-2 border-indigo-500 bg-white p-6 shadow-md flex flex-col">
              <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-3 py-1 text-xs text-white shadow">
                Recommended
              </span>
              <div className="text-sm font-medium">Pro</div>
              <div className="mt-2 text-3xl font-semibold">
                $8<span className="text-sm font-normal text-neutral-500">/mo</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Unlimited notes & templates</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> PDF/Markdown without watermark</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Priority support</li>
              </ul>
              {/* Replace href with your Stripe Checkout URL */}
              <a
                href="/api/checkout?plan=pro"
                className={`mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${primary.bg} px-4 py-2 text-white shadow hover:opacity-95`}
              >
                Upgrade with Stripe
              </a>
              <p className="mt-3 text-xs text-neutral-500">Cancel anytime. Tax included where applicable.</p>
            </div>

            {/* Team */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col">
              <div className="text-sm font-medium">Team</div>
              <div className="mt-2 text-3xl font-semibold">
                $29<span className="text-sm font-normal text-neutral-500">/mo</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> 5 seats, shared templates</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Roles & permissions</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Priority support</li>
              </ul>
              <a href="/contact" className="mt-6 inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 hover:bg-neutral-100">
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-center">Frequently asked questions</h2>
          <div className="mt-8 divide-y rounded-2xl border border-neutral-200 bg-neutral-50">
            {[
              { q: "Do I need a credit card to try it?", a: "No. You can start without payment details and upgrade later." },
              { q: "How secure are my notes?", a: "Your data is encrypted in transit. You can optionally encrypt locally. Export anytime." },
              { q: "Any discounts?", a: "Yes — students and job seekers get 40% off. Just reach out." },
            ].map((item, idx) => (
              <div key={idx} className="p-6">
                <div className="font-medium">{item.q}</div>
                <p className="mt-1 text-sm text-neutral-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Ready to land your next offer?</h2>
          <p className="mt-2 text-neutral-600">Create your first three STAR answers for free today.</p>
          <a
            href="#pricing"
            className={`mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r ${primary.bg} px-6 py-3 text-white shadow-md hover:opacity-95`}
          >
            Start free <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600" />
              <span className="font-semibold">Interview Prep Notepad</span>
            </div>
            <p className="mt-3 text-neutral-600">Prepare better. Answer clearer. Get more offers.</p>
          </div>
          <div>
            <div className="font-medium">Product</div>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li><a href="#features" className="hover:text-neutral-900">Features</a></li>
              <li><a href="#pricing" className="hover:text-neutral-900">Pricing</a></li>
              <li><a href="#faq" className="hover:text-neutral-900">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Legal</div>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li><a href="/imprint" className="hover:text-neutral-900">Imprint</a></li>
              <li><a href="/privacy" className="hover:text-neutral-900">Privacy</a></li>
              <li><a href="/terms" className="hover:text-neutral-900">Terms</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Contact</div>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@interview-prep-notepad.app</li>
              <li className="flex items-center gap-2"><Github className="h-4 w-4" /> <a href="https://github.com/" className="hover:text-neutral-900">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-neutral-500 pb-8">© {new Date().getFullYear()} Interview Prep Notepad</div>
      </footer>
    </div>
  );
}
