javascript:head=document.head;oldinject=document.getElementById("themecrack");if(oldinject){oldinject.remove();};if(typeof obs==='undefined'){const obs=new MutationObserver((mut)=>{mut.forEach((m)=>{if(m.attributeName==="class"){if(!document.documentElement.classList.contains("custom-theme-background")){document.documentElement.classList.add("custom-theme-background");}}})});obs.observe(document.documentElement,{attributes:true});document.documentElement.classList.add("custom-theme-background");};themecustomcss="html{--custom-theme-background:"+"radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);"+"}";themeinject=document.createElement('style');themeinject.id="themecrack";themeinject.appendChild(document.createTextNode(themecustomcss));head.appendChild(themeinject)