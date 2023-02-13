import { HTTPReturn } from '@/adapters/serverHTTP/types'
import { statusHTTP } from '@/adapters/serverHTTP'
import { NotificationRepository } from '@/adapters/database'
import { NotificationType } from '@/domains/types/NotificationType'

type NotificationRequest = {
  body: {
    userId: string
  }
}

export const findByUserIdCaseUse = async (
  settings: unknown,
): Promise<HTTPReturn> => {
  const dataRequest = settings as NotificationRequest

  const userId = dataRequest.body?.userId
  const notifications =
    await NotificationRepository.findByUserId<NotificationType>(userId)

  return {
    response: { collection: notifications },
    code: statusHTTP.OK,
  }
}
