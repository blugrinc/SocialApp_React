import React from "react";
import { useAppSelector } from "../../../hooks/hooks";
import { selectAllUsers } from "../../features/users/store/user.selector";

interface Props {
  userId: number;
}

export const PostAuthor = ({ userId }: Props) => {
  const allUser = useAppSelector(selectAllUsers);
  const user = allUser.find((user) => user.id === userId);

  return <span>by {user ? user.name : "Unknown author"}</span>;
};
