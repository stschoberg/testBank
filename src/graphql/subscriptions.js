/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
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
export const onCreateExam = /* GraphQL */ `
  subscription OnCreateExam {
    onCreateExam {
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
export const onUpdateExam = /* GraphQL */ `
  subscription OnUpdateExam {
    onUpdateExam {
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
export const onDeleteExam = /* GraphQL */ `
  subscription OnDeleteExam {
    onDeleteExam {
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
