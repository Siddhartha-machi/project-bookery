import React from "react";

import { Box, IconButton, Typography } from "@mui/material";
import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

import accountStyles from "../../Styles/accountStyles";
import LocalHeader from "../../Layout/LocalHeader";
import blankProfile from "../../Assets/img5.jpeg";
import { useAppSelector } from "../../Redux/hooks";
import { EditableTypography } from "./AccountAtom";

// * First, middle, last name, email, gender, country

const UserAccount = () => {
  const user = useAppSelector((store) => store.user.currentUser);
  const [enableEditing, setenableEditing] = React.useState<boolean>(false);

  const toggleEditing = () => {
    setenableEditing((prev) => !prev);
  };
  return (
    <Box sx={accountStyles.container}>
      <LocalHeader
        pageTitle={"Account"}
        pageCaption={"View and modify your personal info and more"}
      />
      <Box sx={accountStyles.content}>
        <Box sx={accountStyles.profileContainer}>
          <Box
            sx={{
              backgroundImage: `url(${blankProfile})`,
              ...accountStyles.profileImg,
            }}
          >
            <IconButton sx={accountStyles.changeImgIcon}>
              <PhotoCameraRoundedIcon />
            </IconButton>
          </Box>

          <Typography
            sx={{ fontWeight: "bold", fontSize: "20px", textAlign: "center" }}
          >
            {user.first_name} {user.last_name}
          </Typography>
          <Box sx={accountStyles.accountContainer}>
            <Box sx={accountStyles.detailsHeader}>
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                Account Details
              </Typography>

              <IconButton
                onClick={toggleEditing}
                sx={accountStyles.editIconButton}
              >
                {enableEditing ? (
                  <SaveRoundedIcon color="inherit" />
                ) : (
                  <EditNoteRoundedIcon color="inherit" />
                )}
              </IconButton>
            </Box>

            <EditableTypography
              value={"Siddhartha Reddy"}
              valueType={"text"}
              action={(newValue: string) => console.log(newValue)}
              label={"First Name"}
              enableEditing={enableEditing}
            />
            <EditableTypography
              value={"Machi"}
              valueType={"text"}
              action={(newValue: string) => console.log(newValue)}
              label={"Last Name"}
              enableEditing={enableEditing}
            />
            <EditableTypography
              value={"admin@bookery.com"}
              valueType={"email"}
              action={(newValue: string) => console.log(newValue)}
              label={"Email"}
              enableEditing={enableEditing}
            />
            <EditableTypography
              value={"Male"}
              valueType={"text"}
              action={(newValue: string) => console.log(newValue)}
              label={"Gender"}
              enableEditing={enableEditing}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserAccount;
