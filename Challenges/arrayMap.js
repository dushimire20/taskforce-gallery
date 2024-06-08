function challenge1(arr, target) {
    let sum = 0;

    for ( let count = 0; count < arr.length; count ++){
        sum = sum + arr[count];

        while (sum > target && i <= count){
            sum = sum - arr[i];
            i++;
        }

        if (sum === target) {
            return true;
        }


    }
    return false;
}

const arr = [4,2,7,1,9,5];
const target = 10;
console.log(challenge1(arr,target));