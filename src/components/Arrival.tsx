import * as React from "react";
import { SVGProps } from "react";
import styled from "@emotion/styled";
import Svg from "../Svg";

const BaseComponent = ({
  size,
  title,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number,
  title: string,
}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      height={size}
      width={size}
      title={title}
      fill="currentColor"
      {...props}
    >
      {!!title && <title>{title}</title>}
      <path d="M2.5 19.5h19v2h-19v-2zm7.2-5.7L14 15l5.3 1.4c.8.2 1.6-.3 1.8-1.1.2-.8-.3-1.6-1.1-1.8l-5.3-1.4-2.8-9-1.8-.6v8.3l-5-1.3-.9-2.4-1.4-.4v5.2l1.6.4 5.3 1.5z" />
    </Svg>
  );
};

const SvgArrival = styled(BaseComponent)`
  outline: none;
`;
SvgArrival.defaultProps = {
  size: 24,
};
export default SvgArrival;
