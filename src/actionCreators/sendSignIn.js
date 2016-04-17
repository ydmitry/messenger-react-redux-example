import { showUser } from '../actionCreators';

export default function sendSignIn(data) {
    return (dispatch, getState) => {
        const model = getState().get('model');

        return model.authenticate(data.name)
            .then(() => dispatch(showUser(data.name)));
    }
}
