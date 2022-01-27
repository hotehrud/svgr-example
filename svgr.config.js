const dynamicTitlePlugin = require("./plugins/svg-dynamic-title-plugin");

const template = ({ componentName, jsx, props, imports, exports }, { tpl }) =>
  tpl`${imports}

const ${componentName} = ({
  size,
  title,
  ...props
}: SVGProps\<
    SVGSVGElement> & 
    {size?: number, title: string }) => {
  return (${jsx})
}

${componentName}.defaultProps = {
  size: 24
}

export default ${componentName}`;

module.exports = {
  template,
  jsx: {
    babelConfig: {
      plugins: [dynamicTitlePlugin],
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
