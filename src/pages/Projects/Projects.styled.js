import styled from "styled-components";
import { Tab } from "@mui/material";

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
