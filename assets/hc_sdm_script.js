'use strict';



class HC_CD{
    constructor(){
        this.hp_cd = '<html><head></head><body><div class="hc_cd at_top hc_cd_sticky" data-deadline="2023-03-16T18:30:00+00:00" data-end-action="0" data-flip="0" id="hc_cd_1565"><div><p class="hc_cd_heading h2">Sale begin in:</p><p class="hc_cd_subheading"></p></div><div class="hc_cd-timer timer_1"><span class="hc_cd_timernum hc_cd_days">00</span> <span class="hc_cd_timernum">:</span> <span class="hc_cd_timernum hc_cd_hours">00</span> <span class="hc_cd_timernum">:</span> <span class="hc_cd_timernum hc_cd_minutes">00</span> <span class="hc_cd_timernum">:</span> <span class="hc_cd_timernum hc_cd_seconds">00</span><div class="hc_cd_timerlabel hc_cd_label_days">Days</div><div class="hc_cd_timerlabel hc_cd_label_hours">Hours</div><div class="hc_cd_timerlabel hc_cd_label_minutes">Mins</div><div class="hc_cd_timerlabel last hc_cd_label_seconds">Secs</div></div><a class="hc_cd_button" href="None" style="display:none">Shop now</a></div></body></html>';
        this.p_cd = '';
        this.pp_selector = "form[action='/cart/add'] button[type='submit']";
        this.pp_position = 0;
        this.pp_use_campaign_dates = false;
        this.pp_valid_till = "";
    }

    add_styles(){
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        const styles_string = '.hc_cd{ position: relative; z-index: 100; display: flex; width: 100%; flex-wrap: wrap; align-items: center; justify-content: center; padding: 10px; column-gap: 26px; row-gap: 10px; border-style:solid; border-width: 0; box-sizing: border-box; z-index: 4; --timer-background-color: #eee; } .hc_cd.clickable{ cursor: pointer; } .hc_cd.hc_cd_sticky{ position:fixed; left:0; top:0; z-index:999; } .hc_cd.hc_cd_p{ flex-direction: column; } .hc_cd.at_top{ border-top-width:0!important; border-left-width:0!important; border-right-width:0!important; } .hc_cd.at_bottom{ position:fixed; left:0; bottom:0; z-index:999; border-bottom-width:0!important; border-left-width:0!important; border-right-width:0!important; } .hc_cd .hc_cd_heading{ font-weight: bold; margin: 0!important; padding: 0!important; line-height: 1.2; letter-spacing: normal; text-transform: none; text-align:left; } .hc_cd .hc_cd_subheading{ line-height: 1.2; letter-spacing: normal; padding: 0; margin: 0; text-align:left; } .hc_cd.hc_cd_p .hc_cd_heading, .hc_cd.hc_cd_p .hc_cd_subheading{ text-align:center; } .hc_cd .hc_cd_button{ display: block; cursor: pointer; text-decoration: none; border: 0px; white-space: nowrap; padding: 8px 16px; line-height: 1.5; } .hc_cd .hc_cd_button:empty{ display:none; } .hc_cd.hc_cd_p .hc_cd_button{ display:none } .hc_cd .hc_cd_button:hover{ opacity: .8; } .hc_cd-timer.timer_1{ display: grid; grid-template-columns: 1fr 10px 1fr 10px 1fr 10px 1fr; row-gap: 4px; justify-items: center; align-items: center; direction: ltr; column-gap: 2px; } .hc_cd-timer.timer_1 .hc_cd_timernum{ font-weight: bold; line-height: 1; font-feature-settings: "tnum"; font-variant-numeric: tabular-nums; } .hc_cd-timer.timer_1 .hc_cd_timerlabel{ padding-right: 10px; grid-column: 2 span; line-height: 1; } .hc_cd-timer.timer_1 .hc_cd_timerlabel.last{ grid-column: auto; padding-right: 0; } .hc_cd-timer.timer_2 { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; row-gap: 0; column-gap: 4px; text-align: center; } .hc_cd-timer.timer_2 .hc_cd_timercard { padding: 4px; border-radius: 3px; background: var(--timer-background-color); display: inline-block; } .hc_cd-timer.timer_2 .hc_cd_timernum{ font-weight: bold; line-height: 1; font-feature-settings: "tnum"; font-variant-numeric: tabular-nums; padding: 2px 6px; border-radius: 3px; display: inline-block; } .hc_cd-timer.timer_2 .hc_cd_timerlabel{ line-height: 1; } .hc_cd-timer.timer_3 { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; row-gap: 4px; column-gap: 4px; text-align: center; justify-items: center; align-items: center; perspective: 400px; } .hc_cd-timer.timer_3 .hc_cd_timerlabel{ line-height: 1; } .hc_cd-timer *, .hc_cd-timer *:before, .hc_cd-timer *:after { box-sizing: border-box; } .hc_cd-timer.timer_3 .hc_cd_timernum { display: block; position: relative; padding-bottom:.72em; font-size: 20px; line-height: 0.95; } .hc_cd-timer.timer_3 .card__top, .hc_cd-timer.timer_3 .card__bottom, .hc_cd-timer.timer_3 .card__back::before, .hc_cd-timer.timer_3 .card__back::after { display: block; height:.72em; background: var(--timer-background-color); padding: 0.25em 0.25em; border-radius: 0.15em 0.15em 0 0; backface-visiblity: hidden; transform-style: preserve-3d; width: 1.8em; transform: translateZ(0); } .hc_cd-timer.timer_3 .card__top{ overflow:hidden; } .hc_cd-timer.timer_3 .card__bottom { position: absolute; top: 50%; left: 0; border-top: solid 1px var(--timer-background-color); border-radius: 0 0 0.15em 0.15em; pointer-events: none; overflow: hidden; } .hc_cd-timer.timer_3 .card__bottom::after { display: block; margin-top: -0.72em; } .hc_cd-timer.timer_3 .card__back::before, .hc_cd-timer.timer_3 .card__bottom::after { content: attr(data-value); } .hc_cd-timer.timer_3 .card__back { position: absolute; top: 0; height: 100%; left: 0%; pointer-events: none; } .hc_cd-timer.timer_3 .card__back::before { position: relative; z-index: -1; overflow: hidden; } .hc_cd-timer.timer_3 .flip .card__back::before { animation: flipTop 0.3s cubic-bezier(.37,.01,.94,.35); animation-fill-mode: both; transform-origin: center bottom; } .hc_cd-timer.timer_3 .flip .card__back .card__bottom { transform-origin: center top; animation-fill-mode: both; animation: flipBottom 0.6s cubic-bezier(.15,.45,.28,1); } @keyframes flipTop { 0% { transform: rotateX(0deg); z-index: 2; } 0%, 99% { opacity: 0.99; } 100% { transform: rotateX(-90deg); opacity: 0; } } @keyframes flipBottom { 0%, 50% { z-index: -1; transform: rotateX(90deg); opacity: 0; } 51% { opacity: 0.99; } 100% { opacity: 0.99; transform: rotateX(0deg); z-index: 5; } }#hc_cd_1565 .hc_cd_timernum{ color: #fff; font-size: 14px; } #hc_cd_1565 .hc_cd_timerlabel{ color: #fff; font-size: 10px; } #hc_cd_1565 .hc_cd_heading{ font-size: 14px; color: #fff; } #hc_cd_1565 .hc_cd_subheading{ font-size: 14px; color: #fff; } #hc_cd_1565 .hc_cd_button{ background-color: #333; color: #FFFFFF; font-size: 14px; border-radius: 4px; } #hc_cd_1565 .hc_cd_button:hover{ color: #FFFFFF; } #hc_cd_1565{ border-color: #b3b5bb; border-width: 0px; background: #000; } #hc_cd_1565 { --timer-background-color: #eee; } )';
        if (s.styleSheet) {   // IE
            s.styleSheet.cssText = styles_string;
        } else {                
            s.innerHTML=styles_string;
        }
        document.head.appendChild(s);
    }

