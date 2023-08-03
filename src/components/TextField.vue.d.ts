import { VTextField } from "vuetify/components";
import { DefineComponent } from "vue";
// 擷取 VTextField 的 $props
type Props = Pick<
  VTextField['$props'],
  Exclude<keyof VTextField['$props'], `v-${string}` | `$${string}`>
>
const TextField :DefineComponent<Props>
export default TextField
