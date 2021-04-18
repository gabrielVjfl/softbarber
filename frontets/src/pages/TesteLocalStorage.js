import React,{useState, useEffect} from 'react';
import Sun from '../assets/sun (1).svg'
import Moon from '../assets/moon.svg'
import ReactWhatsapp from 'react-whatsapp';
import {
   
    ImageTheme
  
  } from "../styles/Style1";

const TesteLocalStorage = () => {


   const [cidades, setCidades] = useState('')

   const [themeLight, setThemeLight] = useState('')

  const [icon, setIcon] = useState(false)

  const HandleLightIcon = () => {
      setIcon(true)
  }
  const HandleDarkIcon = () => {
    setIcon(false)
}


   
useEffect(() => {
    let cityValue = sessionStorage.getItem('cidade')
      if (cityValue) {
        setCidades(cityValue)
    }
    
  }, [])


  useEffect(() => {
    let TKvalue = sessionStorage.getItem('TK')
   
    if (TKvalue) {
      setThemeLight(TKvalue) // salva o valor
      // salva se for light ou black
  }
  }, [])


  const HandleLight = () => {
    setThemeLight('light')
    sessionStorage.setItem('TK', 'light')
   
  }
  
  const HandleDark = () => {
    setThemeLight('black')
    sessionStorage.setItem('TK', 'black')
  }
   
    return (
    <div>
        <select name="cidades" value={cidades} 
        onChange={(e) => {
            setCidades(e.target.value)
        sessionStorage.setItem('cidade', e.target.value)}}>
        <option value="">Selecione</option>

        <option value="floripa">Floripa</option>
        <option value="curitiba">Curitiba</option>
            </select>

            <h2>Cidade escolhida {cidades}</h2>

{
    themeLight == 'black' ? (
        <div>
        <div style={{
            minWidth: '60vw',
            backgroundColor: 'black',
            minHeight: '60vh',
            visibility: 'visible'

        }}>

        </div>
                <button onClick={() => HandleLight()}>Light</button>

                </div>

    ) : themeLight == 'light' ? (
        
            <div>
                <div style={{
                        minWidth: '60vw',
                        backgroundColor: 'lightblue',
                        minHeight: '60vh',
                        visibility: 'visible'
        
                    }}>
        
                    </div>
        
                    <button onClick={() => HandleDark()}>Dark</button>
            </div>
            
    ) : (
     <div></div>
    )
}
<br/>
{
    icon == false ? (
    <div onClick={() => HandleLightIcon()}>
   <ImageTheme src={Sun}/>
    </div>
    ) : icon == true ? (
        <div onClick={() => HandleDarkIcon()}>
        <ImageTheme src={Moon}/>
        </div>
    ) : <div></div>

} 


        
    </div>
    )
}
export default TesteLocalStorage