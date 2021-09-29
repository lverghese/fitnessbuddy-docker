async function signupFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  //reference the plan name from the button text to get the plan id to post to new user obj
  const plan_id = 1;
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
          document.location.replace('/dashboard/user/1');
      } else {
          alert(response.statusText)
      }
  }
};

document.querySelector('#bulk').addEventListener('click', signupFormHandler);
document.querySelector('#cut').addEventListener('click', signupFormHandler);
document.querySelector('#tone').addEventListener('click', signupFormHandler);
//document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);