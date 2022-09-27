import * as React from 'react'
import { Provider } from 'react-redux'

import store from 'store'

interface StoreProviderProps {
    children: React.ReactNode
}

const StoreProvider = ({ children }: StoreProviderProps): JSX.Element => {
    return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
