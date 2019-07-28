import { homeConstants } from '../constants';

export const homeActions = {
    fixHeader
};

function fixHeader(type) {
    return dispatch => {
        if (type) {
            dispatch(fixHeader());
        } else {
            dispatch(unFixHeader());
        }
    };

    function fixHeader() { return { type: homeConstants.FIX_HEADER }; }
    function unFixHeader() { return { type: homeConstants.UN_FIX_HEADER }; }
}
