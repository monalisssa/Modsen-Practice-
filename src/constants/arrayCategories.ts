import foodIcon from '../assets/images/categoriesIcons/food.svg';
import cultureIcon from '../assets/images/categoriesIcons/culture.svg';
import otherIcon from '../assets/images/categoriesIcons/other.svg';
import coffeeIcon from '../assets/images/categoriesIcons/coffee.svg';

export interface IFilterIcon {
    url: string;
    name: string;
    categories: Array<number>,
    isSelected: boolean
}

export const arrayCategories: IFilterIcon[] = [
    {url: foodIcon, name: "Еда", categories: [159, 164], isSelected: false},
    {url: cultureIcon, name: "Культура", categories: [142], isSelected: false},
    {url: coffeeIcon, name: "Кафе", categories: [161], isSelected: false}
]