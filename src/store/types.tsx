import { Interface } from 'readline'

export interface IOrder {
  id: number
  imageUrl: string
  title: string
  price: number
  quantity: number
}

export interface ICategoryFoodMenu {
  name: string
  listFoodMenu: Array<IOrder>
}

export interface IDelivery {
  id: number
  name: string
  access: boolean
  active: boolean
}

export interface IKindPayment {
  id: number
  name: string
  access: boolean
  active: boolean
}

export interface ITotal {
  name: string
  iconUrl: string
  percent: string
  stat: string
  isIncrease: boolean
}

export interface IOrderReport {
  name: string
  iconUrl: string
  menu: string
  totalPayment: number
  status: 'Completed' | 'Preparing' | 'Pending'
}

export interface IMostOrdered {
  iconUrl: string
  name: string
  numberOfOrders: number
}

export interface IMostTypeOrdered {
  name: string
  customers: number
}
