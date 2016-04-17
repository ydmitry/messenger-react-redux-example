import { signOut } from '../actionCreators';

export default function sendSignOut() {
    return (dispatch, getState) => {
        const model = getState().get('model');

        return model.logout()
            .then(() => dispatch(signOut()));
    }
}
