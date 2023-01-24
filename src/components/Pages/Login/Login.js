import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const Login = () => {

    const { setCurrentUser } = useContext(AuthContext);
    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;

        const phone = form.phone.value;
        const pass = form.password.value;

        const user = {
            phone,
            pass
        }
        console.log(user)

        fetch(`http://localhost:5000/getUser?phone=${phone}&pass=${pass}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data._id) {
                    setCurrentUser(user)
                }
            })


    }



    return (
        <div className=' flex justify-center '>
            <div className=' w-96 border-purple-700  p-6'>
                <form onSubmit={handleSubmit} >
                    <h2 className=' font-bold text-4xl text-pink-500 text-center p-3'>LogIn</h2>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" placeholder="Phone" name='phone' className="input input-bordered" />
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
    );
};

export default Login;