var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    // Type assertion
    var nameElement1 = document.getElementById('1stName');
    var nameElement2 = document.getElementById('2ndName');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var DateofBirthElement = document.getElementById('DateofBirth');
    var profilePictureInput = document.getElementById('profilePicture');
    // University
    var uniNameElement = document.getElementById('uniName');
    var fieldElement = document.getElementById('field');
    var uniPassingYearElement = document.getElementById('uniPassingYear');
    var gradeElement = document.getElementById('grade');
    // College
    var cllgNameElement = document.getElementById('cllgName');
    var cllgFieldElement = document.getElementById('cllgField');
    var cllgPassYearElement = document.getElementById('cllgPassYear');
    var cllgGradeElement = document.getElementById('cllgGrade');
    // School
    var schlNameElement = document.getElementById('schlName');
    var schlFieldElement = document.getElementById('schlField');
    var schlPassYearElement = document.getElementById('schlPassYear');
    var schlGradeElement = document.getElementById('schlGrade');
    // Skills
    var skillsElement = document.getElementById('skills');
    // Experience
    var experienceElement = document.getElementById('experience');
    var usernameElement = document.getElementById("username");
    // Check if all the elements are present 
    if (nameElement1 && nameElement2 && emailElement && phoneElement && DateofBirthElement &&
        profilePictureInput &&
        uniNameElement && fieldElement && uniPassingYearElement && gradeElement &&
        cllgNameElement && cllgFieldElement && cllgPassYearElement && cllgGradeElement &&
        schlNameElement && schlFieldElement && schlPassYearElement && schlGradeElement &&
        skillsElement && experienceElement && usernameElement) {
        var name1 = nameElement1.value;
        var name2 = nameElement2.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var DateofBirth = DateofBirthElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        var uniName = uniNameElement.value;
        var field = fieldElement.value;
        var uniPassingYear = uniPassingYearElement.value;
        var grade = gradeElement.value;
        var cllgName = cllgNameElement.value;
        var cllgField = cllgFieldElement.value;
        var cllgPassYear = cllgPassYearElement.value;
        var cllgGrade = cllgGradeElement.value;
        var schlName = schlNameElement.value;
        var schlField = schlFieldElement.value;
        var schlPassYear = schlPassYearElement.value;
        var schlGrade = schlGradeElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        // Username and unique path for the resume file
        var username_1 = usernameElement.value;
        var uniquePath = "".concat(username_1.replace(/\s+/g, '_'), "_cv.html");
        // Create resume output HTML
        var resumeOutput = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">".concat(name1, " ").concat(name2, "</span></p>\n            <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n            <p><strong>Date of Birth:</strong> <span id=\"edit-DOB\" class=\"editable\">").concat(DateofBirth, "</span></p>\n            <p><strong>Profile Picture:</strong></p>\n            <img src=\"").concat(profilePictureURL, "\" alt=\"Profile Picture\" style=\"max-width: 200px; height: auto;\" />\n            <h3>Education</h3>\n            <p><strong>University:</strong> <span id=\"edit-uni\" class=\"editable\">").concat(uniName, ", ").concat(field, ", ").concat(uniPassingYear, ", ").concat(grade, "</span></p>\n            <p><strong>College:</strong> <span id=\"edit-college\" class=\"editable\">").concat(cllgName, ", ").concat(cllgField, ", ").concat(cllgPassYear, ", ").concat(cllgGrade, "</span></p>\n            <p><strong>School:</strong> <span id=\"edit-school\" class=\"editable\">").concat(schlName, ", ").concat(schlField, ", ").concat(schlPassYear, ", ").concat(schlGrade, "</span></p>\n            <h3>Skills</h3>\n            <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n            <h3>Experience</h3>\n            <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n        ");
        // Create and trigger download of resume
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        // Display resume in output container
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden");
            // Create container for buttons
            var buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);
            // Add download PDF button
            var downloadButton = document.createElement('button');
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", function () {
                window.print();
            });
            buttonsContainer.appendChild(downloadButton);
            // Add shareable link button
            var shareableLinkButton = document.createElement("button");
            shareableLinkButton.textContent = "Copy shareable Link";
            shareableLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var shareableLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareableLink = "https://yourdomain.com/".concat(username_1.replace(/\s+/g, '_'), "_cv.html");
                            return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                        case 1:
                            _a.sent();
                            alert("Shareable link copied to clipboard.");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("Failed to copy link:", err_1);
                            alert("Failed to copy link to clipboard. Please try again!");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttonsContainer.appendChild(shareableLinkButton);
        }
        else {
            console.error("Resume output container not found");
        }
    }
    else {
        console.error("One or more input elements are missing");
    }
});
