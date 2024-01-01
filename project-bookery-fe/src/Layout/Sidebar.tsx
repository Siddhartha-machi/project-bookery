import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Groups3RoundedIcon from "@mui/icons-material/Groups3Rounded";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";

import layoutStyles from "../Styles/layoutStyles";
import { useLocation, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const links = React.useMemo(
    () => [
      {
        label: "Overview",
        path: "/overview",
        Icon: WidgetsRoundedIcon,
      },
      {
        label: "Books",
        path: "/books-list",
        Icon: LibraryBooksRoundedIcon,
      },
      {
        label: "Settings",
        path: "/settings",
        Icon: PeopleRoundedIcon,
      },
      {
        label: "Account",
        path: "/account",
        Icon: AccountCircleRoundedIcon,
      },
      {
        label: "Clubs",
        path: "/clubs",
        Icon: Groups3RoundedIcon,
      },
      {
        label: "Users",
        path: "/users",
        Icon: SettingsRoundedIcon,
      },
    ],
    []
  );
  return (
    <Box sx={layoutStyles.sidBar}>
      <IconButton
        key={"logo-link"}
        disableRipple
        sx={layoutStyles.logo}
        onClick={() => navigate("/")}
      >
        <LocalLibraryRoundedIcon
          className="linkIcon"
          sx={layoutStyles.sidebarItemIcon}
        />
        <Typography sx={layoutStyles.sidbarItemText}>{"Bookery"}</Typography>
      </IconButton>
      {links.map((link, index) => {
        const selected = link.path === location.pathname;
        return (
          <IconButton
            key={`link-${index}`}
            disableRipple
            sx={{
              ...layoutStyles.sidebarItem,
              ...(selected && layoutStyles.selectedItem),
            }}
            onClick={() => navigate(link.path)}
          >
            <link.Icon className="linkIcon" sx={layoutStyles.sidebarItemIcon} />
            <Typography sx={layoutStyles.sidbarItemText}>
              {link.label}
            </Typography>
          </IconButton>
        );
      })}
    </Box>
  );
};
