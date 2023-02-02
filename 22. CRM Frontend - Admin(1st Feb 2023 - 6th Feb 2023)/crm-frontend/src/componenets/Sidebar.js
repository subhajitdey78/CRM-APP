import { CSidebar, CSidebarNav, CNavTitle, CNavItem } from '@coreui/react';
// import '../styles/sidebar.css'
import { Link } from 'react-router-dom';
import React from 'react';
function Sidebar() {
    const logout = () => {
        localStorage.clear()
        window.location.href = "/"
    }

    return (
        <CSidebar unfoldable className= 'vh-100 bg-black'>
            <CSidebarNav>
                <CNavItem href="#" className="bg-dark">
                    <i className='bi bi-bar-chart-fill text-white m-2'></i>
                    <h5 className='text-white mx-3 my-1 fw-bolder'>TETHERX</h5>
                </CNavItem>

                <CNavTitle>
                    A CRM app for all ypur needs
                </CNavTitle>


                <CNavItem href='#'>
                    <i></i>
                    <Link to= "/admin">Home</Link>
                </CNavItem>

                <div onClick={logout}>
                    <CNavItem href= "#">
                        <i></i>
                        <div>logout</div>
                    </CNavItem>
                </div>
            </CSidebarNav>
        </CSidebar>
    )
}

export default  Sidebar