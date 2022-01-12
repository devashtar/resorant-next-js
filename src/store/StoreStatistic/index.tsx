import { makeAutoObservable } from 'mobx'
import { totals, orderReports, mostOrdered, mostTypeOrdered } from './db'
import { ITotal, IOrderReport, IMostOrdered, IMostTypeOrdered } from '../types'

class StoreStatistic {
  totals: Array<ITotal>
  orderReports: Array<IOrderReport>
  mostOrdered: Array<IMostOrdered>
  mostTypeOrdered: Array<IMostTypeOrdered>

  constructor() {
    this.totals = totals
    this.orderReports = orderReports
    this.mostOrdered = mostOrdered
    this.mostTypeOrdered = mostTypeOrdered

    makeAutoObservable(this)
  }
}

export const storeStatistic = new StoreStatistic()
