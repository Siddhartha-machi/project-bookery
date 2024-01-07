import React from "react";

import { Box } from "@mui/system";
import { MRT_RowData } from "material-react-table";
import { Button, Chip, Stack, Typography } from "@mui/material";

import {
  Book,
  adminActionType,
  bookActionsType,
  bookClubAdminActionType,
  bookUserActionType,
} from "../../Types/bookTypes";
import booksStyles from "../../Styles/booksStyles";

import styles from "../../Global/styles";
import { tableCellProps } from "../../Types/tableTypes";

export const BookImage = <TData extends MRT_RowData>(
  props: tableCellProps<TData>
) => {
  const { row } = props;
  return (
    <Box sx={booksStyles.cellWrapper}>
      <Box
        component={"img"}
        src={row.original?.image}
        sx={booksStyles.bookImage}
      />
    </Box>
  );
};

export const BookTitle = <TData extends MRT_RowData>(
  props: tableCellProps<TData>
) => {
  const { row } = props;
  return (
    <Box sx={booksStyles.cellWrapper}>
      <Typography sx={booksStyles.bookTitle}>
        {row.original?.title || "N\\A"}
      </Typography>
    </Box>
  );
};

export const BookAuthors = <TData extends MRT_RowData>(
  props: tableCellProps<TData>
) => {
  const authors = props.row.original?.author || [];
  const title = props.row.original?.author || "none";
  const authorsLength = authors.length;
  return (
    <Box sx={booksStyles.cellWrapper}>
      <Stack sx={booksStyles.bookAuthorsWrapper}>
        {authors.slice(0, 2).map((author, index) => (
          <Chip
            variant="outlined"
            label={author}
            key={`${title}-author-${index}`}
            sx={booksStyles.bookAuthorChip}
          />
        ))}
        {authorsLength > 2 && (
          <Chip
            variant="outlined"
            label={`+ ${authors.length - 2} more`}
            key={`${title}-author-rest`}
            sx={{ ...booksStyles.bookAuthorChip, color: styles.white5 }}
          />
        )}
      </Stack>
    </Box>
  );
};

export const BookDescription = <TData extends MRT_RowData>(
  props: tableCellProps<TData>
) => {
  const [showMore, setshowMore] = React.useState(false);
  const description = props.row.original?.description || "";
  const truncateStyles = React.useMemo(
    () => booksStyles.bookDescription({ check: showMore }),
    [showMore]
  );
  const toggleShowMore = React.useCallback(
    () => setshowMore((prev) => !prev),
    []
  );
  return (
    <Box sx={{ ...booksStyles.cellWrapper, ...booksStyles.descriptionWrapper }}>
      <Typography sx={truncateStyles}>{description}</Typography>
      <Button onClick={toggleShowMore} disableRipple sx={booksStyles.showMore}>
        Show {showMore ? "less" : "more"}
      </Button>
    </Box>
  );
};

export const BookActions = (props: bookActionsType) => {
  const { actions, tableProps } = props;
  const { column } = tableProps;
  const [state, setState] = React.useState<boolean[]>([]);

  const selectHandler = (index: number) => {
    setState((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const key = React.useMemo(
    () => column.columnDef.accessorKey as keyof Book["actions"],
    [column.columnDef.accessorKey]
  );

  React.useEffect(() => {
    let initialState: boolean[] = [];

    const itemActions = tableProps.row.original.actions;
    if (key === "user") {
      initialState = actions.map((action) => {
        const actionKey = action.key as keyof bookUserActionType;
        return itemActions[key]?.[actionKey].by_current_user || false;
      });
    } else if (key === "admin") {
      initialState = actions.map((action) => {
        const actionKey = action.key as keyof adminActionType;
        return itemActions[key]?.[actionKey] || false;
      });
    } else {
      initialState = actions.map((action) => {
        const actionKey = action.key as keyof bookClubAdminActionType;
        return itemActions[key]?.[actionKey] || false;
      });
    }

    setState(initialState);
  }, [actions, key, tableProps.row.original]);

  return (
    <Box sx={{ ...booksStyles.cellWrapper, ...booksStyles.bookActionsWrapper }}>
      {actions.map((action, index) => {
        return (
          <Button
            fullWidth
            disableRipple
            key={`${key}-action-${index}`}
            startIcon={state[index] ? <action.ActiveIcon /> : <action.Icon />}
            sx={{
              ...booksStyles.actionButton({
                color: action.color,
                check: state[index],
              }),
            }}
            onClick={() => selectHandler(index)}
          >
            {state[index] ? action.activeLabel : action.label}
          </Button>
        );
      })}
    </Box>
  );
};

export const BookCheckout = <TData extends MRT_RowData>(
  props: tableCellProps<TData>
) => {
  const { checkList } = props.row.original || {};
  return (
    <Box sx={{ ...booksStyles.cellWrapper, ...booksStyles.bookCheckout }}>
      {checkList.clubs > 0 && (
        <Typography sx={booksStyles.bookCheckoutText}>
          {checkList.clubs} clubs checkout this book
        </Typography>
      )}
      {checkList.individual > 0 && (
        <Typography sx={booksStyles.bookCheckoutText}>
          {checkList.individual} people are reading this book
        </Typography>
      )}
    </Box>
  );
};

export const BookComment = <TData extends MRT_RowData>(
  props: tableCellProps<TData>
) => {
  const comment = props.row.original.comment;
  if (comment) {
    return (
      <Box
        sx={{ ...booksStyles.cellWrapper, ...booksStyles.bookCommentWrapper }}
      >
        <Typography sx={booksStyles.bookComment}>
          <q>{comment.title}</q>
        </Typography>

        <Typography sx={booksStyles.commentBy}>
          - by {comment.user} on {comment.date}
        </Typography>
      </Box>
    );
  }
  return null;
};
