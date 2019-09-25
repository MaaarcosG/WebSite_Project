import React from 'react';

export default class Options extends React.Component {
  render() {
    const contenedorPrimero = {
        width: '680px', 
        height: '562px',
        overflow: 'hidden',
        position: 'absolute',
        alignItem: 'center',
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        left:'683px'
      }
    
      const icono = {
          width: '53px',
          height: '53px',
          position: 'absolute',
          left: '160px',
          top: '110px'
      }

      const estiloBoton = {
        borderRadius: '50px 50px 50px 50px',
        border: '1px solid #1c94e0', 
        background: '#FFF',
        color: '#1c94e0',
        width: '105px',
        height: '40px',
        position: 'absolute',
        left: '410px',
        top: '117px',
        fontFamily: '"Segoe UI", Arial, sans-serif'
      }

    const estiloTextoGeneral = {
        width: '330px',
        height: '50px',
        fontFamily: '"Segoe UI", Arial, sans-serif',
        fontSize: '14px',
        position: 'absolute',
        left: '165px',
        top: '150px'
      }
    
    const estiloTextoSecundario = {
        width: '330px',
        height: '50px',
        fontFamily: '"Segoe UI", Arial, sans-serif',
        fontSize: '12px',
        position: 'absolute',
        left: '165px',
        top: '303px'
    }

    const estiloBotonRegistrate = {
        borderRadius: '50px 50px 50px 50px',
        fontFamily: '"Segoe UI", Arial, sans-serif',
        border: '1px solid #1da1f2', 
        background: '#1da1f2',
        color: '#FFF',
        width: '350px',
        height: '33px',
        position: 'absolute',
        left: '165px',
        top: '360px'
    }

    const estiloBotonIniciarSesion = {
        borderRadius: '50px 50px 50px 50px',
        fontFamily: '"Segoe UI", Arial, sans-serif',
        border: '1px solid #1da1f2', 
        background: '#FFF',
        color: '#1da1f2',
        width: '350px',
        height: '33px',
        position: 'absolute',
        left: '165px',
        top: '410px'
    }
    return (
      <div style={contenedorPrimero}>
            <img src='https://cdn1.iconfinder.com/data/icons/windev-contacts-2/512/classic_twitter_bird-512.png' style={icono}></img>
            <a href='https://twitter.com/login'>
            <button style={estiloBoton}><strong>Iniciar Sesion</strong></button>
            </a>
            <div style={estiloTextoGeneral}>
                <h1>Descubre lo que está pasando en el mundo en este momento</h1>
            </div>
            <div style={estiloTextoSecundario}>
                <h2>Únete hoy a Twitter</h2>
            </div>
            <div>
                <a href='https://twitter.com/i/flow/signup'>
                <button style={estiloBotonRegistrate}><strong>Regístrate</strong></button>
                </a>
                <a href='https://twitter.com/i/flow/signup'>
                <button style={estiloBotonIniciarSesion}><strong>Iniciar Sesión</strong></button>
                </a>
            </div>
      </div>
    );
  }
}