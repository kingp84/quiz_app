// Forensics First Semester Quiz (converted from Python)
// -----------------------------
// Storage for student responses
// -----------------------------
const student_responses = { mc: [], short: [], bonus: [], student_info: {} };

// -----------------------------
// Multiple-choice questions
// -----------------------------
const mc_questions = [
    {
        question: "(EASY) Which amendment governs searches and seizures in the United States? (Unit 2.7)",
        options: ["First Amendment", "Fourth Amendment", "Fifth Amendment", "Sixth Amendment"],
        answer: "Fourth Amendment"
    },
    {
        question: "(MEDIUM) What does a concealed body typically suggest about offender behavior? (Unit 6.1)",
        options: ["Desire for attention", "Remorse or personal connection", "Lack of planning", "Organized offender"],
        answer: "Remorse or personal connection"
    },
    {
        question: "(HARD) Why must investigators begin with the least intrusive methods? (Unit 2.1)",
        options: ["To save time", "To avoid destroying fragile evidence", "To reduce paperwork", "To allow media access"],
        answer: "To avoid destroying fragile evidence"
    },
    {
        question: "(EXPERT) How do ASCII and Unicode differences affect forensic text analysis? (Unit 5.2)",
        options: ["Unicode allows more characters across languages", "ASCII is always superior to Unicode", "Unicode eliminates binary storage", "ASCII prevents encryption"],
        answer: "Unicode allows more characters across languages"
    },
    {
        question: "(EASY) What is the smallest unit of data in computing? (Unit 5.2)",
        options: ["Byte", "Nybbble", "Bit", "Word"],
        answer: "Bit"
    },
    {
        question: "(MEDIUM) What does staging a crime scene indicate? (Unit 6.1)",
        options: ["Offender wanted to mislead investigators", "Offender felt remorse", "Offender was disorganized", "Offender was under the influence"],
        answer: "Offender wanted to mislead investigators"
    },
    {
        question: "(HARD) Which statement best differentiates MO from signature? (Unit 6.1)",
        options: ["MO is necessary to commit the crime; signature reflects psychological needs", "MO is optional; signature is required", "Both MO and signature are identical", "Signature is always physical evidence"],
        answer: "MO is necessary to commit the crime; signature reflects psychological needs"
    },
    {
        question: "(EXPERT) How does forensic imaging preserve admissibility of digital evidence? (Unit 5.2)",
        options: ["It creates a bit-for-bit copy while maintaining original integrity", "It eliminates the need for chain of custody", "It guarantees conviction", "It replaces encryption"],
        answer: "It creates a bit-for-bit copy while maintaining original integrity"
    },
    {
        question: "(EASY) Which search pattern is best for rough terrain? (Unit 2.3)",
        options: ["Spiral", "Line", "Strip", "Grid"],
        answer: "Line"
    },
    {
        question: "(MEDIUM) Convert decimal 74 into binary. (Unit 5.2)",
        options: ["0100 1010", "0010 0101", "1111 1110", "0001 0110"],
        answer: "0100 1010"
    },
    {
        question: "(HARD) Why is profiling considered more art than science? (Unit 6.1)",
        options: ["It relies on interpretation of behavioral patterns", "It guarantees conviction", "It eliminates forensic evidence", "It is based only on victimology"],
        answer: "It relies on interpretation of behavioral patterns"
    },
    {
        question: "(EXPERT) How do geographic factors influence offender profiling? (Unit 6.1)",
        options: ["They reveal offender proximity and movement patterns", "They eliminate the need for victimology", "They guarantee conviction", "They replace forensic evidence"],
        answer: "They reveal offender proximity and movement patterns"
    },
    {
        question: "(EASY) What does “souvenir” mean in profiling? (Unit 6.1)",
        options: ["An object taken to relive the crime", "A staged crime scene", "A method of operating", "A concealed body"],
        answer: "An object taken to relive the crime"
    },
    {
        question: "(MEDIUM) Convert binary 00100101 into decimal. (Unit 5.2)",
        options: ["22", "35", "74", "198"],
        answer: "35"
    },
    {
        question: "(HARD) Why is chain of custody critical for digital evidence? (Unit 5.2)",
        options: ["It prevents alteration and ensures admissibility", "It speeds up analysis", "It eliminates encryption", "It allows suspects to access devices"],
        answer: "It prevents alteration and ensures admissibility"
    },
    {
        question: "(EXPERT) How can behavioral evidence corroborate or refute physical evidence? (Unit 6.1)",
        options: ["It provides context that supports or challenges forensic findings", "It eliminates the need for testimony", "It guarantees conviction", "It replaces chain of custody"],
        answer: "It provides context that supports or challenges forensic findings"
    },
    {
        question: "(EASY) Which of the following is a threat to crime scene integrity? (Unit 2.1)",
        options: ["Addition of material", "Proper documentation", "Chain of custody", "Evidence preservation"],
        answer: "Addition of material"
    },
    {
        question: "(MEDIUM) Why does the grid search provide multiple perspectives? (Unit 2.3)",
        options: ["It uses two sets of strips at right angles", "It requires fewer searchers", "It eliminates the need for supervision", "It is faster than all other methods"],
        answer: "It uses two sets of strips at right angles"
    },
    {
        question: "(HARD) How does victim risk level inform offender selection? (Unit 6.1)",
        options: ["It reveals lifestyle traits that make victims more or less likely to be targeted", "It guarantees offender guilt", "It eliminates the need for profiling", "It replaces forensic evidence"],
        answer: "It reveals lifestyle traits that make victims more or less likely to be targeted"
    },
    {
        question: "(EXPERT) What is a limitation of criminal profiling in court? (Unit 6.1)",
        options: ["Profiles are not admissible as direct evidence", "Profiles guarantee conviction","Profiles replace forensic science", "Profiles are always 100% accurate"],
        answer: "Profiles are not admissible as direct evidence"
    },
    {
        question: "(EASY) Which term refers to acts not necessary to commit the crime but reflect psychological needs? (Unit 6.1)",
        options: ["MO", "Signature", "Souvenir", "Staging"],
        answer: "Signature"
    },
    {
        question: "(MEDIUM) Convert decimal 37 into binary. (Unit 5.2)",
        options: ["0010 0101", "0100 1010", "0001 0110", "1111 1110"],
        answer: "0010 0101"
    },
    {
        question: "(HARD) Why is binary place value essential in forensic computing? (Unit 5.2)",
        options: ["It allows investigators to interpret raw data accurately", "It eliminates ASCII tables", "It guarantees admissibility in court", "It prevents contamination of evidence"],
        answer: "It allows investigators to interpret raw data accurately"
    },
    {
        question: "(EXPERT) How does Unicode expand forensic analysis compared to ASCII? (Unit 5.2)",
        options: ["It supports global languages and thousands more characters", "It eliminates binary storage", "It guarantees conviction", "It replaces chain of custody"],
        answer: "It supports global languages and thousands more characters"
    },
    {
        question: "(EASY) What does “overkill” mean in crime scene analysis? (Unit 6.1)",
        options: ["Excessive wounding beyond what is necessary for death", "Concealing a body", "Taking a souvenir", "Staging a crime scene"],
        answer: "Excessive wounding beyond what is necessary for death"
    },
    {
        question: "(MEDIUM) What does a displayed body suggest about offender intent? (Unit 6.1)",
        options: ["Desire for shock value or attention", "Remorse", "Organized planning", "Lack of evidence"],
        answer: "Desire for shock value or attention"
    },
    {
        question: "(HARD) How does offender organization level affect investigative strategies? (Unit 6.1)",
        options: ["Organized offenders require different interview approaches than disorganized offenders", "Organized offenders are always guilty", "Disorganized offenders never leave evidence", "Organization level eliminates forensic analysis"],
        answer: "Organized offenders require different interview approaches than disorganized offenders"
    },
    {
        question: "(EXPERT) Why is chain of custody documentation more complex for digital evidence than physical evidence? (Unit 5.2)",
        options: ["Digital evidence can be altered invisibly and requires detailed logs", "Digital evidence is always encrypted", "Digital evidence cannot be copied", "Digital evidence is immune to contamination"],
        answer: "Digital evidence can be altered invisibly and requires detailed logs"
    },
    {
        question: "(EASY) How many possible values can a byte represent? (Unit 5.2)",
        options: ["16", "128", "256", "512"],
        answer: "256"
    },
    {
        question: "(MEDIUM) Convert decimal 198 into binary. (Unit 5.2)",
        options: ["1100 0110", "0010 0101", "0100 1010", "1111 1110"],
        answer: "1100 0110"
    },
    {
        question: "(HARD) Why is understanding ASCII tables useful in forensic reporting? (Unit 5.2)",
        options: ["They allow binary values to be converted into readable text","They eliminate Unicode entirely","They guarantee conviction", "They prevent contamination"],
        answer: "They allow binary values to be converted into readable text"
    },
    {
        question: "(EXPERT) How do ASCII conversion tables assist in digital evidence interpretation? (Unit 5.2)",
        options: [
            "They allow investigators to translate binary into readable characters",
            "They eliminate the need for encryption",
            "They guarantee chain of custody",
            "They replace Unicode entirely"
        ],
        answer: "They allow investigators to translate binary into readable characters"
    },
    {
        question: "(EASY) Which of the following is an exception to the warrant requirement? (Unit 2.7)",
        options: ["Consent to search", "Routine patrol", "Jury order", "Witness testimony"],
        answer: "Consent to search"
    },
    {
        question: "(MEDIUM) What is the purpose of the preliminary survey at a crime scene? (Unit 2.1)",
        options: [
            "To release the scene immediately",
            "To determine search methods and needs",
            "To photograph evidence only",
            "To collect evidence without notes"
        ],
        answer: "To determine search methods and needs"
    },
    {
        question: "(HARD) Why is binary place value essential in forensic computing? (Unit 5.2)",
        options: [
            "It allows investigators to interpret raw data accurately",
            "It eliminates ASCII tables",
            "It guarantees admissibility in court",
            "It prevents contamination of evidence"
        ],
        answer: "It allows investigators to interpret raw data accurately"
    },
    {
        question: "(EXPERT) How does Unicode expand forensic analysis compared to ASCII? (Unit 5.2)",
        options: ["It supports global languages and thousands more characters","It eliminates binary storage","It guarantees conviction","It replaces chain of custody"],
        answer: "It supports global languages and thousands more characters"
    },
    {
        question: "(EASY) Which of the following is an exception to the warrant requirement? (Unit 2.7)",
        options: ["Consent to search", "Routine patrol", "Jury order", "Witness testimony"],
        answer: "Consent to search"
    },
    {
        question: "(MEDIUM) Why is offender risk level important in profiling? (Unit 6.1)",
        options: ["It shows how much danger the offender accepts to commit the crime", "It guarantees conviction in court", "It eliminates the need for victimology", "It replaces physical evidence"],
        answer: "It shows how much danger the offender accepts to commit the crime"
    },
    {
        question: "(HARD) How does victim risk level inform offender selection? (Unit 6.1)",
        options: ["It reveals lifestyle traits that make victims more or less likely to be targeted", "It guarantees offender guilt", "It eliminates the need for profiling", "It replaces forensic evidence"],
        answer: "It reveals lifestyle traits that make victims more or less likely to be targeted"
    },
    {
        question: "(EXPERT) What is a limitation of criminal profiling in court? (Unit 6.1)",
        options: ["Profiles are not admissible as direct evidence", "Profiles guarantee conviction", "Profiles replace forensic science", "Profiles are always 100% accurate"],
        answer: "Profiles are not admissible as direct evidence"
    },
    {
        question: "(EASY) Which offender behavior is most often associated with staging a crime scene? (Unit 6.1)",
        options: ["Desire to mislead investigators", "Remorse for the victim", "Taking a souvenir", "Concealing evidence"],
        answer: "Desire to mislead investigators"
    },
    {
        question: "(MEDIUM) Convert decimal 22 into binary. (Unit 5.2)",
        options: ["0001 0110", "0010 0010", "1111 1110", "0100 1010"],
        answer: "0010 0010"
    },
    {
        question: "(HARD) Why is understanding Unicode important in forensic text analysis compared to ASCII? (Unit 5.2)",
        options: ["It allows investigators to interpret text across multiple languages and scripts", "It guarantees conviction in court", "It eliminates the need for binary storage", "It replaces chain of custody procedures"],
        answer: "It allows investigators to interpret text across multiple languages and scripts"
    },
    {
        question: "(EXPERT) How does Unicode improve forensic analysis compared to ASCII? (Unit 5.2)",
        options: ["It supports global languages and thousands more characters", "It eliminates binary storage", "It replaces chain of custody", "It guarantees conviction"],
        answer: "It supports global languages and thousands more characters"
    },
    {
        question: "(EASY) Which of the following is a threat to crime scene integrity? (Unit 2.1)",
        options: ["Addition of material", "Proper documentation", "Chain of custody", "Evidence preservation"],
        answer: "Addition of material"
    },
    {
        question: "(MEDIUM) Why do offenders take souvenirs? (Unit 6.1)",
        options: ["To relive the crime later through fantasy", "To conceal evidence from police", "To mislead investigators", "To prove remorse"],
        answer: "To relive the crime later through fantasy"
    },
    {
        question: "(HARD) Why is understanding ASCII essential for interpreting seized text files? (Unit 5.2)",
        options: ["It allows binary values to be converted into readable characters", "It eliminates the need for Unicode", "It guarantees admissibility in court", "It prevents contamination"],
        answer: "It allows binary values to be converted into readable characters"
    },
    {
        question: "(EXPERT) How do binary and ASCII conversions support forensic analysis? (Unit 5.2)",
        options: ["They enable investigators to interpret raw data and text evidence correctly", "They eliminate the need for chain of custody", "They guarantee conviction", "They replace behavioral profiling"],
        answer: "They enable investigators to interpret raw data and text evidence correctly"
    }
];
// -----------------------------
// Short-answer questions
// -----------------------------
const short_questions = [
    {
        question: "(HARD) A victim was abducted and later found displayed with a weapon left behind. Based on behavioral concepts, which offender type is most likely, and why? (Unit 6.1)",
        answer: "Organized offender; displayed body = shock value, weapon left = signature behavior. Must justify with victimology/behavioral reasoning."
    },
    {
        question: "(EXPERT) A suspect’s laptop contains encrypted files. Which set of forensic steps best preserves admissibility while enabling decryption and analysis? (Unit 5.2)",
        answer: "Preserve via forensic imaging, maintain chain of custody, decrypt with documented tools, analyze without altering originals."
    }
];
// -----------------------------
// Bonus questions
// -----------------------------
const bonus_questions = [
    {
        question: "(EASY) Define what a criminal profile is. (Worth 2 points.)",
        answer: "Easy: Profile = educated attempt to describe offender traits."
    },
    {
        question: "(MEDIUM) Explain why must modus operandi (MO) and signature be distinguished in case analysis? (Worth 2 points.)",
        answer: "MO = method of committing crime; signature = psychological needs."
    },
    {
        question: "(HARD) Evaluate one limitation of profiling in investigations. (Worth 3 points.)",
        answer: "Limitation = interpretive, not scientific, cannot be sole evidence."
    },
    {
        question: "(EXPERT) Assess whether profiling should be used in modern forensic practice. (Worth 3 points.)",
        answer: "Profiling is a tool, useful but must be combined with forensic evidence."
    }
];
// -----------------------------
// Quiz Functions
// -----------------------------
function welcomeScreen() {
  const name = prompt("Please enter your first and last name:");
  const hour = prompt("Please enter your class hour (e.g., 1st hour, 7th hour):");
  student_responses.student_info = { name, hour };

  alert(`--- Test Instructions ---
1. Read each multiple-choice question carefully.
2. Select the best answer from the options provided.
3. Answer short-answer questions in complete sentences.
4. The bonus questions can earn extra points but will not subtract points.
5. Do your best and good luck!`);
}

