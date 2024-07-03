import axios from 'axios';
import { IFilterIcon } from '../constants/arrayCategories';

const API_KEY = 'c12ba239-a95d-4d9b-8eb0-b21bf408464c';

export async function searchObjects(
  coordinates: { lat: number; lng: number },
  radius: number,
  filters: Array<IFilterIcon>,
) {
  try {
    let allData: any[] = [];
    let page = 1;

    const filters_str = 'rubric_id=' + filters.map((category) => category.categories).join(',');
    while (page <= 5) {
      const response = await axios.get(
        `https://catalog.api.2gis.com/3.0/items?${filters_str}&type=branch&point=${coordinates.lng},${coordinates.lat}&page=${page}&fields=items.point,items.rubrics,items.description,items.external_content,items.schedule,items.full_address_name&radius=${radius}&key=${API_KEY}`,
      );
      if (response.data.result) {
        allData = allData.concat(response.data.result.items);
      } else return allData;
      page++;
    }
    return allData;
  } catch (error) {
    console.error(error);
  }
}
