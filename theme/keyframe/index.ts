import { defineKeyframes } from "@pandacss/dev";

export const keyframes = defineKeyframes({
  overlayShow: {
    "0%": { opacity: "0" },
    "100%": { opacity: "0.5" },
  },
  contentShow: {
    from: {
      opacity: "0",
      transform: "translate(-50%, 0%) scale(0.96)",
    },
    to: {
      opacity: "1",
      transform: "translate(-50%, 0%) scale(1)",
    },
  },
  overlayHide: {
    "0%": { opacity: "0.5" },
    "100%": { opacity: "0" },
  },
  contentHide: {
    from: {
      opacity: "1",
      transform: "translate(-50%, 0%) scale(1)",
    },
    to: {
      opacity: "0",
      transform: "translate(-50%, 0%) scale(0.96)",
    },
  },
});
