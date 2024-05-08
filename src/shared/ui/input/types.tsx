import {
  CSSProperties,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

export type BaseProp = {
  name: string;
  label: string;
  label_style?: CSSProperties;
  container_style?: CSSProperties;
};

export type InputProps = BaseProp &
  InputHTMLAttributes<HTMLInputElement> & { variant: "input" };

export type TextAreaProps = BaseProp &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { variant: "textarea" };

export type SelectProps = BaseProp &
  SelectHTMLAttributes<HTMLSelectElement> & {
    options: Array<[string, string]>;
    variant: "select";
  };