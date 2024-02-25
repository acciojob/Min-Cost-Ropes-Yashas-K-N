function mincost(arr)
{ 
//write your code here
// return the min cost




	{ 
	let sum = 0;
	let min = 0;

	for (let i =0; i< arr.length; i++){
		sum+=arr[i];
		if (sum<min){
            min = sum;
		}
		return min;
  
}
mincost([]);

module.exports=mincost;
