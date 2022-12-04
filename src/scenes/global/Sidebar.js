import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

function MySidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Sidebar
      //   backgroundColor="transparent"
      backgroundColor={colors.primary[400]}
      rootStyles={{
        border: "solid 1px transparent",
        color: "black",
      }}
    >
      <Menu
        rootStyles={{
          backgroundColor: "transparent",
          borderRight: "1px solid transparent",
        }}
        menuItemStyles={{
          button: ({ level, active, disabled, hover }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                color: disabled ? "#f5d9ff" : colors.grey[100],
                backgroundColor: active ? "transparent" : undefined,
                "&:hover": {
                  backgroundColor: "#868efb3c",
                },
              };
          },
        }}
      >
        <SubMenu label="Charts" rootStyles={{}}>
          <MenuItem className={"menu-anchor"}> Pie charts </MenuItem>
          <MenuItem className={"menu-anchor"}> Line charts </MenuItem>
        </SubMenu>
        <MenuItem>Documentation</MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default MySidebar;
