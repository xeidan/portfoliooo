// Existing JS from your file
const menuBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const iconHamburger = document.getElementById('icon-hamburger');
const iconClose = document.getElementById('icon-close');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  iconHamburger.classList.toggle('hidden');
  iconClose.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if (
    !mobileMenu.classList.contains('hidden') &&
    !mobileMenu.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    mobileMenu.classList.add('hidden');
    iconHamburger.classList.remove('hidden');
    iconClose.classList.add('hidden');
  }
});


document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle');
    const description = document.getElementById('description');
    const buttons = document.getElementById('buttons');
  
    setTimeout(() => {
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }, 100);
  
    setTimeout(() => {
      subtitle.style.opacity = '1';
      subtitle.style.transform = 'translateY(0)';
    }, 300);
  
    setTimeout(() => {
      description.style.opacity = '1';
      description.style.transform = 'translateY(0)';
    }, 500);
  
    setTimeout(() => {
      buttons.style.opacity = '1';
      buttons.style.transform = 'translateY(0)';
    }, 700);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const companyButtons = document.querySelectorAll('.company-btn');
    const companyDetailsDiv = document.getElementById('company-details');

    const companyData = {
        metacap: {
            title: 'Senior Engineer, Metacap Technology',
            dates: 'Sept 2023 – Present',
            details: [
                'Contribute to the development of responsive websites and web applications, implementing features based on client requirements and design specifications.',
                'Resolve bugs and performed routine maintenance to ensure optimal functionality of web products.',
                'Conduct rigorous testing and debugging to ensure cross-browser compatibility and smooth user experiences.',
                'Actively enhance technical skills by learning new frameworks and technologies to improve project contributions.',
                'Assist senior developers in project execution and supported cross functional teams in achieving project milestones.'
            ]
        },
        mobo: {
            title: 'Mobo Marts (Freelance Project)',
            dates: 'Ongoing',
            details: [
                'Developed a comprehensive e-commerce platform from scratch, showcasing advanced full-stack development skills using cutting-edge technologies. This project served as an extensive learning experience and a portfolio piece demonstrating the ability to build real-world applications.',
                'Designed and developed the entire application architecture.',
                'Implemented database models and migrations using Prisma.',
                'Built secure authentication and authorization systems.',
                'Integrated payment gateways and managed transaction processing.',
                'Developed front-end components and user interfaces using React and ShadCN UI component library.',
                'Implemented form validation and error handling.',
                'Wrote unit tests to ensure code quality and reliability.',
                'Utilized Next.js server actions for backend logic.'
            ]
        },
        property: {
            title: 'Property Pro (Personal Project)',
            dates: 'Ongoing',
            details: [
                'Developed a full-featured, server-side rendered property rental website from the ground up, demonstrating proficiency in modern web development practices and full-stack architecture. This project showcases the ability to build complex, interactive web applications.',
                'Designed and developed the entire application architecture.',
                'Implemented database models and interactions using MongoDB and Mongoose.',
                'Built secure authentication and authorization systems.',
                'Integrated third-party APIs (Mapbox, Cloudinary).',
                'Developed front-end components and user interfaces.',
                'Implemented server-side rendering and server actions.'
            ]
        }
    };

    companyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const company = this.dataset.company;
            const details = companyData[company];

            if (details) {
                let detailsHTML = `
                    <h3 class="text-xl font-semibold mb-2">${details.title}</h3>
                    <p class="text-gray-600 mb-4">${details.dates}</p>
                    <ul class="space-y-2 text-gray-600">
                        ${details.details.map(item => `
                            <li class="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 mt-1.5 text-primary flex-shrink-0" width="10" height="12" viewBox="0 0 10 12" fill="none">
                                    <path d="M9.85714 6L1.28571 0.142857V11.8571L9.85714 6Z" fill="transparent" stroke="currentColor" stroke-width="1.2"/>
                                </svg>
                                <div>${item}</div>
                            </li>
                        `).join('')}
                    </ul>
                `;
                companyDetailsDiv.innerHTML = detailsHTML;
                // Add active class to the selected button and remove from others
                companyButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            } else {
                companyDetailsDiv.innerHTML = '<p>No details found.</p>';
            }
        });
    });

    // Load default details (Metacap)
    companyButtons[0].click();
    companyButtons[0].classList.add('active'); // Set initial active button
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.opacity = "1";
    } else {
        document.getElementById("backToTopBtn").style.opacity = "0"; // Corrected to hide button
    }
}


// ✅ NEW JAVASCRIPT FOR CV MODAL ANIMATIONS AND BEHAVIOR
document.addEventListener('DOMContentLoaded', function() {
    const cvModal = document.getElementById('cv-modal');
    const modalContent = cvModal.querySelector('.modal-content');
    const cvBtn = document.getElementById('cv-btn');
    const cvBtnMobile = document.getElementById('cv-btn-mobile');
    const closeCvModalBtn = document.getElementById('close-cv-modal');

    // Function to open the modal
    function openCvModal() {
        cvModal.classList.remove('hidden'); // Make the overlay visible immediately
        // Use a small delay to ensure 'display: block' is applied before transition
        setTimeout(() => {
            cvModal.classList.add('showing'); // Trigger opacity transition for overlay
            modalContent.classList.remove('animate-out'); // Remove any lingering exit animation
            modalContent.classList.add('animate-in'); // Trigger enter animation for content
            document.body.style.overflow = 'hidden'; // Prevent scrolling background
        }, 10);
    }

    // Function to close the modal
    function closeCvModal() {
        modalContent.classList.remove('animate-in'); // Remove enter animation
        modalContent.classList.add('animate-out'); // Trigger exit animation for content
        cvModal.classList.remove('showing'); // Start overlay fade out

        // Listen for the end of the content animation AND overlay transition
        Promise.all([
            new Promise(resolve => modalContent.addEventListener('animationend', resolve, {once: true})),
            new Promise(resolve => cvModal.addEventListener('transitionend', resolve, {once: true}))
        ]).then(() => {
            cvModal.classList.add('hidden'); // Fully hide the overlay after animations
            modalContent.classList.remove('animate-out'); // Clean up exit animation class
            document.body.style.overflow = ''; // Re-enable scrolling
        });
    }

    // Event listeners
    cvBtn.addEventListener('click', openCvModal);
    cvBtnMobile.addEventListener('click', () => {
        openCvModal();
        // Also close the mobile menu if it's open when CV modal is launched from it
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            iconHamburger.classList.remove('hidden');
            iconClose.classList.add('hidden');
        }
    });
    closeCvModalBtn.addEventListener('click', closeCvModal);

    // Close modal if clicking outside the content (but not on the content itself)
    cvModal.addEventListener('click', (event) => {
        if (event.target === cvModal) { // Check if the click was directly on the overlay
            closeCvModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !cvModal.classList.contains('hidden')) {
            closeCvModal();
        }
    });
});