import { HTTPReturn } from '@/adapters/serverHTTP/types'
import { statusHTTP } from '@/adapters/serverHTTP'
import { Repository } from '@/adapters/database'

type Request = {
  params: {
    id: string,
    name: string
  }
}

export const findByIdCaseUse = async (
  request: Request,
): Promise<HTTPReturn> => {
  const repository = new Repository()
  repository.setModelName(request.params.name)
  const data = await repository.findById(request.params.id)
  return {
    response: data,
    code: statusHTTP.OK,
  }
}
