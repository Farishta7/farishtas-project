const {fetchArticles, fetchArticleById, fetchArticleCommentById} = require("../models/articles-model")

exports.getArticles = (request, response, next) => {

    fetchArticles()
    .then((result) => {
        response.status(200).send({articles: result})
    })
    .catch((err) => {
        console.log(err);
        next(err);
    })
}

exports.getArticleById = (request, response, next) => {
    const {article_id} = request.params;
    fetchArticleById(article_id)
    .then((result) => {
        response.status(200).send({article: result})
    })
    .catch((err) => {
        next(err);
    })
}

exports.getArticleCommentById = (request, response, next) => {
    const {article_id} = request.params;
    fetchArticleCommentById(article_id)
    .then((commentsArray) => {
        console.log(commentsArray)
        response.status(200).send({articleComments: commentsArray})
    })
    .catch((err) => {
        next(err);
    })

}