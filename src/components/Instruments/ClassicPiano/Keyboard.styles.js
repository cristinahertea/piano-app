import styled from 'styled-components'

export const KeyboardWrapper = styled.div`
  border: 4px solid red;
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  display: flex;
`
export const KeyWrapper = styled.div`
  flex-direction: column-reverse;
  display: flex;
  padding: 10px 0;
  width: 40px;
  height: 180px;
  text-align: center;
  border: 1px solid green;
  background-color: rgb(220, 220, 100);
`
export const KeyField = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(${(props) => props.length}, 1fr);
  width: fit-content;
  height: fit-content;
`
