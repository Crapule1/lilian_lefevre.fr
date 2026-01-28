document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
            header.style.padding = '10px 0'; // Compact on scroll
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.backgroundColor = 'rgba(15, 23, 42, 0.85)';
            header.style.padding = '20px 0'; // Reduced initial padding
            header.style.boxShadow = 'none';
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        // Basic toggle logic for now
        if (navLinks.style.display === 'flex') {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = '#ffffff';
            navLinks.style.padding = '20px';
            navLinks.style.borderBottom = '1px solid rgba(0,0,0,0.1)';
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal on Scroll Animation
    const revealElements = document.querySelectorAll('.section-title, .about-content, .skill-category, .timeline-item, .contact-wrapper');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.style.opacity = '1';
                reveal.style.transform = 'translateY(0)';
            }
        });
    };

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // ==========================================
    // Particle Network Animation (Big Data Theme)
    // ==========================================
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');

    let particlesArray;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    });

    // Create Particle Class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.directionX = (Math.random() * 0.4) - 0.2; // Slower speed for elegance
            this.directionY = (Math.random() * 0.4) - 0.2;
            this.size = Math.random() * 2 + 1;
            this.color = '#cbd5e1'; // Light grey particles for subtle bg
        }

        // Draw particle
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = 0.6;
            ctx.fill();
        }

        // Update particle position
        update() {
            // Check boundaries
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }
            const codeText = `const consultant = {
    name: "Lilian Soler",
    role: "Data Consultant",
    services: [
        "Data Engineering",
        "Business Intelligence",
        "E-Commerce Analytics",
        "Custom Dashboards"
    ],
    mission: "Turning Data into Value",
    status: "Available for projects"
};

// Ready to optimize your data flow...`;
            this.x += this.directionX;
            this.y += this.directionY;

            // Draw
            this.draw();
        }
    }

    // Connect particles with lines
    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                    ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));

                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = `rgba(148, 163, 184, ${opacityValue * 0.2})`; // Slate 400 lines
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Initialize particles
    function initParticles() {
        particlesArray = [];
        let numberOfParticles = (canvas.width * canvas.height) / 9000;
        if (numberOfParticles > 100) numberOfParticles = 100; // Cap for performance

        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connect();
    }

    initParticles();
    animate();

    // ==========================================
    // Chart.js Visualizations
    // ==========================================

    // Common Chart Options for Big Data Theme
    Chart.defaults.color = '#64748b'; // Slate 500 text
    Chart.defaults.font.family = "'Inter', sans-serif";

    // 1. Soft Skills Radar Chart
    const ctxSoft = document.getElementById('softSkillsChart');
    if (ctxSoft) {
        new Chart(ctxSoft, {
            type: 'radar',
            data: {
                labels: ['Gestion Projet', 'Esprit Équipe', 'Organisation', 'Adaptation', 'Green IT', 'Communication'],
                datasets: [{
                    label: 'Niveau de Maîtrise',
                    data: [90, 95, 85, 90, 75, 85],
                    backgroundColor: 'rgba(37, 99, 235, 0.2)', // Blue
                    borderColor: '#2563eb', // Blue
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#2563eb',
                    pointHoverBackgroundColor: '#2563eb',
                    pointHoverBorderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: { color: 'rgba(0, 0, 0, 0.05)' },
                        grid: { color: 'rgba(0, 0, 0, 0.05)' },
                        pointLabels: {
                            color: '#475569',
                            font: { size: 12, family: "'Outfit', sans-serif", weight: '600' }
                        },
                        ticks: { display: false, backdropColor: 'transparent' }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    // 2. Tech Stack Doughnut Chart
    const ctxTech = document.getElementById('techStackChart');
    if (ctxTech) {
        new Chart(ctxTech, {
            type: 'doughnut',
            data: {
                labels: ['Python/Data', 'Web (JS/HTML/CSS)', 'SQL/DB', 'Mobile (Flutter)', 'Outils (PowerBI/M)'],
                datasets: [{
                    data: [30, 25, 20, 15, 10],
                    backgroundColor: [
                        '#2563eb', // Royal Blue
                        '#4f46e5', // Indigo
                        '#818cf8', // Light Indigo
                        '#93c5fd', // Light Blue
                        '#cbd5e1'  // Grey
                    ],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: { boxWidth: 12, padding: 15 }
                    }
                },
                cutout: '70%'
            }
        });
    }
});
