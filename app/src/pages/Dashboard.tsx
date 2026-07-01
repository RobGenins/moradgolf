import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { getSwingsByUserId } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Upload, TrendingUp, Award, Clock, ChevronRight,
  AlertCircle, BarChart3, Lightbulb, Zap
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function Dashboard() {
  const { user } = useAuth();
  const swings = user ? getSwingsByUserId(user.id) : [];
  const recentSwings = swings.slice(0, 3);
  const creditsRemaining = user
    ? user.monthlyCreditsTotal - user.monthlyCreditsUsed + user.bonusCredits
    : 0;
  const creditPercent = user
    ? ((user.monthlyCreditsUsed / user.monthlyCreditsTotal) * 100)
    : 0;

  const scoreData = swings
    .slice()
    .reverse()
    .map((s, i) => ({
      name: `Swing ${i + 1}`,
      score: s.overallScore,
      date: new Date(s.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    }));

  const avgScore = swings.length
    ? Math.round(swings.reduce((sum, s) => sum + s.overallScore, 0) / swings.length)
    : 0;

  const latestScore = swings[0]?.overallScore ?? 0;
  const improvement = swings.length > 1
    ? latestScore - swings[swings.length - 1].overallScore
    : 0;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="space-y-6"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-slate-400">
            Welcome back, {user?.name?.split(' ')[0] || 'Golfer'}
          </p>
        </div>
        <Link to="/upload">
          <Button className="bg-emerald-500 text-white hover:bg-emerald-600">
            <Upload className="mr-2 h-4 w-4" />
            New Analysis
          </Button>
        </Link>
      </motion.div>

      {/* Stats Cards */}
      <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-white/10 bg-white/5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Latest Score</p>
                <p className="mt-1 text-3xl font-bold text-white">{latestScore}</p>
                <p className="text-xs text-slate-500">out of 100</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                <Award className="h-5 w-5 text-emerald-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Average Score</p>
                <p className="mt-1 text-3xl font-bold text-white">{avgScore}</p>
                <p className="text-xs text-slate-500">across {swings.length} swings</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                <BarChart3 className="h-5 w-5 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Improvement</p>
                <p className={`mt-1 text-3xl font-bold ${improvement >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {improvement >= 0 ? '+' : ''}{improvement}
                </p>
                <p className="text-xs text-slate-500">points since first swing</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                <TrendingUp className="h-5 w-5 text-amber-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Credits Remaining</p>
                <p className="mt-1 text-3xl font-bold text-white">{creditsRemaining}</p>
                <p className="text-xs text-slate-500">of {user?.monthlyCreditsTotal || 10} monthly</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                <Zap className="h-5 w-5 text-purple-400" />
              </div>
            </div>
            <Progress value={creditPercent} className="mt-3 h-1.5 bg-white/10" />
          </CardContent>
        </Card>
      </motion.div>

      {/* Score Chart + Recent */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Score Trend Chart */}
        <motion.div variants={fadeInUp} className="lg:col-span-2">
          <Card className="border-white/10 bg-white/5">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                Swing Score Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              {scoreData.length > 0 ? (
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={scoreData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                      <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
                      <YAxis domain={[0, 100]} stroke="#64748b" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0f2137',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '8px',
                          color: '#fff',
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="score"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={{ fill: '#10b981', r: 4 }}
                        activeDot={{ r: 6, fill: '#34d399' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="flex h-64 flex-col items-center justify-center text-slate-500">
                  <BarChart3 className="h-12 w-12 mb-3 opacity-30" />
                  <p>No swings analyzed yet</p>
                  <Link to="/upload">
                    <Button variant="link" className="text-emerald-400 mt-1">
                      Upload your first swing
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Side Panel */}
        <motion.div variants={fadeInUp} className="space-y-4">
          {/* Recent Analyses */}
          <Card className="border-white/10 bg-white/5">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <Clock className="h-4 w-4 text-blue-400" />
                Recent Analyses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentSwings.length > 0 ? (
                recentSwings.map((swing) => (
                  <Link key={swing.id} to={`/analysis/${swing.id}`}>
                    <div className="group flex items-center justify-between rounded-lg bg-white/5 p-3 transition-colors hover:bg-white/[0.07]">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold ${
                          swing.overallScore >= 70 ? 'bg-emerald-500/10 text-emerald-400' :
                          swing.overallScore >= 60 ? 'bg-amber-500/10 text-amber-400' :
                          'bg-red-500/10 text-red-400'
                        }`}>
                          {swing.overallScore}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                            {swing.title}
                          </p>
                          <p className="text-xs text-slate-500">
                            {new Date(swing.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-600 group-hover:text-emerald-400" />
                    </div>
                  </Link>
                ))
              ) : (
                <div className="text-center py-6 text-slate-500">
                  <p className="text-sm">No analyses yet</p>
                </div>
              )}
              {swings.length > 3 && (
                <Link to="/history">
                  <Button variant="link" className="w-full text-emerald-400 text-sm">
                    View all {swings.length} analyses
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>

          {/* Tip of the Day */}
          <Card className="border-white/10 bg-gradient-to-br from-emerald-500/10 to-transparent">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-4 w-4 text-emerald-400" />
                <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                  Tip of the Day
                </span>
              </div>
              <p className="text-sm text-slate-300">
                The <strong className="text-white">flat left wrist at impact</strong> is the single 
                most important checkpoint in the MORAD system. Practice hitting punch shots with a 
                deliberate focus on keeping your lead wrist flat through impact.
              </p>
              <Link to="/tips">
                <Button variant="link" className="mt-2 h-auto p-0 text-emerald-400 text-xs">
                  Browse all tips →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Subscription Status */}
      {user?.subscriptionStatus === 'trial' && (
        <motion.div variants={fadeInUp}>
          <Card className="border-amber-500/30 bg-amber-500/5">
            <CardContent className="flex items-center gap-4 p-5">
              <AlertCircle className="h-5 w-5 text-amber-400 shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium text-amber-400">Free Trial Active</p>
                <p className="text-xs text-slate-400">
                  Your trial ends on {user.subscriptionTrialEndsAt 
                    ? new Date(user.subscriptionTrialEndsAt).toLocaleDateString() 
                    : 'N/A'}. 
                  Upgrade to continue analyzing swings.
                </p>
              </div>
              <Button size="sm" className="bg-amber-500 text-white hover:bg-amber-600 shrink-0">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
}
