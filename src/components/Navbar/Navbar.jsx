import { Link, NavLink } from 'react-router-dom';
import icon from './../../assets/icons8-icon-64.png'

const Navbar = () => {
    return (

        <div className='flex items-center justify-between'>
            <div className='flex items-center mt-5 gap-3'>
                <img src={icon} alt="" />
                <h3 className="text-4xl font-medium">Flow Bite</h3>
            </div>
            <div className=''>
                <NavLink className='mr-10'>About</NavLink>
                <NavLink className='mr-10'>Home</NavLink>
                <NavLink className='mr-10'>Login</NavLink>
            </div>
            <div>
                <button className='btn'>Doc's</button>
            </div>
        </div>

    );
};

export default Navbar;