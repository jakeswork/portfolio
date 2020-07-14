import React, { FC, ReactElement, DetailedHTMLProps, HTMLAttributes } from "react";
import { Classes } from "jss";
import classNames from "classnames";

export interface IButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  classes: Classes<"button" | "flat" | "secondary" | "buttonIcon" | "circle">;
  secondary?: boolean;
  flat?: boolean;
  icon?: ReactElement;
  success?: boolean;
  danger?: boolean;
  disabled?: boolean;
  circle?: boolean;
  tooltip?: string;
}

const Button: FC<IButtonProps> = ({
  classes = {},
  secondary = false,
  flat = false,
  children = null,
  icon = null,
  success = false,
  danger = false,
  disabled = false,
  circle = false,
  className = "",
  tooltip = "",
  ...props
}) => {
  let cn = classes.button;

  if (secondary) cn = classes.secondary;

  if (flat) cn = classes.flat;

  if (circle) return (
    <>
      <button
        disabled={disabled || success}
        {...props}
        className={classNames(cn, classes.circle)}
        data-tip={tooltip}
      >
        { icon }
      </button>
    </>
  )

  return (
    <button disabled={disabled || success} {...props} className={classNames(cn, className)}>
      { danger ? "Error" : success ? "Success!" : children }
      { icon && React.cloneElement(icon, { className: classes.buttonIcon }) }
    </button>
  );
};

export default Button;
