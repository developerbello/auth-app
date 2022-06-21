import React from "react";
import { Outlet } from "react-router-dom";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export default function Layout() {
  return (
    <div>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>BI</Avatar>
      <Outlet />
    </div>
  );
}
