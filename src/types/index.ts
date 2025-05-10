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
}

export interface PredictionBot {
  id: string;
  name: string;
  description: string;
  accuracy: number;
  predictionType: string;
  isPremium: boolean;
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
}

export interface MembershipTier {
  id: string;
  name: string;
  price: number;
  isMonthly: boolean;
  features: string[];
  isPopular?: boolean;
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
}

export type Theme = 'dark' | 'light';