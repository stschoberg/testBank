export const ListClasses = `query ListClasses {
    listClasss(limit: 9999) {
        items {
            id
            name
        }
    }
}`;