import { makeAutoObservable } from 'mobx'
import { listDeliveries, listPayments } from './db'
import { IOrder, IDelivery, IKindPayment } from '../types'

interface IOrderPosition {
  order: IOrder
  amount: number
  comment: string
}

class StoreBasket {
  orders: Array<IOrderPosition>
  wayDelivery: Array<IDelivery>
  wayPayment: Array<IKindPayment>
  totalPrice: number

  constructor() {
    this.orders = []
    this.wayDelivery = listDeliveries
    this.wayPayment = listPayments
    this.totalPrice = 0
    makeAutoObservable(this)
  }

  addOrIncreaseOrder(order: IOrder) {
    const idx = this.orders.findIndex((item) => item.order.id === order.id)
    if (idx === -1) {
      this.orders.unshift({ order: order, amount: 1, comment: '' })
    } else {
      this.orders[idx].amount++
    }
    this.updateTotalPrice()
  }

  setAmountOrder(id: number, curAmount: number) {
    const idx = this.orders.findIndex((item) => item.order.id === id)
    this.orders[idx].amount = curAmount
    this.updateTotalPrice()
  }

  decreaseOrder(id: number) {
    const idx = this.orders.findIndex((item) => item.order.id === id)
    if (this.orders[idx].amount === 1) {
      this.orders = this.orders.filter((item) => item.order.id !== id)
    } else {
      this.orders[idx].amount--
    }
    this.updateTotalPrice()
  }

  removeOrder(id: number) {
    this.orders = this.orders.filter((item) => item.order.id !== id)
    this.updateTotalPrice()
  }

  setActiveWayDelivery(id: number) {
    this.wayDelivery = this.wayDelivery.map(
      (item) => ((item.active = item.id === id), item)
    )
  }

  setActiveWayPayment(id: number) {
    this.wayPayment = this.wayPayment.map(
      (item) => ((item.active = item.id === id), item)
    )
  }

  setComment(id: number, text: string) {
    const idx = this.orders.findIndex((item) => item.order.id === id)
    this.orders[idx].comment = text
  }

  updateTotalPrice() {
    this.totalPrice = +this.orders.reduce((acc, curVal) => {
      acc += curVal.order.price * curVal.amount
      return +acc.toFixed(2)
    }, 0)
  }
}

export const storeBasket = new StoreBasket()