function askMC(q) {
  const options = [...q.options].sort(() => Math.random() - 0.5);
  let choiceText = `${q.question}\n`;
  options.forEach((opt, i) => { choiceText += `${i+1}. ${opt}\n`; });

  const startTime = new Date().toLocaleString();
  let choice;
  while (true) {
    choice = prompt(choiceText + "\nChoose the correct option (1-4):");
    if (choice && !isNaN(choice) && choice >= 1 && choice <= options.length) break;
    alert("Invalid input. Please enter a number between 1 and 4.");
  }
  const endTime = new Date().toLocaleString();

  const selected = options[choice-1];
  student_responses.mc.push({ question: q.question, response: selected, start_time: startTime, end_time: endTime });

  if (selected.toLowerCase() === q.answer.toLowerCase()) {
    alert("✅ Correct! +4 points");
    return 4;
  } else {
    alert(`❌ Incorrect. Correct answer: ${q.answer}`);
    return 0;
  }
}

function askShort(short_questions) {
  short_questions.forEach(q => {
    let response;
    while (!response) {
      response = prompt(q.question);
      if (!response) alert("Response cannot be empty. Please type your answer.");
    }
    student_responses.short.push({ question: q.question, response, start_time: new Date().toLocaleString(), end_time: new Date().toLocaleString() });
  });
}

function askBonus(bonus_questions) {
  bonus_questions.forEach(q => {
    let response;
    while (!response) {
      response = prompt(q.question);
      if (!response) alert("Response cannot be empty. Please type your answer.");
    }
    student_responses.bonus.push({ question: q.question, response, start_time: new Date().toLocaleString(), end_time: new Date().toLocaleString() });
  });
}

// Ensure global storage exists
window.student_responses = window.student_responses || { mc: [], short: [], bonus: [], student_info: {} };

// -----------------------------
// Show correct answers (logs for teacher)
// -----------------------------
function showAnswers(mc_questions, short_questions, bonus_questions) {
  let out = '--- Correct Answers ---\n';
  (mc_questions || []).forEach((q, i) => {
    out += `MC Q${i+1}: ${q.question}\nCorrect: ${q.answer}\n\n`;
  });
  (short_questions || []).forEach((q, i) => {
    out += `Short Q${i+1}: ${q.question}\nSuggested: ${q.answer || 'N/A'}\n\n`;
  });
  (bonus_questions || []).forEach((q, i) => {
    out += `Bonus Q${i+1}: ${q.question}\nSuggested: ${q.answer || 'N/A'}\n\n`;
  });
  console.log(out);
}

// -----------------------------
// Render final results on the results page
// -----------------------------
function showFinalResults(score) {
  // Save score for CSV
  window.student_responses.score = score;

  // Hide quiz, show results
  const quizPage = document.getElementById('quizPage');
  const resultsPage = document.getElementById('resultsPage');
  if (quizPage) quizPage.style.display = 'none';
  if (resultsPage) resultsPage.style.display = 'block';

  const info = window.student_responses.student_info || {};
  const resultsDiv = document.getElementById('results');
  if (resultsDiv) {
    resultsDiv.innerHTML =
      `<div><strong>Name:</strong> ${escapeHtml(info.name || '')}</div>
       <div><strong>Hour:</strong> ${escapeHtml(info.hour || '')}</div>
       <div><strong>Final score:</strong> ${score} points</div>`;
  }
}