    insertAfter(newNode, existingNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }

    add_cd_above(cd_el){
        const el = document.querySelector(this.pp_selector);
        if (el){
            el.parentNode.insertBefore(cd_el, el);
        }
    }
    add_cd_below(cd_el){
        const el = document.querySelector(this.pp_selector);
        if (el){
            this.insertAfter(cd_el, el);
        }
    }

    init_hp_cd(){
        const parsedHTML = new DOMParser().parseFromString(this.hp_cd, 'text/html');
        this.hp_cd_el = parsedHTML.body.firstElementChild;
        
        document.body.prepend(this.hp_cd_el);
        
        var offset_height = this.hp_cd_el.getBoundingClientRect().height;
        document.body.style.marginTop = offset_height+"px";
        
        this.init_countdown(this.hp_cd_el, this.hp_cd_el.dataset.deadline);
    }
    init_p_cd(){
        let date;
        if (this.pp_use_campaign_dates){
            const cd_dates = document.getElementById('hc_product_countdown_dates');
            if (typeof(cd_dates) !== "undefined"){
                const dates = JSON.parse(
                    cd_dates.textContent,
                );
                const p_id = cd_dates.dataset.p_id;
                try{
                    date = dates[p_id]["sale_end"];
                }catch(error){
                    console.log("no end date for product")
                }
            }
        }else{
            if (typeof(this.pp_valid_till) !== "undefined"){
                date = this.pp_valid_till;
            }
        }
        if (date != undefined && date != ""){
            const parsedHTML = new DOMParser().parseFromString(this.p_cd, 'text/html');
            this.p_cd_el = parsedHTML.body.firstElementChild
            if(this.pp_position == 0){
                this.add_cd_above(this.p_cd_el);
            }else{
                this.add_cd_below(this.p_cd_el);
            }
            this.init_countdown(this.p_cd_el, date);
        }
        
    }
    init_countdown(countdown, end_date){
        let flip = false;
        if (countdown.dataset.flip == "1"){
            flip = true;
        }
        const deadline = Date.parse(end_date);
        const days = countdown.querySelector('.hc_cd_days');
        const hours = countdown.querySelector('.hc_cd_hours');
        const minutes = countdown.querySelector('.hc_cd_minutes');
        const seconds = countdown.querySelector('.hc_cd_seconds');
        
        if (flip){
            var sec_val = "00", 
                ftop_s = seconds.querySelector('.card__top'),
                fbottom_s = seconds.querySelector('.card__bottom'),
                fback_s = seconds.querySelector('.card__back'),
                fbackBottom_s = seconds.querySelector('.card__back .card__bottom'),
                min_val = "00", 
                ftop_m = minutes.querySelector('.card__top'),
                fbottom_m = minutes.querySelector('.card__bottom'),
                fback_m = minutes.querySelector('.card__back'),
                fbackBottom_m = minutes.querySelector('.card__back .card__bottom'),
                hour_val = "00", 
                ftop_h = hours.querySelector('.card__top'),
                fbottom_h = hours.querySelector('.card__bottom'),
                fback_h = hours.querySelector('.card__back'),
                fbackBottom_h = hours.querySelector('.card__back .card__bottom'),
                day_val = "00", 
                ftop_d = days.querySelector('.card__top'),
                fbottom_d = days.querySelector('.card__bottom'),
                fback_d = days.querySelector('.card__back'),
                fbackBottom_d = days.querySelector('.card__back .card__bottom');
        }
        
        function get_countdown_time(){
            let now = new Date()
            const millisec = deadline - now;
            
            const days = Math.floor(millisec / (1000 * 60 * 60 * 24));
            const hours = Math.floor((millisec % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((millisec % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((millisec % (1000 * 60)) / 1000);
            return [millisec, days, hours, minutes, seconds];
        }
        
        function updateCountdown(){
            let [diff, d, h, m, s] = get_countdown_time();
            if (typeof diff === "undefined" || diff < 0){
                d = 0;
                h = 0;
                m = 0;
                s = 0;
            }
            

            if (flip){               
                var s_curr = ('0' + s).slice(-2);
                if (sec_val !== s_curr){
                    if ( sec_val >= 0 ) {
                        fback_s.dataset.value = sec_val;
                        fbottom_s.dataset.value = sec_val;
                    }
                    sec_val = s_curr;
                    ftop_s.textContent = sec_val;
                    fbackBottom_s.dataset.value = sec_val;
                    seconds.parentNode.classList.remove("flip");
                    void seconds.parentNode.offsetWidth;
                    seconds.parentNode.classList.add("flip");
                }
                var m_curr = ('0' + m).slice(-2);
                if (min_val !== m_curr){
                    if ( min_val >= 0 ) {
                        fback_m.dataset.value = min_val;
                        fbottom_m.dataset.value = min_val;
                    }
                    min_val = m_curr;
                    ftop_m.textContent = min_val;
                    fbackBottom_m.dataset.value = min_val;
                    minutes.parentNode.classList.remove("flip");
                    void minutes.parentNode.offsetWidth;
                    minutes.parentNode.classList.add("flip");
                }
                
                var h_curr = ('0' + h).slice(-2);
                if (hour_val !== h_curr){
                    if ( hour_val >= 0 ) {
                        fback_h.dataset.value = hour_val;
                        fbottom_h.dataset.value = hour_val;
                    }
                    hour_val = h_curr;
                    ftop_h.textContent = hour_val;
                    fbackBottom_h.dataset.value = hour_val;
                    hours.parentNode.classList.remove("flip");
                    void hours.parentNode.offsetWidth;
                    hours.parentNode.classList.add("flip");
                }
                var d_curr = ('0' + d).slice(-2);
                if (day_val !== d_curr){
                    if ( day_val >= 0 ) {
                        fback_d.dataset.value = day_val;
                        fbottom_d.dataset.value = day_val;
                    }
                    day_val = d_curr;
                    ftop_d.textContent = day_val;
                    fbackBottom_d.dataset.value = day_val;
                    days.parentNode.classList.remove("flip");
                    void days.parentNode.offsetWidth;
                    days.parentNode.classList.add("flip");
                }
                
            }else{
                days.innerHTML = ('0' + d).slice(-2);
                hours.innerHTML = ('0' + h).slice(-2);
                minutes.innerHTML = ('0' + m).slice(-2);
                seconds.innerHTML = ('0' + s).slice(-2);
            }
            if (typeof diff === "undefined" || diff < 0){
                cancelAnimationFrame(timeinterval);
                const exp_action = countdown.dataset.endAction;
                switch (exp_action){
                    case "0":
                        countdown.style.display = "none";
                        
                        document.body.style.marginTop = "0px";
                        
                        break;
                    case "1":
                        countdown.querySelector(".hc_cd_subheading").style.display = "none";
                        countdown.querySelector(".hc_cd_heading").textContent = countdown.dataset.endText;
                        break;
                    
                }
            }
        }
        updateCountdown();
        var timeinterval = setInterval(updateCountdown, 1000);
    }

    init(){
        
        this.add_styles();
        
        
            
            this.init_hp_cd();
            
        
        
    }
}
const hccd = new HC_CD(); 
hccd.init();