import { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
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
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function MySidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();
  return (
    <>
      <Sidebar
        //   backgroundColor="transparent"
        backgroundColor={colors.primary[400]}
        rootStyles={{
          border: "solid 1px transparent",
          color: "black",
        }}
      >
        <Box display="flex" alignItems="center" mt={2}>
          {!collapsed && (
            <Typography color={colors.grey[100]} variant="h5" ml="15px">
              Admin
            </Typography>
          )}
          <IconButton
            sx={{
              marginLeft: "auto",
              marginRight: collapsed ? "auto" : "none",
            }}
          >
            {collapsed ? (
              <MenuOutlinedIcon onClick={() => collapseSidebar()} />
            ) : (
              <CloseOutlinedIcon onClick={() => collapseSidebar()} />
            )}
          </IconButton>
        </Box>

        {/* Avatar */}
        {!collapsed && (
          <Box textAlign="center">
            <Box display="flex" alignItems={"center"} justifyContent="center">
              <Avatar />
            </Box>
            <Typography
              variant="h4"
              color={colors.grey[100]}
              sx={{ m: "10px 0 0 0" }}
            >
              James
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Software Developer
            </Typography>
          </Box>
        )}
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
          <SubMenu
            label="User Info"
            rootStyles={{}}
            icon={<PersonOutlinedIcon />}
          >
            <MenuItem
              className={"menu-anchor"}
              icon={<PersonOutlinedIcon />}
              routerLink={<Link to="/profile" />}
            >
              {" "}
              Profile{" "}
            </MenuItem>
            <MenuItem
              className={"menu-anchor"}
              routerLink={<Link to="/profile-settings" />}
              icon={<SettingsOutlinedIcon />}
            >
              Account settings
            </MenuItem>
          </SubMenu>
          <MenuItem
            routerLink={<Link to="/dashboard" />}
            icon={<HomeOutlinedIcon />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/team" />}
            icon={<PeopleOutlinedIcon />}
          >
            Manage Team
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/contacts" />}
            icon={<ContactsOutlinedIcon />}
          >
            Contact Information
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/invoices" />}
            icon={<ReceiptOutlinedIcon />}
          >
            Invoices
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/calendar" />}
            icon={<CalendarTodayOutlinedIcon />}
          >
            Calendar
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/faq" />}
            icon={<HelpOutlineOutlinedIcon />}
          >
            FAQ
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/bar-chart" />}
            icon={<BarChartOutlinedIcon />}
          >
            Bar Chart
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/pie-chart" />}
            icon={<PieChartOutlineOutlinedIcon />}
          >
            Pie Chart
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/line-chart" />}
            icon={<TimelineOutlinedIcon />}
          >
            Line Chart
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/geography-chart" />}
            icon={<MapOutlinedIcon />}
          >
            Geography Chart
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}

export default MySidebar;
