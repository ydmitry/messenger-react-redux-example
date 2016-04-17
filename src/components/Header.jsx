import React from 'react';
import SignInForm from './SignInForm.jsx';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        let { signedIn, authorName, signInForm } = this.props;

        return <div className="header">
            { !signedIn && !signInForm ?
                <div className="header__sign-in" onClick={this.props.onShowSignInForm}>
                    Sign in
                </div> : null
            }
            { !signedIn && signInForm ?
                <SignInForm
                    user={ signInForm }
                    className="header__sign-in-form"
                    onChange={ this.props.onSignInChange }
                    onSubmit={ this.props.onSignInSubmit }
                /> : null
            }
            { signedIn ?
                <h1 className="header__author-name">
                    { authorName }
                </h1> : null
            }
            { signedIn ?
                <div className="header__sign-out" onClick={this.props.onSignOut}>
                    Sign out
                </div> : null
            }
        </div>
    }
});
