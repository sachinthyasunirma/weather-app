import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {FiLogOut} from 'react-icons/fi';

function LogoutBtn() {
    const { logout } = useAuth0();
    return (
        <button
            className='flex text-white py-2 px-2 rounded-md text-sm font-medium hover:bg-gray-500'
            onClick={() =>
                logout({
                    returnTo: window.location.origin,
                })
            }
        >
            <FiLogOut/> Log Out
        </button>
    )
}

export default LogoutBtn