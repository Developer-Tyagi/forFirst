import React , { useState } from 'react'


function ObjectHook() {
    const[Name, setName] = useState({ firstName: '', lastName: ''})
    return(
        <div>
            <form>
                <input type="text" 
                value={Name.firstName}
                onChange = {e => setName({ ...Name , firstName: e.target.value})}
                />
                      <br />
                    <input
                     type="text" 
                     value={Name.lastName}
                     onChange = {e => setName({...Name,lastName: e.target.value})}
                     
                     />
    <h1>Your firstName: {Name.firstName}</h1>
    <h1>Your lastName: {Name.lastName}</h1>

                </form>
            </div>
    );
}

export default ObjectHook