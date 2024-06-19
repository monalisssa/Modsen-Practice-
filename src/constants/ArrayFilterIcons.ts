import foodIcon from '../assets/images/categoriesIcons/food.svg';
import cultureIcon from '../assets/images/categoriesIcons/culture.svg';
import otherIcon from '../assets/images/categoriesIcons/other.svg';

interface IFilterIcon {
    url: string;
    name: string;
    category_id: number
}

export const arrayFilterIcons: IFilterIcon[] = [
    {
        "url": foodIcon,
        "name": "Еда",
        "category_id": 135
    },
    {
        "url": cultureIcon,
        "name": "Культура",
        "category_id": 142
    },
    {
        "url": otherIcon,
        "name": "Другое",
        "category_id": 141
    }
]