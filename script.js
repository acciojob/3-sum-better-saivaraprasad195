function threeSum(arr, target) {
// write your code here
	let n = arr.length;
	arr.sort((a,b) => a-b);
	let closestSum=0;
	let minDiff = Infinity;
	for(let i=0;i<n;i++){
		let sum =0;
		for(let j=i+1,k=n-1 ; j<k;){
			sum = arr[i]+arr[j]+arr[k];
			if(sum == target) return target;
			let diff = Math.abs(sum-target);
			if(minDiff>diff){
				minDiff = diff;
				closestSum =sum;
			}
			if(sum<target){
				j++;
			}
			else if(sum>target) k--;
		}
	}

	return closestSum;
  
}

module.exports = threeSum;
