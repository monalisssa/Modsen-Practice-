import foodIcon from '../assets/images/categoriesIcons/food.svg';
import cultureIcon from '../assets/images/categoriesIcons/culture.svg';
import otherIcon from '../assets/images/categoriesIcons/other.svg';
import coffeeIcon from '../assets/images/categoriesIcons/coffee.svg';

export interface IFilterIcon {
    url: string;
    name: string;
    category_id: Array<number>,
    isSelected: boolean
}

export const arrayFilterCategories: IFilterIcon[] = [
    {
        url: foodIcon,
        name: "Еда",
        category_id: [159, 164],
        isSelected: false
    },
    {
        url: cultureIcon,
        name: "Культура",
        category_id: [142],
        isSelected: false
    },
    {
        url: coffeeIcon,
        name: "Кафе",
        category_id: [161],
        isSelected: false
    }
]