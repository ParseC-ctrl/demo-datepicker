import { Dispatch, ReactNode, SetStateAction } from "react";
import ReactDatePicker, {
  ReactDatePickerCustomHeaderProps,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
import { getFormatDate, getMonth, getYears } from "@/utils/Date";
import mouthprev from "@/svgs/mouth-prev.svg";
import mouthnext from "@/svgs/mouth-next.svg";
import Image from "next/image";
import { IconButton } from "../IconButton";
import { SelectDateClasses } from "./SelectDate.style";
const FUTUREDATE_LIMIT = 6;
const CHANGE_MONTH = 1;

interface IProps {
  startDate: Date;
  setStartDate: Dispatch<SetStateAction<Date>>;
  openDatePicker: boolean;
  setIsOpenDatePicker: Dispatch<SetStateAction<boolean>>;
}

export default function SelectDate({
  startDate,
  setStartDate,
  setIsOpenDatePicker,
  openDatePicker,
}: IProps) {
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + FUTUREDATE_LIMIT);

  const filterDate = (date: Date) => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return date >= now && date <= maxDate;
  };

  const CalendarContainer = ({ children }: { children: ReactNode }) => {
    return <>{children}</>;
  };

  const CustomHeader = ({
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }: ReactDatePickerCustomHeaderProps) => {
    return (
      <div className={SelectDateClasses.customerHeader}>
        <button
          onClick={() => {
            console.log(123);
            decreaseMonth();
            setStartDate((prevDate) => {
              const newDate = new Date(prevDate);
              newDate.setMonth(prevDate.getMonth() - CHANGE_MONTH);
              return newDate;
            });
          }}
          disabled={prevMonthButtonDisabled}
        >
          <Image src={mouthprev} alt="mouthprew"></Image>
        </button>
        <span>{getMonth(startDate)}</span>
        <span>{getYears(startDate)}</span>
        <button
          onClick={() => {
            increaseMonth();
            setStartDate((prevDate) => {
              const newDate = new Date(prevDate);
              newDate.setMonth(prevDate.getMonth() + CHANGE_MONTH);
              return newDate;
            });
          }}
          disabled={nextMonthButtonDisabled}
        >
          <Image src={mouthnext} alt="mouthnext"></Image>
        </button>
      </div>
    );
  };

  return (
    <div className={SelectDateClasses.modalContent}>
      <div className={SelectDateClasses.dateDisplay}>
        <span>{startDate.getFullYear()}</span>
        <span style={{ paddingTop: "0.625rem" }}>
          {getFormatDate(startDate)}
        </span>
      </div>
      <div className={SelectDateClasses.datePicker}>
        <ReactDatePicker
          inline
          selected={startDate}
          calendarContainer={CalendarContainer}
          renderCustomHeader={CustomHeader}
          onChange={(date) => setStartDate(date!)}
          filterDate={filterDate}
        ></ReactDatePicker>
        <IconButton
          variant="dark"
          pos="center"
          className={SelectDateClasses.linkButton}
          onClick={() => {
            setIsOpenDatePicker(!openDatePicker);
            setStartDate(startDate);
          }}
        >
          OK
        </IconButton>
      </div>
    </div>
  );
}
