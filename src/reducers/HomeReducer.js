import { homeConstants } from '../constants';

const initialState = {
    headerFixed: false
};

export default function home(state = initialState, action) {
    switch (action.type) {
        case homeConstants.FIX_HEADER:
            return {
                ...state,
                headerFixed: true
            };
        case homeConstants.UN_FIX_HEADER:
            return {
                ...state,
                headerFixed: false
            };
        default:
            return state;
    }
}