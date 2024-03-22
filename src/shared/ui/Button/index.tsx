import React, { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "outline";
}

export function Button({ children, ...props }: Props): React.ReactElement {
  const variants = { primary: "primary-btn", outline: "outline-btn" };
  const className = variants[props.variant];
  return (
    <button {...props} className={`${styles[className]} ${props.className}`}>
      {children}
    </button>
  );
}
