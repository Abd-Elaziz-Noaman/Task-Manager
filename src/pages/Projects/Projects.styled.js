import styled from "styled-components";
import { Tab, Select, IconButton, TextField } from "@mui/material";

export const MainContainer = styled.div`
  height: 100%;
  width: 80%;
  margin: auto;
  text-align: left;
`;

export const NumberChip = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  padding: 0.3rem;
  background-color: rgba(0, 0, 0, 0.12);
`;

export const StyledTab = styled(Tab)`
  &.MuiTab-root {
    text-transform: none;
    padding-left: 0;
    margin-right: 20px;
  }
`;

export const StyledLabel = styled.label`
  height: 40px;
  min-width: 120px;
  width: fit-content;
  color: grey;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0.3rem;
  padding: 0.4rem 0.8rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  transition: all 0.4s ease-in-out;

  &:hover {
    border-color: #000;
  }
`;

export const StyledSelect = styled(Select)`
  &.MuiInputBase-root {
    height: 40px;
    min-width: 150px;
    width: fit-content;
    color: grey;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 0.3rem;
  }
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
