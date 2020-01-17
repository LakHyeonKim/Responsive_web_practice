<template>
  <div>
    <header>
      <NavigationBar v-if="visialbe"></NavigationBar>
      <NavigationBarMobile v-if="!visialbe"></NavigationBarMobile>
    </header>
    <ImgBanner imgSrc="https://c.wallhere.com/photos/a4/2d/1600x900_px_black_Iron_man-1428647.jpg!d">
      <div style="line-height:1.2em; font-size:1.2em; margin-left:45px" slot="text">
        I'm Iron man.<br />
        I love you 3000.
      </div>
    </ImgBanner>
    <v-container>
      <!-- About Me -->
      <v-layout my-5 class="post-center">
        <v-row v-resize="onResize" align="center" justify="center">
          <v-flex xs8 class="text-center text-sm-left">
            <p class="text-banner-font post-center">About Me</p>
            <p class="mr-4 text-font-style">
              안녕하세요, SSAFY 참가자 여러분!<br />함께 프로젝트를 진행하게
              되어서 기쁩니다. Vue는 어렵지 않습니다. 차근차근 하나씩
              따라하다보면 어느새 멋진 블로그가 만들어져 있을겁니다! 모두 화이팅
              하시고, 꼭 완성해서 좋은 평가 있길 바라겠습니다.
            </p>
          </v-flex>
          <v-flex xs4 v-if="this.visialbe && (this.scrollY <= 600)">
            <v-img :src="getImgUrl('iron-close-heart.jpg')" aspect-ratio="1.3" width="300"/>
          </v-flex>
          <v-flex xs4 v-if="this.visialbe && (this.scrollY > 600 && this.scrollY <= 750)">
            <v-img :src="getImgUrl('iron-close-eyes.jpg')" aspect-ratio="1.3" width="300"/>
          </v-flex>
          <v-flex xs4 v-if="this.visialbe && (this.scrollY > 750)">
            <v-img :src="getImgUrl('iron.jpg')" aspect-ratio="1.3" width="300"/>
          </v-flex>
        </v-row>
      </v-layout>
      <br><v-divider></v-divider>
      <!-- Portfolio -->
      <v-layout my-5>
        <v-flex xs12>
          <div class="text-left" v-if="visialbe"><p class="text-banner-font">Portfolio</p></div>
          <div class="text-center" v-if="!visialbe"><p class="text-banner-font">Portfolio</p></div>
          <div>
            <PortfolioList></PortfolioList>
          </div>
        </v-flex>
      </v-layout>
      <br><v-divider></v-divider>
      <!-- Post -->
      <v-layout my-5>
        <v-flex xs12>
          <div class="text-left" v-if="visialbe"><p class="text-banner-font">Post</p></div>
          <div class="text-center" v-if="!visialbe"><p class="text-banner-font">Post</p></div>
          <div>
            <PostList></PostList>
          </div>
        </v-flex>
      </v-layout>
      <br><v-divider></v-divider>
      <!-- Github -->
      <v-layout my-5>
        <v-flex xs12>
          <div class="text-left" v-if="visialbe"><p class="text-banner-font">Repository</p></div>
          <div class="text-center" v-if="!visialbe"><p class="text-banner-font">Repository</p></div>
          <div><RepositoryList></RepositoryList></div>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import PortfolioList from '../components/PortfolioList'
import PostList from '../components/PostList'
import RepositoryList from '../components/RepositoryList'
import NavigationBar from '../components/NavigationBar'
import NavigationBarMobile from '../components/NavigationBarMobile'
import Footer from '../components/Footer'

export default {
  name: 'HomePage',
  data: () => ({
    visialbe: false,
    scrollY: 0,
    timer: null
  }),
  components: {
    ImgBanner,
    PortfolioList,
    PostList,
    RepositoryList,
    NavigationBar,
    NavigationBarMobile,
    Footer
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
    },
    handleScroll(){
      if(this.timer === null){
        this.timer = setTimeout(function(){
          this.scrollY = window.scrollY
          window.console.log(this.scrollY)
          clearTimeout(this.timer)
          this.timer =null
        }.bind(this), 200)
      }
    }
  },
  created(){
    window.addEventListener('scroll',this.handleScroll)
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
    this.onResize()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Sunflower:500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');
.text-font-style{
  font-family: 'Sunflower', sans-serif;
}
.post-center{
  padding: 40px;
  text-align: center;
}

.text-banner-font {
  font-family: 'Bebas Neue', cursiv;
  font-size: 36px;
}

</style>
