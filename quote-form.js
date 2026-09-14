const form=document.querySelector('#estimate-form');
const status=document.querySelector('#form-status');
const service=document.querySelector('#service-select');
const requestedService=new URLSearchParams(location.search).get('service');
if(requestedService&&[...service.options].some(option=>option.value===requestedService))service.value=requestedService;
form.addEventListener('submit',async event=>{
  event.preventDefault();
  if(!form.checkValidity()){form.reportValidity();return;}
  const endpoint=form.dataset.formspreeEndpoint;
  if(!endpoint){status.textContent='Online submissions are being connected. Please call (613) 790-5408 for your estimate today.';return;}
  const button=form.querySelector('button[type="submit"]');button.disabled=true;status.textContent='Sending your request…';
  try{const response=await fetch(endpoint,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});if(!response.ok)throw new Error('Submission failed');form.reset();status.textContent='Thank you! Your request was sent. Prestige Cleaning Co will contact you soon.';}
  catch{status.textContent='We could not send the form. Please call (613) 790-5408 and we’ll help you.';}
  finally{button.disabled=false;}
});
