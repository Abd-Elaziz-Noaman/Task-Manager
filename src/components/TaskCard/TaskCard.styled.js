import styled from "styled-components";
import { StyledSelect } from "../../pages/Projects/Projects.styled";
import { TextField } from "@mui/material";

export const MainContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

export const MutedText = styled.p`
  display: inline-block;
  color: rgba(0, 0, 0, 0.4);
`;

export const StatusSelectBox = styled(StyledSelect)`
  &.MuiInputBase-root {
    min-width: 160px;
    background-color: rgba(0, 0, 0, 0.03);
    color: #1976d2;
    font-size: 0.9rem;
    border: none;
    outline: none;
  }
`;