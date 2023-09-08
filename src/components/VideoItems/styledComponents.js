import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  list-style-type: none;
  cursor: pointer;
  margin: 25px;
  background-color: ${props => props.bgColor};
`
export const ThumbnailImage = styled.img`
  width: 100%;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 10px;
`
export const VideoCardBottomContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const VideoDetailsText = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
`
export const NavLink = styled(Link)`
  color: ${props => props.textColor};
  text-decoration: none;
  margin-bottom: 10px; ;
`
