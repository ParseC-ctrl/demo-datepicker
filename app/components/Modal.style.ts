import { css } from "@/root/styled-system/css";

export const ModalClasses = {
  modalOverlay: css({
    pos: "fixed",
    bgColor: "#000",
    inset: 0,
    opacity: "0.5",
    "&[data-state='open']": {
      animation: "overlayShow 250ms ease-in",
    },
    "&[data-state='closed']": {
      animation: "overlayHide 250ms ease-out",
    },
  }),
  modalContent: css({
    backgroundColor: "white",
    borderRadius: "1rem",
    position: "fixed",
    top: "10%",
    left: "50%",
    transform: "translate(-50%, 0%)",
    minW: "300px",
    "&[data-state='open']": {
      animation: "contentShow 250ms ease-in",
    },
    "&[data-state='closed']": {
      animation: "contentHide 250ms ease-out",
    },
  }),
  closeModalBtn: css({
    pos: "absolute",
    top: "15px",
    right: "15px",
    w: "2rem",
    h: "2rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4rem",
    cursor: "pointer",
    zIndex: "9999",
    "& img": {
      w: "1.5rem!",
      h: "auto",
    },
  }),
};
