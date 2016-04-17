import {Map} from 'immutable';
export default function(state) {
    return state.set('signInForm', Map({
        name: ''
    }));
}
