import css from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/no-user.png';
import React from "react";


class Users extends React.Component{
    componentDidMount() { // Метод жизненного цикла. Вызывается сразу после монтирования
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render () {
        return  (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={css.userPhoto}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> :
                                <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>u.location.country</div>
                            <div>u.location.city</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        );
    }
}

export default Users;