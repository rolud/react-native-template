export const mapFontWeight = (weight: string): string => {
    if (weight === 'black' || weight === '900') {
        return '900'
    }

    if (weight === 'extrabold' || weight === '800') {
        return '800'
    }

    if (weight === 'bold' || weight === '700') {
        return '700'
    }

    if (weight === 'semibold' || weight === '600') {
        return '600'
    }

    if (weight === 'medium' || weight === '500') {
        return '500'
    }

    if (weight === 'regular' || weight === '400') {
        return '400'
    }

    if (weight === 'light' || weight === '300') {
        return '300'
    }

    if (weight === 'extralight' || weight === '200') {
        return '200'
    }

    if (weight === 'thin' || weight === '100') {
        return '100'
    }

    return '400'
}
