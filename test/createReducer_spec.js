import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import createReducer from '../src/createReducer';
import Model from '../src/Model';
import { showUser, showPosts, signOut, showComments } from '../src/actionCreators';

describe('reducer', () => {

    const reducer = createReducer(new Model({}));

    it('Show user works', () => {
        let state = reducer(undefined, {type: '@@INIT'});
        state = reducer(state, showUser('Test'));

        expect(state.get('signedIn')).to.equal(true);
        expect(state.get('authorName')).to.equal('Test');
        expect(state.get('signInForm')).to.equal(null);
    });


    it('Authorize and logout successfully', () => {
        const actions = [
            {type: '@@INIT'},
            showUser('Test'),
            showPosts([{id: 1, text: "Test", name: "Test"}]),
            signOut()
        ];

        const state = actions.reduce(reducer, undefined);

        expect(state.get('signedIn')).to.equal(false);
        expect(state.get('authorName')).to.equal(null);
        expect(state.get('signInForm')).to.equal(null);
    });

    it('Show posts works', () => {
        const actions = [
            {type: '@@INIT'},
            showPosts([{id: 1, text: "Test", name: "Test"}])
        ];

        const state = actions.reduce(reducer, undefined);

        expect(state.get('posts').size).to.equal(1);
    });

    it('Show comments works', () => {
        const actions = [
            {type: '@@INIT'},
            showPosts([{id: 1, text: "Test post", name: "Test"}]),
            showComments(1, [{id: 1, text: "Test comment", name: "Test", postId: 1}])
        ];

        const state = actions.reduce(reducer, undefined);

        expect(state.get('comments').get(1).size).to.equal(1);
    });
});
