import { useState, useMemo } from 'react';
import { getTipsDrills } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Search, Lightbulb, Dumbbell, ClipboardList,
  Bookmark, Filter, Wrench
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const difficultyColors = {
  beginner: 'bg-emerald-500/10 text-emerald-400',
  intermediate: 'bg-amber-500/10 text-amber-400',
  advanced: 'bg-red-500/10 text-red-400',
};

const categoryIcons = {
  tip: Lightbulb,
  drill: Dumbbell,
  practice_plan: ClipboardList,
};

export default function Tips() {
  const tipsDrills = getTipsDrills();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set());
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleBookmark = (id: string) => {
    setBookmarked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filtered = useMemo(() => {
    return tipsDrills.filter((item) => {
      if (search && !item.title.toLowerCase().includes(search.toLowerCase()) &&
          !item.description.toLowerCase().includes(search.toLowerCase())) return false;
      if (categoryFilter !== 'all' && item.category !== categoryFilter) return false;
      if (difficultyFilter !== 'all' && item.difficulty !== difficultyFilter) return false;
      return true;
    });
  }, [tipsDrills, search, categoryFilter, difficultyFilter]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="space-y-6"
    >
      <motion.div variants={fadeInUp}>
        <h1 className="text-2xl font-bold">Tips & Drills</h1>
        <p className="text-sm text-slate-400">
          Curated content based on MORAD principles
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div variants={fadeInUp} className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <Input
            placeholder="Search tips, drills, and practice plans..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-white/10 bg-white/5 pl-10 text-white placeholder:text-slate-500"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
          >
            <option value="all">All Categories</option>
            <option value="tip">Tips</option>
            <option value="drill">Drills</option>
            <option value="practice_plan">Practice Plans</option>
          </select>
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          {bookmarked.size > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setBookmarked(new Set())}
              className="border-white/10 text-slate-400"
            >
              Clear Bookmarks
            </Button>
          )}
        </div>
      </motion.div>

      {/* Content Grid */}
      <motion.div variants={staggerContainer} className="grid gap-4">
        {filtered.map((item) => {
          const Icon = categoryIcons[item.category];
          const isExpanded = expandedId === item.id;
          const isBookmarked = bookmarked.has(item.id);

          return (
            <motion.div key={item.id} variants={fadeInUp}>
              <Card className={`border-white/10 bg-white/5 transition-colors ${isExpanded ? 'bg-white/[0.07]' : ''}`}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                      item.category === 'tip' ? 'bg-amber-500/10' :
                      item.category === 'drill' ? 'bg-blue-500/10' :
                      'bg-purple-500/10'
                    }`}>
                      <Icon className={`h-5 w-5 ${
                        item.category === 'tip' ? 'text-amber-400' :
                        item.category === 'drill' ? 'text-blue-400' :
                        'text-purple-400'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <button
                          onClick={() => toggleBookmark(item.id)}
                          className="shrink-0 text-slate-500 hover:text-amber-400 transition-colors"
                        >
                          <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
                        </button>
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <Badge className={difficultyColors[item.difficulty]}>
                          {item.difficulty}
                        </Badge>
                        <Badge variant="outline" className="border-white/10 text-xs text-slate-400 capitalize">
                          {item.category.replace('_', ' ')}
                        </Badge>
                      </div>
                      <p className={`mt-2 text-sm text-slate-300 ${isExpanded ? '' : 'line-clamp-2'}`}>
                        {item.description}
                      </p>

                      {isExpanded && item.equipmentNeeded.length > 0 && (
                        <div className="mt-3 flex items-center gap-2">
                          <Wrench className="h-3.5 w-3.5 text-slate-500" />
                          <span className="text-xs text-slate-500">Equipment: {item.equipmentNeeded.join(', ')}</span>
                        </div>
                      )}

                      {isExpanded && item.faultTags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {item.faultTags.map((tag) => (
                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-slate-500">
                              {tag.replace(/_/g, ' ')}
                            </span>
                          ))}
                        </div>
                      )}

                      <Button
                        variant="link"
                        className="mt-2 h-auto p-0 text-emerald-400 text-sm"
                        onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <Filter className="h-12 w-12 text-slate-600 mx-auto mb-3" />
          <p className="text-slate-400">No content matches your filters</p>
        </div>
      )}
    </motion.div>
  );
}
