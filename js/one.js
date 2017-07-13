function externalScripts() {
    var scripts = [
        "https://code.jquery.com/jquery-3.2.1.js"
    ];
    var src;
    var script;
    var pendingScripts = [];
    var firstScript = document.scripts[0];
    while ((src = scripts.shift())) {
        if ("async" in firstScript) {
            script = document.createElement("script");
            script.async = false;
            script.src = src;
            document.head.appendChild(script);
        } //if-async
    } 
} //extScript-•••··
externalScripts();

(function(andRedEyelikeButlins, undefined) {
    var SL = {};
    var $modal,$windowHeight,$content0,$content1,$moDesc1,$moDesc0,$moTitle0,$moTitle1,$close;
    SL.andRedEyelikeButlins = {
        init: function() {
        console.info('%c init \u221a', 'background:blue;color:white;'); 
            this.pgCssDesktop();
            if($ !== 'undefined') {
                var $ = jQuery;
                this.modale.buildMO();

            }//jquery loaded    
    },
    
    pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = ' .modal {position:absolute; margin:0; border-radius:5px; box-shadow: rgba(237, 237, 237, 0.15) -10px 3px 10px 3px, rgba(138, 136, 161, 0.19) 0px 6px 20px 0px; box-sizing:border-box; background: rgba(255,255,255,1); margin:0; border: 1px groove rgba(54, 48, 20, 0.45);} #overlay { position: absolute; top: 0; left: 0; background: rgba(0,0,0,.7); z-index: 500; cursor: pointer; width: 100%; height: 100%; } button.modal-close {cursor: pointer; }  ';
            var head = document.getElementsByTagName('head')[0];
            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css'),
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }   addcss(mainCss);
    },

    modale: {
        buildMO: function() {
            console.info('%c buildMO \u221a', 'background:blue;color:white;');
            var clay;
            $modal = $('<div class="modal" />');
            $content0 = $('<div class="modal-content">content0</div>');
            $moTitle0 = $('<div class="m-title">TITLE 0</div>');
            $content1 = $('<div class="modal-content">content1</div>');
            $moTitle1 = $('<div class="m-title">NEWS AND OFFERS</div>');
            $moDesc0 = $('<div class="m-desc">Enter email yeah</div>');
            $moDesc1 = $('<div class="m-desc">Save £10 on your next break when you sign up to hear more from us. We promise not to share your details with anyone.</div>');
            $emailForm = $(' form email ');
            $close = $('<button role="button" class="modal-close">close</button>');
            //add close button/content
            $modal.append($content0, $content1, $moTitle0, $moTitle1,$moDesc1,$moDesc0, $close);
            //close modal click event
            $close.on('click', function(e) {
               e.preventDefault();
               $modal.animate().detach();
               clay = document.getElementById('overlay'),
               clay ? clay.parentElement.removeChild(clay) : false;
               //unlock-body
               $('body').css({
                    'max-height' : '',
                    'overflow'   : ''
                });


            });//close

            //load modale
            this.open({content: $content0, width:350, height:450});
            

        },//buildMO
   
        center: function() {
            console.info('%c center \u221a', 'background:blue;color:white;');
            //from top n left of win-to-center-modale
            var top = Math.max(window.outerHeight - $modal[0].clientHeight, 0) / 2;
            var left = Math.max(window.outerWidth - $modal[0].clientWidth, 0) /2;
            $modal.css({
                //center vertically
                top: top + $(window).animate().scrollTop(),
                //center horizontally
                left: left + $(window).scrollLeft(),
                'z-index': 1000
            });
            //lock-body
            $('body').css({
                'max-height' : window.outerHeight,
                'overflow'   : 'hidden'
            });
            
            

        },//center

        open: function(settings) {  
            console.info('%c open \u221a', 'background:blue;color:white;');
            //set new content of modal
            $content0.empty().append($content0);
            $content1.empty().append($content1);
            $modal.css({
                //set modal dimensions
                width: settings.width || 'auto',
                height: settings.height || 'auto'
                //added to page
            }).appendTo('body');
            this.overlay();
            this.center();
            $(window).on('resize', this.center);


        },//open

        close: function() {
            console.info('%c close \u221a', 'background:blue;color:white;');
            //remove content from modal
            $content.empty();
            //remove modal from page
            $modal.detach();
            $(window).off('resize', this.center);

        },//close

        overlay: function() {
            console.info('%c overlay \u221a', 'background:blue;color:white;');
            var olay = document.createElement("div");
            var sele = document.querySelector('body > .main_header');
            //overlay&styles
            olay.id="overlay", 
            sele.parentElement.insertBefore(olay,sele);

        }//overlay


    }//modale
        

 

};
(function _RE() {
    //if (window.jQuery !== undefined) {
        //try {
        setTimeout(function() {
            SL.andRedEyelikeButlins.init();
        },65);    
            //SL.andRedEyelikeButlins.init();
        //} 
        //catch (err) {
            //console.log('TRY ERROR: '+ err);
        //}
        //} else { 
            //setTimeout(_RE, 45); 
        //}
           
    })();

}.call(window.andRedEyelikeButlins || {}));