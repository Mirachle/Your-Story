import { Authentication } from '../Authentication';
import { AuthenticationError } from './AuthenticationError';

// TODO: put the code in the following order in every classes:
// - public static variables, private static variables, private variables, constructor, public init, public metódusok, private metódusok
// OR
// - public variables, constructor

export class FakeAuthentication implements Authentication {
  private static readonly SAVED_USER_NAMES_KEY: string = 'savedUserNames';
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  private readSavedUserNamesFromStorage(): Array<string> {
    const rawSavedUserNames: string = this.storage.getItem(FakeAuthentication.SAVED_USER_NAMES_KEY);
    if (!rawSavedUserNames) return [];
    const savedUserNames: Array<string> = JSON.parse(rawSavedUserNames);
    return savedUserNames;
  }

  private throwAuthenticationErrorIfUserNotFound(username: string, savedUserNames: Array<string>): void {
    const isMatch = savedUserNames.some(savedUserName => savedUserName === username);
    if (!isMatch) {
      throw new AuthenticationError('Helytelen felhasználónév vagy jelszó.');
    }
  }

  public async login(username: string, _password: string): Promise<void> {
    const savedUserNames = this.readSavedUserNamesFromStorage();
    this.throwAuthenticationErrorIfUserNotFound(username, savedUserNames);
  }

  private throwAuthenticationErrorIfUserAlreadyExists(username: string, savedUserNames: Array<string>) {
    if (savedUserNames.includes(username)){
      throw new AuthenticationError("Ez a felhasználónév már létezik.") 
    }
  }

  public async register(username: string, _password: string): Promise<void> {
    const savedUserNames = this.readSavedUserNamesFromStorage();
    this.throwAuthenticationErrorIfUserAlreadyExists(username, savedUserNames);
    this.saveNewUserNameInStorage(savedUserNames, username);
  }

  private saveNewUserNameInStorage(savedUserNames: string[], username: string) {
    savedUserNames.push(username);
    const stringifiedSavedUserNames = JSON.stringify(savedUserNames);
    this.storage.setItem(FakeAuthentication.SAVED_USER_NAMES_KEY, stringifiedSavedUserNames);
  }

  public async logout(): Promise<void> {
  }
}
