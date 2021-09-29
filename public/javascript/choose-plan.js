async function planHandler (event) {
    event.preventDefault();

    const bulkBtn = document.querySelector('').value.trim();
    const cutBtn = document.querySelector('').value.trim();
    const toneBtn = docuemnt.querySelector('').value.trim();

    //chose bulk
    if(bulkBtn){
        //fetch plans from db and pu current user_id as user_id of Plan 
        const response = await fetch('/api/plans', {
            method: 'POST',
            body: JSON.stringify({
                bulkBtn
            }),
            headers: {'Content-Type': 'application/json'}
        })
        .then((response) => {console.log(response)})
    }
    }
/*
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

document.querySelector('#plan-pick-form').addEventListener('click', planHandler);
