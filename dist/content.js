(()=>{"use strict";var e,t=!1,n="Alt";function o(t){e&&function(e){e.style.boxShadow="",e.style.borderRadius="",e.style.backgroundColor=""}(e),(e=t)&&function(e){e.style.boxShadow="0 0 10px 5px rgba(255, 0, 0, 0.5)",e.style.borderRadius="5px",e.style.backgroundColor="rgba(255, 0, 0, 0.1)"}(e)}document.addEventListener("mousemove",(function(e){t&&o(document.elementFromPoint(e.clientX,e.clientY))})),document.addEventListener("keydown",(function(e){e.key===n&&(t=!0)})),document.addEventListener("keyup",(function(e){e.key===n&&(t=!1,o(null))})),document.addEventListener("click",(function(n){if(e&&t&&n.target===e){n.preventDefault();var o=n.target;o.style.transition="all 0.5s",o.offsetHeight,o.style.transform="scale(0)",setTimeout((function(){o.remove()}),500)}})),chrome.storage.sync.get(["key"]).then((function(e){n=e.key}))})();