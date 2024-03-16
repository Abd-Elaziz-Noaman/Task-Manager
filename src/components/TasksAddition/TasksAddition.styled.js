import styled from "styled-components";
import { Tab, Select, IconButton, TextField } from "@mui/material";

export const StyledIconButton = styled(IconButton)`
  height: 40px;
  width: 40px;
`;

export const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    width: 450px;
    height: 50px;
    padding: 0;
  }
`;
