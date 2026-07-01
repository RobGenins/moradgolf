import { useParams, Link } from 'react-router-dom';
import { getSwingById } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft, AlertTriangle, Target,
  TrendingUp, Award, Zap, Lightbulb, RotateCcw,
  ThumbsUp, ThumbsDown
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AnalysisPage() {
  const { id } = useParams<{ id: string }>();
  const swing = id ? getSwingById(id) : undefined;
  const [feedback, setFeedback] = useState<number | undefined>(swing?.userFeedback);

  if (!swing) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <AlertTriangle className="h-12 w-12 text-slate-600" />
        <p className="mt-4 text-lg text-slate-400">Analysis not found</p>
        <Link to="/history">
          <Button variant="link" className="text-emerald-400">View all analyses</Button>
        </Link>
      </div>
    );
  }

  const report = swing.analysisReport;
  const positionData = report.positionScores.map((ps) => ({
    position: ps.position,
    score: ps.score * 10, // Scale to 0-100
    fullScore: ps.score,
  }));

  const getScoreColor = (score: number) => {
    if (score >= 8) return '#10b981'; // emerald
    if (score >= 6) return '#f59e0b'; // amber
    return '#ef4444'; // red
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link to="/history">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-xl font-bold">{swing.title}</h1>
            <p className="text-sm text-slate-400">
              {new Date(swing.createdAt).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
            {swing.modelAlignment}
          </Badge>
          <div className="flex items-center gap-1 rounded-lg bg-white/5 px-3 py-1.5">
            <Award className="h-4 w-4 text-emerald-400" />
            <span className="font-bold text-white">{swing.overallScore}</span>
            <span className="text-xs text-slate-500">/100</span>
          </div>
        </div>
      </div>

      {/* Overall Score Card */}
      <Card className="border-white/10 bg-gradient-to-r from-emerald-500/10 to-blue-500/5">
        <CardContent className="p-6">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="text-sm text-slate-400">MORAD Swing Score</p>
              <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                <span className={`text-5xl font-bold ${
                  swing.overallScore >= 70 ? 'text-emerald-400' :
                  swing.overallScore >= 60 ? 'text-amber-400' : 'text-red-400'
                }`}>
                  {swing.overallScore}
                </span>
                <span className="text-xl text-slate-500">/100</span>
              </div>
              <p className="mt-1 text-sm text-slate-400">
                Model Alignment: <span className="text-white font-medium">{swing.modelAlignment}</span>
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-slate-500">Was this analysis accurate?</p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={feedback === 1 ? 'default' : 'outline'}
                  onClick={() => setFeedback(1)}
                  className={feedback === 1 ? 'bg-emerald-500' : 'border-white/10'}
                >
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  Yes
                </Button>
                <Button
                  size="sm"
                  variant={feedback === -1 ? 'default' : 'outline'}
                  onClick={() => setFeedback(-1)}
                  className={feedback === -1 ? 'bg-red-500' : 'border-white/10'}
                >
                  <ThumbsDown className="h-4 w-4 mr-1" />
                  No
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Position Scores Chart */}
      <Card className="border-white/10 bg-white/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Target className="h-4 w-4 text-emerald-400" />
            Position-by-Position Breakdown (P1-P10)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={positionData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <XAxis dataKey="position" stroke="#64748b" fontSize={12} />
                <YAxis domain={[0, 100]} stroke="#64748b" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f2137',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                  formatter={(value: number) => [`Score: ${value / 10}/10`, '']}
                />
                <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                  {positionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getScoreColor(entry.fullScore)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs">
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Good (8-10)</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-amber-500" /> Fair (6-7)</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-500" /> Needs Work (0-5)</span>
          </div>
        </CardContent>
      </Card>

      {/* Position Detail Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {report.positionScores.map((ps) => (
          <Card key={ps.position} className="border-white/10 bg-white/5">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">{ps.position}</p>
                  <p className="text-sm font-medium">
                    {ps.position === 'P1' ? 'Address' :
                     ps.position === 'P2' ? 'Takeaway' :
                     ps.position === 'P3' ? 'Shaft Vertical' :
                     ps.position === 'P4' ? 'Top of Backswing' :
                     ps.position === 'P5' ? 'Transition' :
                     ps.position === 'P6' ? 'Shaft Parallel (Down)' :
                     ps.position === 'P7' ? 'Impact' :
                     ps.position === 'P8' ? 'Follow-Through' :
                     ps.position === 'P9' ? 'Lead Arm Horizontal' : 'Finish'}
                  </p>
                </div>
                <div className={`rounded-lg px-2.5 py-1 text-sm font-bold ${
                  ps.score >= 8 ? 'bg-emerald-500/10 text-emerald-400' :
                  ps.score >= 6 ? 'bg-amber-500/10 text-amber-400' :
                  'bg-red-500/10 text-red-400'
                }`}>
                  {ps.score}/10
                </div>
              </div>
              <Progress value={ps.score * 10} className="mt-2 h-1 bg-white/10" />
              {ps.deviations.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {ps.deviations.map((dev) => (
                    <Badge key={dev} variant="outline" className="border-white/10 text-xs text-slate-400">
                      {dev.replace(/_/g, ' ')}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Primary Faults */}
      <Card className="border-red-500/20 bg-red-500/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base text-red-400">
            <AlertTriangle className="h-4 w-4" />
            Primary Faults Identified
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {report.primaryFaults.map((fault, idx) => (
            <div key={idx} className="rounded-xl bg-white/5 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge className={`${
                  fault.severity === 'high' ? 'bg-red-500 text-white' :
                  fault.severity === 'medium' ? 'bg-amber-500 text-white' :
                  'bg-blue-500 text-white'
                }`}>
                  {fault.severity.toUpperCase()}
                </Badge>
                <span className="text-xs text-slate-500">{fault.positions.join(', ')}</span>
              </div>
              <h4 className="font-semibold text-white">{fault.fault}</h4>
              <p className="mt-1 text-sm text-slate-300">{fault.impact}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {fault.recommendedDrills.map((drill) => (
                  <Badge key={drill} variant="outline" className="border-emerald-500/30 text-emerald-400">
                    <Lightbulb className="mr-1 h-3 w-3" />
                    {drill.replace(/_/g, ' ')}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Root Cause Analysis */}
      <Card className="border-white/10 bg-white/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Zap className="h-4 w-4 text-amber-400" />
            Root Cause Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-300 leading-relaxed">{report.rootCauseAnalysis}</p>
        </CardContent>
      </Card>

      {/* Improvement Priorities */}
      <Card className="border-emerald-500/20 bg-emerald-500/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base text-emerald-400">
            <TrendingUp className="h-4 w-4" />
            Improvement Priorities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-2">
            {report.improvementPriorities.map((priority, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400">
                  {idx + 1}
                </span>
                {priority}
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Model Assessment */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { name: 'Model 1 (Power)', assessment: report.model1Assessment, color: 'blue' },
          { name: 'Model 2 CP (Fade)', assessment: report.model2CPAssessment, color: 'emerald' },
          { name: 'Model 2 CF (Draw)', assessment: report.model2CFAssessment, color: 'amber' },
        ].map((model) => (
          <Card key={model.name} className="border-white/10 bg-white/5">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-white">{model.name}</p>
                <Badge className={`${
                  model.assessment.compatibility === 'high' ? 'bg-emerald-500 text-white' :
                  model.assessment.compatibility === 'medium' ? 'bg-amber-500 text-white' :
                  'bg-red-500 text-white'
                }`}>
                  {model.assessment.compatibility}
                </Badge>
              </div>
              <p className="text-xs text-slate-400">{model.assessment.reasoning}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Practice Plan */}
      <Card className="border-white/10 bg-white/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <RotateCcw className="h-4 w-4 text-blue-400" />
            Recommended Practice Plan ({report.practicePlan.duration})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {report.practicePlan.focusAreas.map((area) => (
              <Badge key={area} variant="outline" className="border-blue-500/30 text-blue-400">
                {area}
              </Badge>
            ))}
          </div>
          <div className="space-y-2">
            {report.practicePlan.weeklyStructure.map((week, idx) => (
              <div key={idx} className="flex items-start gap-3 rounded-lg bg-white/5 p-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-400">
                  {idx + 1}
                </span>
                <p className="text-sm text-slate-300">{week}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center pb-8">
        <Link to="/upload">
          <Button className="bg-emerald-500 text-white hover:bg-emerald-600 w-full sm:w-auto">
            <RotateCcw className="mr-2 h-4 w-4" />
            Analyze New Swing
          </Button>
        </Link>
        <Link to="/tips">
          <Button variant="outline" className="border-white/10 hover:bg-white/10 w-full sm:w-auto">
            <Lightbulb className="mr-2 h-4 w-4" />
            Browse Drills
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
