import styled from 'styled-components'

export const StyledTitle = styled.div`
  font-size: 40px;
  margin: auto;
  margin-left: 20px;
`

export const MenuWrapper = styled.div`
  width: 100%;
  display: block;
  color: white;
  background-color: grey;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100px;
`

export const ButtonsWrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  border: 3px solid white;
  padding: 5px;
  border-radius: 10px;
  height: 25px;
  margin: auto;
`

export const MenuButton = styled.div`
  color: white;
  cursor: pointer;

  &:hover {
    color: black;
  }
`
