function hideWelcomePage() {
    let welcomePage = document.getElementById('welcomePage');
    welcomePage.style.display = 'none';
  }
  
  // Hide the welcome page after 3 seconds
  setTimeout(hideWelcomePage, 4000);
  
    
  function addQuestion(subjectNumber) {
    // Get the question input value
    var questionInput = document.getElementById('questionInput' + subjectNumber);
    var question = questionInput.value.trim();
  
    // If the input is not empty, add the question to the respective section
    if (question !== '') {
        var questionsContainer = document.getElementById('questions' + subjectNumber);
        var newQuestion = document.createElement('div');
        newQuestion.textContent = question;
        questionsContainer.appendChild(newQuestion);
  
        // Clear the input field after adding the question
        questionInput.value = '';
    }
  }
  