// Forensics First Semester Quiz (converted from Python)

// -----------------------------
// Storage for student responses
// -----------------------------
const student_responses = { mc: [], short: [], bonus: [], student_info: {} };

// canonical original questions (do not reassign)
window.original_mc_questions = (typeof mc_questions !== 'undefined' ? mc_questions : []);

// session state you will mutate
let mc_questions_session = window.original_mc_questions.slice();
let currentIndex = 0;
let sessionMapping = [];

// Fisher-Yates shuffle
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function copyQuestion(q) {
  return {
    question: q.question,
    choices: Array.isArray(q.choices) ? q.choices.slice() : [],
    answer: q.answer
  };
}

// prepareSession returns shuffledQuestions and sessionMapping
function prepareSession(questions = window.original_mc_questions) {
  const copied = (questions || []).map(copyQuestion);
  const shuffledQuestions = shuffleArray(copied.slice());
  sessionMapping = shuffledQuestions.map(q => {
    const originalAnswer = q.answer;
    const shuffledChoices = shuffleArray(q.choices.slice());
    let correctIndex = -1;
    if (typeof originalAnswer === 'number') {
      const originalValue = q.choices[originalAnswer];
      correctIndex = shuffledChoices.findIndex(c => c === originalValue);
    } else {
      correctIndex = shuffledChoices.findIndex(c => c === originalAnswer);
    }
    return {
      question: q.question,
      choices: shuffledChoices,
      correctIndex,
      originalAnswer
    };
  });

  mc_questions_session = sessionMapping.map(m => ({
    question: m.question,
    choices: m.choices,
    correctIndex: m.correctIndex
  }));

  // expose for bootstrap and UI
  window.sessionMapping = sessionMapping;
  window.mc_questions_session = mc_questions_session;

  return { shuffledQuestions: mc_questions_session, sessionMapping };
}

