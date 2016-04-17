import {fromJS} from 'immutable';

export default function(state, postId, comment) {
    const commentForms = state.get('commentForms').set(postId, fromJS(comment));
    return state.set('commentForms', commentForms);
}
