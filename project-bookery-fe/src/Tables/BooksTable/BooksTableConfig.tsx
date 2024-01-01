import { MRT_ColumnDef } from "material-react-table";
import { Book } from "../../Types/bookTypes";

const booksTableConfig: MRT_ColumnDef<Book>[] = [
  {
    accessorKey: "title",
    header: "Book Title",
    size: 120,
  },
  {
    accessorKey: "image",
    header: "Book Cover",
    size: 120,
  },
  {
    accessorKey: "description",
    header: "Description",
    size: 120,
  },
  {
    accessorKey: "author",
    header: "Author(s)",
    size: 120,
  },
  {
    accessorKey: "checked_out_count",
    header: "Checked out Count",
    size: 120,
  },

  {
    accessorKey: "Comment",
    header: "comment.title",
    size: 120,
  },
];

export default booksTableConfig;
