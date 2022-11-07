import React from 'react';
import s from './ProfileStatus.module.css';
import {AiOutlineEdit} from 'react-icons/ai/'
import { compose } from 'redux';
import { withSurrounding } from '../../../hoc/withSurrounding';



class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
        status: this.props.status
    }

    acivateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deAcivateEditMode() {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange(e) {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span>
                            {this.props.status || 'No status'}
                        </span>
                        <AiOutlineEdit 
                            onClick={this.acivateEditMode.bind(this)}
                            className={s.editBtn}
                        />
                    </div>
                    : <div className={s.inputBox}>
                        <input 
                            onChange={this.onStatusChange.bind(this)}
                            value={this.state.status}
                            autoFocus={true}
                            onBlur={this.deAcivateEditMode.bind(this)}
                        />
                    </div>
                }
            </div>
        );
    }
    
};

// export default compose(
//     withSurrounding
// )(ProfileStatus)

export default ProfileStatus