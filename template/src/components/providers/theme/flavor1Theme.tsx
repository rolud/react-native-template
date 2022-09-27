const colors = {
    background: {
        '50': '#FDFFFF',
        '100': '#E2E2E2',
        '200': '#E8F0EF',
        '500': '#919C99',
    },
    primary: {
        '50': '#BDCECC',
        '100': '#A9E0D4',
        '400': '#5FA69E',
        '600': '#4A887F',
        '900': '#314D46',
        a700: '#5DC0AD',
        light: '#A9E0D4',
        main: '#5DC0AD',
        dark: '#314D46',
    },
    success: {
        '100': '#DBE8DB',
        '300': '#A1DEA1',
        '700': '#69C469',
        '900': '#589758',
    },
    info: {
        '300': '#8ABCFF',
        '700': '#327FE8',
    },
    warning: {
        '100': '#F2EBC4',
        '300': '#F0CC87',
        '700': '#E8B758',
        '900': '#E8B758',
    },
    danger: {
        '100': '#E7D4D4',
        '500': '#F08C8C',
        '800': '#E57777',
        '900': '#BA7171',
    },
    base: {
        white: '#FFFFFF',
        black: '#000000',
    },
    text: {
        '100': '#919C99',
        '900': '#314D46',
        main: '#314D46',
        light: '#919C99',
    },
    iconDefaultColor: '#314D46',
    divider: '#E4EBEA',
}

const typography = {
    h1: {
        size: 32,
        weight: '700',
        color: colors.text.main,
        family: 'Inter',
        italic: false,
    },
    h2: {
        size: 24,
        weight: '700',
        color: colors.text.main,
        family: 'Inter',
        italic: false,
    },
    h3: {
        size: 18,
        weight: '700',
        color: colors.text.main,
        family: 'Inter',
        italic: false,
    },
    h4: {
        size: 16,
        weight: '400',
        color: colors.text.main,
        family: 'Inter',
        italic: false,
    },
    h5: {
        size: 14,
        weight: '400',
        color: colors.text.main,
        family: 'Inter',
        italic: false,
    },
    p1: {
        size: 16,
        weight: '400',
        color: colors.text.main,
        family: 'Inter',
        italic: false,
    },
    p2: {
        size: 14,
        weight: '400',
        color: colors.text.main,
        family: 'Inter',
        italic: false,
    },
    nav: {
        size: 10,
        weight: '500',
        color: colors.text.main,
        family: 'Inter',
        italic: false,
    },
    label: {
        size: 12,
        weight: '400',
        color: colors.text.main,
        family: 'Inter',
        italic: false,
    },
    input: {
        size: 16,
        weight: '400',
        color: colors.text.main,
        family: 'Inter',
        italic: false,
    },
    helper: {
        size: 12,
        weight: '400',
        color: colors.text.main,
        family: 'Inter',
        italic: false,
    },
    caption: {
        size: 12,
        weight: '400',
        color: colors.text.main,
        family: 'Inter',
        italic: false,
    },
    tooltip: {
        size: 10,
        weight: '400',
        color: colors.text.main,
        family: 'Inter',
        italic: false,
    },
}

const sizes = {
    spacings: {
        xs: 4,
        s: 8,
        m: 16,
        l: 24,
        xl: 28,
        xxl: 32,
    },
    tabBarHeight: 50,
    navBarSpaceHeight: 70,
    headerHeight: 60,
    borderRadius: {
        extraBig: 30,
        big: 16,
        normal: 10,
        small: 8,
        extraSmall: 5,
    },
}

const isDark = false

const theme: Theme = {
    colors,
    typography,
    sizes,
    isDark,
}

export default theme
