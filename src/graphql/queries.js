/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const echo = /* GraphQL */ `
  query Echo($msg: String) {
    echo(msg: $msg)
  }
`;
export const getIotName = /* GraphQL */ `
  query GetIotName($id: ID!) {
    getIotName(id: $id) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listIotNames = /* GraphQL */ `
  query ListIotNames(
    $filter: ModelIotNameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIotNames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
