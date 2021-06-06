import { Observer, Observable } from './Observer';
export class SetObservable<T> implements Observable<T> {
    private observersSet = new Set<Observer<T>>();

    attach(observer: Observer<T>): void {
        this.observersSet.add(observer);
    }
    detach(observer: Observer<T>): void {
        this.observersSet.delete(observer);
    }

    notify(value: T): void {
        this.observersSet.forEach(observer => observer.notify(value));
    }
}