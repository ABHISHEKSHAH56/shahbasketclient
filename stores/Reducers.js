

const initialState = {
        destination: null,
        intialDestination: 'Select the Dilvery Address',

}



let initialState = []
if (typeof window !== 'undefined') {

        if (localStorage.getItem("user")) {
                //if user's data already in local storage
                let userData = JSON.parse(localStorage.getItem("user"));
                let token = localStorage.getItem("accessToken")
                let userRedux = { ...userData, token }
                initialState = userRedux

        }
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

                case 'User_Details':
                        return {
                                ...state,
                                userDetails: action.payload
                        }



                default: return state

        }
}

export default tabReducer;