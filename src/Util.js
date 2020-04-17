module.exports = {

 makeComparator: function(key, order='asc') {
    return (a, b) => {
      if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0; 
  
      const aVal = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
      const bVal = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (aVal > bVal) comparison = 1;
      if (aVal < bVal) comparison = -1;
  
      return order === 'desc' ? (comparison * -1) : comparison
    };
  },

  getPastSemesters : function(){
    const dt = new Date()
    const year = dt.getFullYear() 
    const fall = 'Fall '
    const spring = 'Spring '

    var opts = []
    for(var i = 0; i < 10; i++){
      opts.push({ key: fall.concat((year-i).toString()), text: fall.concat((year-i).toString()), value: fall.concat((year-i).toString()) })
      opts.push({ key: spring.concat((year-i).toString()), text: spring.concat((year-i).toString()), spring: fall.concat((year-i).toString()) })
    }
    return opts

  }
}