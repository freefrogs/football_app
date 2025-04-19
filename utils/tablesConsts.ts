import type { BasicHeaderCell, MainTableRow } from "../types/table";
import type { FormattedMatch } from "../types/index";

export const MAIN_HEADERS: BasicHeaderCell<MainTableRow>[] = [
  {
    label: "pos",
    isSortable: true,
    field: "position",
  },
  {
    label: "team",
    isSortable: true,
    field: "name",
  },
  {
    label: "points",
    isSortable: true,
    field: "points",
  },
  {
    label: "played",
    isSortable: false,
    field: "played",
  },
  {
    label: "w",
    isSortable: true,
    field: "wins",
  },
  {
    label: "d",
    isSortable: true,
    field: "draws",
  },
  {
    label: "l",
    isSortable: true,
    field: "losses",
  },
  {
    label: "gf",
    isSortable: true,
    field: "goalsFor",
  },
  {
    label: "ga",
    isSortable: true,
    field: "goalsAgainst",
  },
  {
    label: "form",
    isSortable: false,
    field: "recentForm",
  },
];

export const MATCH_TABLE_HEADERS: BasicHeaderCell<FormattedMatch>[] = [
  {
    label: "Date",
    isSortable: false,
    field: "date",
  },
  {
    label: "Match",
    isSortable: false,
    field: "id",
  },
  {
    label: "Result",
    isSortable: false,
    field: "result",
  },
];
