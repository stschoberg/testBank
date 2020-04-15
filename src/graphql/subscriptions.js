/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
      id
      name
      exams {
        items {
          id
          classID
          name
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
      name
      exams {
        items {
          id
          classID
          name
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
      name
      exams {
        items {
          id
          classID
          name
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
      name
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
      name
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
      name
      bucket
      semester
      professor
      uploader
    }
  }
`;
