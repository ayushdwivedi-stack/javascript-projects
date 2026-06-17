 const form = document.querySelector('form');
 form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        const result = document.querySelector('#result');
        if(isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0){
            result.innerHTML = 'Please enter valid height and weight values.';
        } else {
            const bmi = weight / ((height / 100) ** 2).toFixed(2);
            result.innerHTML = `<span>${bmi}</span>`;
        }
 })