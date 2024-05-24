function calculateGPA() {
    const name = document.getElementById('name').value;
    const gradeSection = document.getElementById('gradeSection').value;
    const grades = Array.from(document.querySelectorAll('#subjects input[type="number"]')).map(input => parseFloat(input.value));
    
    if (grades.some(grade => isNaN(grade))) {
        alert('Please enter valid grades for all subjects.');
        return;
    }

    const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

    let interpretation;
    if (average <= 1.24) {
        interpretation = 'Excellent';
    } else if (average <= 1.49) {
        interpretation = 'Superior';
    } else if (average <= 1.74) {
        interpretation = 'Very Good';
    } else if (average <= 1.99) {
        interpretation = 'Good';
    } else if (average <= 2.24) {
        interpretation = 'Very Satisfactory';
    } else if (average <= 2.49) {
        interpretation = 'High Average';
    } else if (average <= 2.74) {
        interpretation = 'Average';
    } else if (average <= 2.99) {
        interpretation = 'Fair';
    } else if (average <= 3.99) {
        interpretation = 'Pass';
    } else if (average <= 4.99) {
        interpretation = 'Conditional';
    } else {
        interpretation = 'Drop or Failing';
    }

    // Save the result to localStorage
    localStorage.setItem('gpaResult', JSON.stringify({ name, gradeSection, average, interpretation }));

    // Redirect to the result page
    window.location.href = 'result.html';
                                  }
