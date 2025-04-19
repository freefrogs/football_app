import { MatchResult } from "../types/enums";
import type { Team, RawTeamData, Match } from "../types/index";

type TeamStats = Record<number, Omit<Team, "position">>;

const addPosition = (teamStats: TeamStats, isSeasonStart?: boolean): Team[] => {
  const teams = Object.values(teamStats) as Team[];
  if (!teams?.length) return [];
  teams.sort((a, b) => {
    if (isSeasonStart) return a.name.localeCompare(b.name);
    const diffA = a.goalsFor - a.goalsAgainst;
    const diffB = b.goalsFor - b.goalsAgainst;
    if (b.points === a.points) {
      if (diffA !== diffB) return diffB - diffA;
      return a.name.localeCompare(b.name);
    }
    return b.points - a.points;
  });
  teams.forEach((team, index) => {
    team.position = index + 1;
  });
  return teams;
};

export const getTeamsWithStats = (
  rawTeams: RawTeamData[],
  rawMatches: Match[]
): Team[] => {
  if (!rawTeams?.length) return [];
  // Create a map to store team stats
  const teamStats: TeamStats = {};

  // Initialize stats for each team - ensure points start at exactly 0
  rawTeams.forEach((team) => {
    teamStats[team.id] = {
      ...team,
      points: 0, // Explicitly set to 0 to override any existing value
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      recentForm: [],
    };
  });
  if (!rawMatches?.length) return addPosition(teamStats, true);
  // Process each match to update team stats
  rawMatches.forEach((match) => {
    const homeTeam = teamStats[match.homeTeamId];
    const awayTeam = teamStats[match.awayTeamId];

    if (!homeTeam || !awayTeam) return; // Skip if team not found

    // Update goals
    homeTeam.goalsFor += match.homeScore;
    homeTeam.goalsAgainst += match.awayScore;
    awayTeam.goalsFor += match.awayScore;
    awayTeam.goalsAgainst += match.homeScore;

    // Determine result and update points
    if (match.homeScore > match.awayScore) {
      // Home team wins
      homeTeam.wins += 1;
      homeTeam.points += 3; // 3 points for a win
      homeTeam.recentForm.unshift(MatchResult.Win);
      awayTeam.losses += 1;
      // No points for a loss (0)
      awayTeam.recentForm.unshift(MatchResult.Loss);
    } else if (match.homeScore < match.awayScore) {
      // Away team wins
      awayTeam.wins += 1;
      awayTeam.points += 3; // 3 points for a win
      awayTeam.recentForm.unshift(MatchResult.Win);
      homeTeam.losses += 1;
      // No points for a loss (0)
      homeTeam.recentForm.unshift(MatchResult.Loss);
    } else {
      // Draw
      homeTeam.draws += 1;
      homeTeam.points += 1; // 1 point for a draw
      homeTeam.recentForm.unshift(MatchResult.Draw);
      awayTeam.draws += 1;
      awayTeam.points += 1; // 1 point for a draw
      awayTeam.recentForm.unshift(MatchResult.Draw);
    }
  });
  return addPosition(teamStats);
};
