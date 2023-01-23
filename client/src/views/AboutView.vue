<template>
  <div>
    <div class="sc-about-container">
      <v-img :src="about.imgUrl" class="sc-about-img"></v-img>
      <v-card-title class="sc-dialog-title">
        <span class="text-h5">{{ about.title }}</span>
      </v-card-title>
      <v-card-text class="sc-dialog-desc">
        {{ about.desc }}
      </v-card-text>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      about: {
        imgUrl: "https://ajanimo.com/wp-content/uploads/2022/01/buyukkedi.jpg",
        title: "Biz Kimiz",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis molestias totam minus velit eaque ipsa autem neque deleniti. Fugit sunt ullam incidunt praesentium iure deserunt dolorum iusto eum illum?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis molestias totam minus velit eaque ipsa autem neque deleniti. Fugit sunt ullam incidunt praesentium iure deserunt dolorum iusto eum illum? ",
      },
    };
  },
};
</script>
<style lang="scss">
.sc-about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  text-align: center;
  color: var(--buttonText);
}
.sc-about-img {
  max-width: 80%;
  margin: 0px auto;
  border-radius: 6px;
  box-shadow: 0px 0px 13px 3px rgb(0 0 0 / 21%);
}
.sc-dialog-desc {
  font-size: 17px;
  max-width: 85%;
}
</style>
