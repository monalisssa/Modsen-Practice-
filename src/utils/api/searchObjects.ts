import axios from "axios";
import {IFilterIcon} from "../../constants/ArrayFilterCategories";

const API_KEY = "0fcd27f9-6d34-451d-a5d2-17cdb0d2f45a"

export async function searchObjects(coordinates: { lat: number; lng: number }, radius: number, filters: Array<IFilterIcon>) {
    try {
        let allData: any[] = [];
        let page = 1;

        let filters_str = "rubric_id=" + filters.map(category => category.category_id).join(',')
        while (page<=5) {
            const response = await axios.get(`https://catalog.api.2gis.com/3.0/items?${filters_str}&point=${coordinates.lng},${coordinates.lat}&page=${page}&fields=items.point,items.rubrics&radius=${radius}&key=${API_KEY}`);

            if(response.data.result)
            {
                allData = allData.concat(response.data.result.items);
            }
            else return allData;
            page++;
        }
        return allData;
    } catch (error) {
        console.error(error);
    }
}


export async function searchObject(str_value: string) {
    try {
        const response = await axios.get(`https://catalog.api.2gis.com/3.0/items?q=${str_value}&fields=items.point,items.rubrics&radius=2000&key=${API_KEY}`);
        if(response.data.result)
        {
            return response.data.result.items[0]

        }

    } catch (error) {
        console.error(error);
    }
}