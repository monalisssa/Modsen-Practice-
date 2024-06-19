import axios from "axios";

const API_KEY:string = "c6841796-fc39-43fc-8e08-b852fad7283c"

export async function searchObjects(q: string, radius:number, a: number, b: number) {
    try {
        let allData: any[] = [];
        let page = 1;

        while (page<=5) {
            const response = await axios.get(`https://catalog.api.2gis.com/3.0/items?&q=${q}&page=${page}&fields=items.point&point=${b},${a}&radius=${radius}&key=${API_KEY}`);

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