import { useState } from 'react';
import { getAllUsers, getAllSwings } from '@/data/mockData';
import type { User } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Users, TrendingUp, CreditCard, Activity, Shield,
  Search, Plus, Award, BarChart3
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  CartesianGrid, BarChart, Bar
} from 'recharts';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function Admin() {
  const users = getAllUsers();
  const swings = getAllSwings();
  const [searchUser, setSearchUser] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [creditAmount, setCreditAmount] = useState(5);

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(searchUser.toLowerCase()) ||
    u.email.toLowerCase().includes(searchUser.toLowerCase())
  );

  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.subscriptionStatus === 'active').length;
  const totalSwings = swings.length;
  const totalRevenue = activeUsers * 30;

  // Mock revenue data
  const revenueData = [
    { month: 'Jan', revenue: 120, users: 4 },
    { month: 'Feb', revenue: 210, users: 7 },
    { month: 'Mar', revenue: 360, users: 12 },
    { month: 'Apr', revenue: 480, users: 16 },
    { month: 'May', revenue: 600, users: 20 },
    { month: 'Jun', revenue: 750, users: 25 },
  ];

  const handleGrantCredits = () => {
    if (!selectedUser) return;
    // In production, this would call an API
    selectedUser.bonusCredits += creditAmount;
    setSelectedUser({ ...selectedUser });
    alert(`Granted ${creditAmount} bonus credits to ${selectedUser.name}`);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="space-y-6"
    >
      <motion.div variants={fadeInUp}>
        <div className="flex items-center gap-3">
          <Shield className="h-6 w-6 text-amber-400" />
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <p className="text-sm text-slate-400">Manage users, credits, and analytics</p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Total Users', value: totalUsers, icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10' },
          { label: 'Active Subs', value: activeUsers, icon: CreditCard, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
          { label: 'Total Swings', value: totalSwings, icon: Activity, color: 'text-purple-400', bg: 'bg-purple-500/10' },
          { label: 'MRR', value: `$${totalRevenue}`, icon: TrendingUp, color: 'text-amber-400', bg: 'bg-amber-500/10' },
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

      <Tabs defaultValue="users" className="w-full">
        <TabsList className="bg-white/5 border border-white/10">
          <TabsTrigger value="users" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
            <Users className="h-4 w-4 mr-1.5" />
            Users
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
            <BarChart3 className="h-4 w-4 mr-1.5" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="credits" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
            <CreditCard className="h-4 w-4 mr-1.5" />
            Grant Credits
          </TabsTrigger>
        </TabsList>

        {/* Users Tab */}
        <TabsContent value="users" className="mt-4">
          <Card className="border-white/10 bg-white/5">
            <CardHeader>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <Input
                  placeholder="Search users by name or email..."
                  value={searchUser}
                  onChange={(e) => setSearchUser(e.target.value)}
                  className="border-white/10 bg-white/5 pl-10 text-white placeholder:text-slate-500"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-left text-slate-400">
                      <th className="pb-3 font-medium">User</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Role</th>
                      <th className="pb-3 font-medium">Credits</th>
                      <th className="pb-3 font-medium">Handicap</th>
                      <th className="pb-3 font-medium">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((u) => (
                      <tr
                        key={u.id}
                        className="border-b border-white/5 hover:bg-white/[0.03] cursor-pointer transition-colors"
                        onClick={() => setSelectedUser(u)}
                      >
                        <td className="py-3">
                          <div>
                            <p className="font-medium text-white">{u.name}</p>
                            <p className="text-xs text-slate-500">{u.email}</p>
                          </div>
                        </td>
                        <td className="py-3">
                          <Badge className={`${
                            u.subscriptionStatus === 'active' ? 'bg-emerald-500/10 text-emerald-400' :
                            u.subscriptionStatus === 'trial' ? 'bg-blue-500/10 text-blue-400' :
                            'bg-red-500/10 text-red-400'
                          }`}>
                            {u.subscriptionStatus}
                          </Badge>
                        </td>
                        <td className="py-3">
                          <Badge variant="outline" className={`${
                            u.role === 'admin' ? 'border-amber-500/30 text-amber-400' :
                            'border-white/10 text-slate-400'
                          }`}>
                            {u.role}
                          </Badge>
                        </td>
                        <td className="py-3 text-white">
                          {u.monthlyCreditsTotal - u.monthlyCreditsUsed + u.bonusCredits}
                          <span className="text-xs text-slate-500 ml-1">({u.bonusCredits} bonus)</span>
                        </td>
                        <td className="py-3 text-slate-300">{u.handicap || 'N/A'}</td>
                        <td className="py-3 text-slate-500">
                          {new Date(u.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="mt-4 space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-400" />
                  Monthly Recurring Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                      <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                      <YAxis stroke="#64748b" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0f2137',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '8px',
                          color: '#fff',
                        }}
                      />
                      <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981' }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-400" />
                  User Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                      <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                      <YAxis stroke="#64748b" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0f2137',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '8px',
                          color: '#fff',
                        }}
                      />
                      <Bar dataKey="users" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Credits Tab */}
        <TabsContent value="credits" className="mt-4">
          <Card className="border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Award className="h-4 w-4 text-emerald-400" />
                Grant Bonus Credits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* User Selection */}
              <div>
                <label className="text-sm text-slate-400 mb-2 block">Select User</label>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {users.map((u) => (
                    <button
                      key={u.id}
                      onClick={() => setSelectedUser(u)}
                      className={`flex items-center gap-3 rounded-lg border p-3 text-left transition-colors ${
                        selectedUser?.id === u.id
                          ? 'border-emerald-500/50 bg-emerald-500/10'
                          : 'border-white/10 bg-white/5 hover:bg-white/[0.07]'
                      }`}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-medium">
                        {u.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{u.name}</p>
                        <p className="text-xs text-slate-500">
                          Credits: {u.monthlyCreditsTotal - u.monthlyCreditsUsed + u.bonusCredits}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {selectedUser && (
                <motion.div
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4 rounded-xl bg-white/5 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Selected User</p>
                      <p className="font-semibold text-white">{selectedUser.name}</p>
                      <p className="text-xs text-slate-500">{selectedUser.email}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-400">Current Credits</p>
                      <p className="text-2xl font-bold text-emerald-400">
                        {selectedUser.monthlyCreditsTotal - selectedUser.monthlyCreditsUsed + selectedUser.bonusCredits}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">
                      Credit Amount: <span className="text-white font-bold">{creditAmount}</span>
                    </label>
                    <input
                      type="range"
                      min={1}
                      max={20}
                      value={creditAmount}
                      onChange={(e) => setCreditAmount(Number(e.target.value))}
                      className="w-full accent-emerald-500"
                    />
                    <div className="flex justify-between text-xs text-slate-600 mt-1">
                      <span>1</span>
                      <span>10</span>
                      <span>20</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleGrantCredits}
                    className="w-full bg-emerald-500 text-white hover:bg-emerald-600"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Grant {creditAmount} Bonus Credits to {selectedUser.name}
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
