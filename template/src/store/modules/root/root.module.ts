import { ISagaModule } from 'redux-dynamic-modules-saga'

import { reducerMap } from './root.reducer'
import sagas from './root.sagas'
import { STATE_KEY } from './root.consts'

const getRootModule = (): ISagaModule<RootState> => {
    return {
        id: STATE_KEY,
        reducerMap,
        sagas: [sagas],
    }
}

export default getRootModule
