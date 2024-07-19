import food from '../assets/images/categories/food.svg';
import culture from '../assets/images/categories/culture.svg';
import coffee from '../assets/images/categories/coffee.svg';
import architecture from '../assets/images/categories/architecture.svg';
import bank from '../assets/images/categories/bank.svg';
import entertainment from '../assets/images/categories/entertainment.svg';
import industrial from '../assets/images/categories/industrial.svg';
import nature from '../assets/images/categories/nature.svg';
import religion from '../assets/images/categories/religion.svg';
import hotel from '../assets/images/categories/hotel.svg';
import car_station from '../assets/images/categories/car_station.svg';
import car from '../assets/images/categories/car.svg';
import shop from '../assets/images/categories/shop.svg';
import sport from '../assets/images/categories/sport.svg';
import bicycle from '../assets/images/categories/bicycle.svg';
import history from '../assets/images/categories/history.svg';
import different from '../assets/images/categories/different.svg';

export interface IFilterIcon {
  icon: string;
  name: string;
  categories: Array<number>;
  isSelected: boolean;
}

export const arrayCategories: IFilterIcon[] = [
  { icon: food, name: 'Еда', categories: [159, 164], isSelected: false },
  { icon: culture, name: 'Культура', categories: [142, 13787, 199], isSelected: false },
  { icon: coffee, name: 'Кафе', categories: [161], isSelected: false },
  { icon: architecture, name: 'Архитектура', categories: [142, 13787, 199], isSelected: false },
  { icon: bank, name: 'Банки', categories: [492], isSelected: false },
  { icon: entertainment, name: 'Развлечения', categories: [192, 110358], isSelected: false },
  { icon: history, name: 'Музеи', categories: [193], isSelected: false },
  { icon: industrial, name: 'Заводы', categories: [602], isSelected: false },
  { icon: nature, name: 'Парки', categories: [24169, 168], isSelected: false },
  { icon: religion, name: 'Религия', categories: [194], isSelected: false },
  { icon: hotel, name: 'Отели', categories: [269], isSelected: false },
  { icon: bicycle, name: 'Велосипеды', categories: [159, 164], isSelected: false },
  { icon: car_station, name: 'Заправки', categories: [42903], isSelected: false },
  { icon: car, name: 'Стоянки', categories: [60340, 409], isSelected: false },
  { icon: shop, name: 'Магазины', categories: [12127, 350], isSelected: false },
  { icon: sport, name: 'Спорт', categories: [51256, 267], isSelected: false },
  { icon: different, name: 'Разное', categories: [159, 164], isSelected: false },
];
