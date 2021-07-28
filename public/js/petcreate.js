let DateTime = luxon.DateTime;
async function newPetHandler(event) {
    event.preventDefault();
    const name = document.querySelector('#name_field').value; //needs field id
    const age = document.querySelector('#age_field').value; //needs field id
    const gender = document.querySelector('#gender_field').value; //needs field id
    const weight = document.querySelector('#weight_field').value; //needs field id
    const description = document.querySelector('#description_field').value; //needs field id
    const pet_type = document.querySelector('#pet_type_field').value; //needs field id
    const image_name = document.querySelector('#pet_type_field').value;//needs field id
    const date_posted = DateTime.toLocaleString();
    // Send fetch request to add a new dish
    const response = await fetch(`/api/pets`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        age,
        gender,
        weight,
        description,
        pet_type,
        image_name,
        date_posted,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/');///needs change
    } else {
      alert('Failed to add pet!');//needs change
    }
  }
  
  document.querySelector('.new-pet-form').addEventListener('submit', newPetHandler);///needs change