import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import styles from "../css/error.module.css"

const errPage = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Uh oh!" info="Sorry... nothing to see here.">
          <Link to="/" className="btn-white">
            Now go home.
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default errPage
