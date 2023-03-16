'use strict';



class HC_CD{
    constructor(){
        this.hp_cd = '';
        this.p_cd = '';
        this.pp_selector = "form[action='/cart/add'] button[type='submit']";
        this.pp_position = 0;
        this.pp_use_campaign_dates = false;
        this.pp_valid_till = "";
    }

    add_styles(){
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        const styles_string = ')';
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
        
        
        
    }
}
const hccd = new HC_CD(); 
hccd.init();