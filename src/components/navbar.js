import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-full h-16 bg-slate-700 flex p-6 justify-between text-base">
            <div className="flex items-center">
                <img src="https://gametora.com/images/umamusume/og/default.png" alt="site logo" className='h-12'/>
                <h1 className=' font-bold'>KaniCasino</h1>
            </div>
            <div className="flex gap-6 items-center">
                <div>profile</div>
                <div className="flex gap-2 border border-gray-500 rounded py-2 px-5"><span className="text-gray-400">$</span><span className='font-semibold'>0.00</span></div>
                <button className='rounded bg-red-500 py-2 px-5'>Deposit</button>
            </div>
        </nav>
    );
}

export default Navbar;