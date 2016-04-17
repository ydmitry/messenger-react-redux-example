export default function(state) {
    return state
        .set('signedIn', false)
        .set('authorName', null)
        .set('signInForm', null);
}
