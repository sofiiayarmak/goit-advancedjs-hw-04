import{a as m,S as p,i as a}from"./assets/vendor-D3Q8GMQW.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="55294732-f0b081769c244f5ac0d2772ff",y="https://pixabay.com/api/";function h(s){const o={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(y,{params:o}).then(t=>t.data).catch(t=>{throw console.error("API Error:",t),t})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){const o=s.map(({webformatURL:t,largeImageURL:n,tags:e,likes:r,views:i,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${t}" alt="${e}" />
        </a>
        <div class="info">
          <div class="info-item"><b>Likes</b><span>${r}</span></div>
          <div class="info-item"><b>Views</b><span>${i}</span></div>
          <div class="info-item"><b>Comments</b><span>${d}</span></div>
          <div class="info-item"><b>Downloads</b><span>${f}</span></div>
        </div>
      </li>
    `).join("");l.innerHTML=o,b.refresh()}function L(){l.innerHTML=""}function w(){u.classList.remove("hidden")}function S(){u.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(!o){a.warning({message:"Please enter a search query!"});return}L(),w(),h(o).then(t=>{if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(t.hits)}).catch(t=>{a.error({message:"Something went wrong. Try again later."})}).finally(()=>{S(),c.reset()})});
//# sourceMappingURL=index.js.map
