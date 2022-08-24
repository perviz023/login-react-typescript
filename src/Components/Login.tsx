import { TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { Controller, useForm, SubmitHandler, useFormState} from "react-hook-form";
import { passwordValidation, loginValidation } from "./validation"

interface ISignForm {
  login: string;
  password: string
}

const Login = () => {
  const { handleSubmit, control } = useForm<ISignForm>();
  const { errors } = useFormState({
    control
  })

  const onSubmit: SubmitHandler<ISignForm> = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={400}
          alignItems="center"
          justifyContent="center"
          margin={"auto"}
          marginTop={10}
          padding={5}
          borderRadius={5}
          boxShadow={"5px 5px 5px 5px  #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 10px 10px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            Login
          </Typography>
          <Controller
            control={control}
            name="login"
            rules={loginValidation}
            render={({ field }) => (
              <TextField
                margin="normal"
                type={"email"}
                variant="outlined"
                placeholder="E-mail"
                onChange={(e) => field.onChange(e)}
                value={field.value}
                error= {!!errors.login?.message}
                helperText = {errors.login?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={passwordValidation}
            render={({ field }) => (
              <TextField
                margin="normal"
                type={"password"}
                variant="outlined"
                placeholder="Password"
                onChange={(e) => field.onChange(e)}
                value={field.value}
                error= {!!errors.password?.message}
                helperText = {errors.password?.message}
              />
            )}
          />

          <Button
            type="submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
          >
            Login
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
