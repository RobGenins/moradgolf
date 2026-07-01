import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { getSwingsByUserId } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Search, ChevronRight, Calendar,
  BarChart3, ArrowUpDown
} from 'lucide-react';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

export default function History() {
  const { user } = useAuth();
  const swings = user ? getSwingsByUserId(user.id) : [];
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'score'>('date');
  const [filterScore, setFilterScore] = useState<string>('all');

  const filteredSwings = useMemo(() => {
    let result = [...swings];
    if (search) {
      result = result.filter((s) =>
        s.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (filterScore !== 'all') {
      const [min, max] = filterScore.split('-').map(Number);
      result = result.filter((s) => s.overallScore >= min && s.overallScore <= max);
    }
    result.sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      return b.overallScore - a.overallScore;
    });
    return result;
  }, [swings, search, sortBy, filterScore]);

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Analysis History</h1>
          <p className="text-sm text-slate-400">{swings.length} swings analyzed</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <Input
            placeholder="Search swings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-white/10 bg-white/5 pl-10 text-white placeholder:text-slate-500"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={filterScore}
            onChange={(e) => setFilterScore(e.target.value)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
          >
            <option value="all">All Scores</option>
            <option value="70-100">Good (70+)</option>
            <option value="60-69">Fair (60-69)</option>
            <option value="0-59">Needs Work (&lt;60)</option>
          </select>
          <button
            onClick={() => setSortBy(sortBy === 'date' ? 'score' : 'date')}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 hover:bg-white/[0.07]"
          >
            <ArrowUpDown className="h-4 w-4" />
            {sortBy === 'date' ? 'Date' : 'Score'}
          </button>
        </div>
      </div>

      {/* Swing Cards */}
      {filteredSwings.length > 0 ? (
        <div className="grid gap-4">
          {filteredSwings.map((swing) => (
            <Link key={swing.id} to={`/analysis/${swing.id}`}>
              <Card className="border-white/10 bg-white/5 transition-colors hover:bg-white/[0.07]">
                <CardContent className="flex items-center gap-4 p-4">
                  {/* Score */}
                  <div className={`flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl ${
                    swing.overallScore >= 70 ? 'bg-emerald-500/10' :
                    swing.overallScore >= 60 ? 'bg-amber-500/10' :
                    'bg-red-500/10'
                  }`}>
                    <span className={`text-lg font-bold ${
                      swing.overallScore >= 70 ? 'text-emerald-400' :
                      swing.overallScore >= 60 ? 'text-amber-400' :
                      'text-red-400'
                    }`}>
                      {swing.overallScore}
                    </span>
                    <span className="text-[10px] text-slate-500">/100</span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white truncate">{swing.title}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(swing.createdAt).toLocaleDateString()}
                      </span>
                      <Badge variant="outline" className="border-white/10 text-xs">
                        {swing.modelAlignment}
                      </Badge>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {swing.analysisReport.primaryFaults.slice(0, 2).map((f) => (
                        <span key={f.fault} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-500">
                          {f.fault.length > 35 ? f.fault.slice(0, 35) + '...' : f.fault}
                        </span>
                      ))}
                      {swing.analysisReport.primaryFaults.length > 2 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-500">
                          +{swing.analysisReport.primaryFaults.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Arrow */}
                  <ChevronRight className="h-5 w-5 text-slate-600 shrink-0" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <Card className="border-white/10 bg-white/5">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <BarChart3 className="h-12 w-12 text-slate-600 mb-3" />
            <p className="text-slate-400">No swings match your filters</p>
            {swings.length === 0 && (
              <Link to="/upload">
                <p className="mt-2 text-emerald-400 text-sm hover:underline">Upload your first swing</p>
              </Link>
            )}
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
}
