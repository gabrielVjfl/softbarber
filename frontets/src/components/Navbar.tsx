import React from 'react'

import Avatar from '@material-ui/core/Avatar'
const Navbar = (props) => {
  return (
    <div className="hello">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{display: 'flex', justifyContent: 'space-between'}}>
        <a className="navbar-brand" href="#"
          style={{ marginLeft: '2vw', color: 'orange' }}>SoftBarber</a>
 
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">

     
    </ul>
    <span className="navbar-text" style={{marginLeft: '70vw', display: 'flex', cursor: 'pointer'}}>
            Bem vindo {props.title}  <Avatar style={{ marginLeft: '1vw', cursor: 'pointer' }}
              alt={props.nome} src={props.image} />

    </span>
  </div>
</nav>
  </div>
  )
}
export default Navbar