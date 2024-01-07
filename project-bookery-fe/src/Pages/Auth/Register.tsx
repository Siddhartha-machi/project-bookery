import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { setCurrentUser } from "../../Redux/Reducers.ts/userSlice";
import authStyles from "../../Styles/authStyles";
import Background from "../../Layout/Background";
import GLOBAL_CONSTANTS, { SITE_ICON } from "../../Global/Constants";
import { authenticateUser } from "../../Api/APIHandlers/userHandlers";
import {
  checkPasswordStrength,
  validateEmail,
} from "../../Helpers/StringFunctions";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { role } = useAppSelector((store) => store.user.currentUser);
  const [formState, setFormState] = React.useState({
    email: {
      value: "",
      error: false,
    },
    password: {
      value: "",
      error: false,
    },
    confirmPassword: {
      value: "",
      error: false,
    },
  });
  const [responseError, setResponseError] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const passwordChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormState((prev) => ({
      email: { ...prev.email },
      confirmPassword: {
        ...prev.confirmPassword,
      },
      password: {
        value: e.target.value,
        error: false,
      },
    }));
  };
  const confrimPasswordChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormState((prev) => ({
      email: { ...prev.email },
      password: {
        ...prev.password,
      },
      confirmPassword: {
        value: e.target.value,
        error: false,
      },
    }));
  };
  const emailChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormState((prev) => ({
      password: { ...prev.password },
      confirmPassword: {
        ...prev.confirmPassword,
      },
      email: {
        value: e.target.value,
        error: false,
      },
    }));
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const switchFocus = (
    e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      let focusFieldName = "password";
      if (e.currentTarget.id === "password") {
        focusFieldName = "confirm-password";
      }
      if (e.currentTarget.id === "confirm-password") {
        focusFieldName = "signup";
      }

      e.preventDefault();
      document.getElementById(focusFieldName)?.focus();
    }
  };

  const navigateToSignIn = () => {
    navigate("/signin");
  };

  const runValidations = () => {
    let failed = false;
    const newState = { ...formState };
    if (!validateEmail(formState.email.value)) {
      newState.email.error = true;
      failed = true;
    }
    if (!checkPasswordStrength(formState.password.value)) {
      newState.password.error = true;
      failed = true;
    }
    if (formState.password.value !== formState.confirmPassword.value) {
      newState.confirmPassword.error = true;
      failed = true;
    }
    setFormState(newState);
    return failed;
  };

  const onSubmitHandler = async () => {
    if (runValidations()) {
      return;
    }
    const response = await authenticateUser({
      loading: (loadVal) => setLoading(loadVal),
      dispatch: (data) => dispatch(setCurrentUser(data)),
      data: {
        formData: {
          email: formState.email.value,
          password: formState.password.value,
        },
        type: "user-register",
      },
    });
    if (response?.status === 200) {
      navigate("/overview");
    }
    setResponseError(true);
  };

  const disableSubmit = React.useMemo(() => {
    return formState.email.value === "" || formState.password.value === "";
  }, [formState.email.value, formState.password.value]);

  React.useEffect(() => {
    if (role) {
      return navigate("/overview");
    }
  }, [role, navigate]);

  return (
    <Background
      props={{
        firstCircleStyles: authStyles.leftCircle,
        secondCircleStyles: authStyles.rightCircle,
      }}
    >
      <Paper sx={authStyles.loginWrapper}>
        <Box sx={authStyles.header}>
          <SITE_ICON sx={{ fontSize: "50px" }} />
          <Typography sx={authStyles.loginTitle}>
            SignUp for {GLOBAL_CONSTANTS.title}
          </Typography>
        </Box>

        {responseError && (
          <Typography sx={authStyles.serverError}>
            <ErrorRoundedIcon />
            Unable to complete the registration, try after sometime
          </Typography>
        )}
        <Box sx={authStyles.fieldWrapper}>
          <Typography
            sx={authStyles.labelText({ check: formState.email.error })}
          >
            Email
          </Typography>
          <InputBase
            id="email"
            type="email"
            error={formState.email.error}
            sx={authStyles.textField}
            value={formState.email.value}
            autoFocus
            onChange={emailChangeHandler}
            onKeyDown={switchFocus}
            placeholder="mirana@bookery.com"
            fullWidth
            startAdornment={<EmailRoundedIcon sx={authStyles.adornmentIcon} />}
            inputProps={{
              "aria-label": "user email field",
              style: {
                padding: "12px 0px 12px 8px",
                fontWeight: "bold",
              },
            }}
          />
          {formState.email.error && (
            <Typography sx={authStyles.errorText}>
              Invalid email provided
            </Typography>
          )}
        </Box>
        <Box sx={authStyles.fieldWrapper}>
          <Typography
            sx={authStyles.labelText({ check: formState.password.error })}
          >
            Password
          </Typography>
          <InputBase
            id="password"
            type={showPassword ? "text" : "password"}
            error={formState.password.error}
            sx={{ ...authStyles.textField, ...authStyles.password }}
            placeholder="Mirana@8263"
            value={formState.password.value}
            fullWidth
            onChange={passwordChangeHandler}
            onKeyDown={switchFocus}
            startAdornment={<KeyRoundedIcon sx={authStyles.adornmentIcon} />}
            endAdornment={
              <IconButton
                onClick={handleClickShowPassword}
                sx={authStyles.adornmentIconButton}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            }
            inputProps={{
              "aria-label": "user password field",
              style: {
                padding: "12px 0px 12px 8px",
                fontWeight: "bold",
              },
            }}
          />
          {formState.password.error && (
            <Typography sx={authStyles.errorText}>
              Password must be atleast 8 characters long and contain atleast one
              capital letter, one special character and a number
            </Typography>
          )}
        </Box>
        <Box sx={authStyles.fieldWrapper}>
          <Typography
            sx={authStyles.labelText({
              check: formState.confirmPassword.error,
            })}
          >
            Confirm password
          </Typography>
          <InputBase
            id="confirm-password"
            type={showPassword ? "text" : "password"}
            error={formState.confirmPassword.error}
            sx={{ ...authStyles.textField, ...authStyles.password }}
            placeholder="Mirana@8263"
            value={formState.confirmPassword.value}
            fullWidth
            onChange={confrimPasswordChangeHandler}
            onKeyDown={switchFocus}
            startAdornment={<KeyRoundedIcon sx={authStyles.adornmentIcon} />}
            endAdornment={
              <IconButton
                onClick={handleClickShowPassword}
                sx={authStyles.adornmentIconButton}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            }
            inputProps={{
              "aria-label": "user password field",
              style: {
                padding: "12px 0px 12px 8px",
                fontWeight: "bold",
              },
            }}
          />
          {formState.confirmPassword.error && (
            <Typography sx={authStyles.errorText}>
              Password and confirm password did not match
            </Typography>
          )}
        </Box>
        <Button
          id="signup"
          fullWidth
          disabled={disableSubmit}
          variant="contained"
          onClick={onSubmitHandler}
          sx={authStyles.submitButton}
        >
          {loading ? (
            <CircularProgress size="1.5rem" sx={{ color: "#fff" }} />
          ) : (
            "SignUp"
          )}
        </Button>

        <Typography sx={{ textAlign: "center", width: "100%" }}>
          Already have an account ?
          <Button
            sx={authStyles.inLineButton}
            disableRipple
            onClick={navigateToSignIn}
          >
            SignIn
          </Button>
          here!
        </Typography>
      </Paper>
    </Background>
  );
};

export default Register;
