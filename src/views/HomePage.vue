<template>
  <div>
    <header>
      <NavigationBar v-if="visialbe"></NavigationBar>
      <NavigationBarMobile v-if="!visialbe"></NavigationBarMobile>
    </header>
    <ImgBanner imgSrc="https://c.wallhere.com/photos/a4/2d/1600x900_px_black_Iron_man-1428647.jpg!d">
      <div style="line-height:1.2em; font-size:1.2em; margin-left:30px" slot="text">
        I'm Iron man.<br />
        I love you 3000.
      </div>
    </ImgBanner>
    <v-container>
      <!-- About Me -->
      <v-layout my-5>
        <v-row v-resize="onResize" align="center" justify="center">
          <v-flex xs8 class="text-center text-sm-left">
            <h2 class="headline mb-3 text-font-style">About Me</h2>
            <p class="mr-4 text-font-style">
              안녕하세요, SSAFY 참가자 여러분!<br />함께 프로젝트를 진행하게
              되어서 기쁩니다. Vue는 어렵지 않습니다. 차근차근 하나씩
              따라하다보면 어느새 멋진 블로그가 만들어져 있을겁니다! 모두 화이팅
              하시고, 꼭 완성해서 좋은 평가 있길 바라겠습니다.
            </p>
          </v-flex>
          <v-flex xs4 v-if="this.visialbe">
            <v-img :src="getImgUrl('iron.jpg')" aspect-ratio="1.5" />
          </v-flex>
        </v-row>
      </v-layout>

      <!-- Portfolio -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center text-font-style">Portfolio</h2>
          <div class="post-center">
            <PortfolioList></PortfolioList>
          </div>
        </v-flex>
      </v-layout>

      <!-- Post -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center text-font-style">Post</h2>
          <div class="post-center">
            <PostList></PostList>
          </div>
        </v-flex>
      </v-layout>

      <!-- Github -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center text-font-style">Project</h2>
          <RepositoryList></RepositoryList>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import PortfolioList from '../components/PortfolioList'
import PostList from '../components/PostList'
import RepositoryList from '../components/RepositoryList'
import NavigationBar from '../components/NavigationBar'
import NavigationBarMobile from '../components/NavigationBarMobile'

export default {
  name: 'HomePage',
  data: () => ({
    visialbe: false
  }),
  components: {
    ImgBanner,
    PortfolioList,
    PostList,
    RepositoryList,
    NavigationBar,
    NavigationBarMobile
  },
  methods: {
    getImgUrl (img) {
      return require('../assets/' + img)
    },
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

<style>
@import url('https://fonts.googleapis.com/css?family=Sunflower:500&display=swap');

.text-font-style{
  font-family: 'Sunflower', sans-serif;
}
.post-center{
  padding: 40px;
  text-align: center;
}

</style>
