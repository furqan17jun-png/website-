const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});

const quoteModal=document.querySelector('#quote-modal');
const quoteDialog=quoteModal?.querySelector('.quote-dialog');
const openQuote=()=>{if(!quoteModal)return;quoteModal.hidden=false;document.body.classList.add('modal-open');requestAnimationFrame(()=>quoteModal.classList.add('visible'));quoteDialog?.querySelector('.quote-close')?.focus();};
const closeQuote=()=>{if(!quoteModal)return;quoteModal.classList.remove('visible');document.body.classList.remove('modal-open');setTimeout(()=>{quoteModal.hidden=true;},220);try{sessionStorage.setItem('prestigeQuoteSeen','1');}catch{}}
document.querySelectorAll('[data-open-quote]').forEach(button=>button.addEventListener('click',openQuote));
document.querySelectorAll('[data-close-quote]').forEach(button=>button.addEventListener('click',closeQuote));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!quoteModal?.hidden)closeQuote();});
let quoteSeen=false;try{quoteSeen=sessionStorage.getItem('prestigeQuoteSeen')==='1';}catch{}
if(!quoteSeen)setTimeout(openQuote,7000);
