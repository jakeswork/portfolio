import React, { FC, ReactElement, DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "classnames";
import { Classes } from "jss";

export interface IPillProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  classes: Classes<"root" | "icon">;
  icon?: ReactElement;
  background: string;
}

const Pill: FC<IPillProps> = ({
  classes = {},
  children = null,
  icon = null,
  className = ''
}) => (
  <div className={classNames(classes.root, className)}>
    { children }
    { icon && React.cloneElement(icon, { className: classes.icon }) }
  </div>
);

export default Pill;
