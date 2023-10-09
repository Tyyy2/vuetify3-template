import SideMenu from './SideMenu'
import BtnExit from './BtnExit.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BtnExit: typeof MyBtnExit
    SideMenu: typeof SideMenu
  }
}
