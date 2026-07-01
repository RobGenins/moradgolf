// User types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  subscriptionStatus: 'trial' | 'active' | 'cancelled';
  subscriptionTrialEndsAt: string | null;
  monthlyCreditsTotal: number;
  monthlyCreditsUsed: number;
  bonusCredits: number;
  handicap: number | null;
  dominantHand: 'right' | 'left';
  createdAt: string;
}

// Swing analysis types
export interface PositionScore {
  position: string; // P1-P10
  score: number; // 0-10
  deviations: string[];
}

export interface PrimaryFault {
  fault: string;
  positions: string[];
  impact: string;
  severity: 'high' | 'medium' | 'low';
  recommendedDrills: string[];
}

export interface ModelAssessment {
  compatibility: 'high' | 'medium' | 'low';
  reasoning: string;
}

export interface SwingAnalysis {
  overallScore: number;
  modelAlignment: string;
  positionScores: PositionScore[];
  primaryFaults: PrimaryFault[];
  rootCauseAnalysis: string;
  improvementPriorities: string[];
  model1Assessment: ModelAssessment;
  model2CPAssessment: ModelAssessment;
  model2CFAssessment: ModelAssessment;
  practicePlan: {
    duration: string;
    focusAreas: string[];
    weeklyStructure: string[];
  };
}

export interface Swing {
  id: string;
  userId: string;
  title: string;
  faceOnVideoUrl: string;
  downTheLineVideoUrl: string;
  overallScore: number;
  modelAlignment: string;
  analysisReport: SwingAnalysis;
  processingStatus: 'pending' | 'processing' | 'completed' | 'failed';
  createdAt: string;
  userFeedback?: number; // 1 or -1
}

// Credit transaction
export interface CreditTransaction {
  id: string;
  userId: string;
  amount: number;
  type: 'monthly_allocation' | 'bonus_grant' | 'swing_consumption' | 'refund' | 'promotional';
  description: string;
  createdAt: string;
}

// Tip/Drill
export interface TipDrill {
  id: string;
  title: string;
  description: string;
  category: 'tip' | 'drill' | 'practice_plan';
  faultTags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  equipmentNeeded: string[];
  videoUrl?: string;
  isActive: boolean;
}

// Activity log
export interface ActivityLog {
  id: string;
  userId: string;
  action: string;
  entityType: string;
  entityId: string;
  createdAt: string;
}

// Auth context type
export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (user: User) => void;
}
