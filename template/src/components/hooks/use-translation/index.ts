import { useTranslation as reactI18nextUseTranslation } from 'react-i18next'

const useTranslation = (): Translation => {
    const translation = reactI18nextUseTranslation()
    return translation
}

export default useTranslation
