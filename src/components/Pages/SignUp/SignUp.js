import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';


const SignUp = () => {

    const { setCurrentUser } = useContext(AuthContext);

    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const pass = form.password.value;

        const user = {
            name,
            phone,
            pass
        }
        console.log(user)
        fetch('http://localhost:5000/addUser', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.acknowledged) {

                    setCurrentUser(user)

                }

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
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" placeholder="Phone" name='phone' className="input input-bordered" />
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