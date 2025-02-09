document.addEventListener('DOMContentLoaded', function() {
   
    const urlParams = new URLSearchParams(window.location.search);
    const template = urlParams.get('template');

    const templateNameElement = document.getElementById('templateName');
    if (templateNameElement && template) {
        templateNameElement.textContent = template.charAt(0).toUpperCase() + template.slice(1);
    }

    const resumeForm = document.getElementById('resumeForm');
    if (resumeForm) {
        resumeForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                template: template,
                fullName: resumeForm.fullName.value,
                email: resumeForm.email.value,
                phone: resumeForm.phone.value,
                skills: resumeForm.skills.value,
                experience: resumeForm.experience.value,
                education: resumeForm.education.value
            };

            console.log('Resume Data:', formData);

            alert('Resume data saved! Preview functionality coming soon.');
        });
    }
});