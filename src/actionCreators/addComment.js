import { showComments, commentFormChange } from '../actionCreators';

export default function addComment(postId, data) {
    return (dispatch, getState) => {
        const model = getState().get('model');

        return model.addComment(postId, data)
            .then(() => model.getComments(postId))
            .then(result => dispatch(showComments(postId, result)))
            .then(() => dispatch(commentFormChange(postId, {
                comment: ''
            })));
    }
}
