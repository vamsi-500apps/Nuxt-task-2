import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/agile/Desktop/Nuxt-task-2/task3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}