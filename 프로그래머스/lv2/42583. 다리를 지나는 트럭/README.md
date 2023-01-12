# [level 2] 다리를 지나는 트럭 - 42583 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42583) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.07 ms

### 구분

코딩테스트 연습 > 스택／큐

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 로직
![KakaoTalk_20230112_104037527](https://user-images.githubusercontent.com/121365739/211956053-eefdabda-99c3-4fa7-907a-43e3a94e27f3.jpg)

![KakaoTalk_20230112_104037527_01](https://user-images.githubusercontent.com/121365739/211956069-fd95b9ea-45e2-4aa1-ac94-df8a10672b39.jpg)

window를 사용하여 다리에 있는 트럭을 비유하고 window에 있는 값의 합이 weight를 넘어가지 않게 한다. 

다음 트럭을 window(다리)에 옮기기 전에 다리 위에 있는 트럭의 무게를 합산한 값이 문제에서 주어진 weights를 넘어간다면 
다음 트럭이 올라올 수 없으므로 트럭 대신 0을 window에 추가한다. 

truck 리스트가 비었을 모든 트럭이 다리 위로 넘어간 것이다. 하지만 아직 window(다리)에 트럭이 남았기 때문에
answer(건넌 트럭)+window(아직 건너고 있는 트럭)의 길이를 더하면 된다.

### 풀이
```javascript
function solution(bridge_length, weight, truck_weights) {
  let truck = truck_weights.slice(); // 배열 얕은 복사
  // truck = [7,4,5,6]
  let window = Array(bridge_length).fill(0); //
  // [0,0] 트럭 한 대가 다리를 다 지나기 위해서는 다리의 길이만큼의 초가 필요하기 때문에
  // 0은 아직 아무 트럭도 올라와 있지 않은 상태
  let answer = 0;

  while (truck.length > 0) {
    // 대기 중인 모든 트럭이 다 나가서 다리 위에 올려질 때까지
    window.shift();
    // 1초가 지났으므로 다리의 맨 앞에 있던 트럭이 완전히 건너감
    let display = window.reduce((acc, w) => acc + w, 0) + truck[0];
    // 다리 앞에 전광판이 있다고 생각함. 이 전광판은 다음 트럭이 올라타도 되는지를 체크해줌
    if (display <= weight) {
      // window(다리 위 트럭 중량)의 누적합 + 대기열에서의 가장 맨 앞의 트럭의 무게가 weight을 초과하지 않는다면
      window.push(truck.shift());
      // 다리(window.push) 위에 올려도 제한하중을 견딜 수 있으니까 대기열에서 다음 트럭(truck.shift)을 올린다
    } else {
      window.push(0);
      // 트럭의 무게가 제한 하중(weight)을 초과한다면 앞의 트럭이 나갈 때 까지 기다려야 하므로 트럭 대신 0을 다리 위에 추가한다
      (다리 길이1 만큼 앞으로 밀린다. 즉, 다리 위의 전체 트럭이 1초만큼 이동한다)
    }
    answer++;
    // 이렇게 1초가 지났음
  }

  return answer + window.length;
}
console.log(solution(2, 10, [7, 4, 5, 6]));

```
