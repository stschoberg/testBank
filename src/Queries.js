export const ListClasses = `query ListClasses {
    listClasss(limit: 9999) {
        items {
            id
            className
        }
    }
}`;

export const createClass = `mutation createClass($createclassinput: CreateClassInput!){
	createClass(input: $createclassinput){
    id
  }
}`;

export function updateClass(classID, exams) {
    var examstrings = exams.map(str => "\"".concat(str, "\""));
    var arrAsString = "[".concat(examstrings.join(), "]")

    return (`mutation{
        updateClass(
            input: {
                id: "${classID}", 
                exams:${arrAsString}
            })
            {
                id
                exams
            }
        }`)

}

export function getClassDetails(classId) {
    return(
    `{
        getClass(id: "${classId}"){
          className
          id
          exams
        }
    }`);
}

export function getClasses(dept){
    return (`{
        listClasss(limit:9999, filter:{department: {eq:"${dept}"}}){
      items {
        id
        className
      }
    }
    
    }`);
} 
