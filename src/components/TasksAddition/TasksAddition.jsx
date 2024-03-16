import { Stack, TextField, Button } from "@mui/material";
import { MdAccessTime } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";

import { StyledIconButton, StyledTextField } from "./TasksAddition.styled";

export default function TasksAddition() {
  return (
    <div style={{ width: "fit-content", minWidth: "60%" }}>
      <Stack direction="row" justifyContent="space-evenly" alignItems="center">
        <StyledTextField type="text" placeholder="Task description" />
        <StyledIconButton
          sx={{
            bgcolor: "#1976d2",
            color: "#fff",
            "&:hover": { bgcolor: "#1976d2" },
          }}
        >
          <FaPlus />
        </StyledIconButton>
        <StyledIconButton>
          <MdAccessTime />
        </StyledIconButton>
        <StyledIconButton>
          <FaUserPlus />
        </StyledIconButton>
      </Stack>
      <br />
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{ width: "60%", ml: 2 }}
      >
        <p>items</p>
        <TextField type="text" name="items" sx={{ width: 80 }} />
        <p>QTY</p>
        <TextField type="text" name="qty" sx={{ width: 80 }} />
        <p>
          Total <strong>90</strong>
        </p>
        <StyledIconButton>
          <IoClose />
        </StyledIconButton>
      </Stack>
      <Button
        variant="contained"
        startIcon={<FaPlus />}
        color="primary"
        sx={{ ml: 3, mt: 2, textTransform: "none" }}
      >
        Add
      </Button>
    </div>
  );
}
