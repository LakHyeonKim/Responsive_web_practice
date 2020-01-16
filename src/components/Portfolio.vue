<template>
  <v-card>
    <v-img :src="imgSrc" height="200px"> </v-img>
    <v-card-title primary-title>
      <div>
        <div class="headline line-clamp-title">{{ title }}</div>
        <span class="grey--text line-clamp-body">{{ body }}</span>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'Portfolio',
  props: {
    date: { type: String },
    title: { type: String },
    body: { type: String },
    imgSrc: { type: String }
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style>
.line-clamp-title {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.line-clamp-body {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
