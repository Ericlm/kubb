import type { Order } from '../models/ts/Order.ts'
import { faker } from '@faker-js/faker'

export function createOrderFaker(data?: Partial<Order>): Order {
  return {
    ...{
      id: faker.number.int({ min: 3, max: 100 }),
      petId: faker.number.int(),
      quantity: faker.number.int(),
      orderType: faker.helpers.arrayElement<any>(['foo', 'bar']),
      type: faker.string.alpha(),
      shipDate: faker.date.anytime().toISOString(),
      status: faker.helpers.arrayElement(['working', 'idle']) as any,
      http_status: faker.helpers.arrayElement<any>(['ok', 'not_found']),
      complete: faker.datatype.boolean(),
    },
    ...(data || {}),
  }
}
