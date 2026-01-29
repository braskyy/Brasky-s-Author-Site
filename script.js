{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /**\
 * DANIEL NEBRASKA STAINKAMP - PORTFOLIO LOGIC\
 */\
\
function showSection(sectionId) \{\
    // 1. Hide all sections\
    const sections = document.querySelectorAll('.content-section');\
    sections.forEach(section => \{\
        section.classList.remove('active');\
    \});\
\
    // 2. Show requested section\
    const target = document.getElementById(sectionId);\
    if (target) \{\
        target.classList.add('active');\
    \}\
\
    // 3. Update sidebar navigation styles\
    const navLinks = document.querySelectorAll('.side-nav a');\
    navLinks.forEach(link => \{\
        // If the link's onclick contains the current sectionId, highlight it\
        if (link.getAttribute('onclick').includes(sectionId)) \{\
            link.style.opacity = "1";\
            link.style.color = "var(--accent-color)";\
        \} else \{\
            link.style.opacity = "0.4";\
            link.style.color = "var(--text-color)";\
        \}\
    \});\
\
    // 4. Reset scroll of the main container to the top\
    document.querySelector('.main-content').scrollTo(\{\
        top: 0,\
        behavior: 'smooth'\
    \});\
\}\
\
// Ensure "Home" is highlighted on initial page load\
document.addEventListener('DOMContentLoaded', () => \{\
    showSection('home');\
\});}