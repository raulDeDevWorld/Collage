// import Admin from './src/pages/Admin'
// import index from './src/pages/index'
import Login from './pages/Login'

import UuidController from './pages/UuidController'
// import {useUser} from './src/context/Context'
// import { PrivateRoute } from "./components/PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

function App() {


  // const { user } = useUser(); 

  return (
    <div className="App">
      <BrowserRouter>
   
          {/* NUEVAS RUTAS */}

          <Routes>

          <Route path="Login" element={<Login />} />

          {/* <Route
            path="/dashboardoficial"
            element={
              <PrivateRoute isAllowed={user}>
                <Login />
              </PrivateRoute>
            }
          /> */}

       


      


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
