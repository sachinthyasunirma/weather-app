import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutBtn from './LogoutBtn';

function TopNavbar() {
    const {isAuthenticated} = useAuth0();

    return (
      <div className='flex mx-4 flex-row-reverse'>
        {isAuthenticated ? <LogoutBtn/>:""}
      </div>
    )
}

export default TopNavbar