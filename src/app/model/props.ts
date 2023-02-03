import { User } from './user';
import { Post } from "./post";
import { Comment } from './comment';

export interface PostProps {
    post: Post;
    comment?: Comment[];
}
export interface UserProps {
    user: User;
}