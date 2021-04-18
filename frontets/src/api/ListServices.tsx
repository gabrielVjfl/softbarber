import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {useParams} from 'react-router-dom'
import { TitleServices, TemplateServices, TitleServicesMax} from '../styles/Style1'
import URL from '../utils/URL'
const ListServices = ({ myid }) => {
  
  interface Iservices {
    id: number,
    name: string,
    price: number
  }

  const [services, setServices] = useState<Iservices[]>([])

  useEffect(() => {
    
    HandleGetListServices()
  
}, [myid])


    
  useEffect(() => {
    HandleGetListServices()
  },[])


 const HandleGetListServices = async () => {
   try {
     let response = await Axios.get(`${URL}/barbers/list/params/${myid}`)
    
     console.log('Minha resposta', response.data[0].Servicos[0])
     console.log('Meus servicos', response.data[0].Servicos[0])

     setServices(response.data[0].Servicos)
   }
   catch (err) {
     
   }

    
  }


  return (
 <div>

    <TemplateServices>
  
      <br/>
      {
        services.map((services: Iservices) =>
          <aside key={services.id}>
           
            <TitleServices>{services.name}:</TitleServices>
            <TitleServices > {services.price} R$</TitleServices>
            
            <br />
            <hr/>
            
          
            
            <br/>
           
            </aside>
        )
      }
      
     
       
      </TemplateServices>
      
      </div>
   
     )
}
export default ListServices
