const select = document.getElementById('character-list');
const img = document.querySelector('.character-image');

fetch('https://thronesapi.com/api/v2/Characters')
  .then(response => response.json())
  .then(data => {
    
    data.forEach(character => {
      const option = document.createElement('option');
      option.value = character.imageUrl;
      option.textContent = character.fullName;
      select.appendChild(option);
    });

    
    if (data.length > 0) {
      img.src = data[0].imageUrl;
    }
  });

select.addEventListener('change', (event) => {
  img.src = event.target.value;
});
