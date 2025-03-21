// "use server";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import request from "graphql-request";
import { gql, TypedDocumentNode } from "@apollo/client";

const GET_USERS_QUERY: TypedDocumentNode = gql`
  query User {
    users {
      id
      username
      password
      role
      profile {
        fullname
        img_profile
      }
    }
  }
`;

const QueryGraphQL = () => {
  //   const { data } = useQuery({
  //     queryKey: ["users"],
  //     queryFn: async () => {
  //       return request("http://localhost:3000/api/graphql", GET_USERS_QUERY);
  //     },
  //   });

  return (
    <div>
      dsfs
      {/* {data?.users.map((user: any) => (
        <div key={user.id}>{user.username}</div>
      ))} */}
    </div>
  );
};

export default QueryGraphQL;
