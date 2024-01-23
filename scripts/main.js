function loadData(dbFile) {
  if (!dbFile) { return; }
  console.log('starting DB init');
  window.worker = new Worker("./scripts/worker.sql.js");
  var xhr = new XMLHttpRequest();
  xhr.open('GET', dbFile, true);
  xhr.responseType = 'arraybuffer';
  xhr.onload = () => {
    var uInt8Array = new Uint8Array(xhr.response);
    worker.onmessage = event => {
       if (event.data.ready) {
         query('SELECT 1', (e) => {
           console.log('DB initialization successful');
           document.querySelectorAll("input.sql-exercise-submit").forEach(
             (button) => {button.disabled = false;});
         });
       } else {
         console.log('DB initialization failed');
       }
    }

    worker.postMessage({
      id:1,
      action:'open',
      buffer: uInt8Array,
    });
  }
  xhr.send();
}

function query(sql, cb, err_cb) {
  if (err_cb) {
    worker.onerror = e => err_cb(e);
  } else {
    worker.onerror = e => { throw new Error(e.message); }
  }

  worker.onmessage = event => {
    cb(event.data.results);
  }
  worker.postMessage({
      id: 2,
      action: 'exec',
      sql: sql
  });
}

function datatable (data) {
  var tbl = document.createElement("table");
  tbl.className = 'datatable'

  var header_labels = data[0].columns;
  for (var idx in header_labels) {
    var col = document.createElement('col');
    col.className = header_labels[idx];
    tbl.appendChild(col);
  }

  // create header row
  var thead = tbl.createTHead();
  var row = thead.insertRow(0);
  for (var idx in header_labels) {
    var cell = row.insertCell(idx);
    cell.innerHTML = header_labels[idx];
  }

  // fill table body
  var tbody = document.createElement("tbody");
  for (var row_idx in data[0]['values']) {
    var body_row = tbody.insertRow();
    for (var header_idx in header_labels) {
      var body_cell = body_row.insertCell();
      body_cell.appendChild(document.createTextNode(data[0]['values'][row_idx][header_idx]));
    }
  }
  tbl.appendChild(tbody);
  return tbl;
}

var warningTags = document.querySelectorAll('.warning');

warningTags.forEach(function(tag) {
  tag.innerHTML="⚠️ " + tag.innerHTML;
});

var noteClass = document.querySelectorAll('.sideNote p');

noteClass.forEach(function(tag) {
  tag.innerHTML="🗒️ " + tag.innerHTML;
});

//////////////////////////
// SQL Verify Component
//////////////////////////

class InputFeedback extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback(){
    var titletext = this.getAttribute('data-title') || '';
    // Create a shadow DOM
    /* this.attachShadow({ mode: 'open' }); */

    // Create a container div
    const container = document.createElement('div');
    container.className = 'sqlQuizHomeDiv';

    // Create a title element
    /* const title = document.createElement('div');
    title.className='sqlQuizTitle'; */
    if (titletext) {
      var caption = `<div class="sqlQuizTitle">${titletext}</div>`;
      container.insertAdjacentHTML("beforeend", caption);
    }
    
    // Create an input element
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Écris ta réponse ici';

    // Create a button to submit the answer
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Vérifier';
    submitButton.className = 'verify-button';
    submitButton.addEventListener('click', () => this.checkAnswer());

    // Create a div to display the feedback message
    const feedbackMessage = document.createElement('div');
    feedbackMessage.className = 'feedback-message';

    // Append elements to the container
   /*  container.appendChild(title); */
    container.appendChild(input);
    container.appendChild(submitButton);
    container.appendChild(feedbackMessage);
    // Append the container to the shadow DOM
    this.appendChild(container);
  }

  checkAnswer() {
    // Get solution
    var dataSolution = this.getAttribute('data-solution') || '';
    var successMessage = this.getAttribute('success-message') || 'Correct!!';
    var failureMessage = this.getAttribute('failure-message') || 'Pas tout à fait, essaies à nouveau!';
    var lastQuest = this.getAttribute('lastQuest')|| false;
    // Get the user's input
    const userInput = this.querySelector('input').value.trim();

    // Perform some logic to determine the feedback message
    let feedback = '';
    if (userInput.toLowerCase() === dataSolution) {
      feedback = successMessage;
      if (lastQuest == "true"){
        const container = document.createElement('div');
        const magic = document.createElement('script');
        magic.src ="scripts/magic.js"
        container.className = 'trophy';
        const image = document.createElement('img');
        image.src = "imgs/coupe_de_feu.png";
        const figcaption = document.createElement('figcaption')
        figcaption.textContent = "Quelle: https://www.craiyon.com/"
        image.setAttribute('style','width:400px;');
        container.appendChild(magic);
        container.appendChild(image);
        container.appendChild(figcaption)
        this.appendChild(container);
      }
    } else {
      feedback = failureMessage;
    }

    // Display the feedback message
    this.querySelector('.feedback-message').textContent = feedback;
    
  }
}

