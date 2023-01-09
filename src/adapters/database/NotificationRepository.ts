export interface NotificationRepositoryInterface {
  findById: <T>(id: string) => Promise<T>
  create: <T>(model: T) => Promise<{ id: string }>
  update: <T>(id: string, model: T) => Promise<{ id: string }>
}
