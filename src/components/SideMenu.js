import { h } from "vue";
import { VList, VListGroup, VListItem } from "vuetify/components";
const props = {
  menus: { type: Array, default: [] },
  depth: { type: Number, default: 0 },
  opened: { type: Array, default: [] }
}
const render = ( props )=>{
  const { menus, depth, opened } = props
  const el = menus.map((x)=> {
    // VListItem 不接受 chidlren，會報錯特別排除
    const {children, ...y} = x;
    // 沒有 children 的情況
    if(!children?.length) return h( VListItem, x)
    // 有 children 的情況
    return h( VListGroup, { value: x.id }, {
      default: () => h(component, { menus: x.children, depth: depth + 1}),
      activator: (e) => h(VListItem, { ...y, ...e.props })
    })
  })
  return depth === 0 ?  h( VList, { opened }, () => el ) :  el
}
const component = { props, render }
export default component
