

const highscoreRoutes = (router) => {
    router.get('/highscore', async (req, res) => {
        console.log('scoreboard');
    });

    router.get('/highscore/:id', async (req, res) => {
        console.log('1 score');
    })
}

export default highscoreRoutes;