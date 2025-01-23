import React from "react"
import ProfileDetails from "./component/ProfileDetails"
import Details from "./component/Details"
import Navbar from "./component/Navbar"

const App = () => {

  return (
    <div className="flex flex-col  md:flex-row gap-20 mb-24">
      <ProfileDetails />
      <Details />
      <Navbar />
    </div>
  )
}

export default App