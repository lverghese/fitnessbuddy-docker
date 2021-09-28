const Plan  = require('../../models/Plan');
const User  = require('../../models/User');
/**https://www.baeldung.com/spring-mvc-model-objects-js */
async function planHandler (event) {
    event.preventDefault();

    const bulkBtn = document.querySelector('').value.trim();
    const cutBtn = document.querySelector('').value.trim();
    const toneBtn = docuemnt.querySelector('').value.trim();

    //chose bulk
    if(bulkBtn){
        const response = await fetch('/api/users', {
            method: 'put',
            //edit plan so that user_id = current user
            //problem below: need access to Plan attributes and session (user attributes ie user.id)
            //Plan.user_id = session.user.id;
            body: JSON.stringify({
                bulkBtn
            }),
            headers: {'Content-Type': 'application/json'}
        });

      if (response.ok) {
        alert('Welcome to your Bulk Plan');
        //send user to their dashboard
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText)
    }
    }

    //chose cut
    if(cutBtn){
        const response = await fetch('/api/users', {
            method: 'put',
            body: JSON.stringify({
           
                cutBtn
            }),
            headers: {'Content-Type': 'application/json'}
        });

      if (response.ok) {
        alert('Welcome to your Cut Plan');
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText)
    }
    }

    //chose tone
    else if(toneBtn){
        const response = await fetch('/api/users', {
            method: 'put',
            body: JSON.stringify({
   
                bulkBtn
            }),
            headers: {'Content-Type': 'application/json'}
        });
        
      if (response.ok) {
        alert('Welcome to your tone plan');
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText)
    }

    }
};

document.querySelector('').addEventListener('click', planHandler);