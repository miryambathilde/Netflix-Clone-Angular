import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { getAuth, User } from 'firebase/auth'
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private auth = getAuth();
  authState!: Observable<User | null>;

  constructor (private Auth: Auth) {
    this.authState = new Observable<User | null>((observer: Observer<User | null>) => {
      const unsubscribe = this.auth.onAuthStateChanged((user: User | null) => {
        observer.next(user);
      });
      return unsubscribe;
    });
  }

  register ({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login ({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout () {
    return signOut(this.auth);
  }

  loginWithGoogle () {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }
}
