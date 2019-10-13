import React, { FC, ReactElement, DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import classNames from "classnames";
import { Classes } from "jss";

export interface ILinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  classes: Classes<"root" | "icon">;
  to: string;
  icon?: ReactElement;
}

const Link: FC<ILinkProps> = ({
  classes = {},
  to = "",
  children = null,
  icon = null,
  className = ''
}) => (
  <a href={to} target="_blank" rel="noopener noreferrer" className={classNames(classes.root, className)}>
    { children }
    { icon && React.cloneElement(icon, { className: classes.icon }) }
  </a>
);

export default Link;
