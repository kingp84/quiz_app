'25-'26 F-1st Semester Test

Instructor name: Patrick King

# -----------------------------
# Multiple-choice questions
# -----------------------------

mc_questions = [
    {
        "multiple_choice_question": "(MEDIUM) Which amendment governs searches and seizures in the United States? (Unit 6.1)",
        "answer": "Fourth Amendment",
        "options": ["First Amendment", "Fourth Amendment", "Fifth Amendment", "Sixth Amendment"]
    },
    {
        "multiple_choice_question": "(MEDIUM) What does a concealed body typically suggest about offender behavior? (Unit 6.1)",
        "answer": "Remorse or personal connection",
        "options": ["Desire for attention", "Remorse or personal connection", "Lack of planning", "Organized offender"]
    },
    {
        "multiple_choice_question": "(HARD) Why must investigators begin with the least intrusive methods? (Unit 2.1)",
        "answer": "To avoid destroying fragile evidence",
        "options": ["To save time", "To avoid destroying fragile evidence", "To reduce paperwork", "To allow media access"]
    },
    {
        "multiple_choice_question": "(EXPERT) How do ASCII and Unicode differences affect forensic text analysis? (Unit 5.2)",
        "answer": "Unicode allows more characters across languages",
        "options": ["Unicode allows more characters across languages", "ASCII is always superior to Unicode", "Unicode eliminates binary storage", "ASCII prevents encryption"]
    },
    {
        "multiple_choice_question": "(EASY) What is the smallest unit of data in computing? (Unit 5.2)",
        "answer": "Bit",
        "options": ["Byte", "Nybbble", "Bit", "Word"]
    },
    {
        "multiple_choice_question": "(MEDIUM) What does staging a crime scene indicate? (Unit 6.1)",
        "answer": "Offender wanted to mislead investigators",
        "options": ["Offender wanted to mislead investigators", "Offender felt remorse", "Offender was disorganized", "Offender was under the influence"]
    },
    {
        "multiple_choice_question": "(HARD) Which statement best differentiates MO from signature? (Unit 6.1)",
        "answer": "MO is necessary to commit the crime; signature reflects psychological needs",
        "options": ["MO is necessary to commit the crime; signature reflects psychological needs", "MO is optional; signature is required", "Both MO and signature are identical", "Signature is always physical evidence"]
    },
    {
        "multiple_choice_question": "(EXPERT) How does forensic imaging preserve admissibility of digital evidence? (Unit 5.2)",
        "answer": "It creates a bit-for-bit copy while maintaining original integrity",
        "options": ["It creates a bit-for-bit copy while maintaining original integrity", "It eliminates the need for chain of custody", "It guarantees conviction", "It replaces encryption"]
    },
    {
        "multiple_choice_question": "(EASY) Which search pattern is best for rough terrain? (Unit 2.3)",
        "answer": "Line",
        "options": ["Spiral", "Line", "Strip", "Grid"]
    },
    {
        "multiple_choice_question": "(MEDIUM) Convert decimal 74 into binary. (Unit 5.2)",
        "answer": "0100 1010",
        "options": ["0100 1010", "0010 0101", "1111 1110", "0001 0110"]
    },
    {
        "multiple_choice_question": "(HARD) Why is profiling considered more art than science? (Unit 6.1)",
        "answer": "It relies on interpretation of behavioral patterns",
        "options": ["It relies on interpretation of behavioral patterns", "It guarantees conviction", "It eliminates forensic evidence", "It is based only on victimology"]
    },
    {
        "multiple_choice_question": "(EXPERT) How do geographic factors influence offender profiling? (Unit 6.1)",
        "answer": "They reveal offender proximity and movement patters",
        "options": ["They reveal offender proximity and movement patterns", "They eliminate the need for victimology", "They guarantee conviction", "They replace forensic evidence"]
    },
    {
        "multiple_choice_question": "(EASY) What does “souvenir” mean in profiling? (Unit 6.1)",
        "answer": "An object taken to relive the crime",
        "options": ["An object taken to relive the crime", "A staged crime scene", "A method of operating", "A concealed body"]
    },
    {
        "multiple_choice_question": "(MEDIUM) Convert binary 00100101 into decimal. (Unit 5.2)",
        "answer": "35",
        "options": ["22", "35", "74", "198"]
    },
    {
        "multiple_choice_question": "(HARD) Why is chain of custody critical for digital evidence? (Unit 5.2)",
        "answer": "It prevents alteration and ensures admissibility",
        "options": ["It prevents alteration and ensures admissibility", "It speeds up analysis", "It eliminates encryption", "It allows suspects to access devices"]
    },
    {
        "multiple_choice_question": "(EXPERT) How can behavioral evidence corroborate or refute physical evidence? (Unit 6.1)",
        "answer": "It provides context that supports or challenges forensic findings",
        "options": ["It provides context that supports or challenges forensic findings", "It eliminates the need for testimony", "It guarantees conviction", "It replaces chain of custody"]
    },
    {
        "multiple_choice_question": "(EASY) Which of the following is a threat to crime scene integrity? (Unit 2.1)",
        "answer": "Addition of material",
        "options": ["Addition of material", "Proper documentation", "Chain of custody", "Evidence preservation"]
    },
    {
        "multiple_choice_question": "(MEDIUM) Why does the grid search provide multiple perspectives? (Unit 2.3)",
        "answer": "It uses two sets of strips at right angles",
        "options": ["It uses two sets of strips at right angles", "It requires fewer searches", "It eliminates the need for supervision", "It is faster than all other methods"]
    },
    {
        "multiple_choice_question": "(HARD) How does victim risk level inform offender selection? (Unit 6.1)",
        "answer": "It reveals lifestyle traits that make victims more or less likely to be targeted",
        "options": ["It reveals lifestyle traits that make victims more or less likely to be targeted", "It guarantees offender guilt", "It eliminates the need for profiling", "It replaces forensic evidence"]
    },
    {
        "multiple_choice_question": "(EXPERT) What is a limitation of criminal profiling in court? (Unit 6.1)",
        "answer": "Profiles are not admissible as direct evidence",
        "options": ["Profiles are not admissible as direct evidence", "Profiles guarantee conviction", "Profiles replace forensic science", "Profiles are always 100% accurate"]
    },
    {
        "multiple_choice_question": "(EASY) Which term refers to acts not necessary to commit the crime but reflect psychological needs? (Unit 6.1)",
        "answer": "Signature",
        "options": ["MO", "Signature", "Souvenir", "Staging"]
    },
    {
        "multiple_choice_question": "(MEDIUM) Convert decimal 37 into binary. (Unit 5.2)",
        "answer": "0010 0101",
        "options": ["0010 0101", "0100 1010", "0001 0110", "1111 1110"]
    },
    {
        "multiple_choice_question": "(HARD) Why is binary place value essential in forensic computing? (Unit 5.2)",
        "answer": "It allows investigators to interpret raw data accurately",
        "options": ["It allows investigators to interpret raw data accurately", "It eliminates ASCII tables", "It guarantees admissibility in court", "It prevents contamination of evidence"]
    },
    {
        "multiple_choice_question": "(EXPERT) How does Unicode expand forensic analysis compared to ASCII? (Unit 5.2)",
        "answer": "It supports global languages and thousands more characters",
        "options": ["It supports global languages and thousands more characters", "It eliminates binary storage", "It guarantees conviction", "It replaces chain of custody"]
    },
    {
        "multiple_choice_question": "(EASY) What does “overkill” mean in crime scene analysis? (Unit 6.1)",
        "answer": "Excessive wounding beyond what is necessary for death",
        "options": ["Excessive wounding beyond what is necessary for death", "Concealing a body", "Taking a souvenir", "Staging a crime scene"]
    },
    {
        "multiple_choice_question": "(MEDIUM) What does a displayed body suggest about offender intent? (Unit 6.1)",
        "answer": "Desire for shock value or attention",
        "options": ["Desire for shock value or attention", "Remorse", "Organized planning", "Lack of evidence"]
    },
    {
        "multiple_choice_question": "(HARD) How does offender organization level affect investigative strategies? (Unit 6.1)",
        "answer": "Organized offenders require different interview approaches than disorganized offenders",
        "options": ["Organized offenders require different interview approaches than disorganized offenders", "Organized offenders are always guilty", "Disorganized offenders never leave evidence", "Organization level eliminates forensic analysis"]
    },
    {
        "multiple_choice_question": "(EXPERT) Why is chain of custody documentation more complex for digital evidence than physical evidence? (Unit 5.2)",
        "answer": "Digital evidence can be altered invisibly and requires detailed logs",
        "options": ["Digital evidence can be altered invisibly and requires detailed logs", "Digital evidence is always encrypted", "Digital evidence cannot be copied", "Digital evidence is immune to contamination"]
    },
    {
        "multiple_choice_question": "(EASY) How many possible values can a byte represent? (Unit 5.2)",
        "answer": "256",
        "options": ["16", "128", "256", "512"]
    },
    {
        "multiple_choice_question": "(MEDIUM) Convert decimal 198 into binary. (Unit 5.2)",
        "answer": "1100 0110",
        "options": ["1100 0110", "0010 0101", "0100 1010", "1111 1110"]
    },
    {
        "multiple_choice_question": "(HARD) Why is understanding ASCII tables useful in forensic reporting? (Unit 5.2)",
        "answer": "They allow binary values to be converted into readable text",
        "options": ["They allow binary values to be converted into readable text", "They eliminate Unicode entirely", "They guarantee conviction", "They prevent contamination"]
    },
    {
        "multiple_choice_question": "(EXPERT) How do ASCII conversion tables assist in digital evidence interpretation? (Unit 5.2)",
        "answer": "They allow investigators to translate binary into readable characters",
        "options": ["They allow investigators to translate binary into readable characters", "They eliminate the need for encryption", "They guarantee chain of custody", "They replace Unicode entirely"]
    },
    {
        "multiple_choice_question": "(EASY) Which of the following is an exception to the warrant requirement? (Unit 2.7)",
        "answer": "Consent to search",
        "options": ["Consent to search", "Routine patrol", "Jury order", "Witness testimony"]
    },
    {
        "multiple_choice_question": "(MEDIUM) What is the purpose of the preliminary survey at a crime scene? (Unit 2.1)",
        "answer": "To determine search methods and needs",
        "options": ["To release the scene immediately", "To determine search methods and needs", "To photograph evidence only", "To collect evidence without notes"]
    },
    {
        "multiple_choice_question": "(HARD) Why is binary place value essential in forensic computing? (Unit 5.2)",
        "answer": "It allows investigators to interpret raw data accurately",
        "options": ["It allows investigators to interpret raw data accurately", "It eliminates ASCII tables", "It guarantees admissibility in court", "It prevents contamination of evidence"]
    },
    {
        "multiple_choice_question": "(EXPERT) How does Unicode expand forensic analysis compared to ASCII? (Unit 5.2)",
        "answer": "It supports global languages and thousands more characters",
        "options": ["It supports global languages and thousands more characters", "It eliminates binary storage", "It guarantees conviction", "It replaces chain of custody"]
    },
    {
        "multiple_choice_question": "(EASY) Which of the following is an exception to the warrant requirement? (Unit 2.7)",
        "answer": "Consent to search",
        "options": ["Consent to search", "Routine patrol", "Jury order", "Witness testimony"]
    },
    {
        "multiple_choice_question": "(MEDIUM) Why is offender risk level important in profiling? (Unit 6.1)",
        "answer": "It shows how much danger the offender accepts to commit the crime",
        "options": ["It shows how much danger the offender accepts to commit the crime", "It guarantees conviction in court", "It eliminates the need for victimology", "It replaces physical evidence"]
    },
    {
        "multiple_choice_question": "(HARD) How does victim risk level inform offender selection? (Unit 6.1)",
        "answer": "It reveals lifestyle traits that make victims more or less likely to be targeted",
        "options": ["FIt reveals lifestyle traits that make victims more or less likely to be targeted", "It guarantees offender guilt", "It eliminates the need for profiling", "It replaces forensic evidence"]
    },
    {
        "multiple_choice_question": "(EXPERT) What is a limitation of criminal profiling in court? (Unit 6.1)",
        "answer": "Profiles are not admissible as direct evidence",
        "options": ["Profiles are not admissible as direct evidence", "Profiles guarantee conviction", "Profiles replace forensic science", "Profiles are always 100% accurate"]
    },
    {
        "multiple_choice_question": "(EASY) Which offender behavior is most often associated with staging a crime scene? (Unit 6.1)",
        "answer": "Desire to mislead investigators",
        "options": ["Desire to mislead investigators", "Remorse for the victim", "Taking a souvenir", "Concealing evidence"]
    },
    {
        "multiple_choice_question": "(MEDIUM) Convert decimal 22 into binary. (Unit 5.2)",
        "answer": "0010 0010",
        "options": ["0001 0110", "0010 0010", "1111 1110", "0100 1010"]
    },
    {
        "multiple_choice_question": "(HARD) Why is understanding Unicode important in forensic text analysis compared to ASCII? (Unit 5.2)",
        "answer": "It allows investigators to interpret text across multiple languages and scripts",
        "options": ["It allows investigators to interpret text across multiple languages and scripts", "It guarantees conviction in court", "It eliminates the need for binary storage", "It replaces chain of custody procedures"]
    },
    {
        "multiple_choice_question": "(EXPERT) How does Unicode improve forensic analysis compared to ASCII? (Unit 5.2)",
        "answer": "It supports global languages and thousands more characters",
        "options": ["It supports global languages and thousands more characters", "It eliminates binary storage", "It replaces chain of custody", "It guarantees conviction"]
    },
    {
        "multiple_choice_question": "(EASY) Which of the following is a threat to crime scene integrity? (Unit 2.1)",
        "answer": "Addition of material",
        "options": ["Addition of material", "Proper documentation", "Chain of custody", "Evidence preservation"]
    },
    {
        "multiple_choice_question": "(MEDIUM) Why do offenders take souvenirs? (Unit 6.1)",
        "answer": "To relive the crime later through fantasy",
        "options": ["To relive the crime later through fantasy", "To conceal evidence from police", "To mislead investigators", "To prove remorse"]
    },
    {
        "multiple_choice_question": "(HARD) Why is understanding ASCII essential for interpreting seized text files? (Unit 5.2)",
        "answer": "It allows binary values to be converted into readable characters",
        "options": ["It allows binary values to be converted into readable characters", "It eliminates the need for Unicode", "It guarantees admissibility in court", "It prevents contamination"]
    },
    {
        "multiple_choice_question": "(EXPERT) How do binary and ASCII conversions support forensic analysis? (Unit 5.2)",
        "answer": "They enable investigators to interpret raw data and text evidence correctly",
        "options": ["They enable investigators to interpret raw data and text evidence correctly", "They eliminate the need for chain of custody", "They guarantee conviction", "They replace behavioral profiling"]
	}
]
# -----------------------------
# Short-answer questions
# -----------------------------

