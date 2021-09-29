async function signupFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  //reference the plan name from the button text to get the plan id to post to new user obj
  //const plan_id = 1;
  const plan_id = parseInt(event.target.id.split('-')[1]);
  console.log(plan_id);

  if (username && password && plan_id) {
      // POST new user
      const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
              username,
              password,
              plan_id
          }),
          headers: {'Content-Type': 'application/json'}
      });
      if (response.ok) {
          alert('Account created! Logging you in now.');
          //redirect to dash with current userid
          document.location.replace('dashboard');
      } else {
          alert(response.statusText)
      }
  }
};

document.querySelector('#bulk-1').addEventListener('click', signupFormHandler);
document.querySelector('#cut-2').addEventListener('click', signupFormHandler);
document.querySelector('#tone-3').addEventListener('click', signupFormHandler);
//document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);