import React from "react";

import { Box, Button, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import BackupRoundedIcon from "@mui/icons-material/BackupRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";

import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { TableTemplate } from "../../TablesConfig/TableTemplate";
import userTableConfig from "../../TablesConfig/userTableConfig";
import { loadUsers } from "../../Api/APIHandlers/userHandlers";
import { setUsersList } from "../../Redux/Reducers.ts/userSlice";
import { appLoading } from "../../Redux/Reducers.ts/appSlice";
import booksStyles from "../../Styles/booksStyles";

export const UsersList = () => {
  const columns = React.useMemo(() => userTableConfig, []);
  const dispatch = useAppDispatch();
  const { usersList } = useAppSelector((store) => store.user);
  
  const options = React.useMemo(
    () => [
      {
        label: "Filter",
        Icon: FilterAltRoundedIcon,
      },
      {
        label: "Add User",
        Icon: AddRoundedIcon,
      },
      {
        label: "Import users",
        Icon: BackupRoundedIcon,
      },
    ],
    []
  );
  React.useEffect(() => {
    if (usersList.length < 1) {
      loadUsers({
        dispatch: (data) => dispatch(setUsersList(data)),
        loading: (loadVal) => dispatch(appLoading({ loadVal, label: "users" })),
      });
    }
  }, [dispatch, usersList]);

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <Box sx={booksStyles.localHeaderWrapper}>
        <Box sx={booksStyles.titleWrapper}>
          <Typography sx={booksStyles.pageTitle}>Registered Users</Typography>
          <Typography sx={booksStyles.pageCaption}>
            Browse through the users list and edit details and permission.
          </Typography>
        </Box>
        <Box sx={booksStyles.actionsWrapper}>
          {options.map((action, index) => (
            <Button
              sx={{ ...booksStyles.button }}
              startIcon={<action.Icon />}
              key={`book-action-${index}`}
            >
              {action.label}
            </Button>
          ))}
        </Box>
      </Box>
      <Box sx={booksStyles.tableWrapper}>
        <TableTemplate
          label="Users"
          columns={columns}
          data={usersList}
          pinningCols={["email"]}
        />
      </Box>
    </Box>
  );
};
