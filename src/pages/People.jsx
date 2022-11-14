import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import logo from '../static/img/obi-wan-kenobi-these-are-not-the-droids.gif'

const People = () => {

    const { id } = useParams();
    const [ beings, setBeings ] = useState({});
    const [ errorResponse, setErrorResponse] = useState("")
    // const [ name, setName ] = useState("")
    // const [ height, setHeight ] = useState("")
    // const [ hair_color, setHairColor ] = useState("")
    // const [ skin_color, setSkinColor ] = useState("")

    // ! FOR SOME REASON, IF I DON'T PUT A DICTIONARY AS THE ARGUMENT FOR setBeings(), ie IF IT'S setBeings(res.data) LIKE I HAD ORIGINALLY, THE IMG (or LOGO) DOES NOT RENDER ON A BAD REQUEST. 

    // ? WOULD ANYONE HAPPEN TO KNOW WHY THAT IS?
    // * PERHAPS BECAUSE beings STILL EXISTS, BUT IT JUST DOESN'T HAVE ANYTHING IN IT? <= prolly this... kek

    // TODO ASK INSTRUCTOR ABOUT THE STUFF IN RED.
    // TODO setBeings(res.data)
    // TODO REMOVE ALL THE .swapi AFTER beings.


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                // if (res.status === 400) {
                //     throw new Error(<img src = {logo} alt="obi wan" />);
                // }
                // console.log(res.data)
                setBeings({
                    "swapi" : res.data
                })
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
            <legend>People.jsx</legend>
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

export default People