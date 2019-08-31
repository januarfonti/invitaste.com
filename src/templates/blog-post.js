import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Sidebar from '../components/sidebar'
import Img from 'gatsby-image'
import ReactDisqusComments from 'react-disqus-comments'
import LazyLoad from 'react-lazy-load'
import { kebabCase } from 'lodash'

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <section className='detail-blog container mx-auto flex flex-wrap'>
          <div className='w-full lg:w-4/6'>
            <div className='bg-white shadow-lg'>
              <Img fluid={featuredImgFluid} />
              <div className='p-8 md:p-10'>
                <h1 className='text-xl md:text-4xl text-center text-gray-700 tracking-tighter'>{post.frontmatter.title}</h1>
                <h2 className='text-sm text-center text-red-400 uppercase'>{post.frontmatter.date}</h2>
                <div className='text-center mt-3'>
                  {post.frontmatter.tags.map(tag => (
                    <span key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>
                        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#{tag}</span>
                      </Link>
                    </span>
                  ))}
                </div>
                <div class='blog-content text-gray-700 text-lg md:text-xl mt-10' dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </div>
            <LazyLoad offsetTop={400}>
              <ReactDisqusComments
                className='mt-10'
                shortname='januarfonti'
                identifier={post.id}
                title={post.frontmatter.title}
                url={post.url}
              />
            </LazyLoad>
          </div>
          <div className='w-full lg:w-2/6 lg:pl-5'>
            <Sidebar />
          </div>
          
        </section>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel='prev'>
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel='next'>
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth:1366,maxHeight: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        tags
        description
      }
    }
  }
`
