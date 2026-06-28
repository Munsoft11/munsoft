let currentView = 0;
let isAnimating = false;

const views = [
  { left: 'about', right: 1 },
  { left: 2, right: 3 },
  { left: 4, right: 5 },
  { left: 6, right: 'back' }
];

const pageTemplates = {
  about: {
    body: `
      <div class="about-content">
        <div class="avatar-wrap">
          <img src="me.jpg" alt="Maganda Muniiru" class="avatar" />
        </div>
        <h1 class="name">Maganda Muniiru</h1>
        <p class="role">Software Engineer</p>
        <div class="socials">
          <a href="https://www.facebook.com/maganda.munir" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/@maganda_mu86164" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/in/maganda-munir-127b62273" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://wa.me/256755231686?text=Hello%20Maganda" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
        <p class="bio">
          Hi, I'm Maganda Muniiru, a Software Engineer who builds responsive websites,
          practical interfaces, and clean user experiences using HTML, CSS,
          JavaScript, Flutter, React, Spring Boot, and Java.
        </p>
        <div class="btn-row">
          <button class="btn btn-filled">Download CV</button>
          <button class="btn btn-outline" onclick="goToPage(6)">Contact Me</button>
        </div>
      </div>
    `,
    footerClass: 'page-footer-empty',
    footer: ''
  },
  1: {
    body: `
      <h2 class="section-title">Work Experience</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="tl-dot"></div>
          <div class="tl-body">
            <span class="tl-date"><i class="fas fa-briefcase"></i> 2024 – 2025</span>
            <h3>Software Engineer – Mbarara</h3>
              <p>Built responsive web interfaces and improved the overall user experience for client and personal projects.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="tl-dot"></div>
          <div class="tl-body">
            <span class="tl-date"><i class="fas fa-briefcase"></i> 2025 – 2026</span>
            <h3>Software Engineer – Kampala</h3>
              <p>Worked on frontend layouts, reusable components, and smooth page interactions for production-ready sites.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="tl-dot"></div>
          <div class="tl-body">
            <span class="tl-date"><i class="fas fa-briefcase"></i> 2026</span>
            <h3>Software Engineer –  SateSoft Intelligence</h3>
              <p>Focused on mobile and web projects that combine clean design, responsive behavior, and simple navigation.</p>
          </div>
        </div>
      </div>
    `,
    footerClass: 'footer-right-only',
    footer: `
      <span class="page-num">1</span>
      <button class="nav-btn next" onclick="nextSpread()"><i class="fas fa-chevron-right"></i></button>
    `
  },
  2: {
    body: `
      <h2 class="section-title">Education</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="tl-dot"></div>
          <div class="tl-body">
            <span class="tl-date"><i class="fas fa-graduation-cap"></i> 2023 – To Date</span>
            <h3>Bachelor Degree – Software Engineering</h3>
              <p>Focused on software development fundamentals, programming, databases, and building practical Sofware Systems.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="tl-dot"></div>
          <div class="tl-body">
            <span class="tl-date"><i class="fas fa-briefcase"></i> 2025</span>
            <h3>Internship – Frontend Development</h3>
              <p>Worked on responsive layouts, component styling, page improvements for web interfaces and participated in app devlopment Using Flutter, Spring Boot and Java.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="tl-dot"></div>
          <div class="tl-body">
            <span class="tl-date"><i class="fas fa-briefcase"></i> 2026</span>
            <h3>Internship – Software Development</h3>
              <p>Supported development tasks, collaborated on project updates, and gained hands-on experience with real-world workflows.</p>
          </div>
        </div>
      </div>
    `,
    footerClass: 'footer-left-nav',
    footer: `
      <button class="nav-btn prev" onclick="prevSpread()"><i class="fas fa-chevron-left"></i></button>
      <span class="page-num">2</span>
    `
  },
  3: {
    body: `
      <h2 class="section-title">My Services</h2>
      <div class="services-grid">
        <div class="service-card">
          <i class="fas fa-code service-icon"></i>
          <h4>Web Development</h4>
          <p>I build responsive websites and portfolio pages that are fast, clear, and easy to use on any screen.</p>
          <button class="btn btn-filled btn-sm">Read More</button>
        </div>
        <div class="service-card">
          <i class="fas fa-pencil-alt service-icon"></i>
          <h4>Creative Design</h4>
          <p>I create clean visual layouts and interface designs that keep content readable, focused, and polished.</p>
          <button class="btn btn-filled btn-sm">Read More</button>
        </div>
        <div class="service-card">
          <i class="fas fa-chart-bar service-icon"></i>
          <h4>App Development</h4>
          <p>I develop practical app solutions with smooth user flows, useful features, and dependable performance.</p>
          <button class="btn btn-filled btn-sm">Read More</button>
        </div>
        <div class="service-card">
          <i class="fas fa-search service-icon"></i>
          <h4>AI Business Support</h4>
          <p>I use AI-assisted workflows to help businesses automate tasks, organize work, and improve productivity.</p>
          <button class="btn btn-filled btn-sm">Read More</button>
        </div>
      </div>
    `,
    footerClass: 'footer-right-only',
    footer: `
      <span class="page-num">3</span>
      <button class="nav-btn next" onclick="nextSpread()"><i class="fas fa-chevron-right"></i></button>
    `
  },
  4: {
    body: `
      <h2 class="section-title">My Skills</h2>
      <p class="skills-cat">Front-End</p>
      <div class="skills-grid">
        <div class="skill-card"><i class="fab fa-html5"></i><span>HTML</span></div>
        <div class="skill-card"><i class="fab fa-css3-alt"></i><span>CSS</span></div>
        <div class="skill-card"><i class="fab fa-js-square"></i><span>JS</span></div>
        <div class="skill-card angular-icon"><span class="a-letter">F</span><span>Flutter</span></div>
        <div class="skill-card"><i class="fab fa-react"></i><span>React</span></div>
        <div class="skill-card"><i class="fab fa-bootstrap"></i><span>Bootstrap</span></div>
        <div class="skill-card tailwind-icon">
          <svg viewBox="0 0 54 33" width="26" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.463 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z" fill="#38bdf8"/>
          </svg>
          <span>Tailwind</span>
        </div>
      </div>
      <p class="skills-cat">Back-End</p>
      <div class="skills-grid">
        <div class="skill-card spring-boot-icon"><i class="fas fa-leaf"></i><span>Spring Boot</span></div>
        <div class="skill-card java-icon"><i class="fab fa-java"></i><span>Java</span></div>
        <div class="skill-card php-icon"><span class="php-text">php</span><span>PHP</span></div>
        <div class="skill-card node-icon"><i class="fab fa-node-js"></i><span>Node</span></div>
      </div>
      <p class="skills-cat">Database</p>
      <div class="skills-grid">
        <div class="skill-card mysql-icon"><i class="fas fa-database"></i><span>MySQL</span></div>
        <div class="skill-card postgres-icon"><i class="fas fa-database"></i><span>PostgreSQL</span></div>
        <div class="skill-card mongodb-icon"><i class="fas fa-database"></i><span>MongoDB</span></div>
      </div>
    `,
    footerClass: 'footer-left-nav',
    footer: `
      <button class="nav-btn prev" onclick="prevSpread()"><i class="fas fa-chevron-left"></i></button>
      <span class="page-num">4</span>
    `
  },
  5: {
    body: `
      <h2 class="section-title">Latest Project</h2>
      <div class="project-img-wrap">
        <img src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80" alt="Project" class="project-img" />
      </div>
      <div class="project-meta">
        <h3 class="project-name">Portfolio Website</h3>
        <a href="#" class="live-preview">Live Preview <i class="fas fa-external-link-alt"></i></a>
      </div>
      <p class="project-tech"><strong>Tech Used:</strong> HTML, CSS, JavaScript</p>
      <p class="project-desc">A book-style portfolio website with animated page turns, local profile media, working social links, and a responsive layout.</p>
      <div class="btn-row">
        <button class="btn btn-filled">Source Code</button>
        <button class="btn btn-outline">More Projects</button>
      </div>
    `,
    footerClass: 'footer-right-only',
    footer: `
      <span class="page-num">5</span>
      <button class="nav-btn next" onclick="nextSpread()"><i class="fas fa-chevron-right"></i></button>
    `
  },
  6: {
    body: `
      <div class="contact-content">
        <h2 class="section-title">Contact Me!</h2>
        <form action="https://api.web3forms.com/submit" method="POST" class="contact-form">
          <input type="hidden" name="access_key" value="5d729fe0-c5bd-49e7-b92f-f6b6b15e45c7">
          <input type="text" name="name" placeholder="Your full name" class="form-input" required>
          <input type="email" name="email" placeholder="Your email address" class="form-input" required>
          <textarea name="message" placeholder="Tell me about your project or idea..." class="form-textarea" required></textarea>
          <button type="submit" class="btn btn-filled btn-full">Submit</button>
        </form>
      </div>
    `,
    footerClass: 'footer-contact',
    footer: `
      <button class="nav-btn prev" onclick="prevSpread()"><i class="fas fa-chevron-left"></i></button>
      <span class="page-num">6</span>
      <button class="nav-btn home-btn" onclick="goToPage(1)" title="Back to start">
        <i class="fas fa-user"></i>
      </button>
    `
  },
  back: {
    body: '',
    footerClass: 'page-footer-empty',
    footer: ''
  }
};

