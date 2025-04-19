import { SortDirection } from "../types/enums";
import type { MainTableRow } from "../types/table";

export const sortTeamStats = <T extends keyof MainTableRow>(
  array: MainTableRow[],
  key: T,
  order: SortDirection = SortDirection.Asc
): MainTableRow[] => {
  const newArr = [...array];
  newArr.sort((a, b) => {
    const valA = a[key];
    const valB = b[key];

    if (typeof valA === "string" && typeof valB === "string") {
      return order === SortDirection.Asc
        ? (valA as string).localeCompare(valB as string)
        : (valB as string).localeCompare(valA as string);
    }

    if (typeof valA === "number" && typeof valB === "number") {
      return order === SortDirection.Asc ? valA - valB : valB - valA;
    }

    return 0;
  });
  return newArr;
};
