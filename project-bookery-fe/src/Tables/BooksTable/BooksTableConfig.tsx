import { MRT_ColumnDef } from "material-react-table";
import BookmarkAddedRoundedIcon from "@mui/icons-material/BookmarkAddedRounded";
import BookmarkAddRoundedIcon from "@mui/icons-material/BookmarkAddRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import SettingsBackupRestoreRoundedIcon from "@mui/icons-material/SettingsBackupRestoreRounded";
import LibraryAddRoundedIcon from "@mui/icons-material/LibraryAddRounded";
import LibraryAddCheckRoundedIcon from "@mui/icons-material/LibraryAddCheckRounded";

import { Book, bookActionType } from "../../Types/bookTypes";
import {
  BookActions,
  BookAuthors,
  BookCheckout,
  BookDescription,
  BookImage,
  BookTitle,
} from "../../Pages/BooksList/BooksAtom";
import GLOBAL_CONSTANTS from "../../Global/Constants";

const userActions: bookActionType[] = [
  {
    label: "Like",
    activeLabel: "Liked",
    Icon: FavoriteBorderRoundedIcon,
    ActiveIcon: FavoriteRoundedIcon,
    color: "#e0488f",
  },
  {
    label: "Add to read list",
    activeLabel: "In reading list",
    Icon: BookmarkAddRoundedIcon,
    ActiveIcon: BookmarkAddedRoundedIcon,
  },
  {
    label: "Read now",
    activeLabel: "Reading now",
    Icon: AutoStoriesOutlinedIcon,
    ActiveIcon: AutoStoriesRoundedIcon,
    color: "#43c437",
  },
];
const adminActions: bookActionType[] = [
  {
    label: "Edit",
    activeLabel: "Save",
    Icon: EditRoundedIcon,
    ActiveIcon: SaveRoundedIcon,
  },
  {
    label: "Delete",
    activeLabel: "Deleted",
    Icon: DeleteOutlinedIcon,
    ActiveIcon: DeleteRoundedIcon,
    color: "#e64e53",
  },
  {
    label: "Revoke all",
    activeLabel: "Restore all",
    Icon: ReplayRoundedIcon,
    ActiveIcon: SettingsBackupRestoreRoundedIcon,
    color: "#ed9c32",
  },
];
const clubAdminActions: bookActionType[] = [
  {
    label: "Add to club collection",
    activeLabel: "In club collection",
    Icon: LibraryAddRoundedIcon,
    ActiveIcon: LibraryAddCheckRoundedIcon,
  },
  // {
  //   label: "Read now",
  //   activeLabel: "Reading now",
  //   Icon: AutoStoriesOutlinedIcon,
  //   ActiveIcon: AutoStoriesRoundedIcon,
  //   color: "#43c437",
  // },
];

const booksTableConfig: MRT_ColumnDef<Book>[] = [
  {
    accessorKey: "image",
    header: "Book Cover",
    maxSize: GLOBAL_CONSTANTS.cellWidth,
    Cell: (props) => <BookImage {...props} />,
  },
  {
    accessorKey: "title",
    header: "Book Title",
    maxSize: GLOBAL_CONSTANTS.cellWidth,
    Cell: (props) => <BookTitle {...props} />,
  },
  {
    accessorKey: "description",
    header: "Description",
    maxSize: GLOBAL_CONSTANTS.cellWidth + 120,
    Cell: (props) => <BookDescription {...props} />,
  },
  {
    accessorKey: "author",
    header: "Author(s)",
    maxSize: GLOBAL_CONSTANTS.cellWidth,
    Cell: (props) => <BookAuthors {...props} />,
  },
  {
    accessorKey: "checkedCount",
    header: "Checked out by",
    maxSize: 25,
    Cell: (props) => <BookCheckout {...props} />,
  },

  {
    accessorKey: "comment.title",
    header: "Comment",
    maxSize: GLOBAL_CONSTANTS.cellWidth,
  },
  {
    accessorKey: "actions",
    header: "Actions",
    maxSize: GLOBAL_CONSTANTS.cellWidth,
    Cell: (props) => (
      <BookActions tableProps={props} label="user" actions={userActions} />
    ),
  },
  {
    accessorKey: "club_admin_actions",
    header: "Club admin actions",
    maxSize: GLOBAL_CONSTANTS.cellWidth,
    Cell: (props) => (
      <BookActions tableProps={props} label="admin" actions={adminActions} />
    ),
  },
  {
    accessorKey: "admin_actions",
    header: "Admin actions",
    maxSize: GLOBAL_CONSTANTS.cellWidth,
    Cell: (props) => (
      <BookActions
        tableProps={props}
        label="club-admin"
        actions={clubAdminActions}
      />
    ),
  },
];

export default booksTableConfig;
