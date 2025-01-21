export interface IPerson<T> {
  name: string;
  age: number;
  additionalInfo?: T;
}
