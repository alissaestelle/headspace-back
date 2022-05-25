const router = require('express').Router()
const controller = require('../controllers/AcctControl')
const middleware = require('../middleware')

router.get(
  '/character/:ID',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetCharacter
)

router.post(
  '/character',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateCharacter
)

router.get(
  '/daily',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAchievements
)

router.post(
  '/achievement',
  middleware.stripToken,
  middleware.verifyToken,
  controller.AddAchieve
)

router.put(
  '/password/:pk',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)

router.delete('/user/:pk', controller.DeleteUser)
router.delete('/character/:userID', controller.DeleteCharacter)

module.exports = router
