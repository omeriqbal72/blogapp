const { newComment
} = require('../controllers/commentFunctions')

const commentrouter = express.Router()

commentrouter.post('/comment/:id')

module.exports = commentrouter;