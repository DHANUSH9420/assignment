import styled from 'styled-components'

export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: ${props => props.bgColor};
`

export const BannerImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  display: ${props => props.display};
  flex-direction: row;
  width: 80%;
  height: 40vh;
  padding: 50px;
`
export const GetItButton = styled.button`
  color: #181818;
  background-color: transparent;
  height: 30px;
  width: 100px;
  margin: 20px;
  border-radius: #181818;
  border-style: solid;
  text-align: center;
`
export const BannerImage = styled.img`
  object-fit: fill;
  width: 250px;
`
export const BannerText = styled.p`
  color: #181818;
  font-family: Roboto;
`
export const HomeStickyContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
`
export const HomeSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const NavbarLargeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ColumnAlign = styled.div`
  display: flex;
  flex-direction: column;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
`
export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ModelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
export const Image = styled.img`
  width: 300px;
  margin: 20px;
`
export const Heading = styled.h1`
  color: black;
  text-align: center;
  font-size: 30px;
`
export const GetItNowButton = styled.button`
  background-color: transparent;
  border: 1px solid #181818;
  padding: 10px;
  color: #181818;
  width: 100px;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.isDark};
`
export const Desc = styled.h1`
  color: ${props => props.isDark};
  text-align: center;
  font-size: 20px;
`
export const SearchVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  overflow-y: scroll;
  padding: 30px;
`
export const SearchInput = styled.input`
  width: 250px;
  border: 1px solid #64748b;
  margin-left: 60px;
  border-radius: 2px;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
`
export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`
export const TrendingHeadContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  margin-left: 50px;
  background-color: ${props => props.bgColor};
  width: 100%;
`
export const TrendingLogo = styled.div`
  background-color: #94a3b8;
  border: none;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
  margin: 10px;
`
export const TrendingHead = styled.h1`
  color: ${props => props.color};
  font-family: Roboto;
  font-weight: bold;
`
