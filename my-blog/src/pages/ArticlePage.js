import React from 'react'
import {useParams} from 'react-router-dom'
import articleContent from './article-content'
import NotFoundPage from './NotFoundPage'
import ArticlesList from '../components/ArticlesList'

const ArticlePage = () => {
  const {name} = useParams()
  const article = articleContent.find(art => art.name === name)

  if (!article) return <NotFoundPage />

  const otherArticles = articleContent.filter(art => art.name !== name)
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  )
}

export default ArticlePage
