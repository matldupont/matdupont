import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Headshot from '../components/Headshot'

const MainContainer = styled.div`
  display:flex;
  align-items: center;

  /* @media only screen and (max-width: 769px) {
    flex-direction: column;
  } */
`;

const HeadshotWrapper = styled.div`
  width: 10rem;

  div {
    border-radius: 50%;
  }

  /* @media only screen and (max-width: 769px) {
    width: 15rem;
  } */
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;

  @media screen and (max-width: 769px) {
    font-size: 1rem;
  }
`;

const MainTextList = styled.ul`
  list-style: none;
  display: flex;

  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

export default class IndexPage extends React.Component {
  render() {

    return (
      <Layout>
        <section className="section">
          <MainContainer>
            <HeadshotWrapper>
              <Headshot />
            </HeadshotWrapper>
            <MainText>
              <h1 className="has-text-weight-bold is-size-2">Learning Enthusiast</h1>
            
              <MainTextList>
                <li>Developer.</li>
                <li>Designer.</li>
                <li>Woodworker.</li>
                <li>Musician.</li>
                <li>Grillmaster.</li>
              </MainTextList>
            </MainText>
            
          </MainContainer>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
