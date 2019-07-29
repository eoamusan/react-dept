import { homeConstants } from '../constants';

const initialState = {
    headerFixed: false,
    showMenu: false,
    main: 'HOME',
    region: 'GLOBAL'
};

export default function home(state = initialState, action) {
    switch (action.type) {
        case homeConstants.FIX_HEADER:
            return {
                ...state,
                headerFixed: action.form
            };
        case homeConstants.TOGGLE_MENU:
            return {
                ...state,
                showMenu: action.form
            };
        case homeConstants.FOCUS_LINK:
            return {
                ...state,
                [action.linkType]: action.link
            };
        default:
            return state;
    }
}