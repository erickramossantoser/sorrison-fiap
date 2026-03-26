import React, { type ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
 
interface LayoutProps {
  children: ReactNode
}
 
const Layout = ({ children }: LayoutProps): React.JSX.Element => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  )
}
 
export default Layout