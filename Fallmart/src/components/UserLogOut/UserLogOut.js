import styles from './UserLogOut.module.scss';
import { logOut } from '../../utilities/users-service'; //comes from utitilies 

export default function UserLogOut({ user, setUser }) { //comes from app.js
function handleLogOut() {
  logOut();
  setUser(null);
}

return (
  <div className={styles.UserLogOut}>
    <div>{user.name}</div>
    <div className={styles.email}>{user.email}</div>
    <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
  </div>
);
}