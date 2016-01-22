<button id="btn-0">Button 1!</button>
<button id="btn-1">Button 2!</button>
<button id="btn-2">Button 3!</button>

<script type="text/javascript">
  var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
  for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
      // for each of our buttons, when the user clicks it...
      document.getElementById('btn-' + btnNum).onclick = function(frozenBtnNum){
          return function() {
              // tell her what she's won!
              alert(prizes[frozenBtnNum]);
          };
      }(btnNum);
  }
</script>

//if not wrapped in outer IIFE function the alert will always return undefined 
//because btnNum will always be 3.