// -----------------------------
// Multiple-choice questions
// -----------------------------
const mc_questions = [
    {
        question: "(EASY) Which amendment governs searches and seizures in the United States? (Unit 2.7)",
        choices: ["First Amendment", "Fourth Amendment", "Fifth Amendment", "Sixth Amendment"],
        answer: "Fourth Amendment"
    },
    {
        question: "(MEDIUM) What does a concealed body typically suggest about offender behavior? (Unit 6.1)",
        choices: ["Desire for attention", "Remorse or personal connection", "Lack of planning", "Organized offender"],
        answer: "Remorse or personal connection"
    },
    {
        question: "(HARD) Why must investigators begin with the least intrusive methods? (Unit 2.1)",
        choices: ["To save time", "To avoid destroying fragile evidence", "To reduce paperwork", "To allow media access"],
        answer: "To avoid destroying fragile evidence"
    },
    {
        question: "(EXPERT) How do ASCII and Unicode differences affect forensic text analysis? (Unit 5.2)",
        choices: ["Unicode allows more characters across languages", "ASCII is always superior to Unicode", "Unicode eliminates binary storage", "ASCII prevents encryption"],
        answer: "Unicode allows more characters across languages"
    },
    {
        question: "(EASY) What is the smallest unit of data in computing? (Unit 5.2)",
        choices: ["Byte", "Nybbble", "Bit", "Word"],
        answer: "Bit"
    },
    {
        question: "(MEDIUM) What does staging a crime scene indicate? (Unit 6.1)",
        choices: ["Offender wanted to mislead investigators", "Offender felt remorse", "Offender was disorganized", "Offender was under the influence"],
        answer: "Offender wanted to mislead investigators"
    },
    {
        question: "(HARD) Which statement best differentiates MO from signature? (Unit 6.1)",
        choices: ["MO is necessary to commit the crime; signature reflects psychological needs", "MO is optional; signature is required", "Both MO and signature are identical", "Signature is always physical evidence"],
        answer: "MO is necessary to commit the crime; signature reflects psychological needs"
    },
    {
        question: "(EXPERT) How does forensic imaging preserve admissibility of digital evidence? (Unit 5.2)",
        choices: ["It creates a bit-for-bit copy while maintaining original integrity", "It eliminates the need for chain of custody", "It guarantees conviction", "It replaces encryption"],
        answer: "It creates a bit-for-bit copy while maintaining original integrity"
    },
    {
        question: "(EASY) Which search pattern is best for rough terrain? (Unit 2.3)",
        choices: ["Spiral", "Line", "Strip", "Grid"],
        answer: "Line"
    },
    {
        question: "(MEDIUM) Convert decimal 74 into binary. (Unit 5.2)",
        choices: ["0100 1010", "0010 0101", "1111 1110", "0001 0110"],
        answer: "0100 1010"
    },
    {
        question: "(HARD) Why is profiling considered more art than science? (Unit 6.1)",
        choices: ["It relies on interpretation of behavioral patterns", "It guarantees conviction", "It eliminates forensic evidence", "It is based only on victimology"],
        answer: "It relies on interpretation of behavioral patterns"
    },
    {
        question: "(EXPERT) How do geographic factors influence offender profiling? (Unit 6.1)",
        choices: ["They reveal offender proximity and movement patterns", "They eliminate the need for victimology", "They guarantee conviction", "They replace forensic evidence"],
        answer: "They reveal offender proximity and movement patterns"
    },
    {
        question: "(EASY) What does “souvenir” mean in profiling? (Unit 6.1)",
        choices: ["An object taken to relive the crime", "A staged crime scene", "A method of operating", "A concealed body"],
        answer: "An object taken to relive the crime"
    },
    {
        question: "(MEDIUM) Convert binary 00100101 into decimal. (Unit 5.2)",
        choices: ["22", "35", "74", "198"],
        answer: "35"
    },
    {
        question: "(HARD) Why is chain of custody critical for digital evidence? (Unit 5.2)",
        choices: ["It prevents alteration and ensures admissibility", "It speeds up analysis", "It eliminates encryption", "It allows suspects to access devices"],
        answer: "It prevents alteration and ensures admissibility"
    },
    {
        question: "(EXPERT) How can behavioral evidence corroborate or refute physical evidence? (Unit 6.1)",
        choices: ["It provides context that supports or challenges forensic findings", "It eliminates the need for testimony", "It guarantees conviction", "It replaces chain of custody"],
        answer: "It provides context that supports or challenges forensic findings"
    },
    {
        question: "(EASY) Which of the following is a threat to crime scene integrity? (Unit 2.1)",
        choices: ["Addition of material", "Proper documentation", "Chain of custody", "Evidence preservation"],
        answer: "Addition of material"
    },
    {
        question: "(MEDIUM) Why does the grid search provide multiple perspectives? (Unit 2.3)",
        choices: ["It uses two sets of strips at right angles", "It requires fewer searchers", "It eliminates the need for supervision", "It is faster than all other methods"],
        answer: "It uses two sets of strips at right angles"
    },
    {
        question: "(HARD) How does victim risk level inform offender selection? (Unit 6.1)",
        choices: ["It reveals lifestyle traits that make victims more or less likely to be targeted", "It guarantees offender guilt", "It eliminates the need for profiling", "It replaces forensic evidence"],
        answer: "It reveals lifestyle traits that make victims more or less likely to be targeted"
    },
    {
        question: "(EXPERT) What is a limitation of criminal profiling in court? (Unit 6.1)",
        choices: ["Profiles are not admissible as direct evidence", "Profiles guarantee conviction","Profiles replace forensic science", "Profiles are always 100% accurate"],
        answer: "Profiles are not admissible as direct evidence"
    },
    {
        question: "(EASY) Which term refers to acts not necessary to commit the crime but reflect psychological needs? (Unit 6.1)",
        choices: ["MO", "Signature", "Souvenir", "Staging"],
        answer: "Signature"
    },
    {
        question: "(MEDIUM) Convert decimal 37 into binary. (Unit 5.2)",
        choices: ["0010 0101", "0100 1010", "0001 0110", "1111 1110"],
        answer: "0010 0101"
    },
    {
        question: "(HARD) Why is binary place value essential in forensic computing? (Unit 5.2)",
        choices: ["It allows investigators to interpret raw data accurately", "It eliminates ASCII tables", "It guarantees admissibility in court", "It prevents contamination of evidence"],
        answer: "It allows investigators to interpret raw data accurately"
    },
    {
        question: "(EXPERT) How does Unicode expand forensic analysis compared to ASCII? (Unit 5.2)",
        choices: ["It supports global languages and thousands more characters", "It eliminates binary storage", "It guarantees conviction", "It replaces chain of custody"],
        answer: "It supports global languages and thousands more characters"
    },
    {
        question: "(EASY) What does “overkill” mean in crime scene analysis? (Unit 6.1)",
        choices: ["Excessive wounding beyond what is necessary for death", "Concealing a body", "Taking a souvenir", "Staging a crime scene"],
        answer: "Excessive wounding beyond what is necessary for death"
    },
    {
        question: "(MEDIUM) What does a displayed body suggest about offender intent? (Unit 6.1)",
        choices: ["Desire for shock value or attention", "Remorse", "Organized planning", "Lack of evidence"],
        answer: "Desire for shock value or attention"
    },
    {
        question: "(HARD) How does offender organization level affect investigative strategies? (Unit 6.1)",
        choices: ["Organized offenders require different interview approaches than disorganized offenders", "Organized offenders are always guilty", "Disorganized offenders never leave evidence", "Organization level eliminates forensic analysis"],
        answer: "Organized offenders require different interview approaches than disorganized offenders"
    },
    {
        question: "(EXPERT) Why is chain of custody documentation more complex for digital evidence than physical evidence? (Unit 5.2)",
        choices: ["Digital evidence can be altered invisibly and requires detailed logs", "Digital evidence is always encrypted", "Digital evidence cannot be copied", "Digital evidence is immune to contamination"],
        answer: "Digital evidence can be altered invisibly and requires detailed logs"
    },
    {
        question: "(EASY) How many possible values can a byte represent? (Unit 5.2)",
        choices: ["16", "128", "256", "512"],
        answer: "256"
    },
    {
        question: "(MEDIUM) Convert decimal 198 into binary. (Unit 5.2)",
        choices: ["1100 0110", "0010 0101", "0100 1010", "1111 1110"],
        answer: "1100 0110"
    },
    {
        question: "(HARD) Why is understanding ASCII tables useful in forensic reporting? (Unit 5.2)",
        choices: ["They allow binary values to be converted into readable text","They eliminate Unicode entirely","They guarantee conviction", "They prevent contamination"],
        answer: "They allow binary values to be converted into readable text"
    },
    {
        question: "(EXPERT) How do ASCII conversion tables assist in digital evidence interpretation? (Unit 5.2)",
        choices: ["They allow investigators to translate binary into readable characters", "They eliminate the need for encryption", "They guarantee chain of custody", "They replace Unicode entirely"],
        answer: "They allow investigators to translate binary into readable characters"
    },
    {
        question: "(EASY) Which of the following is an exception to the warrant requirement? (Unit 2.7)",
        choices: ["Consent to search", "Routine patrol", "Jury order", "Witness testimony"],
        answer: "Consent to search"
    },
    {
        question: "(MEDIUM) What is the purpose of the preliminary survey at a crime scene? (Unit 2.1)",
        choices: ["To release the scene immediately", "To determine search methods and needs", "To photograph evidence only", "To collect evidence without notes"],
        answer: "To determine search methods and needs"
    },
    {
        question: "(HARD) Why is binary place value essential in forensic computing? (Unit 5.2)",
        choices: ["It allows investigators to interpret raw data accurately", "It eliminates ASCII tables", "It guarantees admissibility in court", "It prevents contamination of evidence"],
        answer: "It allows investigators to interpret raw data accurately"
    },
    {
        question: "(EXPERT) How does Unicode expand forensic analysis compared to ASCII? (Unit 5.2)",
        choices: ["It supports global languages and thousands more characters","It eliminates binary storage","It guarantees conviction","It replaces chain of custody"],
        answer: "It supports global languages and thousands more characters"
    },
    {
        question: "(EASY) Which of the following is an exception to the warrant requirement? (Unit 2.7)",
        choices: ["Consent to search", "Routine patrol", "Jury order", "Witness testimony"],
        answer: "Consent to search"
    },
    {
        question: "(MEDIUM) Why is offender risk level important in profiling? (Unit 6.1)",
        choices: ["It shows how much danger the offender accepts to commit the crime", "It guarantees conviction in court", "It eliminates the need for victimology", "It replaces physical evidence"],
        answer: "It shows how much danger the offender accepts to commit the crime"
    },
    {
        question: "(HARD) How does victim risk level inform offender selection? (Unit 6.1)",
        choices: ["It reveals lifestyle traits that make victims more or less likely to be targeted", "It guarantees offender guilt", "It eliminates the need for profiling", "It replaces forensic evidence"],
        answer: "It reveals lifestyle traits that make victims more or less likely to be targeted"
    },
    {
        question: "(EXPERT) What is a limitation of criminal profiling in court? (Unit 6.1)",
        choices: ["Profiles are not admissible as direct evidence", "Profiles guarantee conviction", "Profiles replace forensic science", "Profiles are always 100% accurate"],
        answer: "Profiles are not admissible as direct evidence"
    },
    {
        question: "(EASY) Which offender behavior is most often associated with staging a crime scene? (Unit 6.1)",
        choices: ["Desire to mislead investigators", "Remorse for the victim", "Taking a souvenir", "Concealing evidence"],
        answer: "Desire to mislead investigators"
    },
    {
        question: "(MEDIUM) Convert decimal 22 into binary. (Unit 5.2)",
        choices: ["0001 0110", "0010 0010", "1111 1110", "0100 1010"],
        answer: "0010 0010"
    },
    {
        question: "(HARD) Why is understanding Unicode important in forensic text analysis compared to ASCII? (Unit 5.2)",
        choices: ["It allows investigators to interpret text across multiple languages and scripts", "It guarantees conviction in court", "It eliminates the need for binary storage", "It replaces chain of custody procedures"],
        answer: "It allows investigators to interpret text across multiple languages and scripts"
    },
    {
        question: "(EXPERT) How does Unicode improve forensic analysis compared to ASCII? (Unit 5.2)",
        choices: ["It supports global languages and thousands more characters", "It eliminates binary storage", "It replaces chain of custody", "It guarantees conviction"],
        answer: "It supports global languages and thousands more characters"
    },
    {
        question: "(EASY) Which of the following is a threat to crime scene integrity? (Unit 2.1)",
        choices: ["Addition of material", "Proper documentation", "Chain of custody", "Evidence preservation"],
        answer: "Addition of material"
    },
    {
        question: "(MEDIUM) Why do offenders take souvenirs? (Unit 6.1)",
        choices: ["To relive the crime later through fantasy", "To conceal evidence from police", "To mislead investigators", "To prove remorse"],
        answer: "To relive the crime later through fantasy"
    },
    {
        question: "(HARD) Why is understanding ASCII essential for interpreting seized text files? (Unit 5.2)",
        choices: ["It allows binary values to be converted into readable characters", "It eliminates the need for Unicode", "It guarantees admissibility in court", "It prevents contamination"],
        answer: "It allows binary values to be converted into readable characters"
    },
    {
        question: "(EXPERT) How do binary and ASCII conversions support forensic analysis? (Unit 5.2)",
        choices: ["They enable investigators to interpret raw data and text evidence correctly", "They eliminate the need for chain of custody", "They guarantee conviction", "They replace behavioral profiling"],
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

// Ensure global storage exists
window.student_responses = window.student_responses || { mc: [], short: [], bonus: [], student_info: {} };

// Expose question arrays to window if not already
window.mc_questions = window.mc_questions || (typeof mc_questions !== 'undefined' ? mc_questions : []);
window.short_questions = window.short_questions || (typeof short_questions !== 'undefined' ? short_questions : []);
window.bonus_questions = window.bonus_questions || (typeof bonus_questions !== 'undefined' ? bonus_questions : [])

// -----------------------------
// Shuffle utilities and session preparation
// -----------------------------
// Fisher-Yates shuffle (in-place)
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function copyQuestion(q) {
  return {
    question: q.question,
    choices: Array.isArray(q.choices) ? q.choices.slice() : [],
    // keep original answer value (string or index) for mapping
    answer: q.answer
  };
}

// Prepare a session: shuffle questions and shuffle choices per question
function prepareSession(questions = []) {
  // Keep originalQuestions as-is; work on copies
  const copied = (questions || []).map(copyQuestion);

  // Shuffle question order
  const shuffledQuestions = shuffleArray(copied.slice());

  // Build sessionMapping: for each shuffled question, shuffle choices and compute correctIndex
  const sessionMapping = shuffledQuestions.map(q => {
    // If answer is stored as text, find index in original choices
    const originalAnswerValue = q.answer;
    // Shuffle choices (operate on q.choices which is already a copy)
    const shuffledChoices = shuffleArray(q.choices.slice());
    // Determine correct index in shuffledChoices
    const correctIndex = shuffledChoices.findIndex(c => c === originalAnswerValue);
    // If original answer was an index (number), handle that too
    if (typeof originalAnswerValue === 'number' && originalAnswerValue >= 0) {
      const originalValue = q.choices[originalAnswerValue];
      return {
        question: q.question,
        choices: shuffledChoices,
        correctIndex: shuffledChoices.findIndex(c => c === originalValue),
        originalAnswer: originalValue
      };
    }
    return {
      question: q.question,
      choices: shuffledChoices,
      correctIndex,
      originalAnswer: originalAnswerValue
    };
  });

  // Return both the shuffled questions (with shuffled choices) and the mapping
  return {
    shuffledQuestions: sessionMapping.map(m => ({
      question: m.question,
      choices: m.choices,
      // store correctIndex so UI can check answers
      correctIndex: m.correctIndex
    })),
    sessionMapping
  };
}

  // Expose for client use and optional server persistence
  window.sessionSeed = seed;
  window.sessionMapping = mapping;
  // Expose shuffledQuestions for startQuiz if you want to pass them in
  return { seed, mapping, shuffledQuestions };

// Expose prepareSession globally
window.prepareSession = window.prepareSession || prepareSession;

// Utility helpers
function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, function (m) {
    return ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[m];
  });
}
function escapeCsv(s) {
  return String(s == null ? '' : s).replace(/"/g, '""');
}
function csvRow(cells) {
  return cells.map(c => `"${escapeCsv(c)}"`).join(',');
}
function utf8ToB64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}
function b64ToUtf8(b64) {
  return decodeURIComponent(escape(atob(b64)));
}
function sanitizeFilename(s) {
  return String(s || 'unknown').replace(/[\/\\#%&{}<>*? $!'":@+`|=]/g, '_');
}

// Render helpers (in-page, no popups)
function createBadge(text) {
  const d = document.createElement('div');
  d.className = 'badge';
  d.textContent = text;
  return d;
}

// Render a multiple-choice question card and return a Promise that resolves with points earned
function renderMCQuestionCard(qObj, index, total) {
  return new Promise(resolve => {
    const quizEl = document.getElementById('quiz');
    const progressEl = document.getElementById('progress');
    if (!quizEl) return resolve(0);

    quizEl.innerHTML = '';

    const card = document.createElement('div');
    card.style.padding = '12px';
    card.style.border = '1px solid #ddd';
    card.style.borderRadius = '8px';

    // Header with remaining badge
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';

    const qTitle = document.createElement('h3');
    qTitle.style.margin = '0';
    qTitle.textContent = `Q${index + 1}: ${qObj.question}`;

    const remainingCount = Math.max(0, total - (index + 1));
    const remainingBadge = document.createElement('div');
    remainingBadge.style.background = '#f0f0f0';
    remainingBadge.style.padding = '6px 10px';
    remainingBadge.style.borderRadius = '8px';
    remainingBadge.style.fontWeight = '600';
    remainingBadge.textContent = `${remainingCount} remaining`;

    header.appendChild(qTitle);
    header.appendChild(remainingBadge);
    card.appendChild(header);

    // Choices as buttons
    (qObj.choices || []).forEach(choiceText => {
      const btn = document.createElement('button');
      btn.textContent = choiceText;
      btn.style.display = 'block';
      btn.style.margin = '8px 0';
      btn.onclick = () => {
        const now = new Date().toISOString();
        const selected = (choiceText && choiceText.charAt(0)) || '';
        const correct = String(selected).toUpperCase() === String(qObj.answer || '').toUpperCase();
        const points = correct ? 4 : 0;

        // Record response
        window.student_responses.mc.push({
          question: qObj.question,
          response: selected,
          start_time: now,
          end_time: now,
          correct: !!correct,
          unit: qObj.unit || 'Uncategorized'
        });

        // Update progress text
        if (progressEl) progressEl.textContent = `${remainingCount} question${remainingCount === 1 ? '' : 's'} remaining`;

        resolve(points);
      };
      card.appendChild(btn);
    });

    quizEl.appendChild(card);
    if (progressEl) progressEl.textContent = `${total - index} question${total - index === 1 ? '' : 's'} remaining`;
  });
}

// Render a short-answer card and wait for user to save
function renderShortAnswerCard(qObj, index, remainingAfter) {
  return new Promise(resolve => {
    const quizEl = document.getElementById('quiz');
    if (!quizEl) return resolve();
    quizEl.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.style.marginBottom = '12px';

    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';

    const label = document.createElement('div');
    label.innerHTML = `<strong>Short ${index + 1}:</strong> ${escapeHtml(qObj.question)}`;

    const remainingBadge = document.createElement('div');
    remainingBadge.style.background = '#f0f0f0';
    remainingBadge.style.padding = '6px 10px';
    remainingBadge.style.borderRadius = '8px';
    remainingBadge.style.fontWeight = '600';
    remainingBadge.textContent = `${remainingAfter} remaining`;

    header.appendChild(label);
    header.appendChild(remainingBadge);
    wrapper.appendChild(header);

    const ta = document.createElement('textarea');
    ta.rows = 4;
    ta.style.width = '100%';
    ta.style.marginTop = '6px';
    wrapper.appendChild(ta);

    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Save answer and continue';
    nextBtn.style.display = 'block';
    nextBtn.style.marginTop = '8px';
    wrapper.appendChild(nextBtn);

    nextBtn.onclick = () => {
      const now = new Date().toISOString();
      window.student_responses.short.push({
        question: qObj.question,
        response: ta.value || '',
        start_time: now,
        end_time: now,
        unit: qObj.unit || 'Uncategorized'
      });
      resolve();
    };

    quizEl.appendChild(wrapper);
  });
}

// Render a bonus-answer card and wait for user to save
function renderBonusCard(qObj, index, remainingAfter) {
  return new Promise(resolve => {
    const quizEl = document.getElementById('quiz');
    if (!quizEl) return resolve();
    quizEl.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.style.marginBottom = '12px';

    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';

    const label = document.createElement('div');
    label.innerHTML = `<strong>Bonus ${index + 1}:</strong> ${qObj.question}`;

    const remainingBadge = document.createElement('div');
    remainingBadge.style.background = '#f0f0f0';
    remainingBadge.style.padding = '6px 10px';
    remainingBadge.style.borderRadius = '8px';
    remainingBadge.style.fontWeight = '600';
    remainingBadge.textContent = `${remainingAfter} remaining`;

    header.appendChild(label);
    header.appendChild(remainingBadge);
    wrapper.appendChild(header);

    const ta = document.createElement('textarea');
    ta.rows = 4;
    ta.style.width = '100%';
    ta.style.marginTop = '6px';
    wrapper.appendChild(ta);

    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Save bonus answer and continue';
    nextBtn.style.display = 'block';
    nextBtn.style.marginTop = '8px';
    wrapper.appendChild(nextBtn);

    nextBtn.onclick = () => {
      const now = new Date().toISOString();
      window.student_responses.bonus.push({
        question: qObj.question,
        response: ta.value || '',
        start_time: now,
        end_time: now,
        unit: qObj.unit || 'Uncategorized'
      });
      resolve();
    };

    quizEl.appendChild(wrapper);
  });
}

// Core quiz runner (global)
window.startQuiz = window.startQuiz || async function (mc_questions, short_questions, bonus_questions) {
  let score = 0;
  const mcList = Array.isArray(mc_questions) ? mc_questions : [];
  const shortList = Array.isArray(short_questions) ? short_questions : [];
  const bonusList = Array.isArray(bonus_questions) ? bonus_questions : [];

  // MC questions
  for (let i = 0; i < mcList.length; i++) {
    const pts = await renderMCQuestionCard(mcList[i], i, mcList.length);
    score += pts;
  }

  // Short answers
  for (let i = 0; i < shortList.length; i++) {
    const remainingAfter = Math.max(0, (shortList.length - (i + 1)) + bonusList.length);
    await renderShortAnswerCard(shortList[i], i, remainingAfter);
  }

  // Bonus questions
  for (let i = 0; i < bonusList.length; i++) {
    const remainingAfter = Math.max(0, bonusList.length - (i + 1));
    await renderBonusCard(bonusList[i], i, remainingAfter);
  }

  // Finalize
  window.student_responses.score = score;

  // Compute student unit stats and render feedback
  const stats = computeStudentUnitStats(mc_questions, short_questions, bonus_questions);
  renderStudentFeedback(stats);

  // Attempt to append to repo if configured (non-blocking)
  if (typeof appendResponsesToRepoByHour === 'function') {
    appendResponsesToRepoByHour().then(res => {
      if (res && res.ok) {
        console.log('Saved responses to repo.');
      } else {
        console.warn('Repo save skipped or failed.', res);
      }
    }).catch(err => console.error('Repo save error', err));
  }

  // Log answers for teacher
  showAnswers(mc_questions, short_questions, bonus_questions);

  return score;
};

// -----------------------------
// Quiz rendering logic (one question at a time)
// -----------------------------
let currentIndex = 0;

function showQuestion() {
  const container = document.getElementById('quizContainer');
  container.innerHTML = "";

  const q = window.sessionMapping[currentIndex];

  // progress indicator
  const progress = document.createElement('p');
  progress.textContent = `Question ${currentIndex + 1} of ${window.sessionMapping.length}`;
  container.appendChild(progress);

  // question text
  const qText = document.createElement('p');
  qText.textContent = q.originalQuestion;
  container.appendChild(qText);

  // shuffled choices
  q.shuffledChoices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.onclick = () => {
      student_responses.mc[currentIndex] = choice;
    };
    container.appendChild(btn);
  });

  // next button
  const nextBtn = document.createElement('button');
  nextBtn.textContent = currentIndex < window.sessionMapping.length - 1 ? "Next" : "Review";
  nextBtn.onclick = () => {
    if (currentIndex < window.sessionMapping.length - 1) {
      currentIndex++;
      showQuestion();
    } else {
      showReview();
    }
  };
  container.appendChild(nextBtn);
}

