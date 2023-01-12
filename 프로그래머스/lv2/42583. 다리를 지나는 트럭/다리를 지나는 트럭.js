function solution(bridge_length, weight, truck_weights) {
  let truck = truck_weights.slice(); 
  let window = Array(bridge_length).fill(0); //
  let answer = 0;

  while (truck.length > 0) {
    window.shift();
    let display = window.reduce((acc, w) => acc + w, 0) + truck[0];
    if (display <= weight) {
      window.push(truck.shift());
    } else {
      window.push(0);
    }
    answer++;
  }

  return answer + window.length;
}
