import type { BasicTeamData, TeamStatsData } from "./index";

export type BasicHeaderCell<T> = {
  label: string;
  isSortable: boolean;
  field: keyof T;
};

export type HeaderProps<T> = {
  headers: BasicHeaderCell<T>[];
};

export type MatchResultType = "Win" | "Loss" | "Draw";

export interface MainTableRow extends BasicTeamData, TeamStatsData {
  played: number;
}
