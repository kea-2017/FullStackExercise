var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')
var Gate = require('../../server/db/dbGate')
var setupDb = require('./setup-db')

setupDb(test,createServer)

test.cb('GET /', t => {
  request(t.context.app)
    .get('/v1/api/')
    .expect(200)
    .end((err,res) => {
      if (err) console.log(err);
      console.log(res.body.length);
      t.is(res.body.length, 3)
      t.end()
    })
})

test.cb('read db', t => {
  Gate.getData(t.context.db)
    .then(test => {
      t.is(test.length, 3)
      t.true(test[0].hasOwnProperty('text'))
      t.end()
    })
})

test.cb('GET /search', t => {
    request(app)
      .get('/api/search')
      .query({q: 'Joe'})
      .expect(200)
      .end((err, res) => {
        t.is(res.body.length, 1)
        t.is(res.body[0].text, 'Joe')
      })
})
