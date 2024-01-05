import React from "react";

import {
  Button,
  IconButton,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";

import { useAppDispatch } from "../../Redux/hooks";
import { setCurrentUser } from "../../Redux/Reducers.ts/userSlice";
import authStyles from "../../Styles/authStyles";

import Background from "../../Layout/Background";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const stateCircuvent = () => {
    dispatch(
      setCurrentUser({
        first_name: "Siddhartha Reddy",
        last_name: "Machi",
        username: "siddhartha.machi",
        role: "user",
      })
    );
    navigate("/overview");
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  //   const handleMouseDownPassword = (
  //     event: React.MouseEvent<HTMLButtonElement>
  //   ) => {
  //     event.preventDefault();
  //   };

  return (
    <Background
      props={{
        firstCircleStyles: authStyles.leftCircle,
        secondCircleStyles: authStyles.rightCircle,
      }}
    >
      <Paper sx={authStyles.loginWrapper}>
        {/* <Box>
          <SITE_ICON />
          <Typography>{GLOBAL_CONSTANTS.title}</Typography>
        </Box> */}
        <OutlinedInput
          type="email"
          placeholder="mirana@bookery.com"
          fullWidth
          startAdornment={<EmailRoundedIcon />}
          inputProps={{
            sx: {
              pl: 1,
            },
          }}
        />

        <OutlinedInput
          type={showPassword ? "text" : "password"}
          placeholder="Mirana@3745"
          fullWidth
          startAdornment={<KeyRoundedIcon />}
          endAdornment={
            <IconButton onClick={handleClickShowPassword}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          }
          inputProps={{
            sx: {
              pl: 1,
            },
          }}
        />
        <Button fullWidth variant="contained" onClick={stateCircuvent}>
          Sign In
        </Button>

        <Typography>
          Don't have an account ? <Button>Sign Up</Button> here!
        </Typography>
      </Paper>
    </Background>
  );
};

export default Login;
