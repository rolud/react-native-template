interface Theme {
    colors: Colors
    typography: Typography
    sizes: Sizes
    isDark: boolean
}

type AppTheme = 'light' | 'dark' | 'default'

interface Sizes {
    spacings: {
        xs: number
        s: number
        m: number
        l: number
        xl: number
        xxl: number
    }
    tabBarHeight: number
    navBarSpaceHeight: number
    headerHeight: number
    borderRadius: {
        extraBig: number
        big: number
        normal: number
        small: number
        extraSmall: number
    }
}

interface Color {
    '50'?: string
    '100'?: string
    '200'?: string
    '300'?: string
    '400'?: string
    '500'?: string
    '600'?: string
    '700'?: string
    '800'?: string
    '900'?: string
    a100?: string
    a200?: string
    a400?: string
    a700?: string
    dark?: string
    main?: string
    light?: string
}
interface Colors {
    background: Color
    primary: Color
    success: Color
    info: Color
    warning: Color
    danger: Color
    base: {
        white: string
        black: string
    }
    text: Color
    iconDefaultColor: string
    divider: string
}

interface Typography {
    h1: TypographyItem
    h2: TypographyItem
    h3: TypographyItem
    h4: TypographyItem
    h5: TypographyItem
    p1: TypographyItem
    p2: TypographyItem
    nav: TypographyItem
    label: TypographyItem
    input: TypographyItem
    helper: TypographyItem
    caption: TypographyItem
    tooltip: TypographyItem
}

interface TypographyItem {
    size: number
    weight: string
    color: string
    family: string
    italic: boolean
}
