import {
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

import { layoutProps } from "../Types/layoutTypes";
import layoutStyles from "../Styles/layoutStyles";
import { Sidebar } from "./Sidebar";
import Background from "./Background";
import avatar from "../Assets/img5.jpeg";

const AppLayout = (props: layoutProps) => {
  const { Component } = props;
  return (
    <Background>
      <Box sx={layoutStyles.container}>
        <Sidebar />
        <Box sx={layoutStyles.content}>
          <Box sx={layoutStyles.stickyHeader}>
            <InputBase
              sx={layoutStyles.globalSearch}
              placeholder="Search"
              startAdornment={<SearchRoundedIcon sx={{ pr: 1 }} />}
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton sx={layoutStyles.notifications}>
              <Badge
                badgeContent={234}
                color="primary"
                max={9}
                sx={layoutStyles.notifyCount}
              >
                <NotificationsRoundedIcon />
              </Badge>
            </IconButton>
            <Typography sx={layoutStyles.username}>Hey, Siddhartha</Typography>
            <Avatar alt="user avatar" src={avatar} sx={layoutStyles.avatar} />
          </Box>
          <Component />
        </Box>
      </Box>
    </Background>
  );
};

export default AppLayout;
