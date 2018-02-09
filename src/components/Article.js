import React, {Component} from 'react'

class Article extends Component {
    state = {
        isOpen:false
    }
    /*
    *Аналог (beta-запись)
    constructor(props){
        super(props)
        this.state = {
            isOpen: true
        }
    }
    */
    render() {
        const {article} = this.props
        console.log('===', this.props)
        const body = this.state.isOpen && < section > {article.text} < /section>
        return (
            < div >
                < h2 > {article.title}
                    < button onClick = {this.handleClick} > {this.state.isOpen ? 'close' : 'open'} < /button>
                < /h2>
                {body}
                < h3 >
                    creation date: {(new Date(article.date)).toDateString()}
                < /h3>
            < /div>
        )
    }
    handleClick = () => {
        console.log('===','clicked')
        //Метод, где описывается состояние
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
/*
*Stateless component
*/
/*

import React from 'react'


function Article(props) {
        const {article} = props
        const body = < section > {article.text} < /section>
        return (
            < div >
                < h2 > {article.title}
                    < button onClick = {handleClick} > close < /button>
                < /h2>
                {body}
                < h3 >
                    creation date: {(new Date(article.date)).toDateString()}
                < /h3>
            < /div>
        )
}
*/


export default Article
