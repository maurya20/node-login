const formData = 'xyz'
const formReducer = (state = formData, action:any)=>{
    switch(action.type){
        case 'SUBMIT_FORM':
        return {
            formData:action.payload
        }
        default:
            return state
    }
}

export default formReducer