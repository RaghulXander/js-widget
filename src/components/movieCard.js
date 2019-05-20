import { h, Component } from 'preact';

import StarRating from './starRating';
import style from './style'

export default class MovieCard extends Component {
    render() {
        return (
            <div className="movie-card" class={style.movieCard}>
                <div className="movie-card card">
                    <img className="card-img-top" src={this.props.movie.imageUrl} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.movie.title}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.movie.subtitle}</h6>
                        <p className="text-justify" style={{fontSize: '14px'}}>{this.props.movie.description}</p>
                    </div>
                    <div className="card-footer">
                        <div className="clearfix">
                            <div className="float-left mt-1">
                                <StarRating rating={this.props.movie.rating} />
                            </div>
                            <div className="card-footer-badge float-right badge badge-primary badge-pill">{this.props.movie.rating}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
