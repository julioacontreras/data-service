import { HTTPReturn } from '@/adapters/serverHTTP/types'
import { statusHTTP } from '@/adapters/serverHTTP'
import { Repository } from '@/adapters/database'

type Request = {
  body: unknown,
  params: {
    id: string,
    name: string
  }
}

export const createCaseUse = async (request: Request): Promise<HTTPReturn> => {
  const repository = new Repository()
  repository.setModelName(request.params.name)
  const response = await repository.create(request.body)

  return {
    response,
    code: statusHTTP.OK,
  }
}
