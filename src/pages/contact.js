import React from 'react'
import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'

import Header from '../components/Header/'
import Container from '../layout/Container'
import MyPaper from '../components/MyPaper/'

export default ({ data }) => (
  <div>
  <Header />
    <Container>
      <MyPaper>
        <h1>Contact</h1>
        <Grid container spacing={5}>
          <Grid item xs={2}>
            <a href={"https://github.com/tobyjaguar"} target='new'><img src={data.github.childImageSharp.resize.src} alt='github' /></a>
          </Grid>
          <Grid item xs={2}>
            <a href={"https://twitter.com/talgya"} target='new'><img src={data.twitter.childImageSharp.resize.src} alt='twitter' /></a>
          </Grid>
          <Grid item xs={2}>
            <a href={"https://www.linkedin.com/in/toby-algya-58997712/"} target='new'><img src={data.linkedIn.childImageSharp.resize.src} alt='twitter' /></a>
          </Grid>
        </Grid>
      </MyPaper>
    </Container>
  </div>
)

export const piggy = graphql`
  query {
    github: file(relativePath: {eq: "GitHub-Mark-64px.png"}) {
      childImageSharp {
        resize(width: 32) {
          src
        }
      }
    }
    twitter: file(relativePath: {eq: "Twitter_Social_Icon_Square_Color.png"}) {
      childImageSharp {
        resize(width: 32) {
          src
        }
      }
    }
    linkedIn: file(relativePath: {eq: "In-Black-66px-TM.png"}) {
      childImageSharp {
        resize(width: 38) {
          src
        }
      }
    }
  }
`
