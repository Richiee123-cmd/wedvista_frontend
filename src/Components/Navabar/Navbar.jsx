import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled
          ? "rgba(255,255,255,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "all 0.4s ease",
        paddingX: 8,
        paddingY: 1.5,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* LOGO */}
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: "2px",
            fontFamily: "Playfair Display, serif",
            color: scrolled ? "#1a1a1a" : "#ffffff",
          }}
        >
          WedVista
        </Typography>

        {/* MENU */}
        <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
          {["Home", "Services", "Budget", "Guests", "Contact"].map(
            (item) => (
              <Button
                key={item}
                component={Link}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                sx={{
                  color: scrolled ? "#333" : "#ffffff",
                  fontWeight: 400,
                  textTransform: "none",
                  letterSpacing: "1px",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "1px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "#b48a2c",
                    transition: "0.3s",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {item}
              </Button>
            )
          )}

          {/* AUTH SECTION */}
          {token ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar
                sx={{
                  width: 35,
                  height: 35,
                  background: "#1a1a1a",
                  fontSize: "0.9rem",
                }}
              >
                {user?.name?.charAt(0).toUpperCase()}
              </Avatar>

              <Button
                onClick={logout}
                sx={{
                  border: "1px solid #1a1a1a",
                  color: "#1a1a1a",
                  borderRadius: "30px",
                  textTransform: "none",
                  paddingX: 3,
                  fontWeight: 400,
                  background: "transparent",
                  transition: "0.3s",
                  "&:hover": {
                    background: "#1a1a1a",
                    color: "#ffffff",
                  },
                }}
              >
                Logout
              </Button>
            </Box>
          ) : (
            <Button
              component={Link}
              to="/login"
              sx={{
                border: scrolled
                  ? "1px solid #1a1a1a"
                  : "1px solid #ffffff",
                color: scrolled ? "#1a1a1a" : "#ffffff",
                borderRadius: "30px",
                textTransform: "none",
                paddingX: 3,
                fontWeight: 400,
                background: "transparent",
                transition: "0.3s",
                "&:hover": {
                  background: scrolled ? "#1a1a1a" : "#ffffff",
                  color: scrolled ? "#ffffff" : "#1a1a1a",
                },
              }}
            >
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
