import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet/>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to={''}>Payment History</Link></li>
                        <li><Link to={''}>My Cart</Link></li>
                        <div className="divider"></div> 
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/menu'}>Menu</Link></li>
                        <li><Link to={'/order'}>Order</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;