var ParentDiv;
$( "li" ).click(function() {
   ParentDiv = $(this).index();
  alert(ParentDiv);
  if(ParentDiv === 0){
    $(".HelloContent").show();
   }
  if(ParentDiv > 1){
    $(".HolaContent").show();
  }else {
    $(".HiContent").show();
  }
});