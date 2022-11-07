import React from "react";
import s from '../components/common/FormsControls/FormsControls.module.css'




export const withFormControls = (Component) => {

    class FormControlsComponent extends React.Component {
        render() {
            // debugger;
            const hasError = this.props.meta.touched && this.props.meta.error

            return (
                <div className={s.textareaBox + ' ' + (hasError ? s.error : '')}>
                    <Component {...this.props}/>
                    <div className={s.spanBox}>
                        {
                            hasError && <span className={s.error}>{this.props.meta.error}</span>
                        }
                    </div> 
                </div>
            )
        }
    }

    return FormControlsComponent;
}
