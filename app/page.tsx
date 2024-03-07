"use client";
import calendarIcon from "@/svgs/calendarIcon.svg";
import { IconButton } from "./components/IconButton";
import Modal from "./components/Modal";
import { getBookingFormatDate } from "./utils/Date";
import SelectDate from "./components/SelectDate/SelectDate";
import { useState } from "react";
export default function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const [openDatePicker, setIsOpenDatePicker] = useState(false);
  return (
    <div style={{ margin: "20px" }}>
      <Modal
        openDatePicker={openDatePicker}
        top={10}
        setIsOpenDatePicker={setIsOpenDatePicker}
        TriggerElement={
          <IconButton icon={calendarIcon}>
            {getBookingFormatDate(startDate)}
          </IconButton>
        }
        ContentElement={
          <SelectDate
            startDate={startDate}
            setStartDate={setStartDate}
            openDatePicker={openDatePicker}
            setIsOpenDatePicker={setIsOpenDatePicker}
          ></SelectDate>
        }
      ></Modal>
    </div>
  );
}
