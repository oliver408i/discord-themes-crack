javascript:head=document.head;oldinject=document.getElementById("themecrack");if(oldinject){oldinject.remove();};if(typeof obs==='undefined'){const obs=new MutationObserver((mut)=>{mut.forEach((m)=>{if(m.attributeName==="class"){if(!document.documentElement.classList.contains("custom-theme-background")){document.documentElement.classList.add("custom-theme-background");}}})});obs.observe(document.documentElement,{attributes:true});document.documentElement.classList.add("custom-theme-background");};themecustomcss="html{--custom-theme-background:"+"linear-gradient(180.14deg, var(--bg-gradient-cotton-candy-1) 8.5%, var(--bg-gradient-cotton-candy-2) 94.28%)"+"}";themeinject=document.createElement('style');themeinject.id="themecrack";themeinject.appendChild(document.createTextNode(themecustomcss));head.appendChild(themeinject)