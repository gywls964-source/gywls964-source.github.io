// 다크모드 토글
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// 로컬 스토리지에서 다크모드 설정 불러오기
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️ 라이트모드';
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙 다크모드';
    }
}

// 다크모드 토글 이벤트
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️ 라이트모드';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙 다크모드';
    }
});

// 페이지 로드 시 테마 로드
window.addEventListener('DOMContentLoaded', loadTheme);

// 연락처 클릭 이벤트
const emailElement = document.getElementById('email');
const phoneElement = document.getElementById('phone');

emailElement.addEventListener('click', () => {
    const email = 'hyojin.space@email.com';
    emailElement.textContent = email;
    
    // 복사 기능
    navigator.clipboard.writeText(email).then(() => {
        const originalText = emailElement.textContent;
        emailElement.textContent = '복사되었습니다!';
        setTimeout(() => {
            emailElement.textContent = originalText;
        }, 2000);
    });
});

phoneElement.addEventListener('click', () => {
    const phone = '010-1234-5678';
    phoneElement.textContent = phone;
    
    // 복사 기능
    navigator.clipboard.writeText(phone).then(() => {
        const originalText = phoneElement.textContent;
        phoneElement.textContent = '복사되었습니다!';
        setTimeout(() => {
            phoneElement.textContent = originalText;
        }, 2000);
    });
});

// 네비게이션 스크롤 이벤트
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        const sections = document.querySelectorAll('section, header');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id') || '';
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

// 네비게이션 링크 클릭 시 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// 프로젝트 카드 호버 효과
const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
    
    item.addEventListener('click', function() {
        const projectName = this.querySelector('.project-overlay h3').textContent;
        console.log('프로젝트 선택:', projectName);
    });
});

// 페이지 로드 완료 시 메시지
window.addEventListener('load', () => {
    console.log('이효진 공간디자이너 포트폴리오가 로드되었습니다! 🎨');
});

// Intersection Observer를 사용한 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 섹션 요소에 옵저버 적용
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.about-section, .contact-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});

// 페이지 로드 완료 시 메시지
window.addEventListener('load', () => {
    console.log('이효진 공간디자이너 포트폴리오가 로드되었습니다! 🎨');
});

// 마우스 호버 효과 추가
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// 프로젝트 카드 호버 효과
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
        this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
        this.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    });
});
