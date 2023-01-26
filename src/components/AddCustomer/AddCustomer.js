import React from 'react';



import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddCustomer = () => {


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

                    const user = {
                        name,
                        password,
                        email,
                        photo: imgData.data.url,

                    }

                    fetch(`http://localhost:5000/users`, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            toast.success('customer added')
                            navigate('/dashbord/customers')


                        })


                }
            })




    }


    return (
        <div className=' flex justify-center '>
            <div className=' w-96 lg:w-3/4 mx-auto border-purple-700 '>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <h2 className=' font-bold text-4xl text-pink-500 text-center p-3'>AddCustomer</h2>

                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
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
                                    type="file" className="file-input file-input-bordered w-full" />
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
                                <button type='submit' className="btn w-full mx-auto btn-primary">Add Customer</button>
                            </div>
                        </div>
                    </div>
                </form>


            </div>



        </div>
    );
};

export default AddCustomer;