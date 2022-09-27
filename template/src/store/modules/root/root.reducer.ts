/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import getTypedReducerMap from 'utils/redux/get-typed-reducer-map'
import _ from 'lodash'
import RootActions, { initialState, STATE_KEY } from './root.consts'

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(RootActions.CLEAN, (state, action: PayloadAction<string>) => {
        const [key, path] = action.payload.replace('.', ' ').split(' ')
        //@ts-ignore
        _.set(state[key as keyof RootState], path, undefined)
    })
})

export const reducerMap = getTypedReducerMap<RootState>({
    [STATE_KEY]: reducer,
})

export default reducer
