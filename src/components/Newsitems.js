import React, { Component } from 'react'

export class Newsitems extends Component {

    render() {
        let {title,description,imgurl,newsurl,author,time,sName} = this.props
        return (
            <div>
                <div className="card">
                    <img src={imgurl?imgurl:"https://img.etimg.com/thumb/msid-95618333,width-1070,height-580,imgsize-19792,overlay-etpanache/photo.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}<span className="badge bg-success"> {sName} </span></p>
                        <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} On {new Date(time).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-danger">read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitems
