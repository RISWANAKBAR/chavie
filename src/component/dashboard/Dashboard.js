import React from 'react'
import "./dashboard.css"

export default function Dashboard() {
  return (
    <div>
      <header>Dashboard</header>


      <div className='custom'>

        <p style={{ fontSize: "25px" ,fontWeight:"bold"}}>Custom Dashboard</p>
        <div className='cardMains'>

          <div className='card'>
            <p className='p1'>25</p>
            <p>Attendance</p>
          </div>
          <div className='card'>
            <p  className='p1'>03</p>
            <p>Service Requested</p> </div>
          <div className='card'>
            <p  className='p1'>12</p>
            <p>Pending Orders</p> </div>

        </div>
      </div>
    </div>
  )
}
