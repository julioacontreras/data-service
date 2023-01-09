import { serverHTTP } from '@/adapters/serverHTTP'

import { createCaseUse } from '@/application/useCases/create'

export function useRoutesNotification() {
  serverHTTP.add('create', {
    useCase: createCaseUse,
    route: '/api/notification/create',
  })
}
