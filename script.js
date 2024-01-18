function threeSum(arr, target) {
// write your code here
	let n = arr.length;
	let closestSum=Infinity;
	for(let i=0;i<n;i++){
		let sum =0;
		for(let j=i+1,k=n-1 ; j<k;j++,k--){
			sum = arr[i]+arr[j]+arr[k];
			if(sum == target) return target;

			closestSum = Math.min(closestSum, Math.abs(sum-target));	
		}
	}

	return closestSum;
  
}

module.exports = threeSum;
