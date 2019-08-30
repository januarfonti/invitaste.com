import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import { kebabCase } from 'lodash'

class BlogIndex extends React.Component {
  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='Cuti Cuti Club' />
        <section className='container mx-auto p-5 flex flex-wrap'>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const featuredImgFluid = node.frontmatter.featuredImage.childImageSharp.fluid
            return (
              <article className='w-full md:w-1/2 lg:w-1/4 overflow-hidden shadow-lg m-3' key={node.fields.slug}>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  <div className='post-wrapper'>
                    <Img className='' fluid={featuredImgFluid} />
                    <div className='px-6 py-4'>
                      <h2 className='text-xs text-red-400 uppercase'>{node.frontmatter.date}</h2>
                      <h1 className='text-md mb-2'>{title}</h1>
                    </div>
                    <div className='px-6 py-4'>
                      {node.frontmatter.tags.map(tag => (
                        <span key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>
                            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#{tag}</span>
                          </Link>
                        </span>
                      ))}

                    </div>
                  </div>
                </Link>
              </article>
            )
          })}

        </section>

      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
query {
  site {
      siteMetadata {
        title
      }
    }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          featuredImage {
            id
            childImageSharp {
              fluid(maxWidth:1366,maxHeight: 768) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tags
          title
        }
      }
    }
  }
}
`
