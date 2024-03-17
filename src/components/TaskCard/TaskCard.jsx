import { useState, memo } from "react";
import { Avatar, Chip, MenuItem, Stack } from "@mui/material";
import { ImAttachment } from "react-icons/im";
import { FiUpload } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import useTasksStore from "../../store/tasks";

import { MainContainer, MutedText, StatusSelectBox } from "./TaskCard.styled";
import { StyledIconButton } from "../../components/TasksAddition/TasksAddition.styled";

function TaskCard({ data, choices }) {
  const { id, description, items, qty, total, status, date } = data;
  const { deleteTask, moveTaskUp, changeTaskStatus } = useTasksStore();
  const [hovered, setHovered] = useState(false);

  const statusOnChangeHandler = (e) => {
    let value = e.target.value;
    console.log("🚀 ~ statusOnChangeHandler ~ value:", value);
    changeTaskStatus(id, value);
  };

  const onHoverHandler = () => {
    setHovered(true);
  };

  const onLeaveHoverHandler = () => {
    setHovered(false);
  };

  const deleteHandler = () => {
    deleteTask(id);
  };

  const moveUpHandler = () => {
    moveTaskUp(id);
  };

  return (
    <MainContainer
      onMouseEnter={onHoverHandler}
      onMouseLeave={onLeaveHoverHandler}
    >
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <div>
          <p>{description}</p>
          <Stack direction="row" spacing={2}>
            <MutedText>Items</MutedText> &nbsp; {items}
            <MutedText>َQTY</MutedText> &nbsp; {qty}
            <MutedText>Total</MutedText> &nbsp; {total}
          </Stack>
        </div>
        <Stack direction="row" spacing={2} alignItems="center">
          <StatusSelectBox
            value={status}
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
            <ImAttachment /> &nbsp;
            {Math.floor(Math.random() * 90) + 10}
          </>
          <StyledIconButton aria-label="move-up" onClick={moveUpHandler}>
            <FiUpload />
          </StyledIconButton>
          <Chip
            icon={<MdAccessTime />}
            label={date}
            color="default"
            sx={{ px: 2 }}
          />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          {hovered && (
            <StyledIconButton
              onClick={deleteHandler}
              sx={{ height: 35, width: 35 }}
            >
              <IoClose />
            </StyledIconButton>
          )}
        </Stack>
      </Stack>
    </MainContainer>
  );
}

export default memo(TaskCard);
