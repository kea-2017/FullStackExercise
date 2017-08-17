const getData = (db) =>{
  return db('DataTable')
  .select('*')
}

const search = (searchTerm, db) => {
  return getData(db)
    .whereRaw('text = ? OR numbers = ?',[searchTerm, searchTerm])
}


module.exports ={
  getData,
  search
}
