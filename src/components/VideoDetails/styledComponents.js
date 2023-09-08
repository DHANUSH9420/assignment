import styled from 'styled-components'

export const Image = styled.img`
  width: 300px;
  margin: 10px;
`
export const Heading = styled.h1`
  color: black;
  text-align: center;
  font-size: 30px;
`
export const Desc = styled.h1`
  color: black;
  text-align: center;
  font-size: 20px;
`
export const Retry = styled.button`
  padding: 10px;
  color: blue;
  cursor: pointer;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 100vh;
  background-color: white;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`
export const VideosDetailsSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  align-items: center;
`
export const VideoDetailsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
`
export const VideoDetailsTitle = styled.p`
  font-family: Roboto;
  font-weight: bold;
  color: #181818;
  margin-left: 10px;
`
export const ViewsDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`
export const LikesContainer = styled.div`
  display: flex;
`
export const ViewText = styled.p`
color:${props => props.color}
font-family:Roboto;
margin-left:10px;`

export const IconContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${props => props.color};
`

export const HorizontalLine = styled.hr`
  background-color: #181818;
  color: #181818;
  width: 100%;
  margin: 15px;
`
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const LogoContainer = styled.div`
  background-color: #cbd5e1;
  border-radius: 40px;
  padding: 10px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const ChannelLogo = styled.img`
  height: 50px;
  width: 50px;
`
