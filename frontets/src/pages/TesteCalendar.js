import React, {useState} from 'react'

import Calendar from 'react-calendar';

import dayjs from 'dayjs'

const Calendario = () => {

    const [date, setDate] = useState(new Date());

    let formatoDay = dayjs(date).format("YYYY-MM-DD");

    let dayWeek = dayjs(date).format("dddd")

    // Fazer if - if(dayWeek == "Fryday") {
       // setDate('Sexta-Feira')
   // }


    console.log('Data formatada', formatoDay)
    console.log('Minha semana', dayWeek)

console.log('Meu valor', date)

    return (
    <div>
 <div className="container">
      <div className="main">
        <div className="row">
          <div className="col-md">
            <Calendar
              style={{width: '60%'}}
              defaultValue={new Date()}
              onChange={setDate}
              value={date}
            />
          </div>
          </div>
          </div>
          </div>
    </div>
    )
}
export default Calendario