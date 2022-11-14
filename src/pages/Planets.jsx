import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import logo from '../static/img/obi-wan-kenobi-these-are-not-the-droids.gif'

const Planets = () => {

    const { id } = useParams();
    const [ beings, setBeings ] = useState({});
    const [ errorResponse, setErrorResponse] = useState("")

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res => {
                // if (res.status === 400) {
                //     throw new Error(<img src = {logo} alt="obi wan" />);
                // }
                // console.log(res.data)
                setBeings({ "swapi" : res.data })
                // console.log(beings.name)
                // setName(res.data.name)
                // const { name, height, hair_color, skin_color } = res.data
            })
            .catch(errors => {
                console.log(errors)
                setErrorResponse("Loading...")
                setBeings({})
            })
    }, [id])

    return (
        <fieldset>
            <legend>Planets.jsx</legend>
            <ul>   
                {
                    (beings.swapi) ?
                    <>
                    {
                    Object.keys(beings.swapi).map((i) => {
                        return (
                            <li key = { i }>
                            { i } : { beings.swapi[i] }
                            </li>
                        )
                    })
                    }
                    </>
                    :
                    <>
                        <img src = {logo} alt="obi wan" />
                        {/* <h1>{errorResponse}</h1> */}
                    </>
                }
                {/* <span>Name: {name}</span> */}
            </ul>
        </fieldset>
    )
}

export default Planets