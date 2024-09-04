import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext'; // Assuming you have a UserContext that provides user data
import { Link } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';
import { CiSettings } from 'react-icons/ci';
import { IoHelpOutline } from 'react-icons/io5';
import { FaFacebookMessenger } from "react-icons/fa6";
import { TbWorldSearch } from "react-icons/tb";
import { RiDashboardFill } from 'react-icons/ri';
import { fetchUserProfile } from '../../service/api'; 
import { VscRepoForked } from "react-icons/vsc";
import { GiPowerButton } from "react-icons/gi";
import { FaIdCard } from "react-icons/fa";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { authTokens } = useAuth(); // Access auth tokens from AuthContext
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await fetchUserProfile(authTokens); 
        setProfile(response.data || {}); 
      } catch (err) {
        console.error('Failed to fetch user profile', err);
      }
    };

    if (authTokens) {
      getUserProfile();
    }
  }, [authTokens]);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`bg-blue-950 text-white ${collapsed ? 'w-16' : 'w-64'} min-h-screen flex flex-col transition-all duration-300 overflow-y-auto`}>
      <div className="p-6 flex items-center justify-between">
        <div className={`text-1xl font-bold flex items-left ${collapsed ? 'hidden' : ''}`}>
          
        <VscRepoForked size={50}/>  
         
        </div>
        <button onClick={toggleSidebar} className="text-white">
          {collapsed ? <IoMdMenu size={28}/> : <IoMdMenu size={28}/>}
        </button>
      </div>
      {!collapsed && <div className="text-1xl px-6 py-2 text-sm">Intranet</div>}

      <nav className="mt-4 flex-grow">

        <Link to="/search" className={`px-6 py-3 hover:bg-purple-900 flex items-center ${collapsed ? 'justify-center' : ''}`} title={collapsed ? 'Meetings' : ''}>
          <span className={collapsed ? '' : 'mr-3'}>
            <TbWorldSearch size={28}/>
          </span>
          {!collapsed && 'Search'}
        </Link>
        
        <Link to="/dashboard" className={`px-6 py-3 hover:bg-purple-900 flex items-center ${collapsed ? 'justify-center' : ''}`} title={collapsed ? 'Dashboard' : ''}>
          <span className={collapsed ? '' : 'mr-3'}>
            <RiDashboardFill size={28}/>
          </span>
          {!collapsed && 'Dashboard'}
        </Link>


        <Link to="/directory" className={`px-6 py-3 hover:bg-purple-900 flex items-center ${collapsed ? 'justify-center' : ''}`} title={collapsed ? 'Actions' : ''}>
          <span className={collapsed ? '' : 'mr-3'}>
            <FaIdCard size={28}/>
          </span>
          {!collapsed && 'Directory'}
        </Link>

        <Link to="/notifications" className={`px-6 py-3 hover:bg-purple-900 flex items-center ${collapsed ? 'justify-center' : ''}`} title={collapsed ? 'Notifications' : ''}>
          <span className={collapsed ? '' : 'mr-3'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
          </span>
          {!collapsed && 'Notifications'}
        </Link>

        <Link to="/messenger" className={`px-6 py-3 hover:bg-purple-900 flex items-center ${collapsed ? 'justify-center' : ''}`} title={collapsed ? 'Meetings' : ''}>
          <span className={collapsed ? '' : 'mr-3'}>
            <FaFacebookMessenger size={28} />
          </span>
          {!collapsed && 'Messenger'}
        </Link>

        <Link to="/resources" className={`px-6 py-3 hover:bg-purple-900 flex items-center ${collapsed ? 'justify-center' : ''}`} title={collapsed ? 'Resources' : ''}>
          <span className={collapsed ? '' : 'mr-3'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a2.25 2.25 0 0 1 2.19 1.506L14.793 9h-4.27L9.53 6.255A2.25 2.25 0 0 0 7.64 4.5H6A2.25 2.25 0 0 0 3.75 6v3.776Z" />
            </svg>
          </span>
          {!collapsed && 'Resources'}
        </Link>

        <Link to="/settings" className={`px-6 py-3 hover:bg-purple-900 flex items-center ${collapsed ? 'justify-center' : ''}`} title={collapsed ? 'Settings' : ''}>
          <span className={collapsed ? '' : 'mr-3'}>
            <CiSettings size={28}/>
          </span>
          {!collapsed && 'Settings'}
        </Link>


        <Link to="/help" className={`px-6 py-3 hover:bg-purple-900 flex items-center ${collapsed ? 'justify-center' : ''}`} title={collapsed ? 'Settings' : ''}>
          <span className={collapsed ? '' : 'mr-3'}>
          <IoHelpOutline size={28} />
          </span>
          {!collapsed && 'Help'}
        </Link>


        <Link to="/profile" className={`px-6 py-3 hover:bg-purple-900 flex items-center ${collapsed ? 'justify-center' : ''}`} title={collapsed ? 'Profile' : ''}>
          <div className={`w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-blue-950 font-bold ${collapsed ? 'mr-0' : 'mr-3'}`}>
            {profile ? profile.initials : 'N/A'}
          </div>
          {!collapsed && (
            <div>
              <div className="font-semibold">{profile ? profile.name : 'Loading...'}</div>
              
              <div className="text-xs text-gray-400">View Profile</div>

              <a href="javascript:void(0)"
              class="text-black hover:text-blue-600 text-[15px] flex items-center hover:bg-white rounded px-4 py-3 transition-all">

             <GiPowerButton />
              <span>Logout</span>
            </a>
         
            </div>
          )}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
