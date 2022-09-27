import { createStore, IModuleStore } from 'redux-dynamic-modules'
import { getSagaExtension } from 'redux-dynamic-modules-saga'

import concatenateReducers from 'utils/redux/concatenate-reducers'

import getActionsEmitterExtension from './extensions/actions-emitter'
import getReduxFlipperExtension from './extensions/redux-flipper'
import { getRootModule } from './modules'
import getErrorHandlerExtension from './extensions/error-handler'
import { MainState } from './types'
import { combineReducers } from 'redux'

const sagaContext = {}

const store: IModuleStore<MainState> = createStore(
    {
        initialState: {},
        enhancers: [],
        extensions: [
            getSagaExtension(sagaContext),
            getActionsEmitterExtension(),
            getReduxFlipperExtension(),
            getErrorHandlerExtension(),
        ],
        advancedCombineReducers: (allReducers) => {
            const { root, ...reducers } = allReducers as unknown as {
                root: RootState
            }
            return concatenateReducers([root, combineReducers(reducers)])
        },
    },
    getRootModule(),
)

export default store
