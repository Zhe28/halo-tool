import {defineStore} from "pinia";

export const useGlobalConfig = defineStore("globalConfig", {
  state: (): globalConfig => {
    const isShow = window.innerWidth < 675
    return {
      theme: 'auto',
      navbar: {},
      sidebar: {
        mode: 'vertical', //horizontal | vertical
        isCollapse: false,
        isShow
      }
    }
  },
  actions: () => {

  }
})

