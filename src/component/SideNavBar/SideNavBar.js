import React, { useState } from "react";
import "./SideNavBar.css";
import {AccountCircle} from '@mui/icons-material/';
import {Logout} from '@mui/icons-material/';
import { color } from "@mui/system";

const SideNavBar = ({children}) => {
	
	
	return (
		<div>
		<div className="side-nav-container">
			<div className="nav-upper">
				<div className="nav-menu">
				
					<li className="menu-item">
					
					 <span>-</span><a href="/dashboard"> Dashboard</a>


					</li>
					<li className="menu-item" >
					<span>-</span>	<a href="/inventry">  Inventory</a>


					</li>
					<li className="menu-item">
					<span>-</span>	<a href="/order"> Order Form</a>


					</li>
					<li className="menu-item">
					<span>-</span>	<a> Extrusion form</a>


					</li>
					<li className="menu-item">
					<span>-</span>	<a> status check</a>


					</li>
				
				
				</div>
			</div>
			<div className="nav-footer">
				<div className="circle">
					< AccountCircle style={{fontSize:"70px" ,}}/>
				</div>

				<div className="nav-details">
				{/* <p className="icon"><AccountCircle/></p> */}
				<span style={{fontSize:'20px'}}>logout   <Logout style={{fontSize:"18px" ,color:" rgba(210, 163, 6, 0.99) "} }/></span>
				
				

				</div>
				

			</div>
		</div>
		<main>{children}</main>
		</div>
	);
};

export default SideNavBar;
