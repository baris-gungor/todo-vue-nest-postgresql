<template>
  <!--  <v-app id="inspire">
   <v-navigation-drawer
      class="sc-side-container"
      v-model="drawer"
      app
      v-if="menuVersion > window.width"
    >
      <div class="sc-side-nav">
        <div class="item">
          <div class="toggle-pill-bw">
            <input
              type="checkbox"
              id="pill2"
              name="pageTheme"
              @click="whatistheme"
              v-model="darkMode"
            />
            <label for="pill2"></label>
          </div>
        </div>
        <v-btn
          class="my-3 sc-side-btn"
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
      
          {{ item.title }}
        </v-btn>
      </div>
    </v-navigation-drawer>

    <v-app-bar class="sc-top-header" app>
      <v-app-bar-nav-icon
        class="sc-top-hamburger"
        @click="drawer = !drawer"
        v-if="menuVersion > window.width"
      ></v-app-bar-nav-icon>
      <div class="sc-top-nav" v-if="menuVersion <= window.width">
        <div class="item">
          <div class="toggle-pill-bw">
            <input
              type="checkbox"
              id="pill2"
              name="pageTheme"
              @click="whatistheme"
              v-model="darkMode"
            />
            <label for="pill2"></label>
          </div>
        </div>
        <v-btn
          class="ml-6"
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          {{ item.title }}
        </v-btn>
      </div>
    </v-app-bar>

    <v-main class="main-container">
      <v-container>
        <v-sheet min-height="70vh" style="background: transparent" rounded="lg">
          <router-view :database="users" :windowSize="window" />
        </v-sheet>
      </v-container>
    </v-main>
  </v-app> -->
  <Mainframe :users="userData" />
</template>

<script>
import Vuetify from './plugins/vuetify';
import usersData from './db.json';
import Mainframe from './router/Mainframe.vue';

export default {
  name: 'App',
  components: { Mainframe },
  data: () => ({
    userData: usersData,
  }),
  created() {},
  computed: {},
  methods: {},
  mounted() {},

  watch: {},
};
</script>
<style lang="scss">
:root {
  --primaryBack: #eeeeee;
  --secondaryBack: white;
  --thirdBack: white;
  --fourthBack: #cacaca;
  --buttonText: #404258;
}

[theme='dark'] {
  --primaryBack: #404258;
  --secondaryBack: #474e68;
  --thirdBack: #50577a;
  --fourthBack: #6b728e;
  --buttonText: rgba(255, 255, 255, 0.845);
}

// [theme="light"] {
//   --primaryBack: transparent;
//   --secondaryBack: transparent;
// }
::-webkit-scrollbar-track {
  // -webkit-box-shadow: inset 0px 0px 16px 0px rgb(0 0 0 / 30%);
  background-color: var(--primaryBack);
}

::-webkit-scrollbar {
  width: 10px;
  background-color: var(--primaryBack);
}

::-webkit-scrollbar-thumb {
  background-color: var(--fourthBack);
  border: 1px solid #55555500;
  border-radius: 10px;
}
</style>
