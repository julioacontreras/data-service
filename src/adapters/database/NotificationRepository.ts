export interface NotificationRepositoryInterface {
  findById: <T>(id: string) => Promise<T>
  findByUserId: <T>(id: string) => Promise<T[]>
  delete: <T>(id: string) => Promise<void>
  create: <T>(model: T) => Promise<{ id: string }>
  update: <T>(id: string, model: T) => Promise<void>
}
