import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import GoogleIcon from '@mui/icons-material/Google';
import Swal from "sweetalert2";

const Login = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn,  googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
                // updateUserProfile(data.name, data.photoURL)
            })
            .catch(error => console.log(error))
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }


    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <div>
                <Typography variant="h5" color="green" fontSize="40px" textAlign="center" fontWeight="600" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="Email"
                        // maxWidth="100px"
                        sx={{ width: "300px", marginBottom: "20px" }}
                        {...register("email", { required: "Name is required" })}
                    >
                    </TextField>
                    <br />
                    <TextField
                        label="Password"
                        // maxWidth="100px"
                        sx={{ width: "300px", marginBottom: "20px" }}
                        {...register("password", { required: "Name is required" })}
                    >
                    </TextField>
                    <br />
                    <Button type="submit" variant="contained" color="success" fullWidth sx={{ padding: "10px" }}>
                        Login
                    </Button>
                </form>
                <Typography marginTop="20px" marginBottom="15px" sx={{ display: "flex", gap: "10px" }}>
                    <GoogleIcon color="blue" sx={{ color: "blue" }}></GoogleIcon>
                    Sign in with <Link style={{ textDecoration: "none" }} onClick={handleGoogleSignIn}><span style={{ fontSize: "16px", fontWeight: "700", color: "blue" }}>Google</span></Link>
                </Typography>
                {/* <Divider variant="inset" component=""></Divider> */}
                <Typography marginTop="20px" marginBottom="15px" >
                    Do not have an account?
                    <br />
                    Go to <span style={{ fontSize: "16px", fontWeight: "700", color: "blue" }}><Link to="/register" style={{ textDecoration: "none" }}>Register</Link></span> page.
                </Typography>
            </div>
        </div>
    );
};

export default Login;