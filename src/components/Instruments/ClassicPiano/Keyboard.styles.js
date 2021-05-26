import styled from 'styled-components'

export const KeyboardWrapper = styled.div`
  position: relative;
  display: block;
  margin: 0;
  border: 3px solid #34eb8f;
  border-radius: 10px;
  height: calc(100vh - 108px);
  background-color: #000000;
  background-image: linear-gradient(45deg, #000000 0%, #434343 74%);
  overflow: hidden;
  outline: none;
`
export const KeyWrapper = styled.div`
  flex-direction: column-reverse;
  display: flex;
  width: ${({ extra }) => extra.width}px;
  height: ${({ extra }) => extra.height}px;
  text-align: center;
  font-weight: bold;
  border: 1px solid #2a292b;
  background-color: ${(props) => (props.iAmPressed ? 'aqua' : 'white')};
  padding-bottom: 20px;
  box-shadow: inset 5px 5px 8px #2a292b, inset -3px -3px 3px #2a292b;
`
export const EmptyKeyWrapper = styled.div`
  flex-direction: column-reverse;
  display: flex;
  width: ${({ extra }) => extra.width}px;
  height: ${({ extra }) => extra.height}px;
  text-align: center;
  font-weight: bold;
  border: 1px transparent;
`

export const BlackKeyWrapper = styled.div`
  flex-direction: column-reverse;
  display: flex;
  width: ${({ extra }) => extra.width}px;
  height: ${({ extra }) => extra.height / 2}px;
  text-align: center;
  border: 1px transparent;
`

export const WhiteKeyField = styled.div`
  display: grid;
  grid-template-columns: repeat(7, ${({ extra }) => `${extra.width}px`});
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
`

export const BlackKeyField = styled.div`
  display: grid;
  grid-template-columns: repeat(7, ${({ extra }) => `${extra.width}px`});
  position: absolute;
  top: 50%;
  left: calc(50% + ${({ extra }) => extra.offset}px);
  transform: translate(-50%, calc(-50% - 10px));
  width: fit-content;
`

export const BlackKeyMini = styled.div`
  flex-direction: column-reverse;
  display: flex;
  margin: 0 auto;
  width: ${({ extra }) => extra.width / 2}px;
  height: ${({ extra }) => extra.height / 2}px;
  text-align: center;
  border: 1px solid #414042;
  background-color: ${(props) => (props.iAmPressed ? 'aqua' : 'black')};
  color: white;
  padding-bottom: 20px;
  box-shadow: inset 5px 5px 8px #414042, inset -6px -6px 12px #414042;
`
