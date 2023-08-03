import { VBtn } from "vuetify/components";
import { DefineComponent } from "vue";
// 擷取 VBtn 的 $props
type Props = Pick<
  VBtn['$props'],
  Exclude<keyof VBtn['$props'], `v-${string}` | `$${string}`>
>
const MyBtn :DefineComponent<Props>
export default MyBtn
