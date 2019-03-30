import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

//import components
import Header from '../components/Header/'
//import Footer from '../components/Footer/'
import Container from '../layout/Container'
import MyPaper from '../components/MyPaper/'

//import { mainPic } from './src/assets/landing.png'

export default ({ data }) => (
  <div>
  <Header />
    <Container>
      <MyPaper>
        <Img fluid={data.landing.childImageSharp.fluid} />
        <br></br>
        <p>Welcome to my webpage. This is a place where I gather some of my thoughts.</p>
        <p>I hope you enjoy.</p>
      </MyPaper>
    </Container>
  </div>
)

export const query = graphql`
  query {
    landing: file(relativePath: {eq: "landing.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 620) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
