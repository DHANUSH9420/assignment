import CartContext from '../../context/CartContext'

import {NotFoundContainer, Image, Heading, Desc} from './styledComponents'

const NotFound = () => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : 'light'
      const isDarkHeading = isDarkTheme ? 'white' : 'dark'

      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <NotFoundContainer theme={theme}>
            <Image src={imgUrl} alt="not found" />
            <Heading isDark={isDarkHeading}>Page Not Found</Heading>
            <Desc isDark={isDarkHeading}>
              we are sorry, the page you requested could not be found.
            </Desc>
          </NotFoundContainer>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default NotFound
