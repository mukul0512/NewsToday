import React from 'react';

const NewsItem = (props) => {

    let { title, description, imgUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }>
                        <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={!imgUrl ? "https://c.ndtvimg.com/2022-02/r00ikdog_shivamoga_625x300_21_February_22.jpg" : imgUrl} className="card-img-top" alt="News Img" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-danger">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noReferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem;