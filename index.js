const express = require('express')
const app = express()
const port = 6000
const bcrypt = require('bcrypt')
app.use(express.json())


const saltRounds = 10
const plainText = 'ReskillAmericans123'
const newHash = "$2b$10$b7weRZP1ZHYL/arCinpd0uTD1F9iv.Q3QdW7RGFmKMFPWEykw3RY2"

bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      throw err
    } else {
      bcrypt.hash(plainText, salt, (err, hash) => {
        if (err) {
          throw err
        } else {
          console.log(hash)
        }
      })
    }
  })

 

app.post('/hashbrowns', (req, res) => {
    let postmanPass = req.body.pass
    bcrypt.compare(postmanPass, newHash, (err, isMatch) => {
        if (err) {
          throw err
        } else if (!isMatch) {
          console.log("Password doesn't match!")
        } else {
          console.log("Password matches!")
          return res.json(postmanPass)
        }
      })


})
 




app.listen(port, () => {
    console.log(`Server running on ${port}`)
})