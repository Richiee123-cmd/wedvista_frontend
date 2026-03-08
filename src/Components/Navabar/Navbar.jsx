import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const pages = ["Home", "Services", "Budget", "Guests", "Contact"];

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

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
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
        px: { xs: 2, md: 8 },
        py: 1.5,
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

        {/* DESKTOP MENU */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {pages.map((item) => (
            <Button
              key={item}
              component={Link}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              sx={{
                color: scrolled ? "#333" : "#ffffff",
                textTransform: "none",
              }}
            >
              {item}
            </Button>
          ))}

          {token ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar sx={{ width: 35, height: 35 }}>
                {user?.name?.charAt(0).toUpperCase()}
              </Avatar>

              <Button
  component={Link}
  to="/login"
  sx={{
    border: scrolled ? "2px solid #b48a2c" : "2px solid #ffffff",
    color: scrolled ? "#b48a2c" : "#ffffff",
    borderRadius: "30px",
    textTransform: "none",
    paddingX: 3,
    fontWeight: 500,
    letterSpacing: "1px",
    transition: "all 0.35s ease",
    background: "transparent",

    "&:hover": {
      background: "#b48a2c",
      color: "#ffffff",
      borderColor: "#b48a2c",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 18px rgba(180,138,44,0.35)",
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
    border: scrolled ? "2px solid #b48a2c" : "2px solid #ffffff",
    color: scrolled ? "#b48a2c" : "#ffffff",
    borderRadius: "30px",
    textTransform: "none",
    paddingX: 3,
    fontWeight: 500,
    letterSpacing: "1px",
    transition: "all 0.35s ease",
    background: "transparent",

    "&:hover": {
      background: "#b48a2c",
      color: "#ffffff",
      borderColor: "#b48a2c",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 18px rgba(180,138,44,0.35)",
    },
  }}
>
  Login
</Button>
          )}
        </Box>

        {/* MOBILE MENU ICON */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={handleOpenMenu}>
            <MenuIcon sx={{ color: scrolled ? "#000" : "#fff" }} />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            {pages.map((item) => (
              <MenuItem
                key={item}
                component={Link}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={handleCloseMenu}
              >
                {item}
              </MenuItem>
            ))}

            {!token && (
              <MenuItem component={Link} to="/login">
                Login
              </MenuItem>
            )}

            {token && <MenuItem onClick={logout}>Logout</MenuItem>}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;