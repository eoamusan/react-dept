import { homeConstants } from '../constants';

export const homeActions = {
    fixHeader,
    showMenu,
    focusLink
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
