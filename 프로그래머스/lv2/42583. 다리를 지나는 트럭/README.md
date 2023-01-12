# [level 2] 다리를 지나는 트럭 - 42583 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42583) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.07 ms

### 구분

코딩테스트 연습 > 스택／큐

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 로직
window를 사용하여 다리에 있는 트럭을 비유하고 window에 있는 값의 합이 weight를 넘어가지 않게 한다.
window에 옮기기 전에 합산이 weights를 넘어간다면 -> 트럭대신 0을 추가한다.
truck 리스트가 비면 다 넘어갔다고 생각하고 window에 트럭이 남았기 때문에 answer+window의 길이를 더하면 된다.
