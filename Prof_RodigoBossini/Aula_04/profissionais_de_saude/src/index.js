import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import dra1 from './draUm.png'
const App = () => {

    const containerStyles = () => {
        return {width: 1280, margin: 'auto', border: '1px solid black', backgroundColor: "#EEE", borderRadius: 8, padding: 12, textAlign: 'center'}
    }

    const docNames = {dr1: 'Dra. Marcela', dr2: 'Dr. Nakumo', dr3: 'Dra. Beatriz'};

    return (
        <div style={containerStyles()}>
            <h2 className='titulo'>Profissionais de Saúde</h2>
            <div style={{margin: 8, border: '1px solid #DDD', borderRadius: 8, padding: 8, display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                
                <div className='profissional'>
                    <p className='medica'>Médica</p>
                    <img src={dra1}/>
                    <p>{docNames.dr1}</p>
                </div>

                <div className='profissional'>
                    <p className='dentista'>Dentista</p>
                    <img src={process.env.PUBLIC_URL+ 'drDois.png'}/>
                    <p>{docNames.dr2}</p>
                </div>

                <div className='profissional'>
                    <p className='cientista'>Cientista</p>
                    <img src='https://impa.br/wp-content/uploads/2022/10/Futuras-Cientistas.jpg'/>
                    <p>{docNames.dr3}</p>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)