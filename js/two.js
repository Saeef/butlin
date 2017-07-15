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
    //public
    var $modal, $windowHeight, $content0,
    $form0, $moDesc0, $moTitle0, $close, $extralinks;
    //helper fn
    function addEvent(ele,event,callback) {
        if('addEventListener' in ele) {
            ele.addEventListener(event,callback,false);
        }//if-ael
        else {
            ele['e' + event + callback] = callback;
            ele[event + callback] = function() {
                ele['e' + event + callback](window.event);
            };
            ele.attachEvent('on' + event, ele[event + callback]);
        }

    };//$addEvent

    function isEmpty(el) {
                 return !el.value || el.value === el.placeholder;
    }//isEmpty

    //private
    SL.andRedEyelikeButlins = {
        init: function() {
        console.info('%c init \u221a', 'background:blue;color:white;'); 
            this.pgCssDesktop();
            this.modaleCss();
            var count = 0;
            do  {
                  count++;  
                  var self = window;
                  var $ = jQuery;
                  this.modaleProc.buildMO();
                  document.forms.nosl.elements[7].classList.contains('nero') ? 
                  this.validation.getReady() :  count++;  
            } while ($ !== 'undefined' && count < 1);

            
        
    },

    
    pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = '@font-face {font-family:"MYFONT"; src: url(/h5/images/font%2FFrontage-Bold.w_1388678922000hc.otf) format("truetype"); }  .modal {width:90% !important; font-family: "MYFONT", Arial, sans-serif;  position:absolute; margin:0; border-radius:5px; box-shadow: rgba(237, 237, 237, 0.15) -10px 3px 10px 3px, rgba(138, 136, 161, 0.19) 0px 6px 20px 0px; box-sizing:border-box; background: rgba(255,255,255,1); margin:0; border: 1px groove rgba(54, 48, 20, 0.45);} #overlay { position: absolute; top: 0; left: 0; background: rgba(0,0,0,.7); z-index: 500; cursor: pointer; width: 100%; height: 100%; } button.modal-close {cursor: pointer; } .modal-content .m-title {font-family:"MYFONT", Arial, sans-serif; color: rgb(22,22,22); font-size:1.6em; line-height:160%;} .modal-content .m-desc { font-family:"MYFONT", Arial, sans-serif;  line-height:150%; color:rgb(101,101,101); font-size:.83em; margin:10px 0px 7px; } .modal-content {text-align:center; padding:25px 25px;} .closeModal{color:#000;position:absolute;right:5px;top:5px;font-size:22px;border-radius:50%;width:22px;height:22px;line-height:22px;cursor:pointer}.closeModal:hover,.closeModal:focus{color:#000;text-decoration:none} .button.nero {border: 1px solid #0f171c; background:#111112; background:-webkit-gradient(linear,left top,left bottom,from(#282c30),to(#111112)); background:-webkit-linear-gradient(top,#282c30,#111112); background:-moz-linear-gradient(top,#282c30,#111112); background:-ms-linear-gradient(top,#282c30,#111112); background:-o-linear-gradient(top,#282c30,#111112); padding:0; -webkit-border-radius:4px; -moz-border-radius:4px; border-radius:4px; -webkit-box-shadow:rgba(0,0,0,1) 0 1px 0;-moz-box-shadow:rgba(0,0,0,1) 0 1px 0; box-shadow:rgba(0,0,0,1) 0 1px 0; text-shadow:rgba(0,0,0,.4) 0 1px 0; color:white;font-size:16px; font-family: MYFONT,Arial, sans-serif; text-decoration:none; vertical-align:middle; } .button.nero:focus {outline:none;}  .ele0 {margin:12px 0 20px; text-align:center; font-family:MYFONT, Arial, sans-serif; font-size:1.2em; line-height:140%; vertical-align: initial; padding:3px 0 0 0; } .ele1 {display:none; }  .ele2 {margin-bottom:15px; } ul.user-type.ele2 li {display: inline-block; margin-right: 12px; border: 1px solid #c7c7c7; padding:10px 23px 9px 22px; } ul.user-type.ele2 li:last-child {margin-right:0;} #nosl select {display:none;} .ele3 { margin-bottom:20px; } .ele4 {margin-bottom:20px; } .ele5 { padding-bottom:8px;} label.unLabel {padding-left:3px; text-align:left; padding-bottom:7px; } div.UNPadTop.unTable {display:none; } #nosl label.unTableCell.unVaM.unPL10.unInlineLabel {display:none; width:100%;} div.extra-links {margin:10px 3px 0 2px; } div.extra-links a {text-decoration:none; color:#222222 } div.extra-links a:visited {text-decoration:underline;} #nosl a.tnc-link {float: left; } #nosl a.privacy-link.align-right {float:right;}            .UNPadTop.unTable input {display: none;} .acton {background:#ededed; color:#222222; border: 1px solid #222222 !important;} div.title-user.field-form ul.user-type li {font-size:11px; padding:11px 19px 9px 16px;} #nosl .step-2 label { padding-bottom:0; } #nosl ul.user-type.ele0.ele2 {margin-top:0;} .ele33 {margin-bottom:10px;}';

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
            bstyle.innerHTML = '  ';
            document.getElementsByTagName("head")[0].appendChild(bstyle);

    },// modaleCss

    modaleProc: {
        buildMO: function() {
            console.info('%c buildMO \u221a', 'background:blue;color:white;');
            var clay;
            $modal = $('<div id="newsOffers" class="modal"></div>');

            $content0 = $(' <div class="modal-content only-v1"> ');

            $close0 = $('<span class="closeModal">x</span>');

            $moTitle0 = $('<div class="m-title">NEWS AND OFFERS</div>');

            $moDesc0 = $('<div class="m-desc">Save £10 on your next Live Music Weekend when you sign up to hear about our latest news and offers.</div>');
            
            $form0 = $(' <form id="nosl" name="nosl" action="/h5/contacts-hub?pagePath=https%3A%2F%2Fwww.butlins.com%2Fnewsletter-signup" method="post" _lpchecked="1" target="my_iframe_feedback"> <input id="cpMain_ctlNewsletterSignupFormTcm46106357_chkButlinsOpt" type="checkbox" name="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$chkButlinsOpt" hidefocus="true" style="opacity: 0; outline: none; position: absolute; z-index: -1;"> <div class="step-1"> <div class="email-user field-form"><input type="email" name="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbEmail" id="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbEmail" value="" class="textfield w100 modal-email" placeholder="YOUR EMAIL ADDRESS" data-auto-submit="" required=""><input type="email" name="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbConfirmEmail" id="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbConfirmEmail" value="" class="textfield w100 modal-email-copy" placeholder="e.g. john@email.com" data-auto-submit=""></div><div class="clearfix"></div></div><div class="step-2"> <div class="title-user field-form"> <label for="" class="unLabel UNCapitalize">Fields marked with an asterisk (*) are mandatory</label> <ul class="user-type"> <li data-type="Mr">MR</li><li data-type="Mrs">MRS</li><li data-type="Ms">MS</li><li data-type="Master">OTHER</li></ul> <select name="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$ddlTitle" id="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$ddlTitle" class="w100 select-type" data-auto-submit=""> <option value="" selected="selected">Select</option> <option value="Mr">Mr</option> <option value="Mrs">Mrs</option> <option value="Ms">Ms</option> <option value="Miss">Miss</option> <option value="Master">Master</option> <option value="Rev">Rev</option> <option value="Dr">Dr</option> <option value="Prof">Prof</option> </select> <div class="clearfix"></div></div><div class="UNPadTop original UNErrorColor" style="display: none;"> <div class="UNPadBottom">Oops, it seems something went wrong when filling in the form.</div><ul> <li data-type="email">Enter an email address</li><li data-type="title">Please select your title</li><li data-type="first_name">Please enter your first name</li><li data-type="last_name">Please enter your last name</li></ul> </div><div class="first-name field-form"> <label for="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbFirstName" class="unLabel UNCapitalize">Your first name*</label><input type="text" name="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbFirstName" id="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbFirstName" value="" class="textfield w100 " placeholder="" data-auto-submit="" style="" required=""> <div class="clearfix"></div></div><div class="last-name field-form"> <label for="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbLastName" class="unLabel UNCapitalize">Your last name*</label><input type="text" name="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbLastName" id="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbLastName" value="" class="textfield w100 " placeholder="" data-auto-submit="" required=""> <div class="clearfix"></div></div><div class="UNPadTop unTable" style=" padding-top: 0; display: block; text-align: left; "> <input type="checkbox" name="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$chkEmailButlinsOpt" id="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$chkEmailButlinsOpt" value="true" checked="checked"></form>');
            //signup
            $signup = $('<label for="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$chkEmailButlinsOpt" class="unTableCell unVaM unPL10 unInlineLabel"> I want to receive updates by email </label> </div><input type="submit" value="SIGN UP" class="button w100 nero" name="newsLetterSubmit"> <div class="clearfix"></div>');
            $form0.append($signup);
            $extralinks = $('<div class="extra-links"> <a href="https://www.butlins.com/splash-pages/signup-terms.aspx" class="tnc-link">Terms and Conditions</a><a href="https://m.butlins.com/h5/hub?pagePath=http%3A%2F%2Fwww.butlins.com%2Fprivacy-and-cookies%2Findex.aspx" class="privacy-link align-right">Privacy Policy</a> <div class="clearfix"></div></div></div><div class="clearfix"></div>');

            $form0.append($extralinks);

            //add close button/content
            $content0.append($close0, $moTitle0, $moDesc0, $form0);
            
            //x-mark
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

            //signup-button
            $signup.on('click', function(e) {
                    e.preventDefault();
                    if(e.currentTarget.className == 'button w100 nero') {
                        console.log(e);
                        SL.andRedEyelikeButlins.validation.getReady();
                        alert('sign up');   
                    }
                    

            });//signup

            //load modale
            this.openMO({content:$content0, width:450,height:582});
          



        },//buildMO
   
        centerMO: function() {
            console.info('%c centerMO \u221a', 'background:blue;color:white;');
            //from top n left of win-to-center-modale
            var top = Math.max(self.outerHeight - $modal[0].clientHeight, 0) / 2;
            var left = Math.max(self.outerWidth - $modal[0].clientWidth, 0) /2;
            $modal.css({
                //center vertically
                top: top + $(window).animate().scrollTop(),
                //center horizontally
                left: left + $(window).scrollLeft(),
                'z-index': 1000
            });
            //lock-body
            $('body').css({
                'max-height' : self.outerHeight,
                'overflow'   : 'hidden'
            });
            
            

        },//center

        openMO: function(settings) {  
            console.info('%c openMO \u221a', 'background:blue;color:white;');
            //$content0.empty().append($content0);
            $modal.append($content0);
            $modal.css({
                //set modal dimensions
                width: settings.width || 'auto',
                height: settings.height || 'auto'
                //added to page
            }).appendTo('body');

            //fireOff
            this.overlayMO();
            this.radioMO();
            this.centerMO();
            $(window).on('resize', this.centerMO);
            
            

           


        },//open    

        closeMO: function() {
            console.info('%c close \u221a', 'background:blue;color:white;');
            //remove content from modal
            $content.empty();
            //remove modal from page
            $modal.detach();
            $(window).off('resize', this.center);

        },//close

        overlayMO: function() {
            console.info('%c overlayMO \u221a', 'background:blue;color:white;');
            var olay = document.createElement("div");
            var sele = document.querySelector('body > .main_header');
            //overlay&styles
            olay.id="overlay", 
            sele.parentElement.insertBefore(olay,sele);

        },//overlay

        radioMO : function() {
            console.info('%c radioMO \u221a', 'background:blue;color:white;');
            var res,ras;
            var rad = document.querySelectorAll('.user-type')[0].children;
            for(var c=0; c < rad.length; c++) {
                    rad[c].className += " ele0";
            }
            var no = document.getElementById('nosl');
            var nosl = no.querySelector('.user-type');
            nosl.addEventListener('click', function(e) {
                e.preventDefault();
                ras = e.target.parentElement;
                if(ras.className.indexOf('user-type') > -1) {
                    switch(e.target.textContent) {
                        case "MR":
                        e.target.className = "acton";
                        rad[1].className = "";
                        rad[2].className = "";
                        rad[3].className = "";
                        break;
                        case "MRS":
                        e.target.className = "acton";
                        rad[0].className = "";
                        rad[2].className = "";
                        rad[3].className = "";
                        break;
                        case "MS":
                        e.target.className = "acton";
                        rad[0].className = "";
                        rad[1].className = "";
                        rad[3].className = "";
                        break;
                        case "OTHER":
                        e.target.className = "acton";
                        rad[0].className = "";
                        rad[1].className = "";
                        rad[2].className = "";
                        break;

                    }//swii
                }//if-yello

                for(var c=0; c < rad.length; c++) {
                    rad[c].className += " ele0";
                }

                res = e.target.attributes[0].value;
                console.log('data-type is: ' + res);
                return res;



            },false);//fo-yello
                

         

        }//radioMO


    },//modale

    validation: {
        getReady : function() {
            console.info('%c validation.getReady \u221a', 'background:blue;color:white;');
            //ele0,1
            var ele0 = document.querySelector('.email-user.field-form').children[0];
            ele0.classList.add('ele0');
            var ele1 = document.querySelector('.email-user.field-form').children[1];
            ele1.classList.add('ele0');
            ele1.classList.add('ele1');
            var ele2 = document.querySelector('#nosl ul.user-type');
            ele2.classList.add('ele0');
            ele2.classList.add('ele2');
            var ele3 = document.forms.nosl.children[2].children[2];
            ele3.children[1].classList.add('ele0');
            ele3.classList.add('ele33');
            var ele4 = document.forms.nosl.children[2].children[3];
            ele4.children[1].classList.add('ele0');
            ele4.classList.add('ele4');
            var ele5 = document.forms.nosl.children[4];
            ele5.classList.add('ele5');

            //document.forms.nosl.noValidate = true;
            var subm = document.querySelector('#nosl input[type=submit]');
            subm.addEventListener('click', function(e) {
                e.preventDefault();
                console.log(e);


            },false);//on-submit-evt

            //step1
            var s1 = document.forms.nosl.elements[1];
            s1.addEventListener('focus', this.step1, false);

            
        },//getReady

        step1: function() {
            console.info('%c onSubmit \u221a', 'background:blue;color:white;');
            console.log('step1');
            var nof = document.getElementById('newsOffers');
            var s1 = document.forms.nosl.elements[1];
            var s2 = document.forms.nosl.elements[2];

            if(s1.placeholder.toUpperCase() == "YOUR EMAIL ADDRESS") {
                s1.placeholder = '';
                s2.classList.remove('ele1');
                nof.style.height = '650px'; //582

            } 
            
            s1.addEventListener('blur', function(e) {
                if(s1.placeholder == "") {
                    s1.placeholder = "YOUR EMAIL ADDRESS";
                    s2.classList.remove('ele1');
                    nof.style.height = '650px';

                }
                else if(isEmpty(s1) == false) {
                    s2.classList.remove('ele1');
                    nof.style.height = '650px';
                }

            }, false);

            s2.addEventListener('focus', function(e) {
                s2.classList.remove('ele1');
                nof.style.height = '650px';
                s2.placeholder = '';
                if(s1.value.toString().toUpperCase() == s2.value.toString().toUpperCase()) {
                    s1.style.border = "1px solid #222222";
                    s2.style.border = "1px solid #222222";
                }//matched
                else {
                    s1.style.border = "1px solid #e0e0e0";
                    s2.style.border = "1px solid #e0e0e0";
                    s2.placeholder = "E.G. JOHN@EMAIL.COM";
                }

            },false);

            s2.addEventListener('blur', function(e) {
                s2.classList.remove('ele1');
                nof.style.height = '650px';
                if(s2.placeholder == "") {
                    s2.placeholder = "E.G. JOHN@EMAIL.COM";
                    s2.classList.remove('ele1');
                    nof.style.height = '650px';

                }
                
                

            },false);



            

            
            
            





        }//onSubmit
        
    



    }//validation
        

 

};
(function _RE() {
    //if (window.jQuery !== undefined) {
        //try {
        setTimeout(function() {
            SL.andRedEyelikeButlins.init();
        },360);    
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