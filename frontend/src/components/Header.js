import React, { useContext, useState } from 'react';
import Logo from './Logo';
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';

const Header = () => {
  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };

  return (
    <header className='h-16 shadow-md bg-gray-900 fixed w-full z-40 text-white'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        
        {/* Logo */}
        <div>
          <Link to={"/"}>
            <Logo w={160} h={60} color="#FF9900" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className='hidden lg:flex items-center w-full max-w-lg border rounded-md focus-within:shadow bg-white text-gray-900 pl-3'>
          <input 
            type='text' 
            placeholder='Search Gizmora...' 
            className='w-full outline-none p-2 bg-transparent' 
            onChange={handleSearch} 
            value={search} 
          />
          <button className='bg-yellow-500 px-4 py-2 rounded-r-md text-black hover:bg-yellow-600'>
            <GrSearch />
          </button>
        </div>

        {/* Right Side Icons */}
        <div className='flex items-center gap-6'>

          {/* User Profile */}
          <div className='relative flex justify-center'>
            {user?._id && (
              <div className='text-3xl cursor-pointer relative flex justify-center' onClick={() => setMenuDisplay(prev => !prev)}>
                {user?.profilePic ? (
                  <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                ) : (
                  <FaRegCircleUser />
                )}
              </div>
            )}

            {menuDisplay && (
              <div className='absolute bg-white text-black top-12 right-0 h-fit p-2 shadow-lg rounded'>
                <nav>
                  {user?.role === ROLE.ADMIN && (
                    <Link to={"/admin-panel/all-products"} className='whitespace-nowrap hidden md:block hover:bg-gray-200 p-2' onClick={() => setMenuDisplay(prev => !prev)}>Admin Panel</Link>
                  )}
                </nav>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          {user?._id && (
            <Link to={"/cart"} className='text-2xl relative'>
              <span><FaShoppingCart /></span>
              <div className='bg-yellow-500 text-black w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                <p className='text-sm'>{context?.cartProductCount}</p>
              </div>
            </Link>
          )}

          {/* Login / Logout */}
          <div>
            {user?._id ? (
              <button onClick={handleLogout} className='px-3 py-1 rounded-md bg-yellow-500 text-black hover:bg-yellow-600'>Logout</button>
            ) : (
              <Link to={"/login"} className='px-3 py-1 rounded-md bg-yellow-500 text-black hover:bg-yellow-600'>Login</Link>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
