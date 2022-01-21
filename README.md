# 다중지능검사 페이지

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

- `c15e6bc` repository init

- `9e522c2` calculate.js 업데이트

  - 각 타입의 sum을 구할 수 있게끔

- `6254541` index.html에 테스트를 위한 문제들 추가

## 개선점

- jQuery를 쓰지 않고 같은 기능을 수행하게 할 수 있을까?
