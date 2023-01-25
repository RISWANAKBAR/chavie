import React from 'react'
import "./mainindex.css"

export default function Mainindex() {
    return (
        <div className='main'>
            <header>Dashboard</header>
           
            <div className='custom2'>
                
                    <div className='card1'>
                        <p className='p'>Extrution</p>
                        <p style={{fontSize:"25px",fontWeight:"bold"}}>45</p>
                    </div>
                    <div className='card1'>
                        <p className='p'>Coating</p>
                        <p style={{fontSize:"25px" ,fontWeight:"bold"}}><span style={{color:"red",padding:"55px"}}>54</span><span  style={{color:"lightgreen",padding:"55px"}}>27</span></p>
                    </div>
                    <div className='card1'>
                        <p className='p'>D.printing</p>
                        <p style={{fontSize:"25px" ,fontWeight:"bold"}}>20</p>
                    </div>
                   
             



            </div>


        </div>
    )
}
