import React from "react";

import { Box } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { TableTemplate } from "../../TablesConfig/TableTemplate";
import userTableConfig from "../../TablesConfig/userTableConfig";
import { loadUsers } from "../../Api/APIHandlers/userHandlers";
import { setUsersList } from "../../Redux/Reducers.ts/userSlice";
import { appLoading } from "../../Redux/Reducers.ts/appSlice";

export const UsersList = () => {
  const columns = React.useMemo(() => userTableConfig, []);
  const dispatch = useAppDispatch();
  const { usersList } = useAppSelector((store) => store.user);

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
      users
      <Box
        sx={{
          display: "flex",
          position: "relative",
          flex: 1,
          flexDirection: "column",
        }}
      >
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
