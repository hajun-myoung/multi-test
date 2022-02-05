# 소개

안녕하세요, 간단한 다중지능검사(에니어그램) 테스트 페이지를 제작한 DENVER 입니다.  
이 페이지는 webapp(one-page-application)으로 구성되었으며,
이 가이드는 html, css 및 js를 다룰 줄 아는 사용자를 위한 핵심 가이드입니다.

## 페이지 구조

```txt
.(root)
├── README.md 
├── how_to_use_ez-ver.md
├── how_to_use_core-ver.md (현재 페이지)
├── img
│   ├── ads
│   │   ├── test-logo.jpeg
│   │   ├── test-thumbnail.webp
│   │   ├── test2-logo.jpeg
│   │   ├── test2-thumbnail.webp
│   │   └── youtube-logo.png
│   ├── favicon.png
│   ├── favicon_io
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon.ico
│   │   └── site.webmanifest
│   ├── favicon_io.zip
│   └── thumbnail
│       └── thumbnail-01.png
├── index.html
├── javascript
│   ├── calculate.js (결과 합산 함수)
│   ├── generateQuestionElems.js (문제 생성 함수)
│   ├── lineStyle.js (문제 라이별 채색 함수)
│   ├── questionSlider.js (문제 페이지 슬라이더 이벤트 관련 함수)
│   ├── responsiveProgressBar.js (Progress bar 이벤트 관련 함수)
│   └── submit-and-reset-btns.js (submit, reset 버튼 이벤트 관련 함수)
└── style.css (중요 : 기본 스타일링)
```
