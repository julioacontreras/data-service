import { HTTPReturn } from '@/adapters/serverHTTP/types'
import { statusHTTP } from '@/adapters/serverHTTP'
import { Repository } from '@/adapters/database'

type Request = {
  body: {
    query?: object,
    start?: object,
    limit?: object
  },
  params: {
    formularyName: string
  }
}

export const findQueryCaseUse = async (
  request: Request,
): Promise<HTTPReturn> => {
  const repository = new Repository()
  repository.setModelName(request.params.formularyName)
  const data = await repository.find(request.body?.query, request.body?.start, request.body?.limit)
  return {
    response: { collection: data },
    code: statusHTTP.OK,
  }
}
