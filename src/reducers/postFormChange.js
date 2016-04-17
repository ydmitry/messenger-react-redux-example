import {fromJS} from 'immutable';

export default function(state, post) {
    return state.set('postForm', fromJS(post));
}
