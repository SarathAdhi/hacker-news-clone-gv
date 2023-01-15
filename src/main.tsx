import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import ReactDOM from "react-dom/client";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6600",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme} children={<App />} />
);
