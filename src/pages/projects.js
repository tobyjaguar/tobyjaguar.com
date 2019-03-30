import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Divider from '@material-ui/core/Divider'

//import components
import Header from '../components/Header/'
import Container from '../layout/Container'
import MyPaper from '../components/MyPaper/'

export default ({ data }) => (
  <div>
  <Header />
    <Container>
      <MyPaper>
        <h1>Projects</h1>
        <p>Some projects that I have and currently work on:</p>
        <h2><a href={"https://www.smartpiggies.com/"} className='link' target='new'>SmartPiggies</a></h2>
        {/*<a href={"https://www.smartpiggies.com/"} className='link' target='new'><Img fluid={data.smartpiggies.childImageSharp.fluid} /></a>*/}
        <p>
        <a href={"https://www.smartpiggies.com/"} target='new'>
          <img src={data.smartpiggies.childImageSharp.resize.src} className='text-wrap' alt='smartpiggies' /></a>
          SmartPiggies is an open source standard for a peer-to-peer derivatives market.
          It is intended for use on public blockchains. The project was conceptualized
          in the fall of 2018, and an mvp of the design described in the
          <a href='https://docs.wixstatic.com/ugd/ecf251_ad91e36ff98842bfab969570a19c54be.pdf' className='text-link' target='new'> pink paper </a>
          was built for EthDenver in Feburary 2019.
        </p>
        <Divider />
        <h2><a href={"https://tobytoken.shop/"} className='link' target='new'>TokenShop</a></h2>
        {/*<a href={"https://tobytoken.shop/"} className='link' target='new'><Img fluid={data.tokenshop.childImageSharp.fluid} /></a>*/}
        <p>
        <a href={"https://tobytoken.shop/"} target='new'>
          <img src={data.tokenshop.childImageSharp.resize.src} className='text-wrap' alt='tokenshop' /></a>
          TokenShop is a dApp that let's you buy Toby Tokens. Toby Tokens are
          Ethereum ERC-20 tokens (on mainnet and ropsten) that are redeemable in
          dollars from the bank of toby (i.e. me, if we meet in person). This is
          a social project exploring the token lifecycle with ERC-20 tokens, with
          the goal to complete transactions round trips for Toby Tokens. A user
          can buy Toby Tokens from the dApp for ether. 1 Toby Token costs $1 USD.
          You can buy more than a dollars worth (max $100) or less, but the tokens
          are purchased with ether. When we meet in person, I will reclaim the tokens
          in USD at the exchange rate of 1 Token = $1 USD. For reclamation you can burn
          them or transfer them to me or back to the shop. This is an exploration into
          stable tokens, with the intention of making round trips of users buying from
          the app, and reclaiming tokens for cash upon a personal meeting over a coffee
          and a good conversation. I have currently made two full transaction cycles to
          date. If you would like to participate there is still stock in the shop!
        </p>
        <Divider />
        <h2><a href={"http://telegram.me/gsbitbot"} className='link' target='new'>GSBitBot</a></h2>
        {/*<a href={"http://telegram.me/gsbitbot"} className='link' target='new'><Img fluid={data.gsbitbot.childImageSharp.fluid} /></a>*/}
        <p>
        <a href={"http://telegram.me/gsbitbot"} target='new'>
          <img src={data.gsbitbot.childImageSharp.resize.src} className='text-wrap' alt='gsbitbot' /></a>
          GSBitBot is a telegram bot that returns index prices for bitcoin, ethereum, gold, silver,
          as well as the bitcoin to ethereum ratio, and the gold to silver ratio. The app will
          also pull the top 10 coins from the coincap api, and trading pairs from Bittrix and
          Poloniex. The server crashes sometimes when exchanges go down, as they did en masse during
          2018. I keep hardening against data inconsistencies, and moved the gold and silver
          price api to fixer.io which increased stability. The bitcoin and ethereum prices are
          calculated from weighted averages of global exchanges. I try to keep this running
          as much as I can, but the crypto api space changes so much,
          this requires more attention than casual maintenance.
          <p></p>
          <p>
          I use this for personal price information, feel free to use it too, but there are no
          guarantees regarding performance. If the bot is down, I will usually reset it within a
          day. It has most recently been running for about six months without failure,
          so the code is getting better. If you overwhelm the server, it will go down, so please don't :)
          </p>
          <p></p>
          screenshot:
          <p></p>
          <div className='centered'>
          <Img fixed={data.bitbot_shot.childImageSharp.fixed} alt='screenshot' />
          </div>
        </p>
      </MyPaper>
    </Container>
  </div>
)

export const piggy = graphql`
  query {
    smartpiggies: file(relativePath: {eq: "piggieface_01.png"}) {
      childImageSharp {
        resize(width: 225) {
          src
        }
      }
    }
    tokenshop: file(relativePath: {eq: "Shop.jpg"}) {
      childImageSharp {
        resize(width: 225) {
          src
        }
      }
    }
    gsbitbot: file(relativePath: {eq: "gsbitbot.jpg"}) {
      childImageSharp {
        resize(width: 225) {
          src
        }
      }
    }
    bitbot_shot: file(relativePath: {eq: "bitbot_shot.jpg"}) {
      childImageSharp {
        fixed(width: 426, height: 731) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

/*
export const piggy = graphql`
  query {
    smartpiggies: file(relativePath: {eq: "piggieface_01.png"}) {
      childImageSharp {
        fluid(maxWidth: 620) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    tokenshop: file(relativePath: {eq: "Shop.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 620) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    gsbitbot: file(relativePath: {eq: "gsbitbot.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 620) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
*/
