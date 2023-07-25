import { Component } from "../core/louis";
import movieStore from  "../store/movie"
import MovieItem from "./MovieItem";


export default class MovieList extends Component {
  constructor () {
    super ()
    movieStore.subscribe('movies',() => {
      this.render()
    })
    movieStore.subscribe('loading',() => {
      this.render()
    })
    movieStore.subscribe('message',() => {
      this.render()
    })
  }
  render() {
    this.el.classList.add('movie-list');
    this.el.innerHTML = /* html */ `
      ${movieStore.state.message 
      ? `<div class="message">${movieStore.state.message}</div>`
      : '<div class="movies"></div>'}
      <div class="the-loader hide"></div>
    `

    const moivesEl = this.el.querySelector('.movies')
    moivesEl?.append(
      ...movieStore.state.movies.map(movie => new MovieItem({
        movie
      }).el)
    )

    const loaderEl = this.el.querySelector('.the-loader')
    movieStore.state.loading
    ? loaderEl.classList.remove('hide')
    : loaderEl.classList.add('hide')
  }
}
