import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const updateStorage = cats => {
    localStorage.setItem('cats', JSON.stringify(cats))
}

const Cat = props => {

    let cats = localStorage.length > 0 ? JSON.parse(localStorage.getItem('cats')) : []

    const [cat, setCat] = useState(() => {
        const [initialState] = cats.filter(cat => cat.id === Number(props.match.params.id))
        return initialState
    })
    const [customField, setCustomField] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        cat.customField = customField
        const idx = Number(props.match.params.id) - 1
        cats[idx] = cat
        updateStorage(cats)
        setCat(cat)
    }

    return(
        <div id='singleAnimal'>
            <h3>{cat.name}</h3>
            <ul key={cat.id}>
                <li>Age: {cat.age}</li>
                <li>Disposition: {cat.disposition}</li>
                <li>Favorite Food: {cat.favoriteFood}</li>
                <li>Custom details: {cat.customField}</li>
            </ul>
            <button onClick={() => {
                cats = cats.filter(cat => cat.id !== Number(props.match.params.id))
                updateStorage(cats)
            }}>
                <Link to={`/`} className="link">Delete</Link>
            </button>

            <div id='input'>
                <div>
                    <label>Please enter custom details below:</label>
                </div>
                <input value={customField} onChange={(event) =>  setCustomField(event.target.value)}></input>
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Cat
