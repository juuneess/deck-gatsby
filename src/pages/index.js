import * as React from "react"
import {graphql, StaticQuery} from "gatsby"
import Layout from "../components/layout"
import DeckItem from "../components/deckItem";

const IndexPage = () => (
    <Layout>
        <StaticQuery
            query={graphql`
         {
  allContentfulDeck {
    edges {
      node {
        id
        text
        image {
          id
          file {
            url
            fileName
            contentType
          }
        }
        location {
          lat,
          lon
        }
      }
    }
  }
}

        `}
            render={({
                         allContentfulDeck: {
                             edges
                         }
                     }) => (
                edges.map(({ node }) => (
                    <DeckItem key={node.id} content={node} />
                ))
            )}
        />
    </Layout>
)


export default IndexPage
