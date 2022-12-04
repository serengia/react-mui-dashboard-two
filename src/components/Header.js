import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

function Header(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { title, subtitle } = props;
  return (
    <Box>
      <Typography variant="h2" fontWeight="bold" color={colors.grey[100]}>
        {title}
      </Typography>
      <Typography color={colors.greenAccent[500]} variant="body1">
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;
