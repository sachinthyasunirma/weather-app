import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutBtn() {
    const { logout } = useAuth0();
    return (
        <button
            className='text-white py-2 px-2 rounded-md text-sm font-medium hover:bg-gray-500'
            onClick={() =>
                logout({
                    returnTo: window.location.origin,
                })
            }
        >
            Log Out
        </button>
    )
}

export default LogoutBtn