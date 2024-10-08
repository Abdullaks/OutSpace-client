import {
  AppBar,
  Avatar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
  Menu,
  MenuItem,
} from "@mui/material";
import Pets from "@mui/icons-material/Pets";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { adminLogout, reset } from "../../features/auth/authSlice";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: 5,
  width: "35%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const Userbox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const AdminNavbar = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(adminLogout());
    dispatch(reset());
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          AKS{" "}
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src=" "
            onClick={(e) => {
              setOpen(true);
            }}
          />
        </Icons>
        <Userbox
          onClick={(e) => {
            setOpen(true);
          }}
        >
          <Avatar sx={{ width: 30, height: 30 }} src="" />
          <Typography variant="span">AKS</Typography>
        </Userbox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => {
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default AdminNavbar;
