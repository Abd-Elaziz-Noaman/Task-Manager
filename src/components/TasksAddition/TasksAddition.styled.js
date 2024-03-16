import styled from "styled-components";
import { IconButton, TextField } from "@mui/material";

export const MainContainer = styled.div`
  width: fit-content;
  min-width: 60%;
  margin-bottom: 15px;
`;

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
