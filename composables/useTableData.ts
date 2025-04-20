import { useAppStore } from "../stores/appStore";
import { MatchResult } from "../types/enums";
import type { MainTableRow, TeamInfo } from "../types/table";
import type { FormattedMatch, Match, RawTeamData } from "../types/index";

export const useTableData = () => {
  const store = useAppStore();

  const matches = computed<Match[]>(() =>
    store.data?.matches?.length ? store.data?.matches : []
  );
  const teams = computed<RawTeamData[]>(() =>
    store.data?.teams?.length ? store.data?.teams : []
  );

  const getTeamDataById = (id: number): MainTableRow | undefined => {
    if (!store.sortedMainTableItems) return;
    return store.sortedMainTableItems.find((team) => team.id === id);
  };

  const getTeamMatches = (
    id: number,
    limit: number | null = null
  ): FormattedMatch[] => {
    if (id === undefined || id === null || !store.data?.matches?.length)
      return [];
    // Filter matches for the team
    const teamMatches: Match[] = matches.value.filter(
      (match) => match.homeTeamId === id || match.awayTeamId === id
    );
    // Sort matches by date (most recent first)
    const sortedMatches: Match[] = [...teamMatches].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    // Apply limit if provided
    const limitedMatches: Match[] = limit
      ? sortedMatches.slice(0, limit)
      : sortedMatches;
    // Format matches for display
    return limitedMatches.map((match) => {
      const isHome = match.homeTeamId === id;
      const homeTeamObj = teams.value.find((t) => t.id === match.homeTeamId);
      const awayTeamObj = teams.value.find((t) => t.id === match.awayTeamId);

      // Determine result for the team
      let result: MatchResult;
      if (isHome) {
        result =
          match.homeScore > match.awayScore
            ? MatchResult.Win
            : match.homeScore < match.awayScore
            ? MatchResult.Loss
            : MatchResult.Draw;
      } else {
        result =
          match.awayScore > match.homeScore
            ? MatchResult.Win
            : match.awayScore < match.homeScore
            ? MatchResult.Loss
            : MatchResult.Draw;
      }

      return {
        id: match.id,
        date: match.date,
        homeTeam: homeTeamObj?.name || "Unknown Team",
        awayTeam: awayTeamObj?.name || "Unknown Team",
        homeScore: match.homeScore,
        awayScore: match.awayScore,
        result,
        isHome,
      };
    });
  };

  const getTeamInfoById = (id: number): TeamInfo => {
    const teamData = getTeamDataById(id);
    const teamInfo = teams.value?.find((team) => team.id === id);
    return {
      id,
      name: teamData?.name ?? "Unknown Team",
      founded: teamInfo?.founded ?? "N/A",
      stadium: teamInfo?.stadium ?? "N/A",
      coach: teamInfo?.coach ?? "N/A",
      position: teamData?.position ?? 0,
      points: teamData?.points ?? 0,
      goalsFor: teamData?.goalsFor ?? 0,
      goalsAgainst: teamData?.goalsAgainst ?? 0,
    };
  };

  return { getTeamDataById, getTeamMatches, getTeamInfoById };
};
