exports.landing = async (req, res)=> {
    try {
        res.render('index')
    } catch (error) {
        res.render('404')
    }
}

exports.nextPage = async (req, res) =>{
    try {
        res.render('nextPage')
    } catch (error) {
        res.render('404')
    }
}