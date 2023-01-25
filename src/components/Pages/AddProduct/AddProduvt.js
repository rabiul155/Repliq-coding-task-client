import React from 'react';

const AddProduvt = () => {
    return (
        <div className=' w-1/2 mx-auto '>
            <div className=' grid md:grid-cols-2 gap-4 my-2'>
                <div className=' flex flex-col'>
                    <label className=' text-md px-1'>Name</label>
                    <input type="text" placeholder="Product Name" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className=' flex flex-col'>
                    <label className=' text-md px-1'>Price</label>
                    <input type="text" placeholder="Product Price" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
            </div>
            <div className=' grid md:grid-cols-2 gap-4 my-2'>
                <div className=' flex flex-col'>
                    <label className=' text-md px-1'>Display</label>
                    <select className="select select-primary w-full max-w-xs">
                        <option selected>6.7 inch</option>
                        <option>6.6 inch</option>
                        <option>6.5 inch</option>
                        <option>6.4 inch</option>

                    </select>
                </div>
                <div className=' flex flex-col'>
                    <label className=' text-md px-1'>Ram</label>
                    <select className="select select-primary w-full max-w-xs">
                        <option selected>8 GB</option>
                        <option>6 GB</option>
                        <option>4 GB</option>

                    </select>
                </div>
            </div>
            <div className=' grid md:grid-cols-2 gap-4 my-2'>
                <div className=' flex flex-col'>
                    <label className=' text-md px-1'>Storage</label>
                    <select className="select select-primary w-full max-w-xs">
                        <option selected>128GB</option>
                        <option>64 GB</option>
                        <option>32 GB</option>


                    </select>
                </div>
                <div className=' flex flex-col'>
                    <label className=' text-md px-1'>Batery</label>
                    <select className="select select-primary w-full max-w-xs">
                        <option selected>5000 mah</option>
                        <option>4500 mah</option>
                        <option>4000 mah</option>

                    </select>
                </div>
            </div>
            <div className=' grid md:grid-cols-2 gap-4 my-2'>
                <div className=' flex flex-col'>
                    <label className=' text-md px-1'>Camera</label>
                    <select className="select select-primary w-full max-w-xs">
                        <option selected>128MP</option>
                        <option>64 MP</option>
                        <option>32 MP</option>


                    </select>
                </div>
                <div className=' flex flex-col'>
                    <label className=' text-md px-1'>Processor</label>
                    <input type="text" placeholder="Processor Name" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default AddProduvt;