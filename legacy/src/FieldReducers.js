const INITIAL_STATE = { value: 'opa'}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'VALUE_CHANGED':
            return {Value: action.payload }
            default:
                return state
    }
}