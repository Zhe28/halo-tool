import {defineStore} from "pinia";

export const useGlobalConfig = defineStore("globalConfig", {
  state: () => {
    return {
      theme: 'auto',
      navbarMode: 'vertical' //horizontal | vertical
    }
  },
  actions: () => {

  }
})

