import styled from 'styled-components'

export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  flex-direction: row;
  list-style-type: none;
  flex-wrap: wrap;
`
export const Retry = styled.button`
  padding: 15px;
  color: blue;
  cursor: pointer;
`
