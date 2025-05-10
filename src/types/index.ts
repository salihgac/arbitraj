export interface ValueBet {
  id: string;
  match: string;
  league: string;
  date: string;
  bookmaker: string;
  betType: string;
  odds: number;
  predictedProbability: number;
  valueScore: number;
  status: 'open' | 'won' | 'lost' | 'void';
  errorMargin?: number;
  confidence?: number;
}

export interface ArbitrageBet {
  id: string;
  match: string;
  league: string;
  date: string;
  outcomes: {
    bookmaker: string;
    betType: string;
    odds: number;
    stake: number;
  }[];
  profitMargin: number;
  status: 'open' | 'complete' | 'void';
  totalStake?: number;
  guaranteedProfit?: number;
  riskLevel?: 'low' | 'medium' | 'high';
}

export interface PredictionBot {
  id: string;
  name: string;
  description: string;
  accuracy: number;
  predictionType: string;
  isPremium: boolean;
  lastUpdated?: Date;
  totalPredictions?: number;
  successRate?: number;
}

export interface Prediction {
  id: string;
  match: string;
  league: string;
  date: string;
  botId: string;
  prediction: string;
  confidence: number;
  risk: 'low' | 'medium' | 'high';
  result?: string;
  status: 'pending' | 'won' | 'lost' | 'void';
  analysis?: string;
  expectedValue?: number;
}

export interface OddsMovement {
  id: string;
  match: string;
  league: string;
  date: string;
  bookmaker: string;
  betType: string;
  timePoints: string[];
  odds: number[];
  isSharp: boolean;
  volume?: number;
  significance?: 'low' | 'medium' | 'high';
  trigger?: 'sharp_money' | 'public_money' | 'injury_news' | 'other';
}

export interface MatchSimulation {
  id: string;
  match: string;
  league: string;
  date: string;
  homeWinProbability: number;
  drawProbability: number;
  awayWinProbability: number;
  expectedGoals: {
    home: number;
    away: number;
  };
  simulationCount: number;
  isPremium: boolean;
  weatherConditions?: {
    temperature?: number;
    precipitation?: number;
    windSpeed?: number;
  };
  keyPlayerImpact?: {
    playerId: string;
    name: string;
    impact: number;
  }[];
}

export interface MembershipTier {
  id: string;
  name: string;
  price: number;
  isMonthly: boolean;
  features: string[];
  isPopular?: boolean;
  maxSimultaneousBets?: number;
  customBotAccess?: boolean;
  apiAccess?: boolean;
  prioritySupport?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  membershipTier: string;
  bankroll: number;
  riskProfile: 'conservative' | 'moderate' | 'aggressive';
  notifications: {
    leagues: string[];
    teams: string[];
    betTypes: string[];
  };
  betHistory?: {
    totalBets: number;
    wonBets: number;
    lostBets: number;
    profit: number;
    roi: number;
  };
  preferences?: {
    stakingMethod: 'fixed' | 'kelly' | 'proportional';
    maxStakePerBet: number;
    minOdds: number;
    maxOdds: number;
    preferredBookmakers: string[];
  };
}

export interface BetError {
  code: string;
  message: string;
  severity: 'warning' | 'error';
  betId?: string;
  bookmaker?: string;
}

export interface BettingLimits {
  minStake: number;
  maxStake: number;
  maxDailyStake: number;
  maxWeeklyStake: number;
  maxMonthlyStake: number;
}

export type Theme = 'dark' | 'light';