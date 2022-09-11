import React from 'react'
const ContextMessage=React.createContext();

function Context(){
    return (
        <ContextMessage.Provider value={"Be safe"}>
            <GrandParent/>
        </ContextMessage.Provider>
        
    )
}
function GrandParent(){
    return (
        <>
        <div>GrandParent</div>
        <Parent/>
        </>
    )
}
function Parent(){
    return (
        <>
        <div>Parent</div>
        <div></div>
        <Child/>
        </>
    )
}
function Child(){
    let message=React.useContext(ContextMessage);
    return (
    <>
    <div>Child</div>
    <div>{message} from Grand Parent</div>
    </>
    )
}

export default Context;