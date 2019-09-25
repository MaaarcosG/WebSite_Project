import React from 'react';

export default class Creditos extends React.Component {
  render() {
    const contendorCredito = {
        width: '1355px', 
        height: '60px',
        position: 'absolute',
        top: '560px'
    }

    const estiloCredito = {
        background: '#fff',
        display: '-ms-flexbox',
        display: 'flex',
        msFlexWrap: 'wrap',
        flexWrap: 'wrap',
        msFlexPack: 'center',
        justifyContent: 'center',
        width: 'auto',
    }
    
    const estilo = {
        display: 'inline-block',
        padding: '0 9px 0 9px',
        fontSize: '12px',
        color: '#aab8c2'
    }

    const color = {
        color: '#aab8c2'
    }
    return (
      <div style={contendorCredito}>
        <ul style={estiloCredito}>
            <li style={estilo}><a href='https://about.twitter.com/es.html' style={color}>Sobre nosotros</a></li>
            <li style={estilo}><a href='https://help.twitter.com/es?lang=browser' style={color}>Centro de Ayuda</a></li>
            <li style={estilo}><a href='https://blog.twitter.com/espanol' style={color}>Blog</a></li>
            <li style={estilo}><a href='https://status.twitterstat.us/' style={color}>Estado</a></li>
            <li style={estilo}><a href='https://careers.twitter.com' style={color}>Empleos</a></li>
            <li style={estilo}><a href='https://twitter.com/es/tos' style={color}>Condiciones</a></li>
            <li style={estilo}><a href='https://twitter.com/es/privacy' style={color}>Politica de Privacidad</a></li>
            <li style={estilo}><a href='https://help.twitter.com/es/rules-and-policies/twitter-cookies' style={color}>Cookies</a></li>
            <li style={estilo}><a href='https://business.twitter.com/es/help/troubleshooting/how-twitter-ads-work.html' style={color}>Información sobre anuncios</a></li>
            <li style={estilo}><a href='https://about.twitter.com/es/company/brand-resources.html' style={color}>Marca</a></li>
            <li style={estilo}><a href='https://about.twitter.com/es.html' style={color}>Aplicaciones</a></li>
            <li style={estilo}><a href='https://ads.twitter.com/login?ref=gl-tw-tw-twitter-advertise' style={color}>Anunciarse</a></li>
            <li style={estilo}><a href='https://marketing.twitter.com/na/en' style={color}>Marketing</a></li>
            <li style={estilo}><a href='https://marketing.twitter.com/na/en' style={color}>Empresas</a></li>
            <li style={estilo}><a href='https://developer.twitter.com/' style={color}>Desarrolladores</a></li>
            <li style={estilo}><a href='https://twitter.com/i/directory/profiles' style={color}>Directorios</a></li>
            <li style={estilo}><a href='https://twitter.com/settings/personalization' style={color}>Configuración</a></li> 
            <li style={estilo}><a href='#' style={color}>© 2019 Twitter</a></li> 
        </ul>
      </div>
    );
  }
}