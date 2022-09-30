import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CloudIcon from "@mui/icons-material/Cloud";

export default function NavBar() {
  return (
    <>
      <AppBar position="sticky">
        <Container>
          <Toolbar>
            <CloudIcon
              sx={{ display: { xs: "flex", md: "flex" }, mr: 1, fontSize: 40 }}
            />
            <Typography
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, mt: 1 }}
            >
              uWeather
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
