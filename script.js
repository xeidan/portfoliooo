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
                                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 mt-1.5 text-purple-600 flex-shrink-0" width="10" height="12" viewBox="0 0 10 12" fill="none">
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
            document.getElementById("backToTopBtn").style.opacity = "0";
        }
    }

    document.getElementById("backToTopBtn").addEventListener("click", function(e) {
        e.preventDefault();
        scrollToTop(500); // 500 milliseconds for smooth scroll
    });

    function scrollToTop(duration) {
        const start = window.scrollY;
        const startTime = performance.now();

        function animateScroll(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            window.scrollTo(0, start * (1 - progress));

            if (elapsedTime < duration) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    }


    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animation = element.dataset.animate;
          const delay = element.dataset.delay || 0;

          element.style.transition = `opacity 1000ms ease-out, transform 1000ms ease-out`;
          element.style.transitionDelay = `${delay}ms`;
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';

          observer.unobserve(element);
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      observer.observe(element);
    });