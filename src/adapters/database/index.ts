import { NotificationRepositoryInterface } from './NotificationRepository'

export let NotificationRepository: NotificationRepositoryInterface

export function setRepositoryNotification(
  newNotificationRepository: NotificationRepositoryInterface,
) {
  NotificationRepository = newNotificationRepository
}
