let DateTime = luxon.DateTime;
async function newUserHandler(event) {
    event.preventDefault();
    const email = document.querySelector('#email_field').value; //needs field id
    const  password= document.querySelector('#password_field').value; //needs field id

    // Send fetch request to add a new dish
    const response = await fetch(`/api/users/signup`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/createuser');///needs change
    } else {
      alert('Failed to add dish');//needs change
    }
  }

  const loginHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();//needs change
    const password = document.querySelector('#password-login').value.trim();//needs change
  
    if (email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  document.querySelector('.new-user-form').addEventListener('submit', newFormHandler);///needs change
  document.querySelector('.new-user-form').addEventListener('submit', newFormHandler);///needs change