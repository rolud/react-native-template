import { Action as ReduxAction } from 'redux'

interface MainState {
    loading: boolean
    error?: string
}

type Action<T extends string = string> = ActionWithoutPayload<T> | ActionWithPayload<unknown, T>

type ActionWithoutPayload<T extends string = string> = ReduxAction<T>

interface ActionWithPayload<P, T extends string = string> extends ReduxAction<T> {
    payload: P
}
