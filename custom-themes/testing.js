javascript:head=document.head;oldinject=document.getElementById("themecrack");if(oldinject){oldinject.remove();};if(typeof obs==='undefined'){const obs=new MutationObserver((mut)=>{mut.forEach((m)=>{if(m.attributeName==="class"){if(!document.documentElement.classList.contains("custom-theme-background")){document.documentElement.classList.add("custom-theme-background");}}})});obs.observe(document.documentElement,{attributes:true});document.documentElement.classList.add("custom-theme-background");};themecustomcss="html{--custom-theme-background:"+"linear-gradient(90deg, rgba(163,243,234,1) 1%, rgba(167,255,169,1) 41%, rgba(255,126,197,1) 94%);"+"}";themeinject=document.createElement('style');themeinject.id="themecrack";themeinject.appendChild(document.createTextNode(themecustomcss));head.appendChild(themeinject)