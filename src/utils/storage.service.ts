import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  get(key: string): string {
    return localStorage.getItem(key);
  }

  set(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  getObject(key: string): any {
    let item = this.get(key);
    return item ? JSON.parse(item) : {};
  }

  setObject(key: string, obj: any): void {
    this.set(key, JSON.stringify(obj));
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

}
