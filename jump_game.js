var canJump = function(nums) {
    var positions = [];
    var jump = false;
   for(var i = 0; i < nums.length; i++) {
       if ((nums[i] + i) === (nums.length - 1) || (nums[i] + i) === undefined ) {
           positions.push(i);
       }
   }
   var currentPos = 0;
   while(currentPos < nums.length) {
       var arr = [];
       for(var j = 0; j <= nums[currentPos]; j++) {
           arr.push(j);
       }
       arr.forEach(function(pos){

          if(positions.indexOf(currentPos+pos) !== -1) {
            console.log('found');
              jump = true;
              return true;
          }
       });
    currentPos = currentPos += 1;
    if (nums[currentPos] === 0) {
        return false;
    }
   }
};

console.log(canJump([2,3,1,1,4]));
