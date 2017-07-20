(function() {
  window['optimizely'] = window['optimizely'] || [];

  if(location.pathname.indexOf("/h5/bookingHub") > -1){
    var modal = document.getElementById('modal-feedback') || null;
    if(modal !== null) {
        modal = modal.contentDocument.getElementsByTagName("body")[0] || null;
      var res = modal.querySelectorAll('.main .pageTitle') || null;
      var list = modal.querySelectorAll('.main .pageTitle')[1] || null;
    }
    
    
    setInterval( function(){
        if(list !== undefined && list !== null){
            if(list.innerText.indexOf('list!') > -1){
                window.optimizely.push(["trackEvent", "successful_email_signups"]);
              }
        }
    }, 250);
  }

  setTimeout(function(){
    if(localStorage.getItem("popUpClosedOrSubmitted") !== 'yes'){
      window.optimizely.push(["activate", 8501260953]);
    }
  }, 2000);


})();