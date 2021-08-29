

const initialState = {
        destination: null,
        intialDestination: 'Select the Dilvery Address',
        persnaldetails: null

}



const tabReducer = (state = initialState, action) => {
        switch (action.type) {
                case 'SET_DESTENATION':
                        return {
                                ...state,
                                destination: action.payload,

                        };
                case 'SET_INITIAL_DESTENATION':
                        return {
                                ...state,
                                intialDestination: action.payload,

                        };
                case 'SET_PERSNAL':
                        return {
                                ...state,
                                persnaldetails: action.payload,

                        };





                default: return state

        }
}

export default tabReducer;