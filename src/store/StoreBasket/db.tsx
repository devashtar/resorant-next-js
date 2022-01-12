import { IDelivery, IKindPayment } from '@store/types'

export const listDeliveries = [
  {
    id: 1,
    name: 'Dine In',
    access: true,
    active: true
  },
  {
    id: 2,
    name: 'To Go',
    access: true,
    active: false
  },
  {
    id: 3,
    name: 'Delivery',
    access: true,
    active: false
  }
] as Array<IDelivery>

export const listPayments = [
  {
    id: 1,
    name: 'Credit Card',
    access: true,
    active: true
  },
  {
    id: 2,
    name: 'Paypal',
    access: true,
    active: false
  },
  {
    id: 3,
    name: 'Cash',
    access: true,
    active: false
  }
] as Array<IKindPayment>
