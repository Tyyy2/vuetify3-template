import SideMenu from './SideMenu'
import MyBtn from './MyBtn.vue'
import TextField from './TextField.vue'
import BtnExit from './BtnExit.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BtnExit: typeof MyBtnExit,
    Btn: typeof MyBtn,
    SideMenu: typeof SideMenu,
    TextField: typeof TextField
  }
}
