import React from 'react'
import './order.css'

export default function Order() {
    return (
        <div>
               <header>Dashboard</header>

        <div className='custom3'>
            <div className='card2'>
                <p className='p'>Second coating</p>
                <p style={{ fontSize: "25px", fontWeight: "bold" }}>20</p>
            </div>
            <div className='card1'>
                <p className='p'>Packing</p>
                <p style={{ fontSize: "25px", fontWeight: "bold" }}>54</p>
            </div>
            <div className='card1'>
                <p className='p'>Dispatch</p>
                <p style={{ fontSize: "25px", fontWeight: "bold" }}>45</p>
            </div>
        </div>
        </div>
    )
}
