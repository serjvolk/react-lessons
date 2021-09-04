import css from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/no-user.png';

let Users = (props) => {

    console.log(props.users.length);
    if(props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });
        /*props.setUsers([
            {id: 1, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg",
                followed: true, fullName: 'John', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, photoUrl: "https://img.championat.com/news/big/s/e/v-35-sheva-jagodka-opjat_1317288612541958436stah.jpg",
                followed: false, fullName: 'Sasha', status: 'I am a boss to', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, photoUrl: "https://icdn.lenta.ru/images/2021/08/31/12/20210831120729192/square_320_a634eefb17c278a65869d86b40e1af8d.jpeg",
                followed: true, fullName: 'Andrew', status: 'I am iron man', location: {city: 'Kiev', country: 'Ukraine'}}
        ]);*/
    }

    return  (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={css.userPhoto}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                                <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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

export default Users;