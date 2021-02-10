import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SaveIcon from "@material-ui/icons/Save";
import Delete from "@material-ui/icons/Delete";
//import TextField from "@material-ui/core/TextField";
//import { green, orange } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "fontsource-roboto";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6888, #FF8E53)",
    border: 0,
    borderRadius: 15,
    marginBottom: 15,
    color: "white",
    padding: "5px 30px",
  },
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
    },
  },
  /**  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[500],
    },
  },*/
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Components</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState();
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<Delete color="primary" />}
          checkedIcon={<SaveIcon />}
          onchange={(e) => setChecked(e.target.checked)}
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Click Trash Can"
    />
  );
}

function App() {
  return (
    <Container maxWidth="xs">
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <AppBar>
              <ToolBar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">MUI Themeing</Typography>
                <Button>Login</Button>
              </ToolBar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle">
              Learn how to use Material UI
            </Typography>
            <ButtonStyled />
            <Grid container spacing="2" justify="center">
              <Grid item xs={3}>
                <Paper style={{ height: 75, width: 70 }} />
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: 75, width: 70 }} />
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: 75, width: 70 }} />
              </Grid>
            </Grid>

            <CheckboxExample />
            <ButtonGroup variant="contained" color="primary">
              <Button startIcon={<SaveIcon />}>Save</Button>
              <Button startIcon={<Delete />}>Discard</Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </ThemeProvider>
    </Container>
  );
}

export default App;
