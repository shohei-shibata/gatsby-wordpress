import React from "react";
import Layout from "../components/layout";

const BlogPostTemplate = ({data}) => (
  <Layout>
    <h1>{data.page.title}</h1>
    <div
      dangerouslySetInnerHTML={{ __html: data.page.content }}
    />
  </Layout>
);

export default BlogPostTemplate

export const query = graphql`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPost(id: { eq: $id }) {
      title
      content
    }
    nextPage: wpPost(id: { eq: $nextPage }) {
      title
      uri
    }
    previousPage: wpPost(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
