import { HTTPReturn } from '@/adapters/serverHTTP/types'
import { statusHTTP } from '@/adapters/serverHTTP'
import { NotificationRepository } from '@/adapters/database'
import { NotificationType } from '@/domains/types/NotificationType'
import { NotificationEntity } from '@/domains/entities/NotificationEntity'
import Joi from 'joi'

type NotificationRequest = {
  body: NotificationType
}

const schema = Joi.object({
  id: Joi.string().alphanum().required(),
})

function isValidate(data: NotificationType) {
  return schema.validate(data)
}

export const deleteCaseUse = async (settings: unknown): Promise<HTTPReturn> => {
  const dataRequest = settings as NotificationRequest

  // TODO: validate request data

  const notification = new NotificationEntity(dataRequest.body)
  const data = notification.getData()

  isValidate(data)

  if (!data.id) {
    throw new Error('no_id')
  }
  const id = data?.id
  delete data?.id
  await NotificationRepository.delete<NotificationType>(id)

  return {
    response: {},
    code: statusHTTP.OK,
  }
}
