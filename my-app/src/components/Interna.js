import logo from './../img/logo-home@2x.png'
import './../css/ioasys.css'

import axios from "axios";

import React, { useState } from "react";

const Interna = () => {

  const [item, setItem] = useState([]);


  let getLogin= localStorage.getItem('loginData');
  let dataValue=JSON.parse(getLogin);

  let wordGet=''



 axios.get('https://empresas.ioasys.com.br/api/v1/enterprises', {
    params: {
      "access-token": dataValue['access-token'],
      "client": dataValue['client'],
      "uid": dataValue['uid'],
    }
  })
  .then(function (response) {
    let valItens = JSON.stringify(response.data.enterprises)
    let wordGet=JSON.parse(valItens);
    setItem(wordGet);
    console.log(wordGet)

  })

let i=0

    return (
      <div className="container">
  <div className="column" key={i++}>
{ item.map((val) => (

          <div className="valor">
            <div className="thumb">
              E {ValidityState.id}
            </div>
            <p>
            <h2>{val.id}</h2>
            <h3>

            </h3>
            <span></span>
            </p>

          </div>

      ))}
  </div>
  </div>
    );
}

export default Interna;
