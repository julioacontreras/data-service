import { InvitedType } from './InvitedType'
import { OwnerType } from './OwnerType'

export type EventType = {
  _id: string
  title: string
  startAt: string
  finishAt: string
  direction: string
  owner: OwnerType
  inviteds: InvitedType[]
}
