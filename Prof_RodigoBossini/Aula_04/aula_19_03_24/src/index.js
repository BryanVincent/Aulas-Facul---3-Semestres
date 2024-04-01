import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const App = () => {
  const  estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', border: 'none', color: 'white', borderRadius: 8, width: '100%'}
  const textoRotuloNome = 'Digite seu nome:'
  const textoRotuloSenha = 'Digite sua senha:'
  const textoBotao = () => 'Enviar'

  return(
    <div
      style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
      <label
        className='rotulo'
        htmlFor="nome"
        style={{display: 'block', marginBottom: 4}}>
          {textoRotuloNome}
      </label>
      <input
      type="text"
      id="nome"
      style={{paddingTop: 8,
      paddingBottom: 8, borderStyle: 'hidden', outline: 'none', borderRadius: 8, width: '100%'}}/>

      <label
        className='rotulo'
        htmlFor="senha"
        style={{display: 'block', marginBottom: 4, paddingTop: 8}}>
          {textoRotuloSenha}
      </label>
      <input
      type="text"
      id="nome"
      style={{paddingTop: 12,
      paddingBottom: 8, borderStyle: 'hidden', outline: 'none', borderRadius: 8, width: '100%'}}/>

      <button
      style={estilosBotao} onClick={textoBotao}>
      {textoBotao()}
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)