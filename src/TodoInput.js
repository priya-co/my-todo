import React, { useState } from 'react';
import { connect } from "react-redux";


function TodoInput(props) {
    const [userInput, setUserInput] = useState('');
    
    return (
        <div>
            <div>
                <input onChange = {(e) => setUserInput(e.target.value)} placeholder="Enter item"  value={userInput}/>
                <button onClick = {() => (props.onAddItem(userInput))} >Add</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddItem: (userInput) => {
            const action = {
                type: 'ADD_ITEM',
                newItem: {
                    label: userInput,
                    isChecked: false,
                    index : 3
                }
            }
            dispatch(action);
        }
    }
}
export default connect(null,  mapDispatchToProps)(TodoInput)
