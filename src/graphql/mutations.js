/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
      id
      department
      className
      exams {
        items {
          id
          classID
          className
          bucket
          semester
          professor
          uploader
        }
        nextToken
      }
    }
  }
`;
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
      id
      department
      className
      exams {
        items {
          id
          classID
          className
          bucket
          semester
          professor
          uploader
        }
        nextToken
      }
    }
  }
`;
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
      id
      department
      className
      exams {
        items {
          id
          classID
          className
          bucket
          semester
          professor
          uploader
        }
        nextToken
      }
    }
  }
`;
export const createExam = /* GraphQL */ `
  mutation CreateExam(
    $input: CreateExamInput!
    $condition: ModelExamConditionInput
  ) {
    createExam(input: $input, condition: $condition) {
      id
      classID
      className
      bucket
      semester
      professor
      uploader
    }
  }
`;
export const updateExam = /* GraphQL */ `
  mutation UpdateExam(
    $input: UpdateExamInput!
    $condition: ModelExamConditionInput
  ) {
    updateExam(input: $input, condition: $condition) {
      id
      classID
      className
      bucket
      semester
      professor
      uploader
    }
  }
`;
export const deleteExam = /* GraphQL */ `
  mutation DeleteExam(
    $input: DeleteExamInput!
    $condition: ModelExamConditionInput
  ) {
    deleteExam(input: $input, condition: $condition) {
      id
      classID
      className
      bucket
      semester
      professor
      uploader
    }
  }
`;
