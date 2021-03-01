const userLogged = 'out'
const userReducer = (state = userLogged, action:any)=>{
    switch(action.type){
        case 'GET_TOKEN':
        return {
            UserLogged:action.payload
        }
        default:
            return state
    }
}

export default userReducer