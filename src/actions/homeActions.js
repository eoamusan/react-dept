import { homeConstants } from '../constants'
import { fetchCards } from '../api';

export const homeActions = {
    fixHeader,
    showMenu,
    focusLink,
    fetchCardList
};

function fixHeader(type) {
    return dispatch => {
        dispatch(fixHeader(type));
    };

    function fixHeader(form) { return { type: homeConstants.FIX_HEADER, form }; }
}

function showMenu(form) {
    return dispatch => {
        dispatch(showMenu(form));
    };

    function showMenu(form) { return { type: homeConstants.TOGGLE_MENU, form }; }
}

function focusLink(type, link) {
    return dispatch => {
        dispatch(focusLink(type, link));
    };

    function focusLink(type, link) { return { type: homeConstants.FOCUS_LINK, linkType: type, link }; }
}

function fetchCardList(work, industry) {
    return dispatch => {
        dispatch(requestCards());

        fetchCards(work, industry)
            .then(
                cards => {
                    console.log(cards);
                    dispatch(success(cards));
                },
                error => {
                    if (error.message) {
                        dispatch(failure(error.message));
                    }
                }
            );
    };

    function requestCards() { return { type: homeConstants.START_FETCH_CARDS }; }
    function success(cards) { return { type: homeConstants.FETCH_CARDS_SUCCESS, cards }; }
    function failure(error) { return { type: homeConstants.FETCH_CARDS_ERROR, error }; }
}