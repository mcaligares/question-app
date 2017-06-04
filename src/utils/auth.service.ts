import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';

@Injectable()
export class AuthService {

  constructor(private storage: StorageService) {

  }

  isLogged(): boolean {
    let sessionKey = this.storage.get('sessionKey');
    return sessionKey !== undefined && sessionKey !== null;
  }

  logIn(): void {
    let uuid = this.uuid();
    this.storage.remove('sessionKey');
    this.storage.set('sessionKey', uuid);
  }

  uuid(): string {
    let pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    return pattern.replace(/[xy]/g, (c) => {
      let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }

  getSessionKey() {
    return this.storage.get('sessionKey');
  }

}
