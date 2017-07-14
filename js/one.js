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
    var $modal,$windowHeight,$content0,$form0,$moDesc0,$moTitle0,$close,$extralinks;
    SL.andRedEyelikeButlins = {
        init: function() {
        console.info('%c init \u221a', 'background:blue;color:white;'); 
            this.pgCssDesktop();
            //this.modaleCss();
            if($ !== 'undefined') {
                var $ = jQuery;
                this.modale.buildMO();

            }//jquery loaded    
    },

    
    pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = '@font-face {font-family:"MYFONT"; src: url(/h5/images/font%2FFrontage-Bold.w_1388678922000hc.otf) format("truetype"); }  .modal {width:90% !important; font-family: "MYFONT", Arial, sans-serif;  position:absolute; margin:0; border-radius:5px; box-shadow: rgba(237, 237, 237, 0.15) -10px 3px 10px 3px, rgba(138, 136, 161, 0.19) 0px 6px 20px 0px; box-sizing:border-box; background: rgba(255,255,255,1); margin:0; border: 1px groove rgba(54, 48, 20, 0.45);} #overlay { position: absolute; top: 0; left: 0; background: rgba(0,0,0,.7); z-index: 500; cursor: pointer; width: 100%; height: 100%; } button.modal-close {cursor: pointer; } .modal-content .m-title {font-family:"MYFONT", Arial, sans-serif; color: rgb(22,22,22); font-size:1.6em; line-height:160%;} .modal-content .m-desc { font-family:"MYFONT", Arial, sans-serif;  line-height:140%; color:rgb(101,101,101); font-size:8px; margin:5px 0px; } .modal-content {text-align:center; padding:25px 25px;} .closeModal{color:#000;position:absolute;right:5px;top:5px;font-size:22px;border-radius:50%;width:22px;height:22px;line-height:22px;cursor:pointer}.closeModal:hover,.closeModal:focus{color:#000;text-decoration:none} ';
            var head = document.getElementsByTagName('head')[0];
            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css'),
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }   addcss(mainCss);
    },

    modaleCss: function() {
            var bstyle = document.createElement("style");
            bstyle.type = "text/css";
            bstyle.innerHTML = ' .clearfix::after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}* html .clearfix{zoom:1}:first-child+html .clearfix{zoom:1}html.popup-visible,body.popup-visible{overflow:hidden;position:fixed}.modal{text-align:center;position:fixed;z-index:500001;padding:0;left:0;top:0;width:100%;height:100%;border:0;overflow:auto;background-color:rgba(230,230,230,0.8)}.modal-content{text-align:center;position:fixed;z-index:500002;background-color:#fefefe;margin-right:inherit;margin-bottom:inherit;margin-left:inherit;width:90%;height:500px;left:5%;top:50%;margin-top:-250px;box-shadow:rgba(0,0,0,0.2) 0 4px 8px 0,rgba(0,0,0,0.188235) 0 6px 20px 0;border-radius:4px;padding:25px 30px;box-sizing:border-box}.modal-content ul li,.modal-content .UNErrorColor{text-align:left}.modal-content ul{margin-bottom:6px}.modal-content ul li{margin-bottom:3px}.modal-content .UNPadTop.UNErrorColor{padding-top:0}.modal-content .UNPadBottom{margin-bottom:3px}.modal-content .thank_you-pop{display:none}.modal-content .thank_you-pop .promo-code{font-size:1.5em;font-weight:bold;letter-spacing:.15em;padding:5px}.modal-content .thank_you-pop small{font-size:10px;font-style:italic}.modal-content.form-submited{height:165px;margin-top:-82px}.modal-content.form-submited .m-desc{padding:0 25px}.modal-content.form-submited .thank_you-pop{display:block}.modal-content.only-v1{height:190px;margin-top:-95px}.modal-content.only-v1 .step-2{display:none}.modal-content .field-form{margin-bottom:10px}.modal-content .m-title{font-family:MYFONT;color:#dd262d;font-size:1.6em;line-height:160%}.modal-content .m-desc{line-height:140%;color:#656565;font-size:12px;margin:5px 0}.modal-content input[type="text"],.modal-content input[type="email"]{border:1px solid #999;border-radius:3px;padding:0 5px}.modal-content input[type="submit"]{margin-top:15px;font-size:1.5em;padding:0 5px}.modal-content form{padding-top:10px}.modal-content form .user-type li,.modal-content form .modal-email-copy,.modal-content form .modal-email{font-weight:bold;text-align:center;font-size:1.1em;letter-spacing:.1em}.modal-content form .user-type li{font-size:1em}.modal-content form .title-user{margin-top:10px}.modal-content form select.select-type,.modal-content form .modal-email-copy{display:none;margin-top:5px}.modal-content form select.select-type.possible-error,.modal-content form .modal-email-copy.possible-error{display:block}.modal-content form .extra-links{text-align:left;padding-top:5px}.modal-content form .extra-links a{color:#888;text-decoration:underline}.modal-content form .extra-links .align-right{float:right}.modal-content form label{width:100%;text-align:left}.modal-content form .user-type li{display:block;margin-right:4%;width:22%;border:1px solid #999;border-radius:3px;line-height:38px;float:left;height:38px;box-sizing:border-box;color:#999}.modal-content form .user-type li.active{color:#000;background:#c3c3c3}.modal-content form .user-type li:last-child{margin-right:0}#modal-feedback{display:none}.closeModal{color:#000;position:absolute;right:5px;top:5px;font-size:22px;border-radius:50%;width:22px;height:22px;line-height:22px;cursor:pointer}.closeModal:hover,.closeModal:focus{color:#000;text-decoration:none}.modal-content .loader{margin:15px auto 0;display:none;max-width:100%;width:100%;position:relative;height:100%;padding-top:25px}.modal-content .loader .u_loading-logo{margin-top:0}@-webkit-keyframes ball-pulse-sync{33%{transform:translateY(10px)}66%{transform:translateY(-10px)}100%{transform:translateY(0px)}}@keyframes ball-pulse-sync{33%{transform:translateY(10px)}66%{transform:translateY(-10px)}100%{transform:translateY(0px)}}.ball-pulse-sync>div:nth-child(1){animation:ball-pulse-sync .6s ease-in-out -0.14s infinite}.ball-pulse-sync>div:nth-child(2){animation:ball-pulse-sync .6s ease-in-out -0.07s infinite}.ball-pulse-sync>div:nth-child(3){animation:ball-pulse-sync .6s ease-in-out 0s infinite}.ball-pulse-sync>div{background-color:#dd262d;width:15px;height:15px;border-radius:100%;margin:2px;animation-fill-mode:both;display:inline-block}@media(max-width:345px){.modal-content{padding:15px 20px;height:425px;margin-top:-212px}.modal-content.form-submited{height:140px;margin-top:-70px}.modal-content.only-v1{height:160px;margin-top:-80px}.modal-content .m-title{font-size:1.5em}.modal-content .textfield{height:32px}.modal-content .m-desc{font-size:11px}.modal-content input[type="submit"]{margin-top:5px;font-size:1.3em;height:37px;line-height:37px}.modal-content form .modal-email-copy,.modal-content form .modal-email{font-size:.9em;padding:4px}.modal-content form .user-type li{font-size:.9em}.modal-content form .title-user{margin-top:0}}.modal-content,.modal-content *{translate3d(0px,0px,0px)} ';
            document.getElementsByTagName("head")[0].appendChild(bstyle);

    },// modaleCss

    modale: {
        buildMO: function() {
            console.info('%c buildMO \u221a', 'background:blue;color:white;');
            var clay;
            $modal = $('<div id="newsOffers" class="modal"></div>');

            $content0 = $(' <div class="modal-content only-v1"> ');

            $close0 = $('<span class="closeModal">x</span>');

            $moTitle0 = $('<div class="m-title">NEWS AND OFFERS</div>');

            $moDesc0 = $('<div class="m-desc">Save £10 on your next Live Music Weekend when you sign up to hear about our latest news and offers.</div>');
            
            $form0 = $(' <form action="/h5/contacts-hub?pagePath=https%3A%2F%2Fwww.butlins.com%2Fnewsletter-signup" method="post" _lpchecked="1" target="my_iframe_feedback"> <input id="cpMain_ctlNewsletterSignupFormTcm46106357_chkButlinsOpt" type="checkbox" name="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$chkButlinsOpt" hidefocus="true" style="opacity: 0; outline: none; position: absolute; z-index: -1;"> <div class="step-1"> <div class="email-user field-form"><input type="email" name="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbEmail" id="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbEmail" value="" class="textfield w100 modal-email" placeholder="YOUR EMAIL ADDRESS" data-auto-submit="" required=""><input type="email" name="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbConfirmEmail" id="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbConfirmEmail" value="" class="textfield w100 modal-email-copy" placeholder="e.g. john@email.com" data-auto-submit=""></div><div class="clearfix"></div></div><div class="step-2"> <div class="title-user field-form"> <label for="" class="unLabel UNCapitalize">Fields marked with an asterisk (*) are mandatory</label> <ul class="user-type"> <li data-type="Mr">MR</li><li data-type="Mrs">MRS</li><li data-type="Ms">MS</li><li data-type="Master">OTHER</li></ul> <select name="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$ddlTitle" id="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$ddlTitle" class="w100 select-type" data-auto-submit=""> <option value="" selected="selected">Select</option> <option value="Mr">Mr</option> <option value="Mrs">Mrs</option> <option value="Ms">Ms</option> <option value="Miss">Miss</option> <option value="Master">Master</option> <option value="Rev">Rev</option> <option value="Dr">Dr</option> <option value="Prof">Prof</option> </select> <div class="clearfix"></div></div><div class="UNPadTop original UNErrorColor" style="display: none;"> <div class="UNPadBottom">Oops, it seems something went wrong when filling in the form.</div><ul> <li data-type="email">Enter an email address</li><li data-type="title">Please select your title</li><li data-type="first_name">Please enter your first name</li><li data-type="last_name">Please enter your last name</li></ul> </div><div class="first-name field-form"> <label for="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbFirstName" class="unLabel UNCapitalize">Your first name*</label><input type="text" name="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbFirstName" id="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbFirstName" value="" class="textfield w100 " placeholder="" data-auto-submit="" style="" required=""> <div class="clearfix"></div></div><div class="last-name field-form"> <label for="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbLastName" class="unLabel UNCapitalize">Your last name*</label><input type="text" name="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbLastName" id="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbLastName" value="" class="textfield w100 " placeholder="" data-auto-submit="" required=""> <div class="clearfix"></div></div><div class="UNPadTop unTable" style=" padding-top: 0; display: block; text-align: left; "> <input type="checkbox" name="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$chkEmailButlinsOpt" id="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$chkEmailButlinsOpt" value="true" checked="checked"></form>');
            //signup
            $signup = $('<label for="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$chkEmailButlinsOpt" class="unTableCell unVaM unPL10 unInlineLabel"> I want to receive updates by email </label> </div><input type="submit" value="SIGN UP" class="button w100" name="newsLetterSubmit"> <div class="clearfix"></div>');
            $form0.append($signup);
            $extralinks = $('<div class="extra-links"> <a href="https://www.butlins.com/splash-pages/signup-terms.aspx" class="tnc-link">Terms and Conditions</a><a href="https://m.butlins.com/h5/hub?pagePath=http%3A%2F%2Fwww.butlins.com%2Fprivacy-and-cookies%2Findex.aspx" class="privacy-link align-right">Privacy Policy</a> <div class="clearfix"></div></div></div><div class="clearfix"></div>');
            $form0.append($extralinks);

            //add close button/content
            $content0.append($close0, $moTitle0, $moDesc0, $form0);
           
            $close0.on('click', function(e) {
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

            $signup.on('click', function(e) {
                    e.preventDefault();
                    console.log(e);
                    alert('sign up');

            });//signup

            //load modale
            this.open({content:$content0, width:450,height:525});

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
            //$content0.empty().append($content0);    
            $modal.append($content0);
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