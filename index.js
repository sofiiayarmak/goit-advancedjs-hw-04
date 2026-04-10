import{a as v,S,i}from"./assets/vendor-Cu43xbyG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const q="55294732-f0b081769c244f5ac0d2772ff",M="https://pixabay.com/api/";async function u(o,t){const a={key:q,q:o,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await v.get(M,{params:a})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=document.querySelector(".load-more"),B=new S(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const t=o.map(({webformatURL:a,largeImageURL:s,tags:e,likes:r,views:n,comments:b,downloads:w})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${a}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${r}</p>
          <p><b>Views</b> ${n}</p>
          <p><b>Comments</b> ${b}</p>
          <p><b>Downloads</b> ${w}</p>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",t),B.refresh()}function P(){f.innerHTML=""}function p(){m.classList.remove("hidden")}function h(){m.classList.add("hidden")}function $(){y.classList.remove("hidden")}function L(){y.classList.add("hidden")}const E=document.querySelector(".form"),O=document.querySelector(".load-more");let l="",c=1,d=0;E.addEventListener("submit",async o=>{if(o.preventDefault(),l=o.target.elements["search-text"].value.trim(),!l){i.warning({message:"Enter search query!"});return}c=1,P(),L(),p();try{const t=await u(l,c);if(t.hits.length===0){i.error({message:"Sorry, no images found. Try again!"});return}d=t.totalHits,g(t.hits),Math.ceil(d/15)>1&&$()}catch{i.error({message:"Something went wrong!"})}finally{h()}});O.addEventListener("click",async()=>{c+=1,p();try{const o=await u(l,c);g(o.hits);const t=Math.ceil(d/15);c>=t&&(L(),i.info({message:"We're sorry, but you've reached the end of search results."}));const{height:a}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}catch{i.error({message:"Error loading more images!"})}finally{h()}});
//# sourceMappingURL=index.js.map
