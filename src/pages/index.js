import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />


        <div className="container mx-auto">
          {/*<Bio />*/}

          {/*{posts.map(({ node }) => {*/}
          {/*  const title = node.frontmatter.title || node.fields.slug*/}
          {/*  const featuredImgFluid = node.frontmatter.featuredImage.childImageSharp.fluid*/}
          {/*  return (*/}
          {/*    <article key={node.fields.slug}>*/}
          {/*      <header>*/}
          {/*        <h3>*/}
          {/*          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>*/}
          {/*            {title}*/}
          {/*          </Link>*/}
          {/*        </h3>*/}
          {/*        <small>{node.frontmatter.date}</small>*/}
          {/*      </header>*/}
          {/*      <section>*/}
          {/*        <p*/}
          {/*          dangerouslySetInnerHTML={{*/}
          {/*            __html: node.frontmatter.description || node.excerpt,*/}
          {/*          }}*/}
          {/*        />*/}
          {/*      </section>*/}
          {/*    </article>*/}
          {/*  )*/}
          {/*})}*/}
        </div>
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
          }
        }
      }
    }
  }
`
