import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import {Link} from 'gatsby'

const index = () => {
  return (
    <Layout>
      <SimpleHero>
        <Banner title="continue exploring" info="Lorem Ipsum to you. Happy Easter.">
          <Link to="/tours" className="btn-white">explore tours</Link>
        </Banner>
      </SimpleHero>
    </Layout>
  )
}

export default index
