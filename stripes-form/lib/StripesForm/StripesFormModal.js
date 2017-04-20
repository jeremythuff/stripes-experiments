import React, { Component, PropTypes } from 'react';
import { isDirty } from 'redux-form';

import Modal from '@folio/stripes-components/lib/Modal';

export default class StripesFormModal extends Component {
    render() {
        return <Modal label="There are unsaved changes" {...this.props} />
    };
}
