import React from 'react'





const Layout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <header>header</header>
        {children}
        <footer>footer</footer>
      </body>


    </html>
  )
}

export default Layout