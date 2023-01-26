import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { json, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { useForm } from "react-hook-form";


const SignUp = () => {

    const { createUser, updateUser } = useContext(AuthContext);

    const { register, handleSubmit } = useForm();

    const imageHostingKey = '60a0534fb81af8024326073b2526de82';
    const navigate = useNavigate();


    const onSubmit = data => {
        console.log(data);
        const name = data.name;
        const email = data.email;
        const password = data.password;

        const image = data.picture[0];
        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    createUser(email, password)
                        .then(result => {
                            const user = result.user;
                            console.log(user);
                            toast.success('create user successfully')
                            navigate('/')

                            const userInfo = {
                                displayName: name,
                                photoURL: imgData.data.url
                            }

                            updateUser(userInfo)
                                .then(() => {
                                    const user = {
                                        name,
                                        password,
                                        email,
                                        photo: imgData.data.url,

                                    }

                                    fetch(`https://replic-coding-test-server.vercel.app/users`, {
                                        method: "POST",
                                        headers: {
                                            'content-type': 'application/json'
                                        },
                                        body: JSON.stringify(user)
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            console.log(data)

                                        })


                                })
                                .catch(err => {
                                    console.log('update user error ', err)
                                })

                        })

                        .then(err => {
                            console.error('sign up error', err)
                        })



                }
            })




    }





    return (
        <div className=' flex justify-center '>
            <div className=' w-96 border-purple-700 '>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <h2 className=' font-bold text-4xl text-pink-500 text-center p-3'>SignUp</h2>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    {...register("name")}
                                    type="text" placeholder="Name" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input required
                                    {...register("picture")}
                                    type="file" className="file-input file-input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    {...register("email")}
                                    type="email" placeholder="Email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    {...register("password")}
                                    required type="password" placeholder="password" className="input input-bordered" />
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