import * as React from "react"
import {graphql, Link, StaticQuery} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import DeckItem from "./deckItem";

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
