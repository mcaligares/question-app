export interface IQuestion {
    id: number;
    question: string;
    points: number;
    likes?: Array<string>;
    author: string;
    date: Date;
}
