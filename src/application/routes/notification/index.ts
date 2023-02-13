import { serverHTTP } from '@/adapters/serverHTTP'

import { createCaseUse } from '@/application/useCases/create'
import { updateCaseUse } from '@/application/useCases/update'
import { findByIdCaseUse } from '@/application/useCases/findById'
import { findByUserIdCaseUse } from '@/application/useCases/findByUserId'
import { deleteCaseUse } from '@/application/useCases/delete'

export function useRoutesNotification() {
  serverHTTP.add('create', {
    useCase: createCaseUse,
    route: '/api/notification/create',
  })

  serverHTTP.add('update', {
    useCase: updateCaseUse,
    route: '/api/notification/update',
  })

  serverHTTP.add('findByIdCaseUse', {
    useCase: findByIdCaseUse,
    route: '/api/notification/detail',
  })

  serverHTTP.add('findByUserIdCaseUse', {
    useCase: findByUserIdCaseUse,
    route: '/api/notification/list',
  })

  serverHTTP.add('deleteCaseUse', {
    useCase: deleteCaseUse,
    route: '/api/notification/delete',
  })
}
