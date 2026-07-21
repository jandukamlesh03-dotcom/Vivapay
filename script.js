// ============================================================
//  VIVI PAY – ENHANCED INTERACTIONS & ANIMATIONS
//  (Adds hover, click, floating, glow effects)
// ============================================================

(function() {
    'use strict';

    // ---- 1. Button Press Animation (Scale down) ----
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('.btn-primary, .btn-wood, .qa-btn, .mine-item, .tab-btn, .copy-btn, .btn-google');
        if (btn) {
            btn.style.transition = 'transform 0.1s ease';
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 150);
        }
    });

    // ---- 2. Card Lift on Hover (desktop) ----
    if (window.innerWidth > 768) {
        document.querySelectorAll('.stat-box, .token-card, .mystery-progress-box, .referral-preview, .notice-box')
            .forEach(el => {
                el.addEventListener('mouseenter', function() {
                    this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
                    this.style.transform = 'translateY(-4px)';
                    this.style.boxShadow = '0 12px 40px rgba(0,0,0,0.6)';
                });
                el.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '';
                });
            });
    }

    // ---- 3. Glow Pulse on Balance (already in CSS) ----
    // We can add a subtle shimmer overlay via JS if needed.

    // ---- 4. Floating Animation (already in CSS via .token-card) ----

    // ---- 5. Add subtle particle effect (optional lightweight) ----
    // We'll create a few floating particles in the background.
    function createParticles() {
        const container = document.querySelector('.app-card');
        if (!container) return;
        const particlesCount = 8;
        for (let i = 0; i < particlesCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(245, 179, 66, 0.15);
                border-radius: 50%;
                pointer-events: none;
                z-index: 0;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: floatParticle ${8 + Math.random() * 8}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            container.appendChild(particle);
        }
        // Add keyframe if not exists
        if (!document.getElementById('particleKeyframes')) {
            const style = document.createElement('style');
            style.id = 'particleKeyframes';
            style.textContent = `
                @keyframes floatParticle {
                    0% { transform: translate(0, 0) scale(0); opacity: 0; }
                    20% { opacity: 1; }
                    80% { opacity: 1; }
                    100% { transform: translate(${Math.random() > 0.5 ? '' : '-'}30px, -80px) scale(1); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Wait for DOM to load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createParticles);
    } else {
        createParticles();
    }

    // ---- 6. Add glow border animation on focus inputs ----
    document.querySelectorAll('.form-group input').forEach(input => {
        input.addEventListener('focus', function() {
            this.closest('.form-group').style.setProperty('--glow-color', 'rgba(245, 179, 66, 0.2)');
        });
        input.addEventListener('blur', function() {
            this.closest('.form-group').style.setProperty('--glow-color', 'transparent');
        });
    });

    // ---- 7. Smooth scroll for bottom nav (if needed) ----
    // Already handled by tab switching.

})();
