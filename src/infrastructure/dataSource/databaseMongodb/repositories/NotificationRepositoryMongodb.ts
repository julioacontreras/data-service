import { Collection, ObjectId } from 'mongodb'
import { database } from '../mongodb/connector'
import { logger } from '@/adapters/logger'
import { NotificationRepositoryInterface } from '@/adapters/database/NotificationRepository'

type ResponseCreate = { insertedId: string }

export class NotificationRepositoryMongodb
  implements NotificationRepositoryInterface
{
  NotificationModel: Collection

  constructor() {
    this.NotificationModel = database.collection('notification')
  }

  public async findById<T>(id: string): Promise<T> {
    return (await this.NotificationModel.findOne({
      _id: new ObjectId(id),
    })) as unknown as T
  }

  public async create<T>(model: T): Promise<{ id: string }> {
    try {
      const userSavedResponse = (await this.NotificationModel.insertOne(
        model as Document,
      )) as unknown as ResponseCreate
      return { id: userSavedResponse.insertedId.toString() }
    } catch (err) {
      logger.error(err + '')
      return { id: '' }
    }
  }

  public async update<T>(id: string, model: T): Promise<void> {
    try {
      await this.NotificationModel.updateOne(
        { _id: new ObjectId(id) },
        { $set: model },
      )
    } catch (err) {
      logger.error(err + '')
    }
  }

  public async findByUserId<T>(userId: string): Promise<T[]> {
    return (await this.NotificationModel.find({
      'owner.id': userId,
    })) as unknown as T[]
  }

  public async delete(id: string): Promise<void> {
    await this.NotificationModel.deleteOne({
      _id: new ObjectId(id),
    })
  }
}
