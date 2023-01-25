import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./component/dashboard/Dashboard";
import SideNavBar from "./component/SideNavBar/SideNavBar";
import Mainindex from "./component/index/Mainindex";
import Order from "./component/order/Order";





function App() {
	return (
		<div style={{display:"flex"}}>
			<BrowserRouter>
			<SideNavBar/>
			
			

				<Routes>
				<Route path="/"/>
				
					<Route path="/dashboard" element={ <Dashboard/>}/>
					<Route path="/inventry" element={ <Mainindex/>}/>
					<Route path="/order" element={ <Order/>}/>

			
				
				
						
					
				</Routes>
			
			
			</BrowserRouter>
			
		</div>
	);
}

export default App;
