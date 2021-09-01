//Import React, Link
import * as React from "react";
import {Link} from "gatsby";

//Import Layout
import Layout from '../components/layout';

import { StaticImage } from "gatsby-plugin-image";

//Define Homepage
const Homepage = () => {

  return (
  <Layout pageTitle = 'Home'>
    <p>Hello world!</p>
    <StaticImage src="../images/icon.png"/>
  </Layout>

  )
}

//Export Homepage
export default Homepage;