// -----------------------------
// Download responses as CSV
// -----------------------------
function downloadCSV() {
  const info = window.student_responses.student_info || {};
  const mcRows = (window.student_responses.mc || []).map(m =>
    `${escapeCsv(m.question)} -> ${escapeCsv(m.response)} (Start: ${m.start_time || ''}, End: ${m.end_time || ''})`
  ).join('; ');
  const shortRows = (window.student_responses.short || []).map(s =>
    `${escapeCsv(s.question)} -> ${escapeCsv(s.response)} (Start: ${s.start_time || ''}, End: ${s.end_time || ''})`
  ).join('; ');
  const bonusRows = (window.student_responses.bonus || []).map(b =>
    `${escapeCsv(b.question)} -> ${escapeCsv(b.response)} (Start: ${b.start_time || ''}, End: ${b.end_time || ''})`
  ).join('; ');

  const rows = [
    ['Name','Hour','Score','MC Responses','Short Responses','Bonus Responses'],
    [info.name || '', info.hour || '', window.student_responses.score || 0, mcRows, shortRows, bonusRows]
  ];

  const csvContent = rows.map(r => r.map(cell => `"${String(cell).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'responses.csv';
  a.click();
  URL.revokeObjectURL(url);
}

// -----------------------------
// Core quiz runner (attach to window to ensure global visibility)
// -----------------------------
window.runQuiz = window.runQuiz || async function (mc_questions, short_questions, bonus_questions) {
  let score = 0;
  const progressEl = document.getElementById('progress');
  const quizEl = document.getElementById('quiz');

  // Helper: render a single MC question as HTML buttons and return selected letter
  function renderMC(qObj, index, total) {
    return new Promise(resolve => {
      if (!quizEl) return resolve(0);
      quizEl.innerHTML = '';
      const card = document.createElement('div');
      card.style.padding = '12px';
      card.style.border = '1px solid #ddd';
      card.style.borderRadius = '8px';
      const qTitle = document.createElement('h3');
      qTitle.textContent = `Q${index+1}: ${qObj.question}`;
      card.appendChild(qTitle);

      (qObj.choices || []).forEach(choiceText => {
        const btn = document.createElement('button');
        btn.textContent = choiceText;
        btn.style.display = 'block';
        btn.style.margin = '8px 0';
        btn.onclick = () => {
          const now = new Date().toISOString();
          // record response
          window.student_responses.mc.push({
            question: qObj.question,
            response: (choiceText && choiceText.charAt(0)) || '',
            start_time: now,
            end_time: now
          });
          // score +4 for correct
          const selected = (choiceText && choiceText.charAt(0)) || '';
          const points = (selected.toUpperCase() === String(qObj.answer).toUpperCase()) ? 4 : 0;
          resolve(points);
        };
        card.appendChild(btn);
      });

      quizEl.appendChild(card);
      if (progressEl) progressEl.textContent = `Question ${index+1} of ${total}`;
    });
  }

  // Run MC questions sequentially
  const mcList = Array.isArray(mc_questions) ? mc_questions : [];
  for (let i = 0; i < mcList.length; i++) {
    const q = mcList[i];
    const pts = await renderMC(q, i, mcList.length);
    score += pts;
  }

  // Short-answer: render simple textareas and record responses (no auto scoring)
  if (Array.isArray(short_questions) && short_questions.length) {
    quizEl.innerHTML = '';
    for (let i = 0; i < short_questions.length; i++) {
      const q = short_questions[i];
      const wrapper = document.createElement('div');
      wrapper.style.marginBottom = '12px';
      const label = document.createElement('div');
      label.innerHTML = `<strong>Short ${i+1}:</strong> ${q.question}`;
      const ta = document.createElement('textarea');
      ta.rows = 3;
      ta.style.width = '100%';
      ta.style.marginTop = '6px';
      wrapper.appendChild(label);
      wrapper.appendChild(ta);
      quizEl.appendChild(wrapper);

      // Wait for user to type and click Next
      const nextBtn = document.createElement('button');
      nextBtn.textContent = 'Save answer and continue';
      nextBtn.style.display = 'block';
      nextBtn.style.marginTop = '8px';
      quizEl.appendChild(nextBtn);

      // Promise resolves when user clicks next
      await new Promise(resolve => {
        nextBtn.onclick = () => {
          const now = new Date().toISOString();
          window.student_responses.short.push({
            question: q.question,
            response: ta.value || '',
            start_time: now,
            end_time: now
          });
          // clear for next
          quizEl.innerHTML = '';
          resolve();
        };
      });
    }
  }

  // Bonus questions: same as short but recorded separately
  if (Array.isArray(bonus_questions) && bonus_questions.length) {
    quizEl.innerHTML = '';
    for (let i = 0; i < bonus_questions.length; i++) {
      const q = bonus_questions[i];
      const wrapper = document.createElement('div');
      wrapper.style.marginBottom = '12px';
      const label = document.createElement('div');
      label.innerHTML = `<strong>Bonus ${i+1}:</strong> ${q.question}`;
      const ta = document.createElement('textarea');
      ta.rows = 3;
      ta.style.width = '100%';
      ta.style.marginTop = '6px';
      wrapper.appendChild(label);
      wrapper.appendChild(ta);
      quizEl.appendChild(wrapper);

      const nextBtn = document.createElement('button');
      nextBtn.textContent = 'Save bonus answer and continue';
      nextBtn.style.display = 'block';
      nextBtn.style.marginTop = '8px';
      quizEl.appendChild(nextBtn);

      await new Promise(resolve => {
        nextBtn.onclick = () => {
          const now = new Date().toISOString();
          window.student_responses.bonus.push({
            question: q.question,
            response: ta.value || '',
            start_time: now,
            end_time: now
          });
          quizEl.innerHTML = '';
          resolve();
        };
      });
    }
  }

  // Finalize
  window.student_responses.score = score;
  // Show results (showFinalResults defined below)
  if (typeof showFinalResults === 'function') {
    showFinalResults(score);
  } else {
    // fallback
    const resultsDiv = document.getElementById('quiz');
    if (resultsDiv) resultsDiv.innerHTML = `<p class="muted">Quiz complete. Score: ${score}</p>`;
  }

  // Log answers for teacher
  showAnswers(mc_questions, short_questions, bonus_questions);
};

// -----------------------------
// startQuiz wrapper (global)
// -----------------------------
function startQuiz() {
  if (typeof window.runQuiz !== 'function') {
    console.error('runQuiz is not defined');
    return;
  }
  if (!Array.isArray(mc_questions) || !Array.isArray(short_questions) || !Array.isArray(bonus_questions)) {
    console.error('Question arrays missing or not arrays');
    return;
  }
  try {
    window.runQuiz(mc_questions, short_questions, bonus_questions);
  } catch (err) {
    console.error('Error running quiz:', err);
  }
}

// -----------------------------
// Utility helpers
// -----------------------------
function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, function (m) {
    return ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[m];
  });
}
function escapeCsv(s) {
  return String(s || '').replace(/"/g, '""');
}

// -----------------------------
// Entry point (called from index.html)
// -----------------------------
function startQuiz() {
  runQuiz(mc_questions, short_questions, bonus_questions);
}


