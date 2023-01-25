import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';


const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;


        console.log(email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('create user successfully')
                navigate('/')

            })

            .then(err => {
                console.error('sign up error', err)
            })


    }
    return (
        <div className=' flex justify-center '>
            <div className=' w-96 border-purple-700  p-6'>
                <form onSubmit={handleSubmit}  >
                    <h2 className=' font-bold text-4xl text-pink-500 text-center p-3'>SignUp</h2>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">signup</button>
                            </div>
                        </div>
                    </div>
                </form>


            </div>



        </div>
    );
};

export default SignUp;