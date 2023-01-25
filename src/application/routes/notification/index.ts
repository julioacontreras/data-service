import { serverHTTP } from '@/adapters/serverHTTP'

import { createCaseUse } from '@/application/useCases/create'
import { updateCaseUse } from '@/application/useCases/update'

export function useRoutesNotification() {
  serverHTTP.add('create', {
    useCase: createCaseUse,
    route: '/api/notification/create',
  })

  serverHTTP.add('update', {
    useCase: updateCaseUse,
    route: '/api/notification/update',
  })
}
