export const increment = (num:number)=> {
    return {
        type:'INCREMENT',
        payload:num
    }  
}

export const decrement = ()=> {
    return {
        type:'DECREMENT'
    }  
}
export const logAction = ()=> {
    return {
        type:'LOG_IN'
    }  
}

export const formSubmit = (data:any)=>{
    return{
        type:'SUBMIT_FORM',
        payload:data
    }
}

export const getToken = (data:string|null)=>{
    return{
        type:'GET_TOKEN',
        payload:data
    }
}


