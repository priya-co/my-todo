import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function TodoList(props) {
    //localstorage
     const logToLocalStorage = function (e) { 
         localStorage.setItem(`Lists`, JSON.stringify(props.Lists));
     }

     useEffect(() => {
        window.addEventListener("beforeunload", logToLocalStorage);

        return () => {
            window.removeEventListener("beforeunload", logToLocalStorage);
        }
    });

    //want to create element for each list
    const Lists = props.Lists.map((list, index) => (
                    <div key={list.index}>
                        <input type="checkbox" checked={list.isChecked} onClick = {() => (props.onCheck(!list.isChecked, index))}/>
                        <label>{ list.label }</label>
                        <button onClick = {() => (props.onRemove(index))}>x</button>
                    </div>
                ))
    return (
        <div>
            {
                Lists
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        Lists: state.todoLists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCheck: (isChecked, index) => {
            const action = {
                type: 'CHECK',
                isChecked,
                index
            }
            dispatch(action);
        },
        onRemove: (index) => {
            const action = {
                type: 'REMOVE',
                index
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);