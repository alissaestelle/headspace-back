const { User, Character, Achievement, sequelize } = require('./models')
const user = require('./models/user')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const getAllUsers = async () => {
  let users = await User.findAll()
  stringify(users)
}

const getThisUser = async () => {
  let user = await User.findOne({
    where: {
      id: 84
    }
  })
  stringify(user)
}

const getAllChars = async () => {
  let characters = await Character.findAll()
  stringify(characters)
}

const getAllAchvmnts = async () => {
  let achievements = await Achievement.findAll()
  stringify(achievements)
}

const getCharAchvmnts = async () => {
  let achievements = await Achievement.findAll({
    where: {
      characterID: 3
    }
  })
  stringify(achievements)
}

const deleteUser = async () => {
  let user = await User.destroy({
    where: {
      firstName: 'Alissa'
    }
  })
  stringify(user)
}

const deleteChar = async () => {
  let user = await Character.destroy({
    where: {
      userID: 1
    }
  })
  stringify(user)
}

const deleteAchieve = async () => {
  let achieve = await Achievement.destroy({
    where: {
      characterID: 109
    }
  })
  stringify(achieve)
}

async function main() {
  try {
    // await deleteUser()
    // await deleteChar()
    // await deleteAchieve()
    // await getAllUsers()
    // await getThisUser()
    await getAllChars()
    // await getAllAchvmnts()
    // await getCharAchvmnts()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
