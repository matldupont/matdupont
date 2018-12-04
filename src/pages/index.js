import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Headshot from '../components/Headshot'

const MainContainer = styled.div`
  margin-top: 2rem;
  display:flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 700px) {
    flex-direction: row;
    margin-top: 6rem;
    justify-content: center;
  }
`;

const HeadshotWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  width: 15rem;
  height: 15rem;

  div {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;

    box-shadow: 0px 0px 20px 1px rgba(227,227,227,0.63);
  }

  @media only screen and (min-width: 700px) {
    flex: 0 1 25rem;
    width: 15rem;
    height: 15rem;
    margin-bottom: 4rem;

    div {
      width: 15rem;
      height: 15rem;
    }
  }
`;

const MainText = styled.div`
  flex: 0 1 40rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 700px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

const MainTextList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  font-size: 1.6rem;

  & > * {
    margin-bottom: 1rem;
  }
  
  @media screen and (min-width: 700px) {
    flex-direction: row;
    & > *:not(:first-child) {
      margin-left: 1rem;
    }
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
