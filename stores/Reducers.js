

const initialState = {
        destination: null,
        address: null,
        userData: null,


}



const tabReducer = (state = initialState, action) => {
        switch (action.type) {
                case 'SET_DESTENATION':
                        return {
                                ...state,
                                destination: action.payload,

                        };


                case 'SET_USER_DATA': {
                        return {
                                ...state,
                                address: action.payload.address,
                                userData: action.payload.userdata
                        }
                }


                default: return state

        }
}

export default tabReducer;