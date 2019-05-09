import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import componentMixin from 'component/js/component'

const componentDef = {
  mixins: [componentMixin],
  data: function(){
    return {}
  },
  computed: Vuex.mapState({
    isActive (state) {
      return this.componentConfig["link_path"] === state.currentPath
    }
  }),
  methods: {
    navigateTo: function(url){
      this.$store.dispatch('navigateTo', {url: url, backwards: false}).then((response) => {
        // self.asyncTemplate = response;
      })
        // window.scrollTo(0, 0);
        // document.body.scrollTop = document.documentElement.scrollTop = 0;
    }.then(){window.scrollTo(0, 0);}
  }
}

let component = Vue.component('transition-cell', componentDef)

export default componentDef
