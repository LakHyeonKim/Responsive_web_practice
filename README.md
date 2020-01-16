
<img src="https://cdn4.iconfinder.com/data/icons/heroes-villains-vol-2-colored/100/Ironman_Mark_45-512.png" width="15%">

# Overview
나만의 포트폴리오를 관리 할 수 있는 웹 사이트를 vue.js를 이용한 SPA형식으로 만들어  firebase에 배포, 전체적인 큰 UI/UX 틀만 생성

# Before You Begin & Prerequisites
local에서 프로젝트 실행을 위해 필요한 tools

* Node.js - [Node.js 홈페이지](http://nodejs.org/) ver. Window
* Vue.js - [Vue.js 공식문서](https://kr.vuejs.org/v2/guide/) 
* Firebase - [Firebase 공식문서](https://firebase.google.com/docs?hl=ko) ver. Window
* Git - [git 다운로드 & 프로젝트 clone](https://git-scm.com/downloads) ver. Window

# Setup

## node.js 다운로드

* [설치방법](https://javacpro.tistory.com/62) 완료 후 verson 확인 
```bash
$ npm --verson
```

## Vue.js, Vue-cli, Firebase, bootstrap 패키지 설치치 (s02p11d127 폴더 안에서 설치)
```bash
$ npm install
$ npm install -g yarn
$ npm install -g @vue/cli
$ npm install vue
$ npm install -g firebase-tools
$ npm install vue bootstrap-vue bootstrap
```

## Firebase deploy 방법

1. s02p11d127 폴더 안에서 프로젝트를 빌드 해준다.
```bash
$ npm run build
```

2. firebase에 로그인을 한다.
```bash
$ firebase login
```

3. firebase 초기화
```bash
$ firebase init
```

4. Hosting 클릭

<img src="https://miro.medium.com/proxy/1*0QZZD7Fcujvc4ve6nsybUA.png" width="60%">

5. 그 다음 어느 디렉터리를 'Public' 디렉터리로 삼을 것인지 물어 봄 -> npm run build로 만들어진 dist 폴더를 선택

6. 이어지는 “Configure as a single-page app (rewrite all urls to /index.html)?” 물음에는 디폴트로 N을 선택하고 엔터키

7. firebase 배포
```bash
$ firebase deploy
```

# Project URL 
* [클릭](https://s02p11d127.firebaseapp.com/)




