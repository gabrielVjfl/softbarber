import React, { useEffect, useState } from 'react'

import {
  ContainerHomePlus,
  ImageLeft,
  ImageRight,
  TemplatePlus,
  ImagePlusBarber,
  TitlePlusBarber,
  TitlePlusBarberName,
  ContainerListPlus,
  TitleList,
  TitleServices,
  TemplateServices

} from "../styles/Style1";

import {FaWrench, FaPhone, FaArrowLeft} from 'react-icons/fa'

import Imgs from '../assets/barberplus2.jpg'

import { useParams } from 'react-router-dom'

import Axios from 'axios'

import URL from '../utils/URL'

import {Link} from 'react-router-dom'

import { Modal, Button } from 'antd';


import ListDays from '../api/ListDays'

const PlusBarbers = () => {

  

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [myid, setId] = useState<number>(0)

const showModal = (id:number) => {
  setIsModalVisible(true);

  console.log('Meu id', id)

  setId(id) // recebe o id do list.id
};

const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};

    

  interface Ibarber {
    id: number,
    namelocal: string,
    avatar: string,
    telefone: string,
    email: string,
   
  }

  interface Iservices {
    id: number,
    name: string,
    price: number
  }

  const { id } = useParams<{id: string}>()

  const [list, setList] = useState<Ibarber[]>([])
  const [services, setServices] = useState<Iservices[]>([])

useEffect(() => {
   if(id !== undefined) {
       HandleGetList(id)
    }
  }, [id])

  const HandleGetList = async (id:string) => {
    try {
      let response = await Axios.get(`${URL}/barbers/list/params/${id}`)
      
      console.log('Minha resposta', response.data[0])
      console.log('Meus servicos',response.data[0].Servicos[0] )

      setList(response.data)
      setServices(response.data[0].Servicos)

      
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <ContainerHomePlus>
      
    
      <ImageLeft src={Imgs} loading="lazy"></ImageLeft>
      <TemplatePlus>
        
        {
          list.map((list:Ibarber) =>
            <ContainerListPlus key={list.id}>
              <TitlePlusBarberName>{list.namelocal}</TitlePlusBarberName>
              
              <ImagePlusBarber loading="lazy" src={list.avatar}></ImagePlusBarber>

              <TitleList>Informações de Contato  <FaPhone size={22} color="white"/></TitleList>
              <TitlePlusBarber><b>Email :</b>  { list.email}</TitlePlusBarber>
              <TitlePlusBarber><b>Telefone - Whatsapp</b>  :  { list.telefone}</TitlePlusBarber>
            <br/>

              <br />
              <Link to="/agendamento"><button className="btn btn-success">Fazer Agendamento!
              </button></Link>
              <br/>
              <button className="btn btn-primary">Ir até o local</button>
              <br />
              
              <button className="btn btn-warning" onClick={() => showModal(list.id)}>
        Ver Dias e Horários
              </button>
              
              <Modal title="Dias e Horários de atendimento" visible={isModalVisible}
                    onOk={handleOk} onCancel={handleCancel}>
                    
                    <ListDays myid={myid}></ListDays>
                    
                     </Modal>
            

            </ContainerListPlus>
            
            )
        }
        
      </TemplatePlus>
      <ImageRight src={Imgs} loading="lazy"></ImageRight>
    </ContainerHomePlus>
  )
}
export default PlusBarbers