import Header from '../../src/components/Header';
import {renderIntoDocument, scryRenderedDOMComponentsWithClass} from 'react-addons-test-utils';
import { fromJS } from 'immutable';
import {expect} from 'chai';

describe('Header', () => {

    it('Should show Sign In link if user not authorized', () => {
        const component = renderIntoDocument(
            <Header signedIn={false} authorName={null} signInForm={false}/>
        );

        const headerSignInLink = scryRenderedDOMComponentsWithClass(component, 'header__sign-in');

        expect(headerSignInLink.length).to.equal(1);
        expect(headerSignInLink[0].textContent).to.equal('Sign in');
    });

    it('Shows user name if user signed in', () => {
        const component = renderIntoDocument(
            <Header signedIn={true} authorName="Test" signInForm={false}/>
        );

        const el = scryRenderedDOMComponentsWithClass(component, 'header__author-name');

        expect(el.length).to.equal(1);
        expect(el[0].textContent).to.equal('Test');
    });

    it('Shows sign in form', () => {
        const component = renderIntoDocument(
            <Header signedIn={false} authorName={null} signInForm={{
                name: "Test"
            }}/>
        );

        const el = scryRenderedDOMComponentsWithClass(component, 'header__sign-in-form');

        expect(el.length).to.equal(1);
    });

});
