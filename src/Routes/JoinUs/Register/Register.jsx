import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Button, TextField, Typography } from '@mui/material';


const Register = () => {

    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
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
                                        position: 'top-end',
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
                        sx={{width: "300px", marginBottom: "20px"}}
                        {...register("name", { required: "Name is required" })}
                    >
                    </TextField>
                    <br />
                    <TextField
                        label="Photo URL"
                        // maxWidth="100px"
                        sx={{width: "300px", marginBottom: "20px"}}
                        {...register("photoURL", { required: "Name is required" })}
                    >
                    </TextField>
                    <br />
                    <TextField
                        label="Email"
                        // maxWidth="100px"
                        sx={{width: "300px", marginBottom: "20px"}}
                        {...register("email", { required: "Name is required" })}
                    >
                    </TextField>
                    <br />
                    <TextField
                        label="Password"
                        // maxWidth="100px"
                        sx={{width: "300px", marginBottom: "20px"}}
                        {...register("password", { required: "Name is required" })}
                    >
                    </TextField>
                    <br />
                    <Button type="submit" variant="contained" color="success" fullWidth sx={{padding: "10px"}}>
                        Register
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Register;