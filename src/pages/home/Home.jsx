import React from 'react'
import Banner from './Banner'
import TopSellers from './TopSellers'
import Recommended from './Recommended'
import Feedback from './Feedback'




const Home = () => {
    return (
        <>
            <Banner />
            <br /><br /><br />
            <TopSellers />
            <br /><br /><br />
            <Recommended />
            <br /><br /><br />


            <Feedback />


        </>
    )
}

export default Home
