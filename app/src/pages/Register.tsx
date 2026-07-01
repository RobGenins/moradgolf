import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { UserPlus, ArrowLeft, AlertCircle, Check } from 'lucide-react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await register(email, password, name);
      navigate('/dashboard');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a1628] px-4">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center gap-2 text-sm text-slate-400 hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500">
              <UserPlus className="h-6 w-6 text-white" />
            </div>
            <h1 className="mt-4 text-2xl font-bold">Start your free trial</h1>
            <p className="mt-1 text-sm text-slate-400">
              14 days free. No credit card required.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {error && (
              <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-300">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus-visible:ring-emerald-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus-visible:ring-emerald-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-300">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus-visible:ring-emerald-500"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-500 text-white hover:bg-emerald-600"
            >
              {loading ? 'Creating account...' : 'Start Free Trial'}
            </Button>
          </form>

          <div className="mt-6 space-y-2 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-emerald-400" />
              14-day free trial with 3 bonus swing credits
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-emerald-400" />
              No credit card required
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-emerald-400" />
              Cancel anytime
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{' '}
            <Link to="/login" className="text-emerald-400 hover:text-emerald-300">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
