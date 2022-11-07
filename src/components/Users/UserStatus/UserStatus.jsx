import React from 'react';
import { compose } from 'redux';
import { withSurrounding } from '../../../hoc/withSurrounding';

class UserStatus extends React.Component {
    
    render() {
        return (
            <div>
                <span>
                    {this.props.status || 'No status'}
                </span>
            </div>
        );
    }
    
};



// export default compose(
//     withSurrounding
// ) (UserStatus)

export default UserStatus