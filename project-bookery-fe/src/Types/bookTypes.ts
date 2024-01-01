export type Book = {
  title: string;
  author: string | string[];
  description: string;
  checkedCount: number;
  image: string;
  comment: {
    rating: number;
    user: string;
    title: string;
    description: string;
    date: string;
  };
};
