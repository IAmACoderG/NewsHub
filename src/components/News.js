import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Loading from './Loading';
import Newsitems from './Newsitems'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

    static defaultProps = {
        pageSize: 8,
        country: 'in',
        category: 'sports'
    }

    static propTypes = {
        pageSize: PropTypes.number.isRequired,
        country: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired
    }


    // articles = [
    // ]
    capitlizeText = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    constructor(props) {
        super(props)
        console.log("hi i am constructor from news app");
        this.state = {
            // articles: this.articles,
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0

        }
        document.title = ` NewsHunt - ${this.capitlizeText(this.props.category)} - Top HeadLines`
    }

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=95c11698b58a4266ba5e4ac504fd5712&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json()
        console.log(parsedData)
        this.props.setProgress(50);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    async componentDidMount() {
        // // console.log("cmd");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc48857cad3b44cc85599c4338d12fe8&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData)
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // })

        this.updateNews()

    }

    // prevClicked = async () => {
    //     console.log("prev")
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc48857cad3b44cc85599c4338d12fe8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`

    //     // this.setState({ loading: true })
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json()
    //     // // console.log(parsedData)
    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     //     articles: parsedData.articles,
    //     //     loading: false
    //     // })

    //     this.setState({ page: this.state.page - 1 })
    //     this.updateNews()

    // }





    // nextClicked = async () => {
    //     console.log("next")
    //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {


    //     //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc48857cad3b44cc85599c4338d12fe8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`

    //     //     this.setState({ loading: true })
    //     //     let data = await fetch(url);
    //     //     let parsedData = await data.json()
    //     //     // console.log(parsedData)
    //     //     this.setState({
    //     //         page: this.state.page + 1,
    //     //         articles: parsedData.articles,
    //     //         loading: false
    //     //     })
    //     // }


    //     this.setState({ page: this.state.page + 1 })
    //     this.updateNews()

    // }
    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=95c11698b58a4266ba5e4ac504fd5712&page=${this.state.page + 1} &pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.setState({ page: this.state.page + 1 })
    };


    render() {
        // console.log("Render")
        return (
            <>
                <h1 className='mb-4 mt-3 text-center'> Top {this.capitlizeText(this.props.category)} HeadLines</h1>
                {this.state.loading && <Loading />}
                {/* <Loading/> */}
                <InfiniteScroll


                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loading />}
                >
                    <div className='container my-3'>
                        <div className='row'>
                            {/* {!this.state.loading && this.state.articles.map((element) => {
                                    return <div className='col-md-4' key={element.url}> */}
                            {this.state.articles.map((element) => {
                                return <div className='col-md-4' key={element.url}>

                                    <Newsitems title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url} author={element.author} time={element.publishedAt} sName={element.source.name} />
                                </div>

                            })}

                            {/* <div className="container d-flex justify-content-between mt-2">
                                    <button disabled={this.state.page <= 1} type="button" onClick={this.prevClicked} className="btn btn-sm btn-danger"> &larr;Prev</button>
                                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.nextClicked} className="btn btn-sm btn-danger">Next &rarr;</button>
                                </div> */}


                        </div>

                    </div>
                </InfiniteScroll>

            </>
        )
    }
}

export default News
