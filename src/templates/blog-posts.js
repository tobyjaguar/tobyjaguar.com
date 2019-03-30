import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header/'
import Container from '../layout/Container'
import MyPaper from '../components/MyPaper/'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
    <Header />
    <Container>
      <MyPaper>
        <h1>{post.frontmatter.title}</h1>
        <h3 className='date'>{post.frontmatter.date}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div>
        Authored by: {data.site.siteMetadata.title} _/\_
        copyright: {data.site.siteMetadata.copyright}
        </div>
      </MyPaper>
    </Container>
    </div>
  )
}

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      date
    }
  }
  site {
    siteMetadata {
      title
      copyright
    }
  }
}
`
