<template>
  <div>
    <header>
      <NavigationBar v-if="visialbe"></NavigationBar>
      <NavigationBarMobile v-if="!visialbe"></NavigationBarMobile>
    </header>
    <ImgBanner imgSrc="https://source.unsplash.com/5brvJbR1Pn8/1600x900">
      <div style="line-height:1.2em;font-size:1.2em;" slot="text">Post</div>
    </ImgBanner>
    <v-container>
      <!-- Post -->
      <v-layout>
        <v-row v-resize="onResize" align="center" justify="center">
          <v-flex xs12>
            <PostList :limits="6" :load-more="true"></PostList>
          </v-flex>
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import PostList from '../components/PostList'
import NavigationBar from '../components/NavigationBar'
import NavigationBarMobile from '../components/NavigationBarMobile'

export default {
  name: 'PostPage',
  data: () => ({
    visialbe: false
  }),
  components: {
    ImgBanner,
    PostList,
    NavigationBar,
    NavigationBarMobile
  },
  methods: {
    onResize () {
      if (window.innerWidth <= 576) {
        this.visialbe = false
      } else {
        this.visialbe = true
      }
    }
  },
  mounted () {
    this.onResize()
  }
}
</script>