// Define the custom element
customElements.define('input-feedback', InputFeedback);



//////////////////////////
// SQL Quiz Component
//////////////////////////

function setdiff(a, b) { // https://stackoverflow.com/a/36504668
  var seta = new Set(a);
  var setb = new Set(b);
  var res = new Set([...seta].filter(x => !setb.has(x)));
  return res
}

class sqlQuizOption extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    var value = this.getAttribute('data-value') || '';
    var statement = this.getAttribute('data-statement') || '';
    var dataCorrect = this.getAttribute('data-correct') || false;
    var hint = this.getAttribute('data-hint') || '';

    var quizoption = `
    <div class='sqlOption'>
      <label>
        <input type=checkbox name="input"
            data-correct=${dataCorrect}
            value=${value} />
          <div class="optionText">
            ${statement}
            <div class="hintSpan">${hint}</div>
          </div>
      </label>
    </div>
    `
    this.parentNode.querySelector('.sqlQuizOptions').insertAdjacentHTML("beforeend", quizoption);
  }
}

customElements.define('sql-quiz-option', sqlQuizOption);


class sqlQuiz extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    var title = this.getAttribute('data-title') || '';
    var description = this.getAttribute('data-description') || '';

    var homeDiv = document.createElement('div');
    homeDiv.className = 'sqlQuizHomeDiv';

    if (title) {
      var caption = `<div class="sqlQuizTitle">${title}</div>`;
      homeDiv.insertAdjacentHTML("beforeend", caption);
    }

    if (description) {
      var commentbox = `
      <div class="sqlQuizDescription">
        ${description}
      </div>
      `
      homeDiv.insertAdjacentHTML("beforeend", commentbox);
    }

    var form = document.createElement('form');

    // Input Area
    var inputArea = document.createElement('div');
    inputArea.className = 'sqlQuizInputArea';

    var options = document.createElement('div');
    options.className = 'sqlQuizOptions';
    inputArea.appendChild(options);

    var submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Check Answers';
    inputArea.appendChild(submitButton);

    var hintButton = document.createElement('input');
    hintButton.name = "hint";
    hintButton.type = "button";
    hintButton.value = "Show Explanations";
    hintButton.onclick = (e) => {
      document.querySelectorAll('.hintSpan').forEach(i => i.style.display = 'table-row');
    };
    inputArea.appendChild(hintButton);
    form.appendChild(inputArea);

    // Output Area
    var outputArea = document.createElement('div');
    outputArea.className = 'sqlQuizOutputArea';

    var outputBox = document.createElement('output');
    outputBox.name = 'output';
    outputArea.appendChild(outputBox);

    // Link everything together
    form.appendChild(outputArea);
    form['onsubmit'] = (e) => {
      e && e.preventDefault();
      var value = Array.prototype.filter.call(form.input, i => i.checked).map(i => i.value);
      var correct = Array.prototype.filter.call(form.input, i => i.dataset.correct === "true").map(i => i.value);
      var mistakes = setdiff(correct, value).size + setdiff(value, correct).size;
      var res = mistakes >= 2 ? mistakes + " mistakes" :
          mistakes == 1 ? mistakes + " mistake" : "All correct!"
      form.output.innerHTML = `<div class='returnOkay'>${res}</div>`;
    };

    homeDiv.append(form);
    this.append(homeDiv);
    }
}
customElements.define('sql-quiz', sqlQuiz);

//////////////////////////
// SQL Exercise Component
//////////////////////////

