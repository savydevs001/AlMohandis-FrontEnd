import { NavLink, useNavigate } from 'react-router-dom';
import frame from '../../assets/LoginImg.png';
import CustomNavbar from '../Navbar';
import Footer from '../Footer';
import { useState } from 'react';
import { useLoginMutation } from '../../redux/api/auth/auth';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';

const Login = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [login] = useLoginMutation();
    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await login({ phone, password });
            if (res.data?.token) {
                // Store token and user type in cookies
                Cookies.set('token', res.data.token, { expires: 1 / 24 }); // Set cookie with 1 hour expiration
                Cookies.set('userType', res.data.user.type, { expires: 1 / 24 }); // Store user type
                enqueueSnackbar('Login successful!', { variant: 'success' });
                // Check user type and navigate accordingly
                if (res.data.user.type === 'student') {
                    navigate('/StudentDashboard');
                } else {
                    navigate('/dashboard');
                }
            }
        } catch (error) {
            enqueueSnackbar('Login failed. Please check your credentials.', { variant: 'error' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <CustomNavbar />
            <div className='flex flex-col justify-between w-full gap-3 lg:gap-0 p-7 h-fit lg:flex-row'>
                <div className='form-data w-full lg:w-[45%] h-fit py-16 px-6 bg-[#F7EFE2] rounded-lg '>
                    <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold' htmlFor="">Phone Number</label>
                            <input
                                className='w-full py-2 rounded-md'
                                type="text"
                                placeholder='Enter your Mobile Number'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className='flex items-center justify-end gap-3 transform -translate-y-4'>
                            <p className='font-semibold text-tertiary'>Forget Password</p>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold' htmlFor="">Password</label>
                            <input
                                className='w-full rounded-md '
                                type="password"
                                placeholder='Enter Your Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className='w-full px-4 py-3 text-lg font-semibold rounded-lg bg-primary text-txtColor' disabled={loading}>
                            Login
                        </button>
                        <div className='flex items-center justify-center gap-2'>
                            <p className='text-sm font-semibold'>Already have an account?</p>
                            <NavLink to={"/signup"} className='font-semibold text-primary'>SignUp</NavLink>
                        </div>
                    </form>
                </div>
                <div className='form-data w-full lg:w-[45%]'>
                    <img className='w-full h-[90%]' src={frame} alt="" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;