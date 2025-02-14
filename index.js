import{a as l,S as u,i as c}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function d(o){const t="https://pixabay.com/api/",i=new URLSearchParams({key:"48836479-4489c2f77adf14865904c6664",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${t}?${i}`;return l.get(n).then(e=>e.data.hits.length===0?[]:e.data.hits).catch(e=>{throw console.error("Error fetching images:",e),e})}function m(o){return o.map(t=>`
    <div class="card">
      <div class="img-cont">
          <a class="gallery-link" href="${t.largeImageURL}">
              <img src="${t.webformatURL}" alt="${t.tags}">
          </a>
      </div>
      <div class="describtion-cont">
          <div class="block">
              <h4 class="title">Likes</h4>
              <p class="number">${t.likes}</p>
          </div>
          <div class="block">
              <h4 class="title">Views</h4>
              <p class="number">${t.views}</p>
          </div>
          <div class="block">
              <h4 class="title">Comments</h4>
              <p class="number">${t.comments}</p>
          </div>
          <div class="block">
              <h4 class="title">Downloads</h4>
              <p class="number">${t.downloads}</p>
          </div>
      </div>
      </div>
  `).join("")}const s={form:document.querySelector(".form"),imagesContainer:document.querySelector(".images-container"),input:document.querySelector(".input"),loader:document.querySelector(".loader")},f=new u(".gallery-link");s.form.addEventListener("submit",o=>{o.preventDefault();const t=s.input.value.trim();if(t===""){c.show({backgroundColor:"red",position:"topRight",message:"The input field cannot be empty"});return}s.imagesContainer.innerHTML="",s.loader.innerHTML="Please wait, the images are loading...",d(t).then(i=>{if(i.length===0){c.show({backgroundColor:"orange",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),s.imagesContainer.innerHTML="";return}s.imagesContainer.innerHTML=m(i),f.refresh()}).catch(()=>{c.show({backgroundColor:"red",position:"topRight",message:"Failed to fetch images. Try again later!"})}).finally(()=>{s.loader.innerHTML=""}),o.target.reset()});
//# sourceMappingURL=index.js.map
