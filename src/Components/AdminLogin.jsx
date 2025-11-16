import {useForm} from "react-hook-form";
import {useState} from "react";
import axios from "axios";
import "../Styles/AdminLoginStyles.css";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [serverError,setServerError] = useState(null);
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        }
    } = useForm();

    const onSubmit = async(data) => {
        console.log(data)
        try {
            setServerError(null);

            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/login`,
                data, 
                {withCredentials: true});

            console.log("Login success:", response.data);

            if(response.status === 200) {   //if successful login
                navigate('/admin/dashboard')
            }
        } catch (err) {
            console.error("Login error:", err);
            setServerError(err?.response?.data?.message || "Something went wrong. Please try again.");
        }
    };
    console.log('the backend url in admin login is ',import.meta.env.VITE_BACKEND_URL)

    return (
        <div className="login-full-container">
            <div className="login-dialog-box">
                <div className="dialog-box-title-area">Login</div>
                <form className="dialog-box-content-area" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="email"
                        placeholder="Enter email"
                        {...register("email", { required: true })}
                        className="login-input"/> {errors.email && (
                        <span className="error-text">Email is required</span>
                    )}

                    <input
                        type="password"
                        placeholder="Enter password"
                        {...register("password", { required: true })}
                        className="login-input"/> {errors.password && (
                        <span className="error-text">Password is required</span>
                    )}

                    {serverError && (
                        <div className="server-error-text">{serverError}</div>
                    )}

                    <input 
                        type="submit" 
                        className="login-submit-btn" 
                        value='Submit'
                        disabled={isSubmitting}
                    />

                </form>
            </div>
        </div>
    );
};

export default AdminLogin;