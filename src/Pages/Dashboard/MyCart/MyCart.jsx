import React from 'react';
import ReactHelmet from '../../../Components/ReactHelmet/ReactHelmet';
import useCart from '../../../Hooks/useCart';

const MyCart = () => {

    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

    return (
        <div>
            <ReactHelmet title={'My Cart'}/>
            <div>
                <div className="flex justify-between uppercase gap-5">
                    <h1>Total Booking: ${cart.length}</h1>
                    <h1>Total Price: ${totalPrice}</h1>
                    <button className="btn btn-warning btn-sm">Pay</button>
                </div>
            </div>
        </div>
    );
};

export default MyCart;