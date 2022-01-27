const dynamicTitlePlugin = require("./plugins/svg-dynamic-title-plugin");
const replaceSvgPlugin = require('./plugins/svg-replace-plugin')

const template = ({ componentName, jsx, props, imports, exports }, { tpl }) =>
  tpl`${imports}
import styled from '@emotion/styled'
import Svg from '../Svg'

const BaseComponent = ({
  size,
  title,
  ...props
}: SVGProps\<
    SVGSVGElement> & 
    {size?: number, title: string }) => {
  return (${jsx})
}

const ${componentName} = styled(BaseComponent)\`
  outline: none;
\`

${componentName}.defaultProps = {
  size: 24
}

export default ${componentName}`;

module.exports = {
  template,
  jsx: {
    babelConfig: {
      plugins: [dynamicTitlePlugin, replaceSvgPlugin],
    },
  },
  svgProps: {
    viewBox: "0 0 24 24",
    height: "{size}",
    width: "{size}",
    title: "{title}",
    fill: "currentColor",
  }
};
