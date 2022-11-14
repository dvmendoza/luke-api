import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({changeRefresh}) => {

    const navigate = useNavigate();

    const [ resource, setResource ] = useState("");
    const [ id, setId ] = useState(1);

    const getInfo = (e) => {
        e.preventDefault()
        navigate(`/${resource}/${id}`)
    }

    return (
        <div>
            <form style = {{display: 'flex', justifyContent: 'center'}} onSubmit = {getInfo}>
                <div style = {{marginRight: 32}}>
                    <span>
                        Search For: 
                    </span> 
                    <select onChange = { e => setResource(e.target.value)} name="resource">
                        <option disabled hidden selected value="Choose One">Choose One</option>
                        <option value="people">People</option>
                        <option value="planets">Planet</option>
                    </select>
                </div>
                <div style = {{marginRight: 32}}>
                    <span>
                        ID: 
                    </span>
                    <input 
                        onChange= { e => setId(e.target.value)} 
                        type="number" 
                        name = "id" 
                        min={1} 
                        // ! if planet, then max is 60, else 83. kinda thing doable?
                        max = {83}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Navbar