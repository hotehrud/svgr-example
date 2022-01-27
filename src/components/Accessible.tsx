import * as React from "react";
import { SVGProps } from "react";

const SvgAccessible = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M19 13v-2c-1.5 0-3.1-.8-4.1-1.8l-1.3-1.5c-.1-.1-.3-.3-.6-.4-.3-.2-.8-.3-1.2-.3-1 .1-1.8 1-1.8 2.1V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.4c1.3 1 3.2 1.9 5 1.9zm-6.2 5h2.1c-.5 2.3-2.5 4-4.9 4-2.8 0-5-2.2-5-5 0-2.4 1.7-4.4 4-4.9v2.1c-1.2.4-2 1.5-2 2.8 0 1.7 1.3 3 3 3 1.3 0 2.4-.8 2.8-2zM12 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </svg>
);

export default SvgAccessible;
