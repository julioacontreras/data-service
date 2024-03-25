import { HTTPReturn } from '@/adapters/serverHTTP/types'
import { statusHTTP } from '@/adapters/serverHTTP'
import { Repository } from '@/adapters/database'

type Request = {
  params: {
    id: string,
    name: string
  }
}

export const deleteCaseUse = async (request: Request): Promise<HTTPReturn> => {
  const repository = new Repository()
  repository.setModelName(request.params.name)
  await repository.delete(request.params.id)
  return {
    response: {},
    code: statusHTTP.OK,
  }
}
