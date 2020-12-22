    import logo from './../img/logo-home@2x.png'
    import './../css/ioasys.css'

    import Form from './Form.js'

const Principal = () => {
    return (
        <div className="container">
            <section className="box">
            <img src={logo} alt="Ioasys" className="logo_home" />
            <h2 className="box_title">BEM-VINDO AO
                EMPRESAS</h2>
            <p>
                Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.
            </p>
         <Form/>
            </section>
        </div>
    );
  }
  export default Principal;
