import { ActionType } from './ActionType'
import { OwnerType } from './OwnerType'

export type NotificationType = {
  _id?: string
  title: string
  startAt: string
  message: string
  action: ActionType
  owner: OwnerType
}
