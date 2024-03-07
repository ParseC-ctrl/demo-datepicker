import { RecipeVariantProps, cx } from "@/styled-system/css";
import { button } from "@/styled-system/recipes";
import { forwardRef } from "react";
import Image from "next/image";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { IconButtonClasses } from "./IconButton.style";
type ButtonElementProps = ButtonHTMLAttributes<HTMLButtonElement>;
type RecipeProps = RecipeVariantProps<typeof button>;
type ButtonRecipeProps = RecipeProps &
  Omit<ButtonElementProps, keyof RecipeProps>;

interface IProps {
  icon?: string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export const IconButton = forwardRef<HTMLButtonElement, ButtonRecipeProps & IProps>(
  ({ children, className, size, pos, variant, icon, ...props }, ref) => {
    const classesBtn = button({ variant, size, pos });
    return (
      <div className={icon ? cx(IconButtonClasses.iconCalendar, className) : className}>
        <button
          className={`${classesBtn} ${className ?? ""}`}
          ref={ref}
          {...props}
        >
          {children}
        </button>
        {icon && (
          <Image className={IconButtonClasses.Icon} src={icon} alt="iconButton"></Image>
        )}
      </div>
    );
  }
);

IconButton.displayName = "IconButton";
