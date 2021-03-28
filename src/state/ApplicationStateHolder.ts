import { ApplicationState } from './ApplicationState';
import { Subject } from '../observer/Observer';

export interface ApplicationStateHolder extends Subject<ApplicationState> { }