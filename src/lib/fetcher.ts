import { IPerson } from "./test";

export const fetcher = <T>(...args: Parameters<typeof fetch>): Promise<T> => {
  return fetch(...args).then((res) => res.json() as Promise<T>);
};

const getPerson = (): IPerson<> => {
  return {
    name: "John Doe",
    age: 30,
    additionalInfo: {
      job: "Software Engineer",
      company: "Google",
    },
  };
};

const person = getPerson();
