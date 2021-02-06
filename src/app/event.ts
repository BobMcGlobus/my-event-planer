export class Event {
  id?: number;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  participans: Array<string>;
  visited: boolean;
}
