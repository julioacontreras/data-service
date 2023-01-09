import { HTTPReturn } from '@/adapters/serverHTTP/types'
import { statusHTTP } from '@/adapters/serverHTTP'
import { NotificationRepository } from '@/adapters/database'
import { NotificationType } from '@/domains/types/NotificationType'
import { NotificationEntity } from '@/domains/entities/NotificationEntity'

type NotificationRequest = {
  body: NotificationType
}

export const createCaseUse = async (settings: unknown): Promise<HTTPReturn> => {
  const dataRequest = settings as NotificationRequest

  // TODO: validate request data

  const notification = new NotificationEntity(dataRequest.body)

  NotificationRepository.create<NotificationType>(notification.getData())

  return {
    response: {},
    code: statusHTTP.OK,
  }
}
