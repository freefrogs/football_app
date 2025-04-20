import { MatchResult } from "./enums";

export interface BasicTeamData {
  id: number;
  name: string;
}

export interface RawTeamData extends BasicTeamData {
  founded: string;
  stadium: string;
  coach: string;
  keyPlayers: string[];
}

export interface TeamStatsData {
  position: number;
  points: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  recentForm: MatchResult[];
}

export interface Team extends RawTeamData, TeamStatsData {}

interface BasicMatch {
  id: number;
  date: string;
  homeScore: number;
  awayScore: number;
}

export interface Match extends BasicMatch {
  homeTeamId: number;
  awayTeamId: number;
}

export interface FormattedMatch extends BasicMatch {
  homeTeam: string;
  awayTeam: string;
  result: MatchResult;
  isHome: boolean;
}

interface TeamsResponse {
  teams: Team[];
  matches: Match[];
}

interface RawTeamResponse {
  teams: RawTeamData[];
  matches: Match[];
}
