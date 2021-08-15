

const initialState = {
        destination: null
}

const tabReducer = (state = initialState, action) => {
        switch (action.type) {
                case 'SET_DESTENATION':
                        return {
                                ...state,
                                destination: action.payload,

                        };



                default: return state

        }
}

export default tabReducer;