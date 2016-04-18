import { showPosts, postFormChange } from '../actionCreators';

export default function addPost(data) {
    return (dispatch, getState) => {
        const model = getState().get('model');

        return model.addPost(data)
            .then(() => model.getPosts())
            .then(result => dispatch(showPosts(result)))
            .then(() => dispatch(postFormChange(null)));
    }
}
