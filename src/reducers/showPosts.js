import {fromJS} from 'immutable';

export default function(state, posts) {
    return state.set('posts', fromJS(posts));
}
