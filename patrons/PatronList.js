import React, { Component } from 'react';
import { connect } from 'stripes-connect';
import { Link } from 'react-router';

class PatronList extends Component {

  static manifest = { 'apis/patrons': { remote: true,
                                        pk: '_id',  // The primary key of records from this end-point
                                                    //  (when it's not the default, "id")
                                        records: 'patrons' // The name of the property in the JSON response
                                                           // that holds the records 
                                      }};

  render() {

    // Accesses patrons data passed in by 'connect' according to manifest
    if (!('apis/patrons' in this.props.data)) return null;
    var patronNodes = this.props.data['apis/patrons'].map((patron) => {
      return (
        <li key={patron.id}>
          {patron.patron_name} [<a onClick={() => this.props.mutator['apis/patrons'].delete(patron)}>delete</a>]
                               &nbsp;[<Link to={'patrons/edit/' + patron._id}>edit</Link>]
        </li>
      );
    });
    return (
      <div>
        <h3>Patron list:</h3>
        <ul>
          {patronNodes}
        </ul>
        [<Link to={'patrons/add'}>add patron</Link>]
      </div>
    );
  }
}
export default connect(PatronList, 'patrons');
