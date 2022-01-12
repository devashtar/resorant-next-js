import { IOrder, ICategoryFoodMenu } from '@store/types'

const hotFoodMenu = [
  {
    id: 1,
    imageUrl: '/images/food/hot/Content-Images.png',
    title: 'Spicy seasoned seafood noodles',
    price: 2.29,
    quantity: 20
  },
  {
    id: 2,
    imageUrl: '/images/food/hot/Content-Images-1.png',
    title: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    quantity: 11
  },
  {
    id: 3,
    imageUrl: '/images/food/hot/Content-Images-2.png',
    title: 'Beef dumpling in hot and sour soup',
    price: 2.99,
    quantity: 16
  },
  {
    id: 4,
    imageUrl: '/images/food/hot/Content-Images-3.png',
    title: 'Healthy noodle with spinach leaf',
    price: 3.29,
    quantity: 22
  },
  {
    id: 5,
    imageUrl: '/images/food/hot/Content-Images-4.png',
    title: 'Hot spicy fried rice with omelet',
    price: 3.49,
    quantity: 13
  },
  {
    id: 6,
    imageUrl: '/images/food/hot/Content-Images-5.png',
    title: 'Spicy instant noodle with special omelette',
    price: 3.59,
    quantity: 17
  },
  {
    id: 7,
    imageUrl: '/images/food/hot/Content-Images-6.png',
    title: 'Healthy noodle with spinach leaf',
    price: 3.29,
    quantity: 22
  },
  {
    id: 8,
    imageUrl: '/images/food/hot/Content-Images-7.png',
    title: 'Hot spicy fried rice with omelet',
    price: 3.49,
    quantity: 13
  },
  {
    id: 9,
    imageUrl: '/images/food/hot/Content-Images-8.png',
    title: 'Spicy instant noodle with special omelette',
    price: 3.59,
    quantity: 17
  }
] as Array<IOrder>

export const arrayCategoriesItem = [
  {
    name: 'Hot Dishes',
    listFoodMenu: hotFoodMenu
  },
  {
    name: 'Cold Dishes',
    listFoodMenu: []
  },
  {
    name: 'Soup',
    listFoodMenu: []
  },
  {
    name: 'Grill',
    listFoodMenu: []
  },
  {
    name: 'Appetizer',
    listFoodMenu: []
  },
  {
    name: 'Dessert',
    listFoodMenu: []
  }
] as Array<ICategoryFoodMenu>

export const listKindOfFoodByTime = ['Dine In', 'To Go', 'Delivery']
