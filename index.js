import{a as S,S as q,i}from"./assets/vendor-Cu43xbyG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const B="55294732-f0b081769c244f5ac0d2772ff",M="https://pixabay.com/api/";async function u(o,t){const s={key:B,q:o,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await S.get(M,{params:s})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=document.querySelector(".load-more"),$=new q(".gallery a",{captionsData:"alt",captionDelay:250});function p(o){const t=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:r,views:a,comments:w,downloads:v})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${s}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${r}</p>
          <p><b>Views</b> ${a}</p>
          <p><b>Comments</b> ${w}</p>
          <p><b>Downloads</b> ${v}</p>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",t),$.refresh()}function E(){f.innerHTML=""}function g(){m.classList.remove("hidden")}function h(){m.classList.add("hidden")}function O(){y.classList.remove("hidden")}function L(){y.classList.add("hidden")}const d=document.querySelector(".form"),P=document.querySelector(".load-more");let l="",c=1,b=0;d.addEventListener("submit",async o=>{if(o.preventDefault(),l=o.target.elements["search-text"].value.trim(),!l){i.warning({message:"Enter search query!"});return}c=1,E(),L(),g();try{const t=await u(l,c);if(t.hits.length===0){i.error({message:"Sorry, no images found. Try again!"});return}b=t.totalHits,p(t.hits),O()}catch{i.error({message:"Something went wrong!"})}finally{h(),d.reset()}});P.addEventListener("click",async()=>{c+=1,g();try{const o=await u(l,c);p(o.hits);const t=Math.ceil(b/15);c>=t&&(L(),i.info({message:"We're sorry, but you've reached the end of search results."}));const{height:s}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}catch{i.error({message:"Error loading more images!"})}finally{h()}});
//# sourceMappingURL=index.js.map
