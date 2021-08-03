import React, {useEffect, useState } from 'react';
import './navbar.css';

export default function Navbar({}) {
  
return (
    <>
      <nav class="navbar navbar-light bg-light justify-content-between" style={{zIndex:1}}>
      {/* <div className="row w-100">
        <div className="" style={{width: '20%'}}>
          <img src={`${Artboard}`} />
        </div>
        <div className="row" style={{width: '80%'}}>
        <div className="col-6 text-left pt-3" style={{fontSize: '18px'}}>
        <b>{props.name}</b>
        </div>
        <div className="col-6 text-right">
          <div className="row justify-content-end">
            <div className="col-auto">
                <div>
                  <img src={`${BellImage}`} className="mb-3 mx-2"/>
                  <i className="fa fa-user-circle m-0 mt-2 px-2" style={{fontSize: "2rem"}} onClick={handleClick}></i>
                  <Menu 
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    style={{top: "30px", left:"-8px"}}
                  >
                    <MenuItem onClick={handlePersonalInformation}>Personal Information&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
            </div>
            <div className="col-auto py-2 px-0 login-text">
              <span className="cursor-pointer" onClick={handleClick}><b>Hi!! Charmi Bhimani</b></span>
            </div>
          </div>
        </div>
        </div>
      </div> */}
    </nav>
    </>
  )
}