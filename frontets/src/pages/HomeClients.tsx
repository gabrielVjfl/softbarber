import React, {useState, useEffect} from "react";
import Axios from 'axios'
import URL from '../utils/URL'
import Sun from '../assets/sun (1).svg'

import {
  ContainerHome,
  HeaderHome,
  ImgHeader,
  TextHeaderHomeClient,
  TemplateInputsHomeClient,
  TemplateContentHomeClient,
  CardHomeClient,
  CardBodyHomeClient,
  ItemBarber,
  TitleItemBarber,
  ItemImage,

} from "../styles/Style1";

import Logo from "../assets/softbarber (1).png";
import { useHistory, Link } from 'react-router-dom'
import { FaWrench } from 'react-icons/fa'

import ListServices from '../api/ListServices'

import { Modal, Button } from 'antd';

import WhatsApp from '../assets/whatsapp.svg'

const HomeClients = () => {

  const history = useHistory()

  interface Ibarber {
    id: number,
    namelocal: string,
    avatar: string,
    cep: string,
    cidade: string,
    cpfcnpj: string,
    estado: string,
    rua: string,
    numero: number,
    telefone: string,
    bairro: string,
    email: string,

  }

  
  const [myid, setMyId] = useState<number>(0)


  const [ufIbge, setUfIbge] = useState<string[]>([])

  const [cityIbge, setCityIbge] = useState<string[]>([])
////////////////////////////////////////////////////////////////////////



  
  const [uf, setUf] = useState<string>('')
  const [city, setCity] = useState<string>('')

  const [barberList, setBarberList] = useState<Ibarber[]>([])
 
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const showModal = (id:number) => {
    setIsModalVisible(true);

    setMyId(id)
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
      

// Manter inf dos options ao vivo
useEffect(() => {
  let ufvalue = sessionStorage.getItem('uf')
    if (ufvalue) {
      setUf(ufvalue)
  }
}, [])


  useEffect(() => {
  let cityvalue = sessionStorage.getItem('city')
    if (cityvalue) {
      setCity(cityvalue)
  }
}, [])


  useEffect(() => {
       ListUfIbge()
  }, [])

  const ListUfIbge = async () => {
    try {
      let response = await Axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`
      )
      console.log('Minha resposta')

      let ufName = response.data.map((item:any) => item.sigla)

      console.log('Minhas uf', ufName)

      setUfIbge(ufName)

    }
    catch (err) {
      
    }
  }

  useEffect(() => {
    if(uf === "") {
      return;
    }
    ListCityIbge()
  }, [uf])

  const ListCityIbge = async () => {
    try {
      let response = await Axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
      
      console.log('Minha resposta da cidade',response.data)

      let mycity = response.data.map((item: any) => item.nome)

      setCityIbge(mycity)
      

    }
    catch (err) {
      
    }
  }

  useEffect(() => {
    if (city === "") {
      return;
    }
  HandleGetList()
  }, [city])

  const HandleGetList = async () => {
    try {
    let response = await Axios.get(`${URL}/barbers/list?cidade=${city}`)

      console.log(response)

      setBarberList(response.data)
    }
    catch (err) {
      
    }
  }


  return (
    <ContainerHome>
      <HeaderHome>
        <ImgHeader src={Logo} />
        <br />
    
        <TextHeaderHomeClient>
          Pesquise um Barbeiro em sua Cidade
        </TextHeaderHomeClient>

       
      </HeaderHome>

      <TemplateInputsHomeClient>
          <select name="uf" value={uf} required
            onChange={(e:any) => {setUf(e.target.value)
              sessionStorage.setItem('uf', e.target.value)}}
            className="form-select">
            <option value="">Selecione o estado</option>
            {
              ufIbge.map(ufIbge =>
                <option value={ufIbge} key={ufIbge}>{ ufIbge }</option>
              )
            }
          </select>
          <br />
          <select name="city" value={city} required
             className="form-select"
          onChange={(e: any) => {
            setCity(e.target.value)
            sessionStorage.setItem('city', e.target.value)}}
          >
            <option value="">Escolha a cidade</option>
            {
              cityIbge.map(cityIbge =>
                <option value={cityIbge} key={cityIbge}>{cityIbge}</option>
                
                )
            }
          </select>
          <br/>
         
        
            
        
        
        </TemplateInputsHomeClient>

     

      {
              barberList.length > 0 ? (
              <span style={{
                color: 'white',
                fontFamily: 'Nunito',
                fontSize: '22px',
                marginTop: '4vh',
                marginBottom: '1vh'
              }}>
                {barberList.length} Barbeiros encontrados em {city}
                </span>
            ) : (
                <div>

                </div>
              )
            }

{
        city == "" ? (
          <div></div>
        ) : barberList.length == 0 ? (
            <span style={{
              color: 'red',
              fontFamily: 'Nunito',
              fontSize: '24px',
              marginTop: '12vh',
              marginBottom: '1vh'
            }}>Sem barbeiros nessa cidade!</span>
        ) : ''
      }

      <TemplateContentHomeClient>
     
        <div className="container">
       
          <div className="row">
         

            {
              barberList.map((item:Ibarber) =>
                <div key={item.id} className="col-md">
                <CardHomeClient className="card">
                    <CardBodyHomeClient className="card-body">
                      <ItemImage loading="lazy" src={item.avatar}></ItemImage>
                      <br/>
        <TitleItemBarber><ItemBarber>Nome :  </ItemBarber>  {item.namelocal}</TitleItemBarber>
        <TitleItemBarber><ItemBarber>Bairro :  </ItemBarber>  {item.bairro}</TitleItemBarber>
        <TitleItemBarber><ItemBarber>Rua :  </ItemBarber>  {item.rua}</TitleItemBarber>
        <TitleItemBarber><ItemBarber>Número :  </ItemBarber>  {item.numero}</TitleItemBarber>
        <TitleItemBarber><ItemBarber>Email :  </ItemBarber>  {item.email}</TitleItemBarber>
        <TitleItemBarber>
                        <ItemBarber>Telefone :  </ItemBarber>
                        {item.telefone.replace(/\s/g, '')}
                <a href={`https://api.whatsapp.com/send?phone=${item.telefone.replace(/\s/g, '')}`}
                target="_blank">
                <img src={WhatsApp}
                  style={{ marginLeft: '1vw' }} loading="lazy" width="28px" height="28px" />
        </a></TitleItemBarber>
      
                      <br/>
                      <a href={`/barbers/plus/${item.id}`} target="_blank">
                        <button className="btn btn-success">
                        Saber Mais</button></a>
                      <br />

                      <button className="btn btn-primary" onClick={() => showModal(item.id)} >Serviços
                        <FaWrench size={22} color="white"></FaWrench></button>

                  </CardBodyHomeClient>
                  </CardHomeClient>
                  <br />

                  <Modal title="Lista de serviços" visible={isModalVisible}
                    onOk={handleOk} onCancel={handleCancel}>
                    
                    <ListServices myid={myid}></ListServices>
                    
                     </Modal>

              </div>
                )
              
            }

        
          </div>
          </div>
      </TemplateContentHomeClient>
    </ContainerHome>
  );
};
export default HomeClients;
