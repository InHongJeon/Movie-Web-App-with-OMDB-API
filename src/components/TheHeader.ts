import { Component } from "../core/louis";

interface State {
  [key: string]: unknown
  menus: {
    name: string
    href: string
  }[]
}
export default class TheHeader extends Component {
  public state!: State
  constructor () {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/'
          },
          {
            name: 'Movie',
            href: '#/movie?id=tt6751668'
          },
          {
            name: 'About',
            href: '#/about'
          }
        ]
      }
    })
    window.addEventListener('popstate', () => {
      this.render()
    })
  }
  render() {
    this.el.innerHTML = /* html */`
      <a href="#/" class="logo"><span>OMDbAPI</span>.com</a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {
            const href = menu.href.split('?')[0]
            const hash = location.hash.split('?')[0]
            const isActive = href === hash
            return /* html */ `
            <li>
              <a 
              class="${isActive ? 'active' : ''}"
              href="${menu.href}">${menu.name}</a>
            </li>
            `
          }).join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F71%2F99%2F20%2F7199203e768ce74653b09d8b419b3f05.jpg&type=sc960_832" alt="User">
      </a>
    `
  }
}
