import { HTTPReturn } from '@/adapters/serverHTTP/types'
import { statusHTTP } from '@/adapters/serverHTTP'
import { NotificationRepository } from '@/adapters/database'
import { NotificationType } from '@/domains/types/NotificationType'
import { NotificationEntity } from '@/domains/entities/NotificationEntity'

type NotificationRequest = {
  body: NotificationType
}

export const updateCaseUse = async (settings: unknown): Promise<HTTPReturn> => {
  const dataRequest = settings as NotificationRequest

  // TODO: validate request data

  const notification = new NotificationEntity(dataRequest.body)
  const data = notification.getData()
  if (!data._id) {
    throw 'no_id'
  }
  const id = data._id
  delete data._id
  NotificationRepository.update<NotificationType>(id, data)

  return {
    response: {},
    code: statusHTTP.OK,
  }
}
