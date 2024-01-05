import React from "react";

import { Box } from "@mui/system";
import { bookActionsType, tableCellProps } from "../../Types/bookTypes";
import booksStyles from "../../Styles/booksStyles";
import { Button, Chip, Stack, Typography } from "@mui/material";

import styles from "../../Global/styles";

export const BookImage = (props: tableCellProps) => {
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

export const BookTitle = (props: tableCellProps) => {
  const { row } = props;
  return (
    <Box sx={booksStyles.cellWrapper}>
      <Typography sx={booksStyles.bookTitle}>
        {row.original?.title || "N\\A"}
      </Typography>
    </Box>
  );
};

export const BookAuthors = (props: tableCellProps) => {
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

export const BookDescription = (props: tableCellProps) => {
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
  const { actions, label } = props;
  const [state, setState] = React.useState<boolean[]>(
    Array.from(Array(3)).map(() => false)
  );
  const selectHandler = (index: number) => {
    setState((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
  return (
    <Box sx={{ ...booksStyles.cellWrapper, ...booksStyles.bookActionsWrapper }}>
      {actions.map((action, index) => {
        return (
          <Button
            fullWidth
            disableRipple
            key={`${label}-action-${index}`}
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

export const BookCheckout = (props: tableCellProps) => {
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
      {checkList.clubs < 1 && checkList.individual < 1 && (
        <Typography sx={booksStyles.bookCheckoutText}>No checkouts</Typography>
      )}
    </Box>
  );
};
