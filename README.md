# 다중지능검사 페이지

깃허브 Pages로 [디플로잉](https://hajun-myoung.github.io/multi-test/) 중

## 목표

- n개의 질문 타입(지능 타입)에 대한 질문들이 주어짐

- 사용자는 각 질문에 대해 1 ~ 5 까지의 수준으로 답함

- 설문을 submit 하면 각 타입별 선택한 문제의 점수를 합함

- 합산에 따른 결과를 표시

## 문제점

- `solved` 질문 타입을 어떻게 나눌 것인가?

  - input:radio를 div으로 감싸고, div에 question_a와 같은 class를 부여해 구분함

- `solved` 나눈 질문 타입들을 submit시 어떻게 합할 것인가?

  - jQuery를 이용, `querySelectorAll('div.question_id input:check')`를 통해 특정 타입의 문제들에서 선택된 input 요소들의 배열 가져옴

  - 각 요소에 value 속성을 부여해서 해당 값을 합함

## Update log

- JAN 21, 22

  - `c15e6bc` repository init

  - `9e522c2` calculate.js 업데이트

    - 각 타입의 sum을 구할 수 있게끔

  - `6254541` index.html에 테스트를 위한 문제들 추가

- JAN 22, 22

  - `a8bf7df` index.html에 테스트를 위한 문제들(dummy questions) 25번까지 구성

  - `a69bd21` javascript로 line styling 적용

    - 홀수 줄, 짝수 줄을 나누어 줄무늬로 채색하도록 구성

  - `1a489fa` 각 문항 타입별 점수 합산 함수 만듦

    - 임시로 submit 버튼과 연결

  - `aee1866` javascript 파일들을 한 디렉토리에 묶음(`./javascript/`)

- JAN 24, 22

  - **`c643f65` index.htmld에서 dummy questions를 삭제하고, 생성함수를 만듦**

    - 문제생성함수(`generate()`)는 같은 파일에서 전역으로 선언된 문제 배열(Object를 원소로 가진 Array)을 바탕으로 article#question에 문제 요소들을 생성함

    - 문제가 늘어날 경우, 간단하게 해당 Array만을 수정하면 됨

  - `585f89a` submit 버튼에 hover 애니메이션을 추가함

- JAN 31, 22

  - `9ecf7c1` 응답 초기화 버튼 추가(기능 미연결)

  - `d671b97` 문제생성함수의 범위 제한기능 추가

    - 추후 여러 페이지로 문제를 나누어서 생성하고자 함

  - **`764a14b` 문제 페이지 슬라이더 구성**

  - `e610eb4` 페이지 슬라이딩 버튼 구성

  - `20d32b9` 내부 스크롤(`overflow-y : scroll;`) 및 부드러운 스크롤 효과 추가

- FEB 1, 22

  - `5881529` `b0c01db` `f23e9f9` `983f997` 현재 페이지 번호 표시, 페이지 슬라이더 버튼 완성, 프로그레스 바 완성

    - 프로그레스 바의 경우, 각 문제를 풀 때마다 반응하게끔 함

  - `99fe08e` 리셋버튼 추가

  - `db7a494` 응시자 정보 표시 영역 추가

- FEB 2, 22

  - `b45acd9` 제출 및 응답 초기화 버튼 기능 구성 완료

  - `12ba2ac` 응시자 정보 표기 기능 구성 완료

  - `fad28fa` `f280711` `f1a3312` favicon, thumnail & open graph 셋팅

  - `b7e6728` `6a7de6f` 모바일 반응성 적용

  - `a7d680a` radio 버튼 버그픽스 : value 재할당

  - `0e41e11` 프로그레스 바 및 결과 바 모바일 반응성 적용

- FEB 3, 22

  - `ff5ee5f` 결과페이지 업데이트 : 모든 지능이 순서별로 나오도록 업데이트

    - 표현해야 하는 지능이 많아지면서 코드가 반복적이서, for loop를 새로 적용함

- FEB 4, 22

  - `7bf519c` ad section 추가 : 양 옆으로 샘플 ad 하나씩 생성

## 개선점

- jQuery의 제거 : 합산 함수, 프로그레스 바 반응 함수 등에서 jQuery 없이 동일한 기능을 구현

- 로그인 페이지 추가(prompt > sign-in)

- `how_to_use.md` 파일로 이 레포지토리 사용 가이드 제작
