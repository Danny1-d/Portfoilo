import React from "react"
import ProfileDetails from "./component/ProfileDetails"
import Details from "./component/Details"
import Navbar from "./component/Navbar"

const App = () => {

  return (
    <div className="grid grid-rows-1 md:grid-cols-[1fr_2fr_0.2fr] gap-10 mb-24">
      <ProfileDetails />
      <Details />
      <Navbar />
    </div>
  )
}

export default App