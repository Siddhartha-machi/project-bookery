import {
  Avatar,
  Backdrop,
  Badge,
  Box,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";

import { layoutProps } from "../Types/layoutTypes";
import layoutStyles from "../Styles/layoutStyles";
import { Sidebar } from "./Sidebar";
import Background from "./Background";
import avatar from "../Assets/img5.jpeg";
import { useAppSelector } from "../Redux/hooks";
import { Loader } from "../Global/SupportComponets/Loader";
import { strFormat } from "../Helpers/StringFunctions";

const AppLayout = (props: layoutProps) => {
  const { Component } = props;
  const { loading, loadingLabel } = useAppSelector((store) => store.app);
  const currentUser = useAppSelector((store) => store.user.currentUser);
  const { first_name, last_name, role } = currentUser;

  return (
    <Background>
      <Box sx={layoutStyles.container}>
        <Sidebar />
        <Backdrop sx={{ color: "#fff", zIndex: 10000 }} open={loading}>
          <Loader
            size={60}
            message={`Loading ${loadingLabel} please wait...`}
          />
        </Backdrop>
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
            <Box sx={layoutStyles.userDetail}>
              <Typography sx={layoutStyles.username}>
                Hey, {first_name} {last_name}
              </Typography>
              {role !== "user" && (
                <Box sx={layoutStyles.roleWrapper}>
                  {role === "admin" ? (
                    <AdminPanelSettingsRoundedIcon fontSize="small" />
                  ) : (
                    <SupervisedUserCircleRoundedIcon fontSize="small" />
                  )}
                  <Typography sx={layoutStyles.inlineRole}>
                    {strFormat({
                      str: role as string,
                      replace: "_",
                      replacement: " ",
                    })}
                  </Typography>
                </Box>
              )}
            </Box>

            <Avatar alt="user avatar" src={avatar} sx={layoutStyles.avatar} />
          </Box>
          <Component />
        </Box>
      </Box>
    </Background>
  );
};

export default AppLayout;
