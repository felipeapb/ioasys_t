    import logo from './../img/logo-home@2x.png'
    import './../css/ioasys.css'
    import axios from "axios";


    import React, { useState } from "react";



const Form = () => {

  var form = new FormData();

    const [passView, SetpassView] = useState(true);
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setMsgError] = useState(0);


    function viewOff(value){
      SetpassView(value);
    }

    function sendData(form){
      axios({
        method: 'post',
        url: 'https://empresas.ioasys.com.br/api/v1/users/auth/sign_in',
        data: form
    })
    .then(function (response) {
        console.log(response.headers);
        localStorage.setItem('loginData',  JSON.stringify(response.headers));
        window.location.href = "/interna";
    })
    .catch(function (error) {
      setMsgError(1);
    });
    }

    function handleSubmit(event) {
      form.append("email", login);
      form.append("password", senha);
      event.preventDefault();
      sendData(form);

    }

    return (
        <section className="form-area">
              {erro==1 ? 'Não foi possível se logar' : ''}

            <form method="post"  onSubmit={handleSubmit}>
            <label htmlFor="fname"><img src="img/ic-email.svg" alt="email" /></label>
            <input
              type="text"
              placeholder="abc@yahoo.com"
              id="login"
              name="login"
              onChange={(e) => setLogin(e.target.value)}
            />

            <label htmlFor="lname">
            <img
               src="img/ic-cadeado.svg"
               alt="cadeado"
            />
            </label>

            <input
              type= {passView == true ? "text" : "password"}
              name="senha"
              id="senha"
              onChange={(e) => setSenha(e.target.value)}
            />
            <span
              className="view_password" >
                <img
                  src="img/eye-alt.svg"
                  alt="password"
                  name="senha"
                  onClick={(e) => viewOff(!passView)}
              />
            </span>
            <button className="send-login">ENTRAR</button>
            </form>
        </section>
    );
  }
  export default Form;