class sqlExercise extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    var question = this.getAttribute('data-question') || '';
    var comment = this.getAttribute('data-comment') || '';
    var defaultText = this.getAttribute('data-default-text') || '';
    var hint = this. getAttribute('data-hint') || '';
    var solution = this.getAttribute('data-solution') || '';
    var orderSensitive = this.getAttribute('data-orderSensitive') || false;
    var successMessage = this.getAttribute('success-message') || '';
    var failureMessage = this.getAttribute('failure-message') || '';

    var homeDiv = document.createElement('div');
    homeDiv.className = 'sqlExHomeDiv';

    if (question) {
      var caption = `<div class="sqlExQuestion">${question}</div>`;
      homeDiv.insertAdjacentHTML("beforeend", caption);
    }

    if (comment) {
      var commentbox = `<div class = 'sqlExComment'>${comment}</div>`;
      homeDiv.insertAdjacentHTML("beforeend", commentbox);
    }

    var form = document.createElement('form');

    // Input Area
    var inputArea = document.createElement('div');
    inputArea.className = 'sqlExInputArea';

    var textArea = document.createElement('textarea');
    textArea.textContent = defaultText;
    textArea.name = 'input';
    inputArea.appendChild(textArea);

    var editor = CodeMirror.fromTextArea(textArea, {
      mode: 'text/x-sql',
      indentWithTabs: true,
      smartIndent: true,
      lineNumbers: true,
      textWrapping: false,
      autoRefresh: true,
      theme: 'neat',
      viewportMargin: Infinity
    });

    editor.setSize('100%', 'auto');
    editor.refresh();

    var runButton = `<input class="sql-exercise-submit" type="submit" value="Run &#x21e9;" disabled>`;
    inputArea.insertAdjacentHTML("beforeend", runButton);

    form['onsubmit'] = (e) => {
      e && e.preventDefault();
      var result_div = document.createElement('div');

      var handleSubmit = (submission_data) => {
        result_div.className = 'returnOkay';

        if (solution) {
          var verdict_div = document.createElement('div');
          verdict_div.className = 'verdict';
          result_div.appendChild(verdict_div);

          query(solution, (solution_data) => {
            var submission_u = submission_data[0].values;
            var solution_u = solution_data[0].values;
            if (!orderSensitive) {
                submission_u.sort();
                solution_u.sort();
            }
            var verdict = arraysEqual(submission_u, solution_u) ? successMessage : failureMessage;
            // http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
            verdict_div.innerText = verdict;
          });
        }
        if (submission_data.length > 0) {
          result_div.appendChild(datatable(submission_data));
        } else {
          result_div.insertAdjacentHTML("beforeend", `No data returned`);
        }
      }

      var handleError = (e) => {
        result_div.className = 'returnError';
        result_div.innerText = e.message;
      }

      query(editor.getValue(), handleSubmit, handleError);
      outputBox.innerHTML = '';
      outputBox.appendChild(result_div);
    };

    form['onkeydown'] = (e) => {
      if (e.keyCode == 13 && e.shiftKey) {
        e.preventDefault();
        form.onsubmit();
      };
    };

    if (hint) {
      var hintButton = document.createElement('input');
      hintButton.name = 'hint';
      hintButton.type = 'button';
      hintButton.value = 'Indice';
      hintButton.onclick = (e) => {
        var existingCode = editor.getValue();
        editor.setValue("/*" + hint + "*/\n"+ existingCode );
      };
      inputArea.appendChild(hintButton);
    };

    if (solution) {
      var solutionButton = document.createElement('input');
      solutionButton.name = 'solution';
      solutionButton.type = 'button';
      solutionButton.value = 'Solution';
      solutionButton.onclick = (e) => {
        var existingCode = editor.getValue();
        editor.setValue(existingCode + "\n/* " + solution);
      };
      inputArea.appendChild(solutionButton);
    };

    var resetButton = document.createElement('input');
    resetButton.type = 'button';
    resetButton.value = 'Reset';
    resetButton.onclick = (e) => {
      editor.setValue(defaultText);
      outputBox.textContent = '';
    };
    inputArea.appendChild(resetButton);
    form.appendChild(inputArea);

    // Output Area
    var outputArea = document.createElement('div');
    outputArea.className = 'sqlExOutputArea';

    var outputBox = document.createElement('output');
    outputBox.name = 'output';
    outputArea.appendChild(outputBox);
    form.appendChild(outputArea);

    homeDiv.appendChild(form);
    this.appendChild(homeDiv);
  }
}

customElements.define('sql-exercise', sqlExercise);


//////////////////////////
// Utility functions
//////////////////////////

function arraysEqual(a,b) {
  /*
  https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  Array-aware equality checker:
  Returns whether arguments a and b are == to each other;
  however if they are equal-lengthed arrays, returns whether their
  elements are pairwise == to each other recursively under this
  definition.
  */
  if (a instanceof Array && b instanceof Array) {
    if (a.length != b.length) { // assert same length
      return false;
    }
    for (var i=0; i<a.length; i++) { // assert each element equal
      if (!arraysEqual(a[i],b[i]))
        return false;
    }
    return true;
  } else {
    return a == b;  // if not both arrays, should be the same
  }
}