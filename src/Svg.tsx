import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { space, width } from 'styled-system'
import themeGet from '@styled-system/theme-get'

const getPaletteColor = (shade: string, color?: string) => (props: any) => {
  return (
    themeGet(`palette.${color || props.color}.${shade}`)(props) ||
    themeGet(`palette.${color || props.color}`)(props) ||
    themeGet(`colors.${color || props.color}`)(props) ||
    color
  )
}

const color = (props: any) => {
  if (props.color) {
    return css`
      color: ${getPaletteColor('base')(props)};
    `
  }

  return null
}

const bg = (props: any) => {
  if (props.bg) {
    return css`
      background-color: ${getPaletteColor('base', props.bg)(props)};
    `
  }

  return null
}

const Svg = styled('svg')<{ title: string }>`
  flex: none;
  line-height: 1;

  ${space}
  ${width}
  ${color}
  ${bg}
`

export default Svg
