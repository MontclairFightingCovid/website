import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading display-4 text-white">Volunteers helping to fight Covid19 in Montclair</h1>
        <p class="lead text-white">Together, we can make an impact. Here, at home.</p>
        <hr/>
        <p>
          <a href="#volunteer" class="btn btn-primary btn-lg my-2">Register to Volunteer</a>
        </p>
      </div>
    </section>

    <div class="container-fluid py-5">
      <section>
          <h1>Background</h1>
          <p>We are a grassroots effort looking to provide individuals in our community interested in volunteering an organized way to find opportunities to help.  Covid19 has had a significant impact on the community we know and love.  There are many opportunities to help our community and those who are on the frontline of protecting us.  We are developing this website as a means to provide information about those opportunities and to help organize volunteers.  Please fill out the form below if you would like to be involved and help the community.</p>
      </section>
    </div>

    <div class="container-fluid py-5 bg-light">
      <section>
          <h1>Volunteer<a name="volunteer"></a></h1>
          <p>We are just beginning, please fill out the following form if you are interested in staying in touch.</p>
          <div class="mx-auto mt-3">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeosXYsKlh2UXPCweLEg2IMsXObadQ36vnJ72cRfA6gppNRmg/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
