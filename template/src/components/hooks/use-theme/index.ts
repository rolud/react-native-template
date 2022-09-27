import { useTheme as StyledComponentsUseTheme } from 'styled-components/native'

const useTheme = StyledComponentsUseTheme as () => Theme

export default useTheme
