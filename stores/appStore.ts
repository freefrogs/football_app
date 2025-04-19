import { getTeamsWithStats } from "../utils/statsHandlers";
import { sortTeamStats } from "../utils/tablesHandlers";
import { SortDirection } from "../types/enums";
import type { RawTeamResponse, Team, Match } from "../types/index";
import type { MainTableRow } from "../types/table";

export const useAppStore = defineStore("appStore", () => {
  const isLoading = ref<boolean>(true);
  const updateIsLoading = (val: boolean) => (isLoading.value = val);

  const data = ref<RawTeamResponse | null>(null);
  const updateData = (val: RawTeamResponse | null) => (data.value = val);

  const favTeamId = ref<number | undefined>();
  const updateFavTeamId = (id: number | undefined) => (favTeamId.value = id);

  const sortDir = ref<SortDirection>(SortDirection.Asc);
  const updateSortDir = (dir: SortDirection) => (sortDir.value = dir);

  const sortField = ref<keyof MainTableRow>("position");
  const updateSortField = (field: keyof MainTableRow) =>
    (sortField.value = field);

  const teamsWithStats = computed<Team[]>(() => {
    if (!data.value?.teams?.length) return [];
    const matches: Match[] = data.value?.matches?.length
      ? JSON.parse(JSON.stringify(data.value.matches))
      : [];
    const teams = JSON.parse(JSON.stringify(data.value.teams));
    return getTeamsWithStats(teams, matches);
  });

  const mainTableItems = computed<MainTableRow[]>(() => {
    if (!teamsWithStats.value?.length) return [];
    return teamsWithStats.value.map((team) => ({
      id: team.id,
      position: team.position,
      name: team.name,
      points: team.points,
      played: team.wins + team.draws + team.losses,
      wins: team.wins,
      draws: team.draws,
      losses: team.losses,
      goalsFor: team.goalsFor,
      goalsAgainst: team.goalsAgainst,
      recentForm: team.recentForm.slice(0, 5).reverse(),
    }));
  });

  const sortedMainTableItems = computed<MainTableRow[]>(() => {
    if (!mainTableItems.value.length) return [];
    const newArr = JSON.parse(JSON.stringify(mainTableItems.value));
    return sortTeamStats(newArr, sortField.value, sortDir.value);
  });

  const clearSort = () => {
    sortDir.value = SortDirection.Asc;
    sortField.value = "position";
  };

  return {
    data,
    teamsWithStats,
    mainTableItems,
    isLoading,
    updateIsLoading,
    updateData,
    favTeamId,
    updateFavTeamId,
    sortDir,
    updateSortDir,
    sortField,
    updateSortField,
    clearSort,
    sortedMainTableItems,
  };
});
