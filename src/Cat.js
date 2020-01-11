import React from 'react'


const Cat = props => {
    let cats = []
    if(localStorage.length > 0) cats = JSON.parse(localStorage.getItem('cats'))
    const [cat] = cats.filter(cat => cat.id === Number(props.match.params.id))
    return(
        <div>
            <h3>{cat.name}</h3>
            <ul key={cat.id}>
                <li>Age: {cat.age}</li>
                <li>Disposition: {cat.disposition}</li>
                <li>Favorite Food: {cat.favoriteFood}</li>
            </ul>
        </div>
    )
}

export default Cat
