import SideMenu from './SideMenu'
import MyBtn from './MyBtn.vue'
import TextField from './TextField.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Btn: typeof MyBtn,
    SideMenu: typeof SideMenu,
    TextField: typeof TextField
  }
}
