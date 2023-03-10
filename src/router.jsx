import { Routes, Route, Link } from "react-router-dom"

import Login from './containers/Login'
import Register from "./containers/Register"
import Dashboard from "./containers/Dashboard"


function Router() {

  return (
    <div>


      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/" element={<Register />} />
        <Route
          path="/dashboard/"
          element={
            //to be protected
            <Dashboard />
          }
        />
      </Routes>
    </div>
  )
}

export default Router
