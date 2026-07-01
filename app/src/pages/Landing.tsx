import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import {
  Check, ChevronRight, Star, Play, BarChart3, Shield,
  Zap, Award, TrendingUp, Video, Users,
  Lightbulb, HelpCircle, X
} from 'lucide-react';
import { useState } from 'react';

export default function Landing() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero-swing.jpg"
            alt="Golf swing"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-[#0a1628]/80 to-[#0a1628]" />
        </div>

        {/* Nav */}
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500">
              <span className="text-lg font-bold text-white">M</span>
            </div>
            <span className="text-xl font-bold tracking-tight">
              Morad<span className="text-emerald-400">AI</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <Button
                onClick={() => navigate('/dashboard')}
                className="bg-emerald-500 text-white hover:bg-emerald-600"
              >
                Go to Dashboard
              </Button>
            ) : (
              <>
                <Button
                  variant="ghost"
                  className="hidden text-slate-300 hover:text-white hover:bg-white/10 sm:inline-flex"
                  onClick={() => navigate('/login')}
                >
                  Log in
                </Button>
                <Button
                  onClick={() => navigate('/register')}
                  className="bg-emerald-500 text-white hover:bg-emerald-600"
                >
                  Start Free Trial
                </Button>
              </>
            )}
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-16 text-center sm:pt-24">
          <div
          >
            <div className="animate-fade-in mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
              <Zap className="h-4 w-4" />
              AI-Powered Swing Analysis Based on the MORAD Framework
            </div>

            <h1
              className="animate-fade-in-1 mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Your Swing.{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                Decoded.
              </span>
            </h1>

            <p
              className="animate-fade-in-2 mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl"
            >
              MoradAI combines the legendary MORAD biomechanical framework — developed 
              over 40 years and trusted by major champions — with cutting-edge AI vision 
              technology. Upload your swing. Get a tour-level analysis in minutes.
            </p>

            <div className="animate-fade-in-3 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => navigate('/register')}
                className="h-12 bg-emerald-500 px-8 text-lg font-semibold text-white hover:bg-emerald-600"
              >
                Start Your Free Analysis
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowVideo(true)}
                className="h-12 border-white/20 px-8 text-lg font-semibold text-white hover:bg-white/10"
              >
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-emerald-400" />
                14-Day Free Trial
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-emerald-400" />
                No Credit Card
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-emerald-400" />
                Cancel Anytime
              </span>
            </div>

            {/* Trust bar */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 text-amber-400" /> 4.9/5 User Rating
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-emerald-400" /> 10,000+ Swings Analyzed
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="h-4 w-4 text-blue-400" /> MORAD-Inspired Methodology
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM SECTION ===== */}
      <section className="border-y border-white/5 bg-[#0d1d30] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Why Traditional Golf Instruction{" "}
                <span className="text-red-400">Fails</span> Most Players
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                The average golfer spends <strong className="text-white">$2,000+ per year</strong> on lessons, 
                range balls, and equipment — and still doesn't improve. Why?
              </p>
              <p className="mt-4 text-slate-400">
                Because most golf instruction is based on <strong className="text-white">feel, not fact</strong>. One 
                instructor tells you to "turn your hips more." Another says "quiet your lower body." A third 
                claims "it's all in the hands." They're all guessing — working from observation and anecdote, 
                not from a systematic understanding of how the golf swing actually works.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-white/5 p-4 text-center">
                  <p className="text-3xl font-bold text-red-400">85%</p>
                  <p className="mt-1 text-sm text-slate-400">Of golfers never break 90</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4 text-center">
                  <p className="text-3xl font-bold text-amber-400">$2,400</p>
                  <p className="mt-1 text-sm text-slate-400">Avg. annual spend on golf instruction</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4 text-center">
                  <p className="text-3xl font-bold text-emerald-400">0.2</p>
                  <p className="mt-1 text-sm text-slate-400">Avg. handicap improvement per year</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/analysis-mockup.jpg"
                alt="Analysis Dashboard"
                className="rounded-2xl shadow-2xl shadow-emerald-500/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== MORAD METHODOLOGY SECTION ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div
            className="text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              The <span className="text-emerald-400">Science</span> Behind the Swing
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
              For over 40 years, Mac O'Grady — one of golf's most brilliant analytical minds — 
              devoted his life to a single question: <em>What is the perfect golf swing, and how do you measure it?</em>
            </p>
          </div>

          <div
            className="mt-12 grid gap-8 lg:grid-cols-2"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/morad-positions.jpg"
                alt="MORAD 10 Positions"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20">
                    <BarChart3 className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold">187,200 Variables</h3>
                </div>
                <p className="mt-2 text-slate-400">
                  The MORAD model tracks 10 positions × 10 subsections × 13 body parts in 3D space. 
                  No movement goes unmeasured.
                </p>
              </div>
              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/20">
                    <Award className="h-5 w-5 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Tour-Proven Results</h3>
                </div>
                <p className="mt-2 text-slate-400">
                  Chip Beck shot 59. Vijay Singh won 3 majors. The Stack & Tilt system was born from 
                  MORAD research. The results speak for themselves.
                </p>
              </div>
              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
                    <Shield className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Scientific Rigor</h3>
                </div>
                <p className="mt-2 text-slate-400">
                  MORAD doesn't guess. It measures. It doesn't theorize. It quantifies. Every fault 
                  is traced to its root cause with mathematical precision.
                </p>
              </div>
            </div>
          </div>

          {/* MORAD Scoring Benchmarks */}
          <div
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { score: '45-55', label: 'Average Amateur', color: 'text-red-400', bg: 'bg-red-500/10' },
              { score: '60-70', label: 'College Player', color: 'text-amber-400', bg: 'bg-amber-500/10' },
              { score: '80-90', label: 'Tour Professional', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
              { score: '90-100', label: 'Elite / MORAD Ideal', color: 'text-blue-400', bg: 'bg-blue-500/10' },
            ].map((item) => (
              <div key={item.label} className={`rounded-xl ${item.bg} p-5 text-center`}>
                <p className={`text-2xl font-bold ${item.color}`}>{item.score}</p>
                <p className="mt-1 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <section className="border-y border-white/5 bg-[#0d1d30] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div
            className="text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              Your Tour-Level Analysis in{" "}
              <span className="text-emerald-400">3 Simple Steps</span>
            </h2>
          </div>

          <div
            className="mt-12 grid gap-8 md:grid-cols-3"
          >
            {[
              {
                step: '01',
                title: 'Record Your Swing',
                desc: 'Grab your phone. Set it to slow motion (240fps). Hit two videos: one from face-on, one from down-the-line. Upload both to MoradAI.',
                icon: Video,
                color: 'bg-emerald-500',
              },
              {
                step: '02',
                title: 'AI Analyzes Every Position',
                desc: 'Our AI engine evaluates your swing against the complete MORAD framework — all 10 positions, all biomechanical relationships, all deviations.',
                icon: BarChart3,
                color: 'bg-blue-500',
              },
              {
                step: '03',
                title: 'Get Your Detailed Report',
                desc: 'Within minutes, receive a comprehensive swing report: overall score, position-by-position breakdown, fault identification, and personalized drills.',
                icon: Award,
                color: 'bg-amber-500',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="rounded-2xl bg-white/5 p-8">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${item.color}`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <p className="mt-4 text-4xl font-black text-white/10">{item.step}</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div
            className="text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              Everything You Need to{" "}
              <span className="text-emerald-400">Transform</span> Your Swing
            </h2>
          </div>

          <div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: 'Complete 10-Position Analysis',
                desc: 'Your swing evaluated at every critical checkpoint from Address to Finish. No position goes unexamined.',
                icon: BarChart3,
              },
              {
                title: 'MORAD Swing Score (0-100)',
                desc: 'Know exactly where you stand. Davis Love III scored 92. Chip Beck scored 97. What\'s your number?',
                icon: Award,
              },
              {
                title: 'Fault Detection & Root Cause',
                desc: 'We don\'t just tell you what\'s wrong — we tell you WHY it\'s wrong, tracing every fault to its source.',
                icon: Shield,
              },
              {
                title: 'Personalized Drill Recommendations',
                desc: 'Get specific, actionable drills tailored to your exact faults with difficulty ratings and execution guides.',
                icon: Lightbulb,
              },
              {
                title: 'Progress Tracking & Trends',
                desc: 'Upload swings regularly and watch your scores improve. Track which faults you\'re eliminating over time.',
                icon: TrendingUp,
              },
              {
                title: 'Model 1 vs Model 2 Assessment',
                desc: 'Discover whether your swing aligns with the power-focused Model 1 or precision-focused Model 2.',
                icon: Zap,
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl bg-white/5 p-6 transition-colors hover:bg-white/[0.07]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 transition-colors group-hover:bg-emerald-500/20">
                  <feature.icon className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="border-y border-white/5 bg-[#0d1d30] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div
            className="text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              Trusted by Golfers at <span className="text-emerald-400">Every Level</span>
            </h2>
          </div>

          <div
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {[
              {
                quote: "I've taken lessons from 5 different instructors in the past 3 years. MoradAI gave me more clarity in one analysis than all those lessons combined. I finally understand WHY I slice.",
                name: 'Michael R.',
                result: '12 handicap → 8 handicap in 6 weeks',
                score: 62,
              },
              {
                quote: "The level of detail is incredible. The AI caught a flying trail elbow at the top of my swing that no instructor has ever mentioned. After working the recommended drills, my ball-striking improved dramatically.",
                name: 'David K.',
                result: '18 handicap → 14 handicap in 2 months',
                score: 58,
              },
              {
                quote: "As a teaching professional, I use MoradAI to validate my own observations. The MORAD framework is the real deal — applied through modern AI. It's like having a tour-level biomechanist in your pocket.",
                name: 'James T.',
                result: 'PGA Teaching Professional',
                score: 71,
              },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl bg-white/5 p-6">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-300 italic">"{t.quote}"</p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-emerald-400">{t.result}</p>
                  </div>
                  <div className="rounded-lg bg-emerald-500/10 px-3 py-1">
                    <span className="text-sm font-bold text-emerald-400">{t.score}/100</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section className="py-20" id="pricing">
        <div className="mx-auto max-w-7xl px-4">
          <div
            className="text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              Simple Pricing. <span className="text-emerald-400">No Hidden Fees.</span>{" "}
              Cancel Anytime.
            </h2>
          </div>

          <div
            className="mx-auto mt-12 max-w-md"
          >
            <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-8">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/20 blur-3xl" />
              
              <div className="relative">
                <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">MORADAI PRO</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-bold">$30</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  Everything you need to analyze and improve your swing.
                </p>

                <ul className="mt-8 space-y-3">
                  {[
                    '10 swing analyses per month',
                    'Full 10-position MORAD breakdown',
                    'Swing score (0-100)',
                    'Fault detection & root cause analysis',
                    'Personalized drill recommendations',
                    'Progress tracking & trends',
                    'Model 1/Model 2 assessment',
                    'Practice plan generation',
                    'Tips & drills library',
                    'Historical swing comparison',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  onClick={() => navigate('/register')}
                  className="mt-8 w-full bg-emerald-500 text-lg font-semibold text-white hover:bg-emerald-600 h-12"
                >
                  Start 14-Day Free Trial
                </Button>
                <p className="mt-3 text-center text-xs text-slate-500">
                  No credit card required for trial
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="border-y border-white/5 bg-[#0d1d30] py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div
            className="text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              Frequently Asked <span className="text-emerald-400">Questions</span>
            </h2>
          </div>

          <div
            className="mt-10 space-y-4"
          >
            {[
              {
                q: 'What happens after the free trial?',
                a: 'After 14 days, you\'ll be prompted to enter payment information to continue. Your subscription will then begin at $30/month.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Absolutely. Cancel with one click — no phone calls, no hassle. Your access continues until the end of your billing period.',
              },
              {
                q: 'What if I use all 10 credits before the month ends?',
                a: 'You can purchase additional credit packs (5 credits for $19.99) or upgrade your plan. Unused credits don\'t roll over — your allocation resets monthly.',
              },
              {
                q: 'Do I need special equipment?',
                a: 'Just a smartphone with slow-motion video capability (iPhone or Android). We recommend using a tripod for stable footage, but it\'s not required.',
              },
              {
                q: 'How accurate is the AI analysis?',
                a: 'Our AI is trained on the complete MORAD framework and evaluates your swing against the same biomechanical standards used by elite coaches. While no AI is perfect, our analysis provides tour-level insight at a fraction of the cost of in-person instruction.',
              },
              {
                q: "What is MORAD and who is Mac O'Grady?",
                a: "MORAD (Mac O'Grady Research and Development) is one of the most scientifically rigorous golf swing analysis systems ever developed. Mac O'Grady is a former PGA Tour player who spent 40+ years reverse-engineering the perfect golf swing. His methodology has influenced major champions and elite coaches worldwide.",
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-xl bg-white/5 p-5">
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <div>
                    <p className="font-semibold text-white">{faq.q}</p>
                    <p className="mt-2 text-sm text-slate-400">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div
          >
            <h2 className="text-3xl font-bold sm:text-5xl">
              Stop Guessing. <span className="text-emerald-400">Start Improving.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Every day you wait is another day of inconsistent ball-striking, frustrating rounds, 
              and a handicap that won't budge. Your best swing is in there — let MoradAI help you find it.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                onClick={() => navigate('/register')}
                className="h-14 bg-emerald-500 px-10 text-xl font-bold text-white hover:bg-emerald-600"
              >
                Start Your Free Analysis
                <ChevronRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Secure payment via Stripe | SSL encrypted | Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/10 bg-[#070f1d] py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500">
                  <span className="text-sm font-bold text-white">M</span>
                </div>
                <span className="text-lg font-bold">
                  Morad<span className="text-emerald-400">AI</span>
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-500">
                AI-powered golf swing analysis based on MORAD biomechanical principles. 
                Transform your game with data-driven insights.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Product</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li><button onClick={() => navigate('/register')} className="hover:text-emerald-400">Free Trial</button></li>
                <li><button onClick={() => document.getElementById('pricing')?.scrollIntoView()} className="hover:text-emerald-400">Pricing</button></li>
                <li><span className="hover:text-emerald-400 cursor-pointer">Features</span></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Company</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li><span className="hover:text-emerald-400 cursor-pointer">About</span></li>
                <li><span className="hover:text-emerald-400 cursor-pointer">Contact</span></li>
                <li><span className="hover:text-emerald-400 cursor-pointer">Privacy Policy</span></li>
                <li><span className="hover:text-emerald-400 cursor-pointer">Terms of Service</span></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Legal</p>
              <p className="mt-3 text-xs text-slate-600">
                MoradAI.Us is an independent technology platform. MORAD®, Mac O'Grady, 
                and MORAD Golf are trademarks of their respective owners and are not 
                affiliated with, endorsed by, or sponsoring this service.
              </p>
            </div>
          </div>
          <div className="mt-10 border-t border-white/5 pt-6 text-center text-sm text-slate-600">
            &copy; 2026 MoradAI.Us. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-3xl rounded-2xl bg-[#0d1d30] p-6" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="mb-4 text-xl font-bold">How MoradAI Works</h3>
            <div className="aspect-video rounded-xl bg-white/5 flex items-center justify-center">
              <div className="text-center">
                <Play className="mx-auto h-16 w-16 text-emerald-400/50" />
                <p className="mt-3 text-sm text-slate-500">Video demonstration coming soon</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
