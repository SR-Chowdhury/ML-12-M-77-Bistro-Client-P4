import React from 'react';
import ReactHelmet from '../../../Components/ReactHelmet/ReactHelmet';
import useCart from '../../../Hooks/useCart';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import './MyCart.css';

const MyCart = () => {

    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/carts/${id}`, {
            method: 'DELETE'
        })
        .then(data => console.log(data))
        .catch(err => console.log(err.message))
    }

    return (
        <div className='w-full px-10'>
            <ReactHelmet title={'My Cart'} />
            <SectionTitle subHeading={'Excelent'} Heading={'My Cart'} />
            <div className='bg-base-100'>
                <div className="flex justify-between font-bold uppercase mb-5">
                    <h1>Total Booking: ${cart.length}</h1>
                    <h1>Total Price: ${totalPrice}</h1>
                    <button className="btn btn-warning btn-sm">Pay</button>
                </div>
                <div className=''>
                    <div className=" w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    cart.map((item, index) =>
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{item.name}</td>
                                            <td>${item.price}</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">Edit</button>
                                                <button onClick={ () => handleDelete(item._id)} className="btn btn-ghost text-red-500 btn-xs">Delete</button>
                                            </th>
                                        </tr>

                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default MyCart;