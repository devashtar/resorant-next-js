import { makeAutoObservable } from 'mobx'

interface IStateMenu {
  home?: boolean
  discount?: boolean
  dashboard?: boolean
  message?: boolean
  notification?: boolean
  setting?: boolean
}

class StoreNavMenu {
  activeItem: IStateMenu
  displayModal: boolean

  constructor() {
    this.activeItem = { home: true }
    this.displayModal = false
    makeAutoObservable(this)
  }

  setActiveItem(obj: IStateMenu) {
    this.activeItem = obj
  }

  switchDisplayModal() {
    this.displayModal = !this.displayModal
  }
}

export const storeNavMenu = new StoreNavMenu()
