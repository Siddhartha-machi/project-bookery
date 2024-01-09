import React from "react";

import { Box } from "@mui/material";
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
import LocalHeader from "../../Layout/LocalHeader";

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
      <LocalHeader
        pageTitle={"Registered Users"}
        pageCaption={
          "Browse through the users list and edit details and permission."
        }
        options={options}
      />
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