function getBookPages() {
  return {
    left: document.querySelector('#spread-1 .page-left'),
    right: document.querySelector('#spread-1 .page-right')
  };
}

function renderPage(pageEl, template) {
  if (!pageEl) return;
  const contentEl = pageEl.querySelector('.page-content');
  const footerEl = pageEl.querySelector('.page-footer');
  if (!contentEl || !footerEl) return;

  contentEl.innerHTML = template.body;
  footerEl.className = `page-footer ${template.footerClass || ''}`.trim();
  footerEl.innerHTML = template.footer;
}

function renderView(viewIndex) {
  const { left, right } = getBookPages();
  const view = views[viewIndex];
  const leftTemplate = pageTemplates[view.left];
  const rightTemplate = pageTemplates[view.right];

  if (!leftTemplate || !rightTemplate) return;

  left.classList.remove('back-cover');
  right.classList.remove('back-cover');

  if (view.right === 'back') {
    right.classList.add('back-cover');
  }

  renderPage(left, leftTemplate);
  renderPage(right, rightTemplate);
}

function turnToView(nextView, direction) {
  if (isAnimating || nextView < 0 || nextView >= views.length) return;

  const { left, right } = getBookPages();
  if (!left || !right) return;

  isAnimating = true;
  left.classList.remove('page-turn-prev');
  right.classList.remove('page-turn-next');

  const activePage = direction === 'next' ? right : left;
  activePage.classList.add(direction === 'next' ? 'page-turn-next' : 'page-turn-prev');

  setTimeout(() => {
    renderView(nextView);
    currentView = nextView;
  }, 420);

  setTimeout(() => {
    left.classList.remove('page-turn-prev');
    right.classList.remove('page-turn-next');
    isAnimating = false;
  }, 1100);
}

function nextSpread() {
  if (currentView < views.length - 1) {
    turnToView(currentView + 1, 'next');
  }
}

function prevSpread() {
  if (currentView > 0) {
    turnToView(currentView - 1, 'prev');
  }
}

function goToPage(pageNum) {
  let targetView = 0;
  if (pageNum <= 1) targetView = 0;
  else if (pageNum <= 3) targetView = 1;
  else if (pageNum <= 5) targetView = 2;
  else targetView = 3;

  const direction = targetView > currentView ? 'next' : 'prev';
  if (targetView !== currentView) {
    turnToView(targetView, direction);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  renderView(0);
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') nextSpread();
  if (e.key === 'ArrowLeft') prevSpread();
});
