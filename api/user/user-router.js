const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.json(
        {
            username: "bennett",
            paswword:"kautz123"
        }
    )
})

module.exports = router