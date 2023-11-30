import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Button, TextField, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';



const Register = () => {

    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('user profile info updated')
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user inserted successfully')
                                    reset();
                                    Swal.fire({
                                        position: 'center-right',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
    };


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                // axiosPublic.post('/users', user)
                // .then(res => {
                //     if(res.data.insertedId){
                //         console.log("successfull");
                //         navigate(location?.state ? location.state : "/");
                //     }
                // })
                updateUserProfile(user.name, user.photoURL)
                .then( () => {
                    const userInfo = {
                        name: user.name,
                        email: user.email
                    }
                    axiosPublic.post('/users', userInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                console.log('user inserted successfully')
                                reset();
                                Swal.fire({
                                    position: 'center-end',
                                    icon: 'success',
                                    title: 'User created successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/');
                            }
                        })
                    console.log(user.displayName, user.photoURL);
                    // navigate(location?.state ? location.state : "/");
                })
                .catch(error => {
                    const errorMessage = error.message;
                    console.log(errorMessage);
    
                })
            })
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <div>
                <Typography variant="h5" color="green" fontSize="40px" textAlign="center" fontWeight="600" gutterBottom>
                    Register
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="Name"
                        // maxWidth="100px"
                        sx={{ width: "300px", marginBottom: "20px" }}
                        {...register("name", { required: "Name is required" })}
                    >
                    </TextField>
                    <br />
                    <TextField
                        label="Photo URL"
                        // maxWidth="100px"
                        sx={{ width: "300px", marginBottom: "20px" }}
                        {...register("photoURL", { required: "Name is required" })}
                    >
                    </TextField>
                    <br />
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
                        Register
                    </Button>
                </form>
                <Typography marginTop="20px" marginBottom="15px" sx={{ display: "flex", gap: "10px" }}>
                    <GoogleIcon color="blue" sx={{ color: "blue" }}></GoogleIcon>
                    Sign up with <Link style={{ textDecoration: "none" }} onClick={handleGoogleSignIn}><span style={{ fontSize: "16px", fontWeight: "700", color: "blue" }}>Google</span></Link>
                </Typography>
                {/* <Divider variant="inset" component=""></Divider> */}
                <Typography marginTop="20px" marginBottom="15px" >
                    Already have an account?
                    <br />
                    Go to <span style={{ fontSize: "16px", fontWeight: "700", color: "blue" }}><Link to="/login" style={{ textDecoration: "none" }}>Login</Link></span> page.
                </Typography>
            </div>
        </div>
    );
};

export default Register;