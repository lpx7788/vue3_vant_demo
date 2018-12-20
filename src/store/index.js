import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "" //登录标识
  },
  mutations,
  actions
});
