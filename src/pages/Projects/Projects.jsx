import {
  Typography,
  Breadcrumbs,
  Link,
  Tabs,
  Tab,
  Box,
} from "@mui/material/Typography";

import { MainContainer } from "./Projects.styled";

export default function Projects() {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <MainContainer>
      <h3>Edit card</h3>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Dashboard
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Projects
          </Link>
          <Typography color="primary">photo shoot</Typography>
        </Breadcrumbs>
      </div>
    </MainContainer>
  );
}
