import * as React from 'react'
import LayoutProvider, { LayoutConfigs } from 'components/providers/layout'

const withLayout = <P extends object>(
    Component: React.ComponentType<P>,
    configs?: LayoutConfigs,
): ((p: P) => JSX.Element) => {
    function WithLayoutInner(props: P): JSX.Element {
        return (
            <LayoutProvider screenName={Component.name} {...configs}>
                <Component {...props} />
            </LayoutProvider>
        )
    }

    Object.defineProperty(WithLayoutInner, 'name', { value: Component.name, writable: false })

    return WithLayoutInner
}

export default withLayout
