import {
  ITotal,
  IOrderReport,
  IMostOrdered,
  IMostTypeOrdered
} from '@store/types'

export const totals = [
  {
    name: 'Total Revenue',
    iconUrl: '/images/svg/Icon-Coin.svg',
    percent: '+32.40%',
    stat: '$10,243.00',
    isIncrease: true
  },
  {
    name: 'Total Dish Ordered',
    iconUrl: '/images/svg/Icon-Iconly-Light.svg',
    percent: '-12.40%',
    stat: '23,456',
    isIncrease: false
  },
  {
    name: 'Total Customer',
    iconUrl: '/images/svg/Icon-Users.svg',
    percent: '+2.40%',
    stat: '1,234',
    isIncrease: true
  }
] as Array<ITotal>

export const orderReports = [
  {
    name: 'Eren Jaegar',
    iconUrl: '/images/avatars/Avatar1.png',
    menu: 'Spicy seasoned seafood noodles',
    totalPayment: 125,
    status: 'Completed'
  },
  {
    name: 'Reinen Braun',
    iconUrl: '/images/avatars/Avatar2.png',
    menu: 'Salted Pasta with mushroom sauce',
    totalPayment: 145,
    status: 'Preparing'
  },
  {
    name: 'Levi Ackerman',
    iconUrl: '/images/avatars/Avatar3.png',
    menu: 'Beef dumpling in hot and sour soup',
    totalPayment: 105,
    status: 'Pending'
  },
  {
    name: 'Historia Reiss',
    iconUrl: '/images/avatars/Avatar4.png',
    menu: 'Hot spicy fried rice with omelet',
    totalPayment: 45,
    status: 'Completed'
  },
  {
    name: 'Hanji Zoe',
    iconUrl: '/images/avatars/Avatar5.png',
    menu: 'Hot spicy fried rice with omelet',
    totalPayment: 245,
    status: 'Completed'
  },
  {
    name: 'Armin Arlert',
    iconUrl: '/images/avatars/Avatar6.png',
    menu: 'Hot spicy fried rice with omelet',
    totalPayment: 435,
    status: 'Completed'
  }
] as Array<IOrderReport>

export const mostOrdered = [
  {
    name: 'Spicy seasoned seafood noodles',
    iconUrl: '/images/food/hot/Content-Images-1.png',
    numberOfOrders: 200
  },
  {
    name: 'Salted pasta with mushroom sauce',
    iconUrl: '/images/food/hot/Content-Images-2.png',
    numberOfOrders: 120
  },
  {
    name: 'Beef dumpling in hot and sour soup',
    iconUrl: '/images/food/hot/Content-Images-3.png',
    numberOfOrders: 80
  }
] as Array<IMostOrdered>

export const mostTypeOrdered = [
  {
    name: 'Dine In',
    customers: 200
  },
  {
    name: 'To Go',
    customers: 122
  },
  {
    name: 'Delivery',
    customers: 264
  }
] as Array<IMostTypeOrdered>
