import type { BasicTeamData, TeamStatsData, RawTeamData } from "./index";
import type { Component } from "vue";

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

export interface TeamInfo
  extends Omit<RawTeamData, "keyPlayers">,
    BasicTeamData {
  position: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
}

export interface MapElement {
  label: string;
  value: string | number;
}

export interface InfoElement extends MapElement {
  component: Component;
  hasBtn: boolean;
}

export interface SeasonSummary {
  played?: number;
  wins?: number;
  draws?: number;
  losses?: number;
}

export interface SeasonMap extends MapElement {
  color: string;
}
