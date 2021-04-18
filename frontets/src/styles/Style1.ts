import React from 'react'

import styled from 'styled-components'
import Logo from '../assets/home.jpg'



export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
min-width: 100vw;
max-height: 100vh;
max-width: 100vw;
overflow:hidden;
background-color: black;
`

export const TemplateLeft = styled.div`
max-width: 30vw;
min-width: 30vw;
max-height: 100vh;
min-height: 100vh;
background-color: white;
`

export const TemplateRight = styled.div`
max-width: 70vw;
min-width: 70vw;
max-height: 100vh;
min-height: 100vh;
background-image: url('../assets/home.jpg');

`
export const ContainerHome = styled.div`
display: flex;
text-align: center;
min-height: 100vh;
min-width: 100vw;
max-width: 100vw;
max-height: 100vh;
align-items: center;
overflow:auto;
background-color: #2C3B41;
flex-direction: column;
`

export const HeaderHome = styled.div`
min-width: 100%;
max-width: 100%;
min-height: 37vh;
background-color: black;
display: flex;
align-items: center;
border-bottom: 2px solid orange;
text-align: center;
flex-direction: column;


`
export const ImgHeader = styled.img`
max-height: 22vh;
max-width: 22vw;
`
export const TextHeaderHomeClient = styled.span`
font-family: 'Kiwi Maru';
font-size: 25px;
color: white;
max-width: 90vw;
`
export const TemplateInputsHomeClient = styled.div`
max-width:40vw;
min-width: 40vw;
margin-top: -6vh;
`
export const TemplateContentHomeClient = styled.div`
 margin-top: 2vh;
  max-width: 80vw;
`

export const CardHomeClient = styled.div`
margin-left: 1vw;
margin-right: 1vw;
min-width: 22vw;
background-color: white;
border-radius: 15px;
border: 1px solid green;
background-color: black;

`
export const CardBodyHomeClient = styled.div`
display: flex;
text-align: center;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: white;
border-radius: 10px;

`
export const ItemBarber = styled.span`
margin-right: 0.5vw;
font-family: 'Nunito';
font-size: 18px;
color: orange;
`
export const TitleItemBarber = styled.span`
color: black;
font-family: 'Nunito';
font-weight: 600;

`
export const ItemImage = styled.img`
max-height: 25vh;
min-width: 100%;
max-width: 100%;
min-height: 25vh;


`
export const ContainerHomePlus = styled.div`
background-color: black;
display: flex;
align-items: center;
min-height: 100vh;
max-height: 100vh;
min-width: 100vw;
max-width: 100vh;
justify-content: space-between;
overflow: hidden;
`
export const ImageLeft = styled.img`
min-height: 100vh;
max-width: 14vw;
min-width: 14vw;
`
export const ImageRight = styled.img`
min-height: 100vh;
max-width: 14vw;
min-width: 14vw;
`
export const TemplatePlus = styled.div`
display: flex;
text-align: center;
justify-content: center;
max-width: 60vw;
min-width: 60vw;
border-left: 2px solid orange;
border-right: 2px solid orange;
min-height: 100vh;
background-color: black;

`
export const ContainerListPlus = styled.div`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;

`

export const ImagePlusBarber = styled.img`
max-height: 30%;
margin-top: 4vh;
max-width: 50%;
`

export const TitlePlusBarber = styled.span`
color: white;
font-size: 18px;
margin-top: 1vh;
`

export const TitleList = styled.span`
color: orange;
font-family: 'Nunito';
font-weight: 700;
font-size: 25px;
margin-top: 3vh;
border-bottom: 2px solid white;
`

export const TitlePlusBarberName = styled.span`
font-family: 'Kiwi Maru';
font-size: 27px;
color: white;
margin-top: 1vh;
color: white;
`



export const TemplateServices = styled.div`
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const TitleServices = styled.span`
font-family: 'Nunito';
color: black;
font-size: 22px;
margin-left: 1vw;
margin-top: 1vh;
`
export const TitleServicesMax = styled.h2`
font-family: 'Kiwi Maru';
color: black;


`
export const TemplateDark = styled.div`
position: absolute;
left: 0;
margin-left: 10vw;
margin-top: 18vh;
`
export const ImageTheme = styled.img`
height: 60px;
width: 60px;
cursor: pointer;

`