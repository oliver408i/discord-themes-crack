javascript:head=document.head;if(typeof obs==='undefined'){const obs=new MutationObserver((mut)=>{mut.forEach((m)=>{if(m.attributeName==="class"){if(!document.documentElement.classList.contains("custom-theme-background")){document.documentElement.classList.add("custom-theme-background");}}})});obs.observe(document.documentElement,{attributes:true});document.documentElement.classList.add("custom-theme-background");};themecustomcss="html{--custom-theme-background:"+"linear-gradient(148.71deg, var(--bg-gradient-retro-storm-1) 5.64%, var(--bg-gradient-retro-storm-2) 26.38%, var(--bg-gradient-retro-storm-2) 49.92%, var(--bg-gradient-retro-storm-1) 73.12%);"+"}";themeinject=document.createElement('style');themeinject.id="themecrack";themeinject.appendChild(document.createTextNode(themecustomcss));head.appendChild(themeinject)