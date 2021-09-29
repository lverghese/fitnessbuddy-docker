async function planHandler (event) {
    event.preventDefault();

    const bulkBtn = document.querySelector('pick-bulk').value.trim();
    const cutBtn = document.querySelector('pick-cut').value.trim();
    const toneBtn = docuemnt.querySelector('pick-tone').value.trim();

    //chose bulk
    if(bulkBtn){
        //fetch plans from db and pu current user_id as user_id of Plan 
        const response = await fetch('/api/plans', {
            // method: 'POST',
            // body: JSON.stringify({
            //     bulkBtn
            // }),
            //headers: {'Content-Type': 'application/json'}
        })
        if (response.ok) {
            document.location.replace('/dashboard');
            } else {
            alert(response.statusText);
            }
        //.then((response) => {console.log(response)})
    }
    if(cutBtn){
        //fetch plans from db and pu current user_id as user_id of Plan 
        const response = await fetch('/api/plans', {})
        if (response.ok) {
            document.location.replace('/dashboard');
            } else {
            alert(response.statusText);
            }
        //.then((response) => {console.log(response)})
    }
    if(toneBtn){
        //fetch plans from db and pu current user_id as user_id of Plan 
        const response = await fetch('/api/plans', {})
        if (response.ok) {
            document.location.replace('/dashboard');
            } else {
            alert(response.statusText);
            }
        //.then((response) => {console.log(response)})
    }
};


document.querySelector('pick-bulk').addEventListener('click', planHandler);
document.querySelector('pick-cut').addEventListener('click', planHandler);
docuemnt.querySelector('pick-tone').addEventListener('click', planHandler);