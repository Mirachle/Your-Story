import { Authentication } from '../Authentication';
import { AuthenticationError } from './AuthenticationError';
// TODO: save the state in case of f5-refresh
export class FakeAuthentication implements Authentication {
  private static readonly SAVED_USER_NAMES_KEY: string = 'savedUserNames';
  private storage: Storage;
  private _isLoggedIn: boolean = false;
  public isLoggedIn(): boolean {
    return this._isLoggedIn
  }

  constructor(storage: Storage) {
    this.storage = storage;
  }

  private readSavedUserNamesFromStorage(): Array<string> {
    const rawSavedUserNames: string = this.storage.getItem(FakeAuthentication.SAVED_USER_NAMES_KEY);
    if (!rawSavedUserNames) return [];
    const savedUserNames: Array<string> = JSON.parse(rawSavedUserNames);
    return savedUserNames;
  }

  public async login(username: string, _password: string): Promise<void> {
   const savedUserNames = this.readSavedUserNamesFromStorage();
    const isMatch = savedUserNames.some(savedUserName => savedUserName === username);
    if (!isMatch) {
      throw new AuthenticationError('Helytelen felhasználónév vagy jelszó.');
    }
    this._isLoggedIn = true;
  }

  public async register(username: string, _password: string): Promise<void> {
    const savedUserNames = this.readSavedUserNamesFromStorage();
    if (savedUserNames.includes(username)){
      throw new AuthenticationError("Ez a felhasználónév már létezik.") 
    }
    this.saveNewUserNameInStorage(savedUserNames, username);
  }

  private saveNewUserNameInStorage(savedUserNames: string[], username: string) {
    savedUserNames.push(username);
    const stringifiedSavedUserNames = JSON.stringify(savedUserNames);
    this.storage.setItem(FakeAuthentication.SAVED_USER_NAMES_KEY, stringifiedSavedUserNames);
  }

  public async logout(): Promise<void> {
      this._isLoggedIn = false;
  }
}
