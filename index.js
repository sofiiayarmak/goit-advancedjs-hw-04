import{a as m,S as p,i as n}from"./assets/vendor-Cu43xbyG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g="55294732-f0b081769c244f5ac0d2772ff",y="https://pixabay.com/api/";async function h(i,t){const s={key:g,q:i,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(y,{params:s})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function v(i){const t=i.map(({webformatURL:s,largeImageURL:o,tags:e,likes:r,views:a,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${s}" alt="${e}" />
        </a>
        <div class="info">
          <div class="info-item"><b>Likes</b><span>${r}</span></div>
          <div class="info-item"><b>Views</b><span>${a}</span></div>
          <div class="info-item"><b>Comments</b><span>${d}</span></div>
          <div class="info-item"><b>Downloads</b><span>${f}</span></div>
        </div>
      </li>
    `).join("");l.innerHTML=t,b.refresh()}function L(){l.innerHTML=""}function w(){u.classList.remove("hidden")}function S(){u.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",i=>{i.preventDefault();const t=i.currentTarget.elements["search-text"].value.trim();if(!t){n.warning({message:"Please enter a search query!"});return}L(),w(),h(t).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(s.hits)}).catch(s=>{n.error({message:"Something went wrong. Try again later."})}).finally(()=>{S(),c.reset()})});
//# sourceMappingURL=index.js.map
