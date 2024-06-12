import {useEffect} from 'react'

export default function Test(props){

    const objeto = {
        id: 1,
        carro: "rojo"
    }


    return(
        <div>
            <button onClick={() => props.change(2, objeto)}>change</button>
        </div>
    )
}