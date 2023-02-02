import React from "react";
import { Link } from "react-router-dom";
import { UserProps } from "../../model/props";

export const UsersList = ({ user }: UserProps) => {
  const { id, name } = user;

  return (
    <li key={id}>
      <Link to={`/users/${id}`}>{name}</Link>
    </li>
  );
};
