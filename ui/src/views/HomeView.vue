<template>
  <div class="sc-home-container">
    <v-card-title>
      <span class="text-h2 text-center">Başlık 1</span>
    </v-card-title>
    <template>
      <v-carousel
        class="sc-carousel"
        :style="[
          windowSize.width <= 600
            ? { width: '90%', height: '200px' }
            : { width: '70%' },
        ]"
        ><div class="sc-carousel-container">
          <v-carousel-item v-for="(slide, i) in userdata" :key="i">
            <v-sheet class="mx-auto">
              <v-img class="sc-carousel-img" :src="slide.url">
                <v-row class="fill-height" align="center" justify="center">
                  <!-- <div class="text-h2">{{ slide.title }}</div> -->
                </v-row></v-img
              >
            </v-sheet>
          </v-carousel-item>
        </div>
      </v-carousel>
    </template>
    <v-row class="mx-0 mt-6" justify="center">
      <v-dialog v-model="dialog" class="sc-dialog">
        <template v-slot:activator="{ on, attrs }">
          <div class="sc-content">
            <v-card
              v-for="(item, index) in userdata"
              :key="index.title"
              class="ma-3 sc-card"
              v-bind="attrs"
              v-on="on"
              @click="selectContent(item)"
            >
              <v-img
                max-width="300"
                max-height="168.75"
                class="sc-card-img"
                :src="item.url"
              ></v-img>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text>
                <!-- <v-row align="center" class="mx-0 mb-1">
          <v-rating
            :value="item.rating"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
          <div class="grey--text">{{ item.rating }} ({{ item.totalRate }})</div>
        </v-row> -->
                <div class="sc-card-desc">
                  {{ item.desc }}
                </div>
              </v-card-text>
            </v-card>
          </div>
        </template>
        <v-card class="sc-dialog-card" scrollable>
          <v-img class="sc-dialog-img" :src="selectedContent.url"></v-img>
          <v-card-title>
            <span class="text-h5">{{ selectedContent.title }}</span>
          </v-card-title>
          <v-card-text class="sc-dialog-desc">
            {{ selectedContent.desc }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              Kapat
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    userdata: Array,
    windowSize: Object,
  },
  name: 'Home',
  components: {},
  data: () => ({
    dialog: false,
    selectedContent: {
      url: '',
      title: '',
      desc: '',
    },
  }),
  methods: {
    selectContent(item) {
      this.selectedContent = {
        url: item.url,
        title: item.title,
        desc: item.desc,
      };
      // console.log("for:", item);
    },
  },
};
</script>
<style lang="scss">
.sc-home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--buttonText);
}
.sc-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.v-dialog {
  width: 700px !important;
  display: flex;
  max-height: 80% !important;
}
.sc-carousel {
  border-radius: 12px;
  border: 0.5px solid #0000004a;
  box-shadow: 0px 0px 10px -5px rgb(0 0 0 / 20%);
  padding: 0px 0px;
  .v-img {
    .v-image__image--cover {
      background-size: contain;
    }
  }
  .v-responsive {
    align-items: center;
    display: flex;
    margin: 0px auto !important;
  }
  .v-window__container {
    justify-content: center;
  }
  .v-carousel__controls {
    max-height: 10%;
    display: none;
    .v-btn--icon.v-size--small {
      height: 9px;
      width: 7px;
    }
    .v-item-group {
      display: flex;
      flex-wrap: wrap;
    }
    .v-btn--icon.v-size--small .v-icon,
    .v-btn--fab.v-size--small .v-icon {
      font-size: 6px !important;
    }
  }
}
.sc-card {
  display: flex !important;
  flex-wrap: wrap !important;
  width: 300px !important;
  max-width: 88% !important;
  justify-content: center;
  text-align: center;
  color: var(--buttonText) !important;
  background-color: var(--thirdBack) !important;
}
.sc-card-img {
  width: 100% !important;
  .v-image__image--cover {
    background-size: contain !important ;
  }
}
.sc-dialog-img {
  width: 350px;
}
.sc-card-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  color: var(--buttonText) !important;
}
.sc-dialog-card {
  display: flex;
  padding: 16px;
  height: 100%;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: var(--secondaryBack) !important;
  color: var(--buttonText) !important;
  border-radius: 0px !important;
}
.sc-dialog-desc {
  padding: 0px 30px;
  font-size: 16px;
  text-align: center;
  color: var(--buttonText) !important;
}
</style>
