import { useAuth } from '@/hooks/useAuth';
import { getSwingsByUserId } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  TrendingUp, Target, BarChart3, AlertTriangle,
  Calendar, Award
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  CartesianGrid, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  BarChart, Bar, Cell
} from 'recharts';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Analytics() {
  const { user } = useAuth();
  const swings = user ? getSwingsByUserId(user.id) : [];

  const scoreData = swings
    .slice()
    .reverse()
    .map((s, i) => ({
      name: `S${i + 1}`,
      score: s.overallScore,
      date: new Date(s.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    }));

  // Calculate average position scores across all swings
  const positionAverages = swings.length > 0
    ? ['P1','P2','P3','P4','P5','P6','P7','P8','P9','P10'].map((pos) => {
        const scores = swings.map((s) => {
          const ps = s.analysisReport.positionScores.find((p) => p.position === pos);
          return ps ? ps.score : 0;
        });
        const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
        return { position: pos, average: Math.round(avg * 10) };
      })
    : [];

  // Radar chart data (latest swing)
  const radarData = swings.length > 0
    ? swings[0].analysisReport.positionScores.map((ps) => ({
        position: ps.position,
        score: ps.score * 10,
        fullMark: 100,
      }))
    : [];

  // Fault frequency
  const faultFrequency: Record<string, number> = {};
  swings.forEach((s) => {
    s.analysisReport.primaryFaults.forEach((f) => {
      faultFrequency[f.fault] = (faultFrequency[f.fault] || 0) + 1;
    });
  });
  const faultData = Object.entries(faultFrequency)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  const avgScore = swings.length
    ? Math.round(swings.reduce((sum, s) => sum + s.overallScore, 0) / swings.length)
    : 0;

  const bestScore = swings.length
    ? Math.max(...swings.map((s) => s.overallScore))
    : 0;

  const totalAnalyses = swings.length;

  if (swings.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-20"
      >
        <BarChart3 className="h-16 w-16 text-slate-600 mb-4" />
        <h2 className="text-xl font-bold text-white">No Data Yet</h2>
        <p className="mt-2 text-slate-400">Upload your first swing to see analytics</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="space-y-6"
    >
      <motion.div variants={fadeInUp}>
        <h1 className="text-2xl font-bold">Progress Analytics</h1>
        <p className="text-sm text-slate-400">Track your improvement over time</p>
      </motion.div>

      {/* Stats Row */}
      <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Total Analyses', value: totalAnalyses, icon: Calendar, color: 'text-blue-400', bg: 'bg-blue-500/10' },
          { label: 'Average Score', value: avgScore, icon: Target, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
          { label: 'Best Score', value: bestScore, icon: Award, color: 'text-amber-400', bg: 'bg-amber-500/10' },
          { label: 'Improvement', value: swings.length > 1 ? `+${swings[0].overallScore - swings[swings.length - 1].overallScore}` : '0', icon: TrendingUp, color: 'text-purple-400', bg: 'bg-purple-500/10' },
        ].map((stat) => (
          <Card key={stat.label} className="border-white/10 bg-white/5">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">{stat.label}</p>
                  <p className={`mt-1 text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${stat.bg}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Score Trend + Radar */}
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div variants={fadeInUp}>
          <Card className="border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                Score Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={scoreData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                    <XAxis dataKey="date" stroke="#64748b" fontSize={11} />
                    <YAxis domain={[0, 100]} stroke="#64748b" fontSize={11} />
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
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Target className="h-4 w-4 text-blue-400" />
                Latest Swing - Position Radar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#1e3a5f" />
                    <PolarAngleAxis dataKey="position" stroke="#64748b" fontSize={11} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#64748b" fontSize={10} />
                    <Radar
                      name="Score"
                      dataKey="score"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#0f2137',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        color: '#fff',
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Position Averages + Fault Frequency */}
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div variants={fadeInUp}>
          <Card className="border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <BarChart3 className="h-4 w-4 text-amber-400" />
                Position Averages (All Swings)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={positionAverages}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                    <XAxis dataKey="position" stroke="#64748b" fontSize={11} />
                    <YAxis domain={[0, 100]} stroke="#64748b" fontSize={11} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#0f2137',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        color: '#fff',
                      }}
                    />
                    <Bar dataKey="average" radius={[4, 4, 0, 0]}>
                      {positionAverages.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.average >= 70 ? '#10b981' : entry.average >= 50 ? '#f59e0b' : '#ef4444'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                Most Frequent Faults
              </CardTitle>
            </CardHeader>
            <CardContent>
              {faultData.length > 0 ? (
                <div className="space-y-3">
                  {faultData.map((fault) => (
                    <div key={fault.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-slate-300 truncate max-w-[70%]">
                          {fault.name}
                        </span>
                        <span className="text-sm font-medium text-red-400">
                          {fault.count}x
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-red-500/60 transition-all"
                          style={{ width: `${(fault.count / Math.max(...faultData.map((f) => f.count))) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-500 text-center py-8">No fault data yet</p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
