import React from 'react'
import Article from "./Article.js"
import articles from "../fixtures"

function App() {
    return (
        < div >
        < h1 > App Name < /h1>
        < Article article={articles[1]}/ >
        < /div>
    )
}

export default App
