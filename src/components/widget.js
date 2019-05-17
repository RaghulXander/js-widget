// theirs
import { h, Component } from 'preact';

import MovieCard from './movieCard'

export default class Widget extends Component {
  state = {
    data: {
      id: 500,
      title: 'Resident Evil',
      subtitle: 'Vendetta',
      description: 'Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.',
      year: 2014,
      imageUrl: 'https://images.moviebuff.com/ee4c89ec-c070-4ad1-a00c-45a39f35b8e3',
      rating: 4.2
    }
  };

  render() {
    let { data } = this.state;
    console.log(this.props, 'dfdfd')
    return (
      <div id="movie-card-widget">
        <MovieCard movie={data} />
      </div>
    );
  }
}
