import { IconButton } from "@/components/IconButton";
import { css } from "@/root/styled-system/css";
import calendarIcon from "@/svgs/calendarIcon.svg";
import calendarIconLight from "@/svgs/calendarIconLight.svg";
export default function ShowComps() {
  return (
    <div
      className={css({
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      })}
    >
      <IconButton variant="grey" size="sm" pos="begin" icon={calendarIcon}>
        Grey Button With Icon
      </IconButton>
      <IconButton variant="dark" size="sm" pos="begin" icon={calendarIconLight}>
        Dark Button With Icon
      </IconButton>
      <IconButton variant="grey" size="md" pos="center">
        Grey Button Center
      </IconButton>
      <IconButton variant="dark" size="md" pos="begin">
        Grey Button Begin
      </IconButton>
    </div>
  );
}
