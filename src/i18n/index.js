import Vue from 'vue'

import vueI18n from 'vue-i18n'

import zh from '../lang/zh'

import en from '../lang/en'

Vue.use(vueI18n)

const i18n = new vueI18n({

    locale: 'en',

    messages:{

        zh,

        en

    }

})

export default i18n