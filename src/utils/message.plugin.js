import localizeFilter from '@/filters/localize.filter'

export default {
  install(Vue, options) {
    Vue.prototype.$message = function(html) {
      M.toast({ html })
    }

    Vue.prototype.$error = function(html) {
      M.toast({ html: `[${localizeFilter('Error')}]: ${html}` })
    }
  }
}
