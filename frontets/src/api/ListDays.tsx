import React, {useState, useEffect} from 'react'
import { Modal, Button } from 'antd';
import Axios from 'axios'
import URL from '../utils/URL'

const ListDays = ({myid}) => {


  interface Idays {
    id: number,
    dayweek: string,
    hourtoManha: string,
    hourfromManha: string,
    hourtoTarde: string,
    hourfromTarde: string,


  }

  const [list, setList] = useState<Idays[]>([])


  useEffect(() => {
    HandleGetDay()
  }, [myid])

  useEffect(() => {
    HandleGetDay()
  }, [])


  const HandleGetDay = async() => {
    try {
      let response = await Axios.get(`${URL}/barbers/list/schedules/${myid}`)
      console.log('Minha resposta', response.data)

      let myitems = response.data.map((item: any) => item.Days)
      
      let myDays = myitems[0].map((item:any) => item)
      
      setList(myDays)

    }
    catch (err) {
      console.log(err)

    }
  }



  return (
    <div>
       {
          list.map((list:Idays) =>
            <aside key={list.id}>
              <span><b>{list.dayweek}</b></span><br/>
              <span>Manhã : {list.hourfromManha.slice(0,5) } | { list.hourtoManha.slice(0,5)}</span><br/>
              <span>Tarde: {list.hourfromTarde.slice(0,5)} | {list.hourtoTarde.slice(0,5)}</span>
              <hr/>
            </aside>
            )
       }
  </div>
  )
}
export default ListDays 