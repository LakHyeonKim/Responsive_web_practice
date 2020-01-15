<template>
  <div>
    <header>
      <NavigationBar v-if="visialbe"></NavigationBar>
      <NavigationBarMobile v-if="!visialbe"></NavigationBarMobile>
    </header>
    <ImgBanner imgSrc="http://getwallpapers.com/wallpaper/full/b/0/2/32320.jpg#.Xh6BW1I3Trk.link">
      <div style="line-height:1.2em; font-size:1.2em; margin-left:45px;" slot="text">
        Portfolio
      </div>
    </ImgBanner>
    <v-container>
      <!-- Portfolio -->
      <v-layout>
        <v-row v-resize="onResize" align="center" justify="center">
          <v-flex xs12>
            <div class="post-center">
              <PortfolioList :limits="6" :load-more="true"></PortfolioList>
            </div>
          </v-flex>
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import PortfolioList from '../components/PortfolioList'
import NavigationBar from '../components/NavigationBar'
import NavigationBarMobile from '../components/NavigationBarMobile'

export default {
  name: 'PortfolioPage',
  data: () => ({
    visialbe: false
  }),
  components: {
    ImgBanner,
    PortfolioList,
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

<style>
.post-center {
  padding: 40px;
  text-align: center;
}
</style>