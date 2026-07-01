import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Menu,
  X,
  User,
  LogOut,
  Settings,
  BarChart3,
  Upload,
  History,
  Lightbulb,
  Shield,
  CreditCard,
} from 'lucide-react';

export default function Navbar() {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isLanding = location.pathname === '/';

  if (isLanding) return null;

  const navLinks = [
    { to: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { to: '/upload', label: 'New Analysis', icon: Upload },
    { to: '/history', label: 'History', icon: History },
    { to: '/analytics', label: 'Analytics', icon: BarChart3 },
    { to: '/tips', label: 'Tips & Drills', icon: Lightbulb },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a1628]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link to={isAuthenticated ? '/dashboard' : '/'} className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500">
            <span className="text-sm font-bold text-white">M</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Morad<span className="text-emerald-400">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        {isAuthenticated && (
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
            {isAdmin && (
              <Link
                to="/admin"
                className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === '/admin'
                    ? 'bg-amber-500/10 text-amber-400'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Shield className="h-4 w-4" />
                Admin
              </Link>
            )}
          </div>
        )}

        {/* Right side */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              {/* Credits Badge */}
              <div className="hidden items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs md:flex">
                <span className="text-slate-400">Credits:</span>
                <span className="font-semibold text-emerald-400">
                  {user ? (user.monthlyCreditsTotal - user.monthlyCreditsUsed + user.bonusCredits) : 0}
                </span>
              </div>

              {/* User Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-9 w-9 rounded-full bg-white/10 p-0 hover:bg-white/20">
                    <User className="h-4 w-4 text-slate-300" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52 border-white/10 bg-[#0f2137]">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium text-white">{user?.name}</p>
                    <p className="text-xs text-slate-400">{user?.email}</p>
                  </div>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem
                    onClick={() => navigate('/account')}
                    className="text-slate-300 focus:bg-white/10 focus:text-white"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => navigate('/account')}
                    className="text-slate-300 focus:bg-white/10 focus:text-white"
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Subscription
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem
                    onClick={logout}
                    className="text-red-400 focus:bg-red-500/10 focus:text-red-400"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
              </Button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/10">
                  Log in
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-emerald-500 text-white hover:bg-emerald-600">
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && isAuthenticated && (
        <div className="border-t border-white/10 bg-[#0a1628] px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium ${
                  location.pathname === link.to
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
            {isAdmin && (
              <Link
                to="/admin"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-amber-400 hover:bg-white/5"
              >
                <Shield className="h-4 w-4" />
                Admin Panel
              </Link>
            )}
            <div className="mt-2 flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-sm">
              <span className="text-slate-400">Credits:</span>
              <span className="font-semibold text-emerald-400">
                {user ? (user.monthlyCreditsTotal - user.monthlyCreditsUsed + user.bonusCredits) : 0}
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
