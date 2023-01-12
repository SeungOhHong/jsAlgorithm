function solution(bridge_length, weight, truck_weights) {
    let truck = truck_weights.slice();
    let window = Array(bridge_length).fill(0);
    let currentWeight = 0;
    let answer = 0;
    
    while (truck.length > 0) {
        currentWeight -= window.shift();
        if (currentWeight + truck[0] <= weight) {
            currentWeight += truck.shift();
            window.push(1);
        } else {
            window.push(0);
        }
        answer++;
    }
    return answer + window.length;
}
