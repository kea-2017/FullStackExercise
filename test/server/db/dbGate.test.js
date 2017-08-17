var test = require('ava')

var setupDb = require('../setup-db')
var dbGate = require('../../../server/db/dbGate')
setupDb(test)

test.cb.only('search for text', t => {
  dbGate.search('Bob', t.context.db)
    .then((data)  => {
      t.is(data.length, 1)
      t.is(data[0].text, 'Bob')
      t.end()
    })
    .catch((err) => {
      console.log(err)
    })
})

test.cb.only('search for number', t => {
  dbGate.search(20, t.context.db)
    .then((data)  => {
      t.is(data.length, 1)
      t.is(data[0].text, 'Joe')
      t.end()
    })
    .catch((err) => {
      console.log(err)
    })
})
