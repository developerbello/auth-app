import React from "react";
import { Outlet } from "react-router-dom";
import { Avatar } from "@mui/material";
import { lightGreen } from "@mui/material/colors";

export default function Layout() {
  return (
    <div>
      <Avatar
        sx={{ bgcolor: lightGreen[500] }}
        style={{ textAlign: "center", margin: "30px auto" }}
      >
        BI
      </Avatar>
      <Outlet />
    </div>
  );
}
