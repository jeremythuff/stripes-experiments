import React from 'react';
import {reduxForm} from 'redux-form';

import StripesFormWrapper from "./StripesFormWrapper";

export default function StripesForm(opts) {
	return function(Form) {

		var StripesForm = React.createClass({
			render: function() {
				return (
					<StripesFormWrapper>
						<Form {...this.props} />
					</StripesFormWrapper>	
				);
			}
		});
		
		return reduxForm(opts)(StripesForm);		
	};
}
