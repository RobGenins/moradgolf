import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  CreditCard, AlertCircle, Check,
  User, Mail, Hand, TrendingDown
} from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Account() {
  const { user, logout } = useAuth();
  const [saved, setSaved] = useState(false);

  if (!user) return null;

  const creditsRemaining = user.monthlyCreditsTotal - user.monthlyCreditsUsed + user.bonusCredits;
  const creditPercent = (user.monthlyCreditsUsed / user.monthlyCreditsTotal) * 100;

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-2xl space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold">Account Settings</h1>
        <p className="text-sm text-slate-400">Manage your profile and subscription</p>
      </div>

      {/* Profile Card */}
      <Card className="border-white/10 bg-white/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <User className="h-4 w-4 text-emerald-400" />
            Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-slate-400">Full Name</Label>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <User className="h-4 w-4 text-slate-500" />
                <span className="text-sm text-white">{user.name}</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-400">Email</Label>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <Mail className="h-4 w-4 text-slate-500" />
                <span className="text-sm text-white">{user.email}</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-400">Handicap</Label>
              <Input
                defaultValue={user.handicap || ''}
                placeholder="Enter your handicap"
                className="border-white/10 bg-white/5 text-white placeholder:text-slate-500"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-400">Dominant Hand</Label>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <Hand className="h-4 w-4 text-slate-500" />
                <span className="text-sm text-white capitalize">{user.dominantHand}</span>
              </div>
            </div>
          </div>
          <Button
            onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
            className="bg-emerald-500 text-white hover:bg-emerald-600"
          >
            {saved ? <><Check className="mr-2 h-4 w-4" /> Saved</> : 'Save Changes'}
          </Button>
        </CardContent>
      </Card>

      {/* Subscription Card */}
      <Card className="border-white/10 bg-white/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <CreditCard className="h-4 w-4 text-blue-400" />
            Subscription
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">MoradAI Pro</p>
              <p className="text-sm text-slate-400">$30/month</p>
            </div>
            <Badge className={`${
              user.subscriptionStatus === 'active' ? 'bg-emerald-500/10 text-emerald-400' :
              user.subscriptionStatus === 'trial' ? 'bg-blue-500/10 text-blue-400' :
              'bg-red-500/10 text-red-400'
            }`}>
              {user.subscriptionStatus === 'active' ? 'Active' :
               user.subscriptionStatus === 'trial' ? 'Trial' : 'Inactive'}
            </Badge>
          </div>

          {user.subscriptionStatus === 'trial' && (
            <div className="rounded-lg bg-blue-500/10 p-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-blue-400 shrink-0" />
              <p className="text-xs text-blue-400">
                Trial ends on {user.subscriptionTrialEndsAt
                  ? new Date(user.subscriptionTrialEndsAt).toLocaleDateString()
                  : 'N/A'}
              </p>
            </div>
          )}

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Monthly Credits</span>
              <span className="text-white">{user.monthlyCreditsUsed} / {user.monthlyCreditsTotal} used</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all"
                style={{ width: `${creditPercent}%` }}
              />
            </div>
          </div>

          {user.bonusCredits > 0 && (
            <div className="flex items-center justify-between rounded-lg bg-amber-500/10 px-3 py-2">
              <span className="text-sm text-amber-400">Bonus Credits</span>
              <span className="font-bold text-amber-400">{user.bonusCredits}</span>
            </div>
          )}

          <div className="text-xs text-slate-500">
            <p>Total Available: <span className="text-white font-medium">{creditsRemaining}</span> credits</p>
          </div>

          <div className="flex gap-3 pt-2">
            <Button className="bg-emerald-500 text-white hover:bg-emerald-600">
              <CreditCard className="mr-2 h-4 w-4" />
              Manage Subscription
            </Button>
            <Button variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/10">
              <TrendingDown className="mr-2 h-4 w-4" />
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Logout */}
      <Card className="border-white/10 bg-white/5">
        <CardContent className="p-5">
          <Button
            variant="outline"
            onClick={logout}
            className="w-full border-white/10 text-slate-400 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30"
          >
            Log Out
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
