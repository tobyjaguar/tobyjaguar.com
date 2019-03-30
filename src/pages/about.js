import React from 'react'

import Header from '../components/Header/'
import Container from '../layout/Container'
import MyPaper from '../components/MyPaper/'

export default () => (
  <div>
  <Header />
    <Container>
      <MyPaper>
        <h1>About Me</h1>
        <p>My primary focus these days is on web3-full-stack, dApp development.
          I have spent a lot of time researching the cryptocurrency space, i.e.
          digital assets, DLT, blockchain space. There was a time when it was
          just referred to as the bitcoin space, but times have certainly changed.
          In another life I created content for live performance
          applications. I have a couple of art degrees, and enjoy exploring conversations
          in emerging cultural trends. One day I will make a podcast.
          <p></p>
          <p>
          Buy a <a href='https://tobytoken.shop/' target='new' className='text-link'> Toby Token </a>
          and let me buy it back from you over a good pu'er.
          </p>
        </p>
      </MyPaper>
    </Container>
  </div>
)
