import React, { useEffect, useRef, useCallback, useState } from 'react';

const SlideParticles = ({ color = 'blue' }) => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const animationRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    // Color themes for different services
    const colorThemes = {
        blue: {
            particle: ['rgba(59, 130, 246, 0.6)', 'rgba(96, 165, 250, 0.5)', 'rgba(147, 197, 253, 0.4)'],
            glow: 'rgba(59, 130, 246, 0.3)',
            line: 'rgba(59, 130, 246, 0.15)'
        },
        purple: {
            particle: ['rgba(168, 85, 247, 0.6)', 'rgba(192, 132, 252, 0.5)', 'rgba(216, 180, 254, 0.4)'],
            glow: 'rgba(168, 85, 247, 0.3)',
            line: 'rgba(168, 85, 247, 0.15)'
        },
        cyan: {
            particle: ['rgba(6, 182, 212, 0.6)', 'rgba(34, 211, 238, 0.5)', 'rgba(103, 232, 249, 0.4)'],
            glow: 'rgba(6, 182, 212, 0.3)',
            line: 'rgba(6, 182, 212, 0.15)'
        },
        pink: {
            particle: ['rgba(236, 72, 153, 0.6)', 'rgba(244, 114, 182, 0.5)', 'rgba(249, 168, 212, 0.4)'],
            glow: 'rgba(236, 72, 153, 0.3)',
            line: 'rgba(236, 72, 153, 0.15)'
        }
    };

    const theme = colorThemes[color] || colorThemes.blue;

    class Particle {
        constructor(canvas, theme) {
            this.canvas = canvas;
            this.theme = theme;
            this.reset();
        }

        reset() {
            this.x = Math.random() * this.canvas.width;
            this.y = Math.random() * this.canvas.height;
            this.baseX = this.x;
            this.baseY = this.y;
            this.size = Math.random() * 2.5 + 0.5;
            this.baseSize = this.size;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.color = this.theme.particle[Math.floor(Math.random() * this.theme.particle.length)];
            this.brightness = 0;
        }

        draw(ctx) {
            // Draw particle with glow when near cursor
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();

            // Add glow effect when brightness is high
            if (this.brightness > 0) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size + this.brightness * 3, 0, Math.PI * 2);
                ctx.fillStyle = this.theme.glow.replace('0.3', (0.1 * this.brightness).toString());
                ctx.fill();
            }
        }

        update(mouseX, mouseY) {
            // Calculate distance from mouse
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 150;

            // React to cursor proximity
            if (distance < maxDistance) {
                // Increase brightness based on proximity
                this.brightness = 1 - (distance / maxDistance);

                // Slightly push particles away from cursor
                const force = (maxDistance - distance) / maxDistance;
                const angle = Math.atan2(dy, dx);
                this.x -= Math.cos(angle) * force * 0.5;
                this.y -= Math.sin(angle) * force * 0.5;

                // Increase size slightly
                this.size = this.baseSize + this.brightness * 1.5;
            } else {
                this.brightness *= 0.95;
                this.size = this.baseSize + this.brightness * 1.5;

                // Return to base position slowly
                this.x += (this.baseX - this.x) * 0.02;
                this.y += (this.baseY - this.y) * 0.02;
            }

            // Gentle floating movement
            this.baseX += this.speedX;
            this.baseY += this.speedY;

            // Wrap around edges
            if (this.baseX < 0) this.baseX = this.canvas.width;
            if (this.baseX > this.canvas.width) this.baseX = 0;
            if (this.baseY < 0) this.baseY = this.canvas.height;
            if (this.baseY > this.canvas.height) this.baseY = 0;
        }
    }

    const initParticles = useCallback((canvas) => {
        const numberOfParticles = Math.floor((canvas.width * canvas.height) / 6000);
        particlesRef.current = [];

        for (let i = 0; i < Math.min(numberOfParticles, 120); i++) {
            particlesRef.current.push(new Particle(canvas, theme));
        }
    }, [theme]);

    const connectParticles = useCallback((ctx, particles, mouseX, mouseY) => {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 80) {
                    // Check if near cursor for brighter lines
                    const midX = (particles[a].x + particles[b].x) / 2;
                    const midY = (particles[a].y + particles[b].y) / 2;
                    const distToMouse = Math.sqrt((midX - mouseX) ** 2 + (midY - mouseY) ** 2);

                    let opacity = (1 - distance / 80) * 0.3;
                    if (distToMouse < 150) {
                        opacity += (1 - distToMouse / 150) * 0.3;
                    }

                    ctx.strokeStyle = theme.line.replace('0.15', opacity.toString());
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }, [theme]);

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const { x: mouseX, y: mouseY } = mouseRef.current;

        // Draw connections
        connectParticles(ctx, particlesRef.current, mouseX, mouseY);

        // Update and draw particles
        particlesRef.current.forEach(particle => {
            particle.update(mouseX, mouseY);
            particle.draw(ctx);
        });

        animationRef.current = requestAnimationFrame(animate);
    }, [connectParticles]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            const parent = canvas.parentElement;
            canvas.width = parent?.offsetWidth || window.innerWidth;
            canvas.height = parent?.offsetHeight || window.innerHeight;
            initParticles(canvas);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        canvas.addEventListener('mousemove', handleMouseMove);

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [animate, initParticles]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-auto"
            style={{
                opacity: 0.8,
            }}
        />
    );
};

export default SlideParticles;