short_questions = [
    {
        "short_answer_question": "(HARD) A victim was abducted and later found displayed with a weapon left behind. Based on behavioral concepts, which offender type is most likely, and why? (Unit 6.1)",
        "answer": "Organized offender; displayed body = shock value, weapon left = signature behavior. Must justify with victimology/behavioral reasoning."
    },
    {
        "short_answer_question": "(EXPERT) A suspect’s laptop contains encrypted files. Which set of forensic steps best preserves admissibility while enabling decryption and analysis? (Unit 5.2)",
        "answer": "Preserve via forensic imaging, maintain chain of custody, decrypt with documented tools, analyze without altering originals."
    }
]

# -----------------------------
# Bonus short-answer question
# -----------------------------

bonus_question = [
    {
        "bonus_short_answer_question": "(EASY) Define what a criminal profile is. (Worth 2 points.)",
        "answer": "Easy: Profile = educated attempt to describe offender traits."
    },
    {
        "bonus_short_answer_question": "(MEDIUM) Explain why must modus operandi (MO) and signature be distinguished in case analysis? (Worth 2 points.)",
        "answer": "MO = method of committing crime; signature = psychological needs."
    },
    {
        "bonus_short_answer_question": "(HARD) Evaluate one limitation of profiling in investigations. (Worth 3 points.)",
        "answer": "Limitation = interpretive, not scientific, cannot be sole evidence."
    },
    {
        "bonus_short_answer_question": "(EXPERT) Assess whether profiling should be used in modern forensic practice. (Worth 3 points.)",
        "answer": "Profiling is a tool, useful but must be combined with forensic evidence."
    }
]