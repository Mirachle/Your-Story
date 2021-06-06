export interface StateHolder<T> {
    get(): T;
}

export interface StateModifier<T> {
    set(value: T): void;
}

export interface Observable<T> {
    attach(observer: Observer<T>): void;
    detach(observer: Observer<T>): void;
}

export interface Subject<T> extends Observable<T>, StateHolder<T>, StateModifier<T> {}

export interface Observer<T> {
    notify(newValue: T): void;
}