import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Login = () => {

    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)

            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('log in user successfully')
                navigate(from, { replace: true })

            })
            .then(err => console.error('log in error', err))





    }



    return (
        <div>
            <div className=' flex justify-center '>
                <div className=' w-96 border-purple-700  p-6'>
                    <form onSubmit={handleSubmit} >
                        <h2 className=' font-bold text-4xl text-pink-500 text-center p-3'>LogIn</h2>

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <p href="#" className="label-text-alt pt-1 link link-hover">Forgot password?</p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className=' lg:absolute top-20 text-lg right-4'>
                <p> Admin Credential </p>
                <p> Email : admin@gmail.com</p>
                <p>password : azsxdc</p>
            </div>
        </div>
    );
};

export default Login;