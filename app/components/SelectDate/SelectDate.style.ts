import { css } from "@/root/styled-system/css";

export const SelectDateClasses = {
  modalContent: css({
    display: "flex",
    flexDirection: "row",
    mdDown: {
      flexDirection: "column",
    },
  }),
  dateDisplay: css({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    bgColor: "#dfdad4",
    justifyContent: "center",
    fontWeight: 500,
    p: "20px 22px",
    minW: "300px",
    borderRadius: "1rem 0rem 0rem 1rem",
    mdDown: {
      borderRadius: "1rem 1rem 0 0",
    },
    "& span": {
      display: "block",
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1,
      color: "#1c1a1a",
      wordSpacing: "0",
    },
  }),

  datePicker: css({
    borderRadius: "0rem 1rem 1rem 0rem",
    bgColor: "#eae7e4",
    maxW: "423px",
    padding: "40px",
    mdDown: {
      borderRadius: "0 0 1rem 1rem",
    },
  }),

  customerHeader: css({
    display: "flex",
    margin: "0 auto",
    width: "280px",
    justifyContent: "space-between",
    "& img": {
      cursor: "pointer",
    },
    fontWeight: "bold",
  }),

  linkButton: css({
    width: "100%",
    cursor: "pointer",
    marginTop: "10px",
  }),
};
