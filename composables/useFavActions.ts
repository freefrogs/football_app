import { useAppStore } from "../stores/appStore";

export const useFavActions = (id?: number) => {
  const store = useAppStore();
  const { updateFavTeamId } = store;

  const isFav = computed<boolean>(() => id === store.favTeamId);

  const toggleFavoriteTeam = () => {
    if (typeof id !== "number") return;
    updateFavTeamId(store.favTeamId === id ? undefined : id);
  };
  return { toggleFavoriteTeam, isFav };
};
