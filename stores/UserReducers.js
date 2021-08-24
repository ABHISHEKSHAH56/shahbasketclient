

import AsyncStorage from '@react-native-async-storage/async-storage';



let initialState = []
if (typeof window !== 'undefined') {

        if (AsyncStorage.getItem("userData")) {
                //if user's data already in local storage
                let userData = JSON.parse(localStorage.getItem("userData"));
                let token = localStorage.getItem("accessToken")
                let userRedux = { ...userData, token }
                initialState = userRedux

        }
}

const UserReducer = (state = initialState, action) => {
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

export default UserReducer;