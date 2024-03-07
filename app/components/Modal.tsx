import { Dispatch, ReactNode, SetStateAction } from "react";
import Image from "next/image";
import closeBtn from "@/svgs/closeIcon.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalClasses } from "./Modal.style";
interface IProps {
  openDatePicker: boolean;
  setIsOpenDatePicker: Dispatch<SetStateAction<boolean>>;
  top?: number;
  TriggerElement: ReactNode;
  ContentElement: ReactNode;
}
export default function Modal({
  TriggerElement,
  ContentElement,
  top = 10,
  openDatePicker,
  setIsOpenDatePicker,
}: IProps) {
  return (
    <Dialog.Root
      open={openDatePicker}
      onOpenChange={() => {
        setIsOpenDatePicker(!openDatePicker);
      }}
    >
      <Dialog.Trigger asChild>{TriggerElement}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={ModalClasses.modalOverlay}></Dialog.Overlay>
        <Dialog.Content
          style={{ top: `${top}%` }}
          className={ModalClasses.modalContent}
          asChild
        >
          <div>
            {ContentElement}
            <Dialog.Close asChild>
              <button className={ModalClasses.closeModalBtn}>
                <Image src={closeBtn} alt="close"></Image>
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
