import { MRT_ColumnDef } from "material-react-table";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Person4RoundedIcon from "@mui/icons-material/Person4Rounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import PermDataSettingRoundedIcon from "@mui/icons-material/PermDataSettingRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
// import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
// import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
// import EditRoundedIcon from "@mui/icons-material/EditRounded";
// import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

import { user } from "../Types/userTypes";
import { strFormat } from "../Helpers/StringFunctions";
import {
  Header,
  UserActive,
  UserEmail,
  UserRole,
} from "../Pages/Users/UsersAtom";
import GLOBAL_CONSTANTS from "../Global/Constants";

// const adminActions = [
//   {
//     label: "Edit",
//     activeLabel: "Save",
//     Icon: EditRoundedIcon,
//     ActiveIcon: SaveRoundedIcon,
//     key: "edit",
//     type: "CD",
//   },
//   {
//     label: "Delete",
//     activeLabel: "Deleted",
//     Icon: DeleteOutlinedIcon,
//     ActiveIcon: DeleteRoundedIcon,
//     color: "#e64e53",
//     key: "delete",
//     type: "AD",
//   },
// ];

const userTableConfig: MRT_ColumnDef<user>[] = [
  {
    header: "Email",
    Header: (props) => (
      <Header tableProps={{ ...props }} Icon={EmailRoundedIcon} />
    ),
    accessorKey: "email",
    Cell: (props) => <UserEmail {...props} />,
    minSize: GLOBAL_CONSTANTS.cellWidth,
  },
  {
    header: "Full Name",
    accessorFn: (row) => {
      return row.first_name + " " + row.last_name;
    },
    minSize: GLOBAL_CONSTANTS.cellWidth,
    Header: (props) => (
      <Header tableProps={{ ...props }} Icon={FormatQuoteRoundedIcon} />
    ),
  },
  {
    header: "Username",
    accessorFn: (row) => {
      return strFormat({
        str: `${row.first_name}.${row.last_name}`,
        replace: " ",
        replacement: ".",
      });
    },
    minSize: GLOBAL_CONSTANTS.cellWidth,
    Header: (props) => (
      <Header tableProps={{ ...props }} Icon={Person4RoundedIcon} />
    ),
  },
  {
    header: "Role",
    accessorKey: "role",
    maxSize: GLOBAL_CONSTANTS.cellWidth - 30,
    Cell: (props) => <UserRole {...props} />,
    Header: (props) => (
      <Header tableProps={{ ...props }} Icon={AssignmentIndRoundedIcon} />
    ),
  },
  {
    header: "Joined Date",
    accessorKey: "joined_date",
    maxSize: GLOBAL_CONSTANTS.cellWidth,
    Header: (props) => (
      <Header tableProps={{ ...props }} Icon={EventRoundedIcon} />
    ),
  },
  {
    header: "Account Status",
    accessorKey: "active",
    maxSize: GLOBAL_CONSTANTS.cellWidth - 50,
    Cell: (props) => <UserActive {...props} />,
    Header: (props) => (
      <Header tableProps={{ ...props }} Icon={ManageAccountsRoundedIcon} />
    ),
  },
  {
    header: "Actions",
    accessorKey: "actions",
    minSize: GLOBAL_CONSTANTS.cellWidth,
    Header: (props) => (
      <Header tableProps={{ ...props }} Icon={PermDataSettingRoundedIcon} />
    ),
  },
];

export default userTableConfig;
