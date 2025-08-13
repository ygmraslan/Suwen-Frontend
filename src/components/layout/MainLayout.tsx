import React from 'react'
import Header from './Header'
import Banner from './Baanner'
import FreeShippingNotice from './FreeShippingNotice'
import PopularProducts from './PopularProducts'
import TitleProducts from './TitleProducts'
import Footer from './Footer'

function MainLayout() {
  return (
    <div>
      <Header />
      <Banner />
      <FreeShippingNotice />
      <PopularProducts />
      <TitleProducts />
      <Footer />
    </div>
  )
}

export default MainLayout