function showReview() {
  const container = document.getElementById('quizContainer');
  container.innerHTML = "<h3>Review Your Answers</h3>";

  window.sessionMapping.forEach((q, idx) => {
    const p = document.createElement('p');
    p.textContent = `${q.originalQuestion} → ${student_responses.mc[idx] || "No answer"}`;
    container.appendChild(p);
  });

  const submitBtn = document.createElement('button');
  submitBtn.textContent = "Submit Quiz";
  submitBtn.onclick = () => {
    console.log("Final responses:", student_responses);
    // add CSV export or save logic here
  };
  container.appendChild(submitBtn);
}

// -----------------------------
// Entry point
// -----------------------------
// Debug: confirm this file executed
console.log('Loaded quiz.js at', new Date().toISOString());

// define startQuiz (place this before any export or calls)
function startQuiz(questions = null) {
  if (Array.isArray(questions) && questions.length) {
    // mc_questions must be declared with let earlier
    mc_questions = questions;
  }
  currentIndex = 0;
  showQuestion(); // your existing UI function should read mc_questions[currentIndex]
}

  if (!window.sessionMapping || !window.sessionMapping.length) {
    window.sessionMapping = (mc_questions || []).map(q => ({
      originalQuestion: q.question,
      shuffledChoices: q.choices ? q.choices.slice() : [],
      correctIndex: q.choices ? q.choices.findIndex(c => c === q.answer) : -1,
      originalAnswer: q.answer
    }));
  }

  if (typeof showQuestion === 'function') {
    showQuestion();
  } else {
    console.error('showQuestion not defined; cannot render quiz.');
  }
}

// Ensure global exports
window.prepareSession = window.prepareSession || prepareSession;
window.startQuiz = window.startQuiz || startQuiz;









