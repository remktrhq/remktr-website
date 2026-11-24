(function(){
var storageKey='remktr-visitor-identification-consent';
function load(){
  if(window.reb2b||navigator.globalPrivacyControl===true)return;
  var choice;try{choice=localStorage.getItem(storageKey);}catch(e){}
  if(choice==='no')return;
  window.reb2b={loaded:true};
  var s=document.createElement('script');
  s.async=true;
  s.src='https://ddwl4m2hdecbv.cloudfront.net/b/1N5W0HJLEEO5/1N5W0HJLEEO5.js.gz';
  document.head.appendChild(s);
}
if(document.head)load();else document.addEventListener('DOMContentLoaded',load);
})();
