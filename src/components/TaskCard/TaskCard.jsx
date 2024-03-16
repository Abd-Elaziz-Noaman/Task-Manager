import { useState } from "react";
import { Avatar, Chip, IconButton, MenuItem, Stack } from "@mui/material";
import { ImAttachment } from "react-icons/im";
import { FiUpload } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";

import { MainContainer, MutedText, StatusSelectBox } from "./TaskCard.styled";
import { StyledIconButton } from "../../components/TasksAddition/TasksAddition.styled";

export default function TaskCard({ data, choices }) {
  const { description, items, qty, total, status } = data;
  const [taskStatus, setTaskStatus] = useState(status);

  const statusOnChangeHandler = (value) => {
    setTaskStatus(value);
  };
  return (
    <MainContainer>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <div>
          <p>{description}</p>
          <Stack direction="row" spacing={2}>
            <MutedText>Items</MutedText> {items}
            <MutedText>َQTY</MutedText> {qty}
            <MutedText>Total</MutedText> {total}
          </Stack>
        </div>
        <Stack direction="row" spacing={2} alignItems="center">
          <StatusSelectBox
            value={taskStatus}
            onChange={statusOnChangeHandler}
            displayEmpty
          >
            {choices.map((choice, index) => (
              <MenuItem key={index} value={choice}>
                {choice}
              </MenuItem>
            ))}
          </StatusSelectBox>
          <>
            <ImAttachment />
            17
          </>
          <StyledIconButton aria-label="move-up">
            <FiUpload />
          </StyledIconButton>
          <Chip
            icon={<MdAccessTime />}
            label="With Icon"
            color="default"
            sx={{ px: 2 }}
          />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Stack>
      </Stack>
    </MainContainer>
  );
}
