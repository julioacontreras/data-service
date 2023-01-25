import { NotificationType } from '@/domains/types/NotificationType'

export class NotificationEntity {
  notification: NotificationType = {
    title: '',
    startAt: '',
    message: '',
    action: {
      type: '',
    },
    owner: {
      id: '',
      name: '',
    },
  }

  constructor(notification: NotificationType) {
    this.notification.id = notification.id
    this.notification.title = notification.title
    this.notification.startAt = notification.startAt
    this.notification.action = notification.action
    this.notification.message = notification.message
    this.notification.action = notification.action
    this.notification.owner = notification.owner
  }

  getData(): NotificationType {
    return this.notification
  }
}
