import { serverHTTP } from '@/adapters/serverHTTP'

import { createCaseUse } from '@/application/useCases/create'
import { updateCaseUse } from '@/application/useCases/update'
import { findByIdCaseUse } from '@/application/useCases/findById'
import { findQueryCaseUse } from '@/application/useCases/findQuery'
import { deleteCaseUse } from '@/application/useCases/delete'

export function startApp () {
  serverHTTP.add('create', {
    useCase: createCaseUse,
    route: '/api/data/:name',
    method: 'POST'
  })

  serverHTTP.add('update', {
    useCase: updateCaseUse,
    route: '/api/data/:name/:id',
    method: 'PUT'
  })

  serverHTTP.add('findById', {
    useCase: findByIdCaseUse,
    route: '/api/data/:name/:id',
    method: 'GET'
  })

  serverHTTP.add('find', {
    useCase: findQueryCaseUse,
    route: '/api/data/:name/show',
    method: 'GET'
  })

  serverHTTP.add('delete', {
    useCase: deleteCaseUse,
    route: '/api/data/:name/:id',
    method: 'DELETE'
  })

  serverHTTP.run()
}
