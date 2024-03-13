import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, doc, getDoc, getDocs, query, where } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  firestore = inject(Firestore);
  usersCollection = collection(this.firestore, 'users');

  addUser = (user: User): Observable<any> => {
    const promise = addDoc(this.usersCollection, user).then(
      (response) => {
        console.log(response);
        return response;
      });
    return from(promise);
  }

  // getUser(username: string): Observable<User | any> {
  //   const userQuery = query(this.usersCollection, where('username', '==', username));
  //   return from(getDocs(userQuery)
  //     .then((querySnapshot) => {
  //       if (querySnapshot.empty) {
  //         console.log("No matching documents found");
  //         return undefined;
  //       }
  //       const matchingUsers = querySnapshot.docs.map((doc) => doc.data() as User);
  //       if (matchingUsers.length > 1) {
  //         console.warn("Multiple users found with the same username:", matchingUsers);
  //       }
  //       return matchingUsers[0];
  //     })
  //     .catch((error) => {
  //       console.error("Error getting user:", error);
  //       return undefined;
  //     }));
  // }
}
