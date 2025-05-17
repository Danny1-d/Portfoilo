// import React, { useEffect, useState } from "react"
import ProfileDetails from "./component/ProfileDetails"
import Details from "./component/Details"
import Navbar from "./component/Navbar"
// import Loading from "./component/Loading"

const App = () => {
  // const [loading, setLoading] = useState()

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 5000)

  //   return () => clearTimeout(timer)
  // }, [])



  return (
  // <>
  //   {loading ? <Loading /> : 
  //   <section className="grid grid-cols-1 xl:grid-cols-[1fr_2fr_0.2fr] gap-16 mb-24">
  //     <ProfileDetails />
  //     <Details />
  //     <Navbar />
  //   </section>
  //   }
  //   </>

  <section className="grid grid-cols-1 xl:grid-cols-[1fr_2fr_0.2fr] gap-16 mb-24 bg-bg Poppins">
    <ProfileDetails />
    <Details />
    <Navbar />
  </section>
  )
}

// grid grid-cols-1 md:grid-cols-[1fr_2fr_0.2fr]
export default App