export class Event {
  id?: number;
  type: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  participans: Array<string>;
  visited: boolean;
}
