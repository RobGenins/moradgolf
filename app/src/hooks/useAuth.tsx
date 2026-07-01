import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { User, AuthContextType } from '@/types';
import { getUserByEmail } from '@/data/mockData';

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('moradai_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = useCallback(async (email: string, _password: string): Promise<boolean> => {
    // In production, this would validate against a real backend
    const found = getUserByEmail(email);
    if (found) {
      setUser(found);
      localStorage.setItem('moradai_user', JSON.stringify(found));
      return true;
    }
    return false;
  }, []);

  const register = useCallback(async (email: string, _password: string, name: string): Promise<boolean> => {
    // In production, this would create a user in the database
    const newUser: User = {
      id: `user_${Date.now()}`,
      email,
      name,
      role: 'user',
      subscriptionStatus: 'trial',
      subscriptionTrialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
      monthlyCreditsTotal: 10,
      monthlyCreditsUsed: 0,
      bonusCredits: 3,
      handicap: null,
      dominantHand: 'right',
      createdAt: new Date().toISOString(),
    };
    setUser(newUser);
    localStorage.setItem('moradai_user', JSON.stringify(newUser));
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('moradai_user');
  }, []);

  const updateUser = useCallback((updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('moradai_user', JSON.stringify(updatedUser));
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    login,
    register,
    logout,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
