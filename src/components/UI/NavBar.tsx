import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link";
import { stringAvatar } from "@/utils/navbar-utils";
import { useMediaQuery } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";
import Logo from "./Logo";

const pages = [
  { name: "About Us", href: "about-us" },
  { name: "Map", href: "map" },
  { name: "Contact Us", href: "contact-us" },
];
const settings = ["Logout", "Profile"];

function ResponsiveAppBar() {
  const { data: session, status } = useSession();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const loginHandler = async () => {
    signIn();
  };

  const logoutHandler = () => {
    signOut();
  };
  return (
    <>
      <AppBar position="static" sx={{ background: "#121212" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {!isMobile && <Logo dark={false} width={200} height={50} />}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Link href={page.href}>{page.name}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {isMobile && <Logo dark={false} width={140} height={50} />}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  href={page.href}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {!(status === "authenticated") && (
                <Button
                  onClick={loginHandler}
                  sx={{
                    my: 2,
                    color: "white",
                    display: { xs: "flex", md: "flex" },
                  }}
                >
                  <Typography textAlign="center">Login</Typography>
                </Button>
              )}
              {status === "authenticated" && (
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar {...stringAvatar(session.user!.name!)} />
                  </IconButton>
                </Tooltip>
              )}
              <Menu
                sx={{ mt: "75px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  key={"profile"}
                  onClick={() => {
                    handleCloseUserMenu();
                  }}
                >
                  <Link href={"/profile"}>Profile</Link>
                </MenuItem>
                <MenuItem
                  key={"logout"}
                  onClick={() => {
                    handleCloseUserMenu(), logoutHandler();
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default ResponsiveAppBar;
