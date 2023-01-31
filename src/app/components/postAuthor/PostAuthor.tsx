import React from "react";

import { useSelector } from "react-redux";
import { Post } from "../../model/post";

interface Props {
  userId: number;
}
export const PostAuthor = ({ userId }: Props) => {
  return (
    <span>
      {/* by {author ? author.name : "Unknown author"} */}
      Author: {userId}
    </span>
  );
};
