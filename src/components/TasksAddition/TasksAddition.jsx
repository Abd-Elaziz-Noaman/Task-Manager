import { Stack, TextField } from "@mui/material";
import { MdAccessTime } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";

import {
  MainContainer,
  StyledIconButton,
  StyledTextField,
} from "./TasksAddition.styled";

export default function TasksAddition(props) {
  const {
    task,
    index,
    hideSubDetailsHandler,
    showSubDetailsHandler,
    newTasksFormOnChangeHandler,
    removeNewTaskHandler,
  } = props;
  const { description, items, qty, total, showDetails } = task;
  return (
    <MainContainer>
      <Stack direction="row" justifyContent="space-evenly" alignItems="center">
        <StyledTextField
          type="text"
          name="description"
          value={description}
          placeholder="Task description"
          onChange={(e) => newTasksFormOnChangeHandler(e, index)}
        />
        <StyledIconButton
          sx={{
            bgcolor: "#1976d2",
            color: "#fff",
            "&:hover": { bgcolor: "#1976d2" },
          }}
          onClick={() => showSubDetailsHandler(index)}
        >
          <FaPlus />
        </StyledIconButton>
        <StyledIconButton>
          <MdAccessTime />
        </StyledIconButton>
        <StyledIconButton>
          <FaUserPlus />
        </StyledIconButton>
        <StyledIconButton onClick={() => removeNewTaskHandler(index)}>
          <IoClose />
        </StyledIconButton>
      </Stack>
      <br />
      {showDetails && (
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{ width: "60%", ml: 2 }}
        >
          <p>items</p>
          <TextField
            type="number"
            name="items"
            value={items}
            sx={{ width: 80 }}
            onChange={(e) => newTasksFormOnChangeHandler(e, index)}
          />
          <p>QTY</p>
          <TextField
            type="number"
            name="qty"
            value={qty}
            sx={{ width: 80 }}
            onChange={(e) => newTasksFormOnChangeHandler(e, index)}
          />
          <p>
            Total <strong>{total}</strong>
          </p>
          <StyledIconButton onClick={() => hideSubDetailsHandler(index)}>
            <IoClose />
          </StyledIconButton>
        </Stack>
      )}
    </MainContainer>
  );
}
