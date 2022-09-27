const completeFontFamily = ({ weight, italic }: { weight: string; italic: boolean }): string => {
    let fontFamilyAddition = ''

    switch (weight) {
        case '100':
            fontFamilyAddition += 'Thin'
            break
        case '200':
            fontFamilyAddition += 'ExtraLight'
            break
        case '300':
            fontFamilyAddition += 'Light'
            break
        case '400':
            fontFamilyAddition += 'Regular'
            break
        case '500':
            fontFamilyAddition += 'Medium'
            break
        case '600':
            fontFamilyAddition += 'SemiBold'
            break
        case '700':
            fontFamilyAddition += 'Bold'
            break
        case '800':
            fontFamilyAddition += 'ExtraBold'
            break
        case '900':
            fontFamilyAddition += 'Black'
            break

        default:
            break
    }

    if (italic) {
        fontFamilyAddition += 'Italic'
    }

    return fontFamilyAddition
}

export default completeFontFamily
