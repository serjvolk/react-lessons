import React from "react";
import css from "./../Profile.module.css";
//import Preloader from "../../common/Preloader/Preloader";

class ProfileStatus extends React.Component{
    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({editMode: !this.state.editMode});
    }

    render(){
        return (
            <div className={css.status}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.activateEditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        );
    }
}
export default ProfileStatus;