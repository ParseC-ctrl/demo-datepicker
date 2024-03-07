import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "customer_link_btn",
  jsx: ["IconButton"],
  base: {
    display: "inline-flex",
    flexDir: "row",
    alignItems: "center",
    cursor: "pointer",
    w: "full",
    borderRadius: "4rem",
    minH: "3.625rem",
    textDecoration: "none",
    fontWeight: "400",
    transition: "all .15s ease-in",
  },
  variants: {
    size: {
      sm: {
        p: "0.625rem 1.25rem",
      },
      md: {
        p: "0.75rem 1.5rem",
      },
    },
    pos: {
      begin: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
    },
    variant: {
      grey: {
        bgColor: "#f7f5f4",
      },
      light: {
        boxShadow: "inset 0 0 0 2px #fff",
        color: "#fff",
      },
      dark: {
        backgroundColor: "#1c1a1a",
        color: "#fff",
      },
    },
  },
  defaultVariants: {
    variant: "grey",
    size: "sm",
    pos: "begin",
  },
});
