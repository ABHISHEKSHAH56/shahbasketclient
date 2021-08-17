

const initialState = {
        destination: null,
        intialDestination: 'Select the Dilvery Address',
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



                default: return state

        }
}

export default tabReducer;