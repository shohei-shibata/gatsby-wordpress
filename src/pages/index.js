import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Posts</h1>
    <ul>
      {data.allWpPost.nodes.map(post => (
        <li>
          <Link
            to={`/blog${post.link}`}   
          >
            <h2>{post.title}</h2>
          </Link>
          <div
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
          <Link
            to={`/blog${post.link}`}   
          >
            <p>Read More</p>
          </Link>

        </li>
      ))}
    </ul>

    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allWpPost {
      nodes {
        id
        title
        excerpt
        slug
        link
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
