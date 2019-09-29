import {
  loadUsersSuccess,
  loadUsersError,
  loadUsersPending
} from "../../actions/usersAction";
import { db } from "../../firebase-config";
import { store } from "../../index";

export function fetchUsers() {
  store.dispatch(loadUsersPending());
  const allUsers = db.collection("users");
  const usersData = [];
  allUsers
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        usersData.push(doc.data());
      });
      store.dispatch(loadUsersSuccess(usersData));
    })
    .catch(error => {
      store.dispatch(loadUsersError(error));
    });
  return usersData;
}

export default fetchUsers;
