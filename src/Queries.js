export const ListClasses = `query ListClasses {
    listClasss(limit: 9999) {
        items {
            id
            className
        }
    }
}`;

export function getClassDetails(classId) {
    return(
    `{
        getClass(id: "${classId}"){
          className
          id
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
