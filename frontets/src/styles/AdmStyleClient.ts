import React from 'react'

import styled from 'styled-components'

export const Container = styled.div`
  margin: 0;
  padding: 0;

  display: flex;
    align-items: stretch;
    background-color:  #2C3B41;
`
export const SideBar = styled.nav`
    min-width: 4.5vw;;
    max-width: 4.5vw;
    min-height: 100vh;
    background: black;
    color: #fff;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    
`

export const SideBarHeader = styled.div`
 padding: 20px;
    background: black;
`
export const Content = styled.div`
  width: 99vw;
`
export const ContentMain = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
`

export const UL = styled.ul`
list-style: none;

padding: 0px;
`

export const LI = styled.li`
list-style:none;
cursor: pointer;
padding: 25px;
`