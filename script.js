const binomialTheorem = (n, k) => {
    // This function calculates the binomial coefficient, which is the number of ways to choose k elements from a set of n elements.
    if (k === 0 || k === n) {
      return 1;
    }
  
    return binomialTheorem(n - 1, k - 1) + binomialTheorem(n - 1, k);
  };
  
  const expandBinomial = () => {
    // Extracts the input values from the HTML prompt
    const n = parseInt(document.getElementById('n-input').value);
    const k = parseInt(document.getElementById('k-input').value);
  
    if (isNaN(n) || isNaN(k)) {
      alert('Please enter valid values for n and k.');
      return;
    }
  
    const rows = [];
  
    for (let i = 0; i <= n; i++) {
      const row = [];
      for (let j = 0; j <= i; j++) {
        const number = binomialTheorem(i, j);
        const isEven = number % 2 === 0;
        const cssClass = isEven ? 'even' : 'odd'; // Used to color the numbers based on their even or odd status
        row.push(`<span class="term ${cssClass}">${number}</span>`); // Adds the number to the row
      }
      rows.push(`<div class="row">${row.join('')}</div>`);
    }
  
    document.getElementById('binomial-theorem').innerHTML = rows.join(''); // Adds the row of numbers to the table
  };
  
  document.getElementById('expand-button').addEventListener('click', expandBinomial);