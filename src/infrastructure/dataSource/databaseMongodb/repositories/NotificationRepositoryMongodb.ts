import { Collection, ObjectId } from 'mongodb'
import { database } from '../mongodb/connector'
import { logger } from '@/adapters/logger'
import { NotificationRepositoryInterface } from '@/adapters/database/NotificationRepository'

type ResponseRegister = { id: string }

export class NotificationRepositoryMongodb
  implements NotificationRepositoryInterface
{
  NotificationModel: Collection

  constructor() {
    this.NotificationModel = database.collection('notification')
  }

  public async findById<T>(id: string): Promise<T> {
    return (await this.NotificationModel.findOne({ id })) as unknown as T
  }

  public async create<T>(model: T): Promise<{ id: string }> {
    try {
      const notificationSaved = (await this.NotificationModel.insertOne(
        model as Document,
      )) as unknown as T
      const userSavedResponse = notificationSaved as unknown as ResponseRegister
      return { id: userSavedResponse.id }
    } catch (err) {
      logger.error(err + '')
      return { id: '' }
    }
  }

  public async update<T>(id: string, model: T): Promise<{ id: string }> {
    try {
      const userSaved = (await this.NotificationModel.updateOne(
        { _id: new ObjectId(id) },
        { $set: model },
      )) as unknown as T
      const userSavedResponse = userSaved as unknown as ResponseRegister
      return { id: userSavedResponse.id }
    } catch (err) {
      return { id: '' }
    }
  }
}
