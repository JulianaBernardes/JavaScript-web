import React from 'react'
import ReactDOM from 'react-dom'

// import GoodMorning from './components/GoodMorning'
// import  Salute from './components/Salute'
import Father from './components/Father'
import Children from './components/Children'

ReactDOM.render(
    <div>
        <Father name="Paulo" surname="Silva" >
            <Children name="Pedro" />
            <Children name="Paulo" />
            <Children name="Carla" />
        </Father>
    </div>
    , document.getElementById('root'))

