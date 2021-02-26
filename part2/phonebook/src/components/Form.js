import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.addPerson}>
            <div>
                name: <input value={props.newName} onChange={props.handleInputName}/><br />
                number: <input value={props.newNo} onChange={props.handleInputNo}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Form