

document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Type assertion
    const nameElement1 = document.getElementById('1stName') as HTMLInputElement;
    const nameElement2 = document.getElementById('2ndName') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const DateofBirthElement = document.getElementById('DateofBirth') as HTMLInputElement;
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    // University
    const uniNameElement = document.getElementById('uniName') as HTMLInputElement;
    const fieldElement = document.getElementById('field') as HTMLInputElement;
    const uniPassingYearElement = document.getElementById('uniPassingYear') as HTMLInputElement;
    const gradeElement = document.getElementById('grade') as HTMLInputElement;

    // College
    const cllgNameElement = document.getElementById('cllgName') as HTMLInputElement;
    const cllgFieldElement = document.getElementById('cllgField') as HTMLInputElement;
    const cllgPassYearElement = document.getElementById('cllgPassYear') as HTMLInputElement;
    const cllgGradeElement = document.getElementById('cllgGrade') as HTMLInputElement;

    // School
    const schlNameElement = document.getElementById('schlName') as HTMLInputElement;
    const schlFieldElement = document.getElementById('schlField') as HTMLInputElement;
    const schlPassYearElement = document.getElementById('schlPassYear') as HTMLInputElement;
    const schlGradeElement = document.getElementById('schlGrade') as HTMLInputElement;

    // Skills
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    // Experience
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;

    const usernameElement = document.getElementById(`username`) as HTMLInputElement;

    // Check if all the elements are present 
    if (nameElement1 && nameElement2 && emailElement && phoneElement && DateofBirthElement &&
        profilePictureInput &&
        uniNameElement && fieldElement && uniPassingYearElement && gradeElement &&
        cllgNameElement && cllgFieldElement && cllgPassYearElement && cllgGradeElement &&
        schlNameElement && schlFieldElement && schlPassYearElement && schlGradeElement &&
        skillsElement && experienceElement && usernameElement) {

        const name1 = nameElement1.value;
        const name2 = nameElement2.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const DateofBirth = DateofBirthElement.value;
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        const uniName = uniNameElement.value;
        const field = fieldElement.value;
        const uniPassingYear = uniPassingYearElement.value;
        const grade = gradeElement.value;
        const cllgName = cllgNameElement.value;
        const cllgField = cllgFieldElement.value;
        const cllgPassYear = cllgPassYearElement.value;
        const cllgGrade = cllgGradeElement.value;
        const schlName = schlNameElement.value;
        const schlField = schlFieldElement.value;
        const schlPassYear = schlPassYearElement.value;
        const schlGrade = schlGradeElement.value;
        const skills = skillsElement.value;
        const experience = experienceElement.value;

        // Username and unique path for the resume file
        const username = usernameElement.value;
        const uniquePath = `${username.replace(/\s+/g, '_')}_cv.html`;

        // Create resume output HTML
        const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> <span id="edit-name" class="editable">${name1} ${name2}</span></p>
            <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
            <p><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
            <p><strong>Date of Birth:</strong> <span id="edit-DOB" class="editable">${DateofBirth}</span></p>
            <p><strong>Profile Picture:</strong></p>
            <img src="${profilePictureURL}" alt="Profile Picture" style="max-width: 200px; height: auto;" />
            <h3>Education</h3>
            <p><strong>University:</strong> <span id="edit-uni" class="editable">${uniName}, ${field}, ${uniPassingYear}, ${grade}</span></p>
            <p><strong>College:</strong> <span id="edit-college" class="editable">${cllgName}, ${cllgField}, ${cllgPassYear}, ${cllgGrade}</span></p>
            <p><strong>School:</strong> <span id="edit-school" class="editable">${schlName}, ${schlField}, ${schlPassYear}, ${schlGrade}</span></p>
            <h3>Skills</h3>
            <p id="edit-skills" class="editable">${skills}</p>
            <h3>Experience</h3>
            <p id="edit-experience" class="editable">${experience}</p>
        `;

        // Create and trigger download of resume
        const downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        // Display resume in output container
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden");

            // Create container for buttons
            const buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);

            // Add download PDF button
            const downloadButton = document.createElement('button');
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", () => {
                window.print();
            });
            buttonsContainer.appendChild(downloadButton);

            // Add shareable link button
            const shareableLinkButton = document.createElement("button");
            shareableLinkButton.textContent = "Copy shareable Link";
            shareableLinkButton.addEventListener("click", async () => {
                try {
                    const shareableLink = `https://yourdomain.com/${username.replace(/\s+/g, '_')}_cv.html`;
                    await navigator.clipboard.writeText(shareableLink);
                    alert("Shareable link copied to clipboard.");
                } catch (err) {
                    console.error("Failed to copy link:", err);
                    alert("Failed to copy link to clipboard. Please try again!");
                }
            });
            buttonsContainer.appendChild(shareableLinkButton);
        } else {
            console.error("Resume output container not found");
        }

    } else {
        console.error("One or more input elements are missing");
    }
});

