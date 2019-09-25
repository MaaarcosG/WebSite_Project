import React from 'react';
import Options from './Options.js';
import Creditos from './Creditos.js';

export default class App extends React.Component {
  render() {
    const contenedorPrimero = {
      width: '680px', 
      height: '560px',
      background: '#1da1f2',
      overflow: 'hidden',
      position: 'absolute',
      alignItem: 'center',
      display: 'flex',
      flexDirection: 'row'
    }

    const items = {
      maxwidth: '440px',
      height: 'auto',
      color: '#FFF',
      padding: '0px 16px',
      position: 'relative',
      display: 'block'
    }

    const span_Style = {
      display: 'flex',
      lineheight: '24px',
      margin: '48px auto',
      position: 'relative',
      left: '172px',
      top: '150px',
      fontFamily: '"Segoe UI",Arial,sans-serif',
      fontSize: '18px'
    }

    const tamañoImagen = {
      width: '50px',
      height: '50px',
      position: 'absolute',
      left: '130px',
      top: '190px'
    }

    const tamañoImagen2 = {
      width: '50px',
      height: '50px',
      position: 'absolute',
      left: '130px',
      top: '260px'
    }

    const tamañoImagen3 = {
      width: '40px',
      height: '40px',
      position: 'absolute',
      left: '130px',
      top: '330px'
    }

    const fondoIcono = {
      width: '900px',
      height: '900px',
      position: 'absolute',
      top: '-130px',
      left: '110px',
      opacity: '0.6'
    } 
    return (
      <div>
        <div style={contenedorPrimero}>
        <img src='https://cdn1.iconfinder.com/data/icons/windev-contacts-2/512/classic_twitter_bird-512.png' style={fondoIcono}></img>
          <div style={items}>
            <img src='https://img.icons8.com/cotton/2x/search--v2.png' style={tamañoImagen}></img>
            <span style={span_Style}><strong>Sigue lo que te interesa</strong></span>
            <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-people-512.png' style={tamañoImagen2}></img>
            <span style={span_Style}><strong>Enterate de lo que está hablando la gente</strong></span>
            <img src='https://cdn1.iconfinder.com/data/icons/trycons/32/comments-512.png' style={tamañoImagen3}></img>
            <span style={span_Style}><strong>Únete a la conversación</strong></span>
          </div>
        </div>
        <Options/>
        <Creditos/>
      </div>
      
    );
  }
}