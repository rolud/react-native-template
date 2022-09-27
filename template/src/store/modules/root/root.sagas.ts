import { ActionWithPayload } from 'store/types'
import { takeEvery, put } from 'typed-redux-saga/macro'
import RootActions from './root.consts'

function* globalErrorHandlerSaga(action: ActionWithPayload<unknown>): Generator {
    if (action.type.includes('_FAIL')) {
        yield console.log('todo')

        //         // todo:
        //     if (
        //         action.payload !== undefined &&
        //         action.payload.data !== undefined &&
        //         action.payload.data.code === 'REFRESH_TOKEN_EXPIRED'
        //     ) {
        //         // yield put({ type: AuthActions.FORCE_RE_LOGIN })
        //     }
    }
}

function* debugNavigationSaga(action: ActionWithPayload<INavigatePayload>): Generator {
    yield put({ type: RootActions.NAVIGATE, payload: action.payload })
}

function* mySaga(): Generator {
    yield takeEvery('*', globalErrorHandlerSaga)
    yield takeEvery(RootActions.DEBUG_NAVIGATE, debugNavigationSaga)
}

export default mySaga
