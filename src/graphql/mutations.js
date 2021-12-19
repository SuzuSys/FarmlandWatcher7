/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIotName = /* GraphQL */ `
  mutation CreateIotName(
    $input: CreateIotNameInput!
    $condition: ModelIotNameConditionInput
  ) {
    createIotName(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateIotName = /* GraphQL */ `
  mutation UpdateIotName(
    $input: UpdateIotNameInput!
    $condition: ModelIotNameConditionInput
  ) {
    updateIotName(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteIotName = /* GraphQL */ `
  mutation DeleteIotName(
    $input: DeleteIotNameInput!
    $condition: ModelIotNameConditionInput
  ) {
    deleteIotName(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
