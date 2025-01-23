import React from "react"
import ProfileDetails from "./component/ProfileDetails"
import Details from "./component/Details"
import Navbar from "./component/Navbar"

const App = () => {

  return (
    <section className="grid grid-cols-1 xl:grid-cols-[1fr_2fr_0.2fr] gap-16 mb-24">
      <ProfileDetails />
      <Details />
      <Navbar />
    </section>
  )
}

// grid grid-cols-1 md:grid-cols-[1fr_2fr_0.2fr]
export default App