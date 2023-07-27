import { Store } from "../core/louis";

interface State {
  photo:string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: '../img/myLogo.jpg',
  name:'LOUIS / InHongJeon',
  email: 'jeoninhong123@gmail.com',
  blog: 'https://github.com/InHongJeon',
  github: 'https://github.com/InHongJeon',
  repository: 'https://github.com/InHongJeon?tab=repositories'
})