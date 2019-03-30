import React from 'react'
import { Link, graphql } from 'gatsby'

import Header from '../components/Header/'
import Container from '../layout/Container'
import MyPaper from '../components/MyPaper/'

//hash.join({node.frontmatter.title})
export default ({ data }) => {

  return (
    <div>
    <Header />
    <Container>
      <MyPaper>
        <h1>Blog</h1>
        <h4>{data.allMarkdownRemark.totalCount} posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
          <h3><Link className='link' to={node.fields.slug}>{node.frontmatter.title}</Link></h3>

           {node.frontmatter.date}
          <p>{node.excerpt}</p>
          </div>
        ))}
      </MyPaper>
    </Container>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {
      fields: [frontmatter___date]
      order: DESC })
    {
      totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            excerpt
          }
        }
    }
  }
`
