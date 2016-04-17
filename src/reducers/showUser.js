export default function(state, name) {
    return state
        .set('signedIn', true)
        .set('authorName', name)
        .set('signInForm', null);
}
