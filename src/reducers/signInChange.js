import {Map} from 'immutable';
export default function(state, name) {
    return state.set('signInForm', Map({
        name: name
    }));
}
