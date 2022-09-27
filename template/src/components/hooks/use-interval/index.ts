import { noop } from 'lodash'
import * as React from 'react'

function useInterval(callback: () => void, delay: number): void {
    const savedCallback = React.useRef<() => void>(noop)

    React.useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    React.useEffect(() => {
        function tick(): void {
            savedCallback.current()
        }
        if (delay !== null) {
            const id = setInterval(tick, delay)
            return (): void => clearInterval(id)
        }
    }, [delay])
}

export default useInterval
