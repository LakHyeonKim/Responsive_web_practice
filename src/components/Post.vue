<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <div class="headline line-clamp-title">{{title}}</div>
        <span class="grey--text line-clamp-body">{{body}}</span>
      </div>
    </v-card-title>
    <v-card-text>
      <div class="caption">{{formatedDate}}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Post',
  props: {
    date: { type: Date },
    title: { type: String },
    body: { type: String }
  },
  computed: {
    formatedDate () {
      return `${this.date.getFullYear()}년 ${this.date.getMonth() +
        1}월 ${this.date.getDate()}일`
    }
  }
}
</script>
<style>
.color-666 {
  color: #666;
}
.color-333 {
  color: #333;
}
.h-100 {
  height: 100%;
}
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
