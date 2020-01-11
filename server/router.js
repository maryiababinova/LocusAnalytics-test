const router = require('express').Router()
const data = require('../data.json')

router.get('/', (req, res, next) => {
    try {
        console.log('im', data)
        res.status(200).json(data)
    } catch (error) {
      next(error)
    }
}
