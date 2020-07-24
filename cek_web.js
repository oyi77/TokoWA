function injek_block(){
  var kentod = `<div id="myOverlay" class="overlay">
  <div class="overlay-content">
    <form action="/action_page.php" method="post" id="kode_aktip">
      <input type="hidden" name="url" value="" id="hid_url">
      <input type="text" placeholder="YOUR LICENSE CODE!" name="kode">
      <button type="submit">ACTIVATE!</button>
    </form>
  </div>
</div>`;
$( "body" ).append(kentod);
$("#hid_url").val(document.location.hostname);
$("#myOverlay").css("display", "block");
$("#kode_aktip").submit(function(e){
e.preventDefault();
              $.ajax({
                method: "POST",
                url: "https://trckmeid.xyz/ngecek.php",
                data: $(this).serialize()
              })
                .done(function( msg ) {
                  alert("Activation Status : "+msg+"\nRefreshing Page!");
                  location.reload();
                });
});
}  

var domurl = window.location.host;
  $.ajax({
      method: "GET",
      url: "https://trckmeid.xyz/ngecek.php?url="+domurl,
      data: ""
    })
      .done(function( msg ) {
        if(msg == "nope"){
          injek_block();
        }
        else {
          $("#myOverlay").css("display", "none");
        }
      });
