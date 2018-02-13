import React, {Component, PureComponent} from 'react'

class Article extends PureComponent {
    /*
    *Аналог (beta-запись)
    */
    constructor(props){
        super(props)
        this.state = {
            isOpen: props.defaultOpen,
            count: 0
        }
    }
    /*Экспериментальный синтаксис
    state = {
        isOpen:false
    }*/

    /*
    *Если наследуемся от PureComponent, то shouldComponentUpdate там уже реализован
    */
    /*
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.isOpen !== nextState.isOpen
    }
    */

    /*
    *если нужно сделать что-то до рендера компонента
    */
    componentWillMount() {
        console.log('---','mounting')
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }


    componentWillUpdate() {
        console.log('---', 'will update')
    }
    render() {
        const {article} = this.props
        const body = this.state.isOpen && < section className="card-text"> {article.text} < /section>
        return (
            < div className="card mx-auto" style={{width: '50%'}}>
                <div className="card-header">
                    < h2 onClick={this.incrementCounter}> {article.title}
            clicked {this.state.count}
                        < button onClick = {this.handleClick} className="btn btn-primary btn-lg float-right"> {this.state.isOpen ? 'close' : 'open'} < /button>
                    < /h2>
                </div>
                <div className="card-body">
                    {body}
                    < h6 className="text-muted">
                        creation date: {(new Date(article.date)).toDateString()}
                    < /h6>
                </div>
            < /div>
        )
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClick = () => {
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
