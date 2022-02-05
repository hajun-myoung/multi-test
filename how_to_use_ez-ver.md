# 소개

안녕하세요, 간단한 다중지능검사(에니어그램) 테스트 페이지를 제작한 DENVER 입니다.  
이 페이지는 webapp(one-page-application)으로 구성되었으며,
이 가이드는 html, css 및 js에 대한 경험이 부족한 사용자를 위한 쉬운 가이드입니다.

## 페이지의 구조

이 페이지는 `index.html`이 틀을 제공하고, `style.css`로 기본적인 스타일링을 수행합니다  
또한 `/javascript/` 폴더에 모인 `.js` 파일들이 문제 구성, 슬라이더, 결과 합산까지 다양한 기능을 수행합니다

```txt
.(root)
├── README.md 
├── how_to_use_ez-ver.md (현재 페이지)
├── how_to_use_core-ver.md
├── img (이미지 폴더)
│   ├── ads (광고용 이미지를 모아놓은 폴더)
│   │   ├── test-logo.jpeg
│   │   ├── test-thumbnail.webp
│   │   ├── test2-logo.jpeg
│   │   ├── test2-thumbnail.webp
│   │   └── youtube-logo.png (중요 : 유튜브 로고 이미지)
│   ├── favicon.png (원본 favicon 이미지)
│   ├── favicon_io (중요 : 변환된 favicon 이미지 폴더)
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon.ico
│   │   └── site.webmanifest
│   ├── favicon_io.zip (변환된 favicon 이미지 압축파일)
│   └── thumbnail (open graph 썸네일)
│       └── thumbnail-01.png
├── index.html (중요 : 페이지 틀을 제공하는 index.html)
├── javascript (중요 : 각 기능을 담당하는 javascript 파일들을 모은 포럳)
│   ├── calculate.js (중요 : 결과 합산 기능)
│   ├── generateQuestionElems.js (중요: 문제 생성 기능)
│   ├── lineStyle.js (중요 : 문제 라인별 배경색상 부여 기능)
│   ├── questionSlider.js (중요 : 문제 페이지 슬라이더 기능)
│   ├── responsiveProgressBar.js (중요 : 진행률 막대 구현 기능)
│   └── submit-and-reset-btns.js (중요 : 제출 및 응답 초기화 버튼의 기능)
└── style.css (중요 : 기본 스타일링)
```
