let DateTime = luxon.DateTime.local();
async function newPetHandler(event) {
    event.preventDefault();
    const name = document.querySelector('#pet-name-field').value;
    const age = document.querySelector('#pet-age-field').value;
    const gender = document.querySelector('#pet-gender-field').value;
    const weight = document.querySelector('#pet-weight-field').value;
    const description = document.querySelector('#pet-description-field').value;
    const pet_type = document.querySelector('#pet-type-field').value;
    let image_name = "dexter.jpg";
    let image_url = ""
    const date_posted = DateTime.toLocaleString(DateTime.DATE_SHORT);
    console.log(DateTime.toLocaleString(DateTime.DATE_SHORT));
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
        image_url,
        date_posted,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log("hey there");
      document.location.replace('/');
    } else {
      alert('Failed to add pet!');
    }
  }
  
  document.querySelector('.pet-create-form').addEventListener('submit', newPetHandler);