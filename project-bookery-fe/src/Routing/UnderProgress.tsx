import { Box, Button, Typography } from "@mui/material";

import routeStyles from "../Styles/routeStyles";
import { useLocation, useNavigate } from "react-router-dom";
import strFormat from "../Helpers/strFormat";

const UnderProgress = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const route = strFormat({ str: path, replace: "/", replacement: "" });
  return (
    <Box sx={routeStyles.underProgressWrapper}>
      <Typography sx={routeStyles.underProgressText}>
        The route {route ? `" ${route} "` : ""} you're looking for is still
        under progress. Please visit after sometime. Thanks!
      </Typography>
      <Button onClick={() => navigate(-1)}>Go back</Button>
    </Box>
  );
};

export default UnderProgress;
