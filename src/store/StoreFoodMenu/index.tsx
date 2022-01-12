import { makeAutoObservable } from 'mobx'

import { arrayCategoriesItem, listKindOfFoodByTime } from './db'

class StoreFoodMenu {
  listKindOfFoodByTime: typeof listKindOfFoodByTime
  arrayCategoriesItem: typeof arrayCategoriesItem

  constructor() {
    this.listKindOfFoodByTime = listKindOfFoodByTime
    this.arrayCategoriesItem = arrayCategoriesItem
    makeAutoObservable(this)
  }
}

export const storeFoodMenu = new StoreFoodMenu()
