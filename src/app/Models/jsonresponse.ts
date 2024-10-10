import { iPost } from './post';

export interface iJSONresponse {
  posts: iPost[];
  total: number;
  skip: number;
  limit: number;
}
