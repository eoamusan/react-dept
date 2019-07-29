import { homeConstants } from '../constants';

const initialState = {
    headerFixed: false,
    showMenu: false,
    main: 'HOME',
    region: 'GLOBAL',
    cards: []
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
        case homeConstants.START_FETCH_CARDS:
            return {
                ...state,
                fetchingCards: true
            };
        case homeConstants.FETCH_CARDS_SUCCESS:
            return {
                ...state,
                fetchingCards: false,
                cards: action.cards
            };
        case homeConstants.FETCH_CARDS_ERROR:
            return {
                ...state,
                cards: []
            };
        default:
            return state;
    }
}