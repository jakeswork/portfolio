import React, { FC, ReactChildren, ReactElement } from "react";
import { Classes } from "jss";

export interface IButtonProps {
  classes: Classes<"button" | "flat" | "secondary" | "buttonIcon">;
  secondary?: boolean;
  flat?: boolean;
  children?: ReactChildren | string;
  icon?: ReactElement;
  success?: boolean;
  danger?: boolean;
  disabled?: boolean;
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
  ...props
}) => {
  let className = classes.button;

  if (secondary) className = classes.secondary;

  if (flat) className = classes.flat;

  return (
    <button disabled={disabled || success} {...props} className={className}>
      { danger ? "Error" : success ? "Success!" : children }
      { icon && React.cloneElement(icon, { className: classes.buttonIcon }) }
    </button>
  );
};

export default Button;
