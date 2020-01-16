<template>
  <div>
    <v-img :src="imgSrc" aspect-ratio="1.7">
      <v-layout align-center justify-center row fill-height>
        <!-- <v-row v-resize="onResize" align="center" justify="center"> -->
        <!-- style="font-size:10vw; 가로크기/100이미 되어있음 (vw)에서 10을 항상 곱해 주는 폰트 사이즈 지정 -->
        <v-flex text-xs-center>
          <span
            class="text-style font-weight-light text-banner-font"
            style="font-size:7vw"
          >
            <slot name="text" />
          </span>
        </v-flex>
        <!-- 노가다 방법 -->
        <!-- <v-flex text-xs-center v-if="fontSize2">
          <span class="text-shadow display-1 font-weight-light" style="text-align:center">
            <slot name="text"/>
          </span>
        </v-flex>
        <v-flex text-xs-center v-if="fontSize3">
          <span class="text-shadow display-2 font-weight-light" style="text-align:center">
            <slot name="text"/>
          </span>
        </v-flex>
        <v-flex text-xs-center v-if="fontSize4">
          <span class="text-shadow display-3 font-weight-light" style="text-align:center">
            <slot name="text"/>
          </span>
        </v-flex>
        <v-flex text-xs-center v-if="fontSize5">
          <span class="text-shadow display-4 font-weight-light" style="text-align:center">
            <slot name="text"/>
          </span>
        </v-flex> -->
        <!-- </v-row> -->
      </v-layout>
    </v-img>
  </div>
</template>

<script>
export default {
  name: 'ImgBanner',
  data: () => ({
    fontSize2: false,
    fontSize3: false,
    fontSize4: false,
    fontSize5: false
  }),
  props: {
    imgSrc: { type: String },
    text: { type: String }
  },
  methods: {
    onResize () {
      if (window.innerWidth < 576) {
        this.fontSize2 = true
        this.fontSize3 = false
        this.fontSize4 = false
        this.fontSize5 = false
      } else if (window.innerWidth >= 576 && window.innerWidth < 768) {
        window.console.log(window.innerWidth)
        this.fontSize2 = false
        this.fontSize3 = true
        this.fontSize4 = false
        this.fontSize5 = false
      } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
        this.fontSize2 = false
        this.fontSize3 = false
        this.fontSize4 = true
        this.fontSize5 = false
      } else {
        this.fontSize2 = false
        this.fontSize3 = false
        this.fontSize4 = false
        this.fontSize5 = true
      }
    }
  },
  mounted () {
    this.onResize()
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');
.text-style{
  text-shadow: 0 0 15px rgb(182, 148, 37);
  color: aliceblue;
  text-align: left;
}
.text-banner-font {
  font-family: 'Bebas Neue', cursiv;
  font-size: 36px;
}

</style>
