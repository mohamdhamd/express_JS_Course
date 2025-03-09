const userController = (req, res) => {
    const username = req.params.username;
    res.send(`Welcome Sir ${username}`)
}

const searchControllers = (req, res) => {
    const keyword = req.query.keyword;
    res.send(`Looking For : ${keyword}`)
}

export {userController , searchControllers}