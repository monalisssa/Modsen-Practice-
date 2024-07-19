import { database } from '../firebase';
import { GeoObject } from '../types/name';
import { get, ref, runTransaction, update } from 'firebase/database';

export const removeFromFavorites = async (
  favorites: GeoObject[],
  userId: string,
  itemId: string,
) => {
  const updatedFavorites = { items: favorites.filter((item) => item.id !== itemId) };
  const favoritesRef = ref(database, `favorites/${userId}`);
  await update(favoritesRef, updatedFavorites);
  return updatedFavorites.items;
};

export const addToFavorites = async (userId: string, item: GeoObject) => {
  const favoritesRef = ref(database, `favorites/${userId}`);
  const transactionResult = await runTransaction(favoritesRef, (favoritesData) => {
    if (!favoritesData) {
      favoritesData = { items: [] };
    }
    const existingItem = favoritesData.items.find((element: GeoObject) => element.id === item.id);
    if (!existingItem) {
      favoritesData.items.push(item);
    }
    return favoritesData;
  });
  return transactionResult.snapshot.val().items;
};

export const getFavoriteItems = async (userId: string) => {
  const favoritesRef = ref(database, `favorites/${userId}`);
  const snapshot = await get(favoritesRef);

  if (snapshot.exists() && snapshot.val().items) {
    return snapshot.val().items;
  } else return [];
};
