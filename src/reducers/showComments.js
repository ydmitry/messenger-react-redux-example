import {fromJS} from 'immutable';

export default function(state, postId, comments) {
    const newComments = state.get('comments').set(postId, fromJS(comments));
    return state.set('comments', newComments);
}
