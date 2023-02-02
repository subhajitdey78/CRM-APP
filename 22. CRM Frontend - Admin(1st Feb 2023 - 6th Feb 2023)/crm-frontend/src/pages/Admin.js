import Sidebar from "../componenets/Sidebar"
import React from "react"
function Admin() {
    return (
        <div className= "row bg-light">
            <div className = "col-1"><Sidebar home='/' /></div>
            <div className ="col my-4 vh-100">
                <div className= "Container">
                    <div>
                        {/*Main Admin DashBoard*/}
                        <h3>Welcome,</h3>
                        <p>Take a quick look at you admin starts below,</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;