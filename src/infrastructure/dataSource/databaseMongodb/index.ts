import { setRepositoryNotification } from '@/adapters/database'
import { run } from './mongodb/connector'
import { NotificationRepositoryMongodb } from './repositories/NotificationRepositoryMongodb'

async function useDatabase(): Promise<void> {
  const urlConnection = process.env.MONGO_CONNECTION
  if (!urlConnection) throw 'Not exist url connection to mongoDB'

  await run(urlConnection)
  setRepositoryNotification(new NotificationRepositoryMongodb())
}

async function start() {
  await useDatabase()
}

start()
