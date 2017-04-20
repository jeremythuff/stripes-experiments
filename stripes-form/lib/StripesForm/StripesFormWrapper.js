import React, { Component, PropTypes } from 'react';
import { isDirty } from 'redux-form';

import StripesFormModal from './StripesFormModal';

export default class StripesFormWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dirty: isDirty(props.children.props.form)(this.state)
        };
    }

    render() {
        return (
            <div style={{ width: '100%', minWidth: this.state.contentMinWidth, height: '100%', overflow: 'auto' }}>
                {this.props.children}
                <StripesFormModal open={true} {...this.props} />
            </div>
        );
    };

}
