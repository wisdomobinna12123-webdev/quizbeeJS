# Quizbee 🐝

A minimalist, tech-flavored quiz app built with vanilla HTML, CSS, and JavaScript.
No frameworks. No build step. Just clean, readable code.

![Status](https://img.shields.io/badge/status-active-3ecf7e?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-7089f0?style=flat-square)
![Made with](https://img.shields.io/badge/made%20with-vanilla%20JS-f7df1e?style=flat-square)

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Quiz Data Format](#quiz-data-format)
6. [Responsive Strategy](#responsive-strategy)
7. [Theming](#theming)
8. [Local Storage Keys](#local-storage-keys)
9. [Dev Helpers](#dev-helpers)
10. [Accessibility Notes](#accessibility-notes)
11. [Roadmap](#roadmap)
12. [License](#license)
13. [Credits](#credits)

---

## Overview

Quizbee is a single-page quiz application that presents questions one at a time,
gives instant visual feedback, tracks your score, and remembers where you left off.
The UI shifts between a **full-screen mobile app** layout and a **centered desktop card**
depending on viewport size, with a dedicated tier for very small screens (280px+).

---

## Features

- 🎯 **One question at a time** — focused, distraction-free flow
- ✅ **Instant feedback** — correct answers highlight green, wrong ones red, with the right answer revealed
- 🏆 **Live scoring** — points update as you play
- 💾 **Progress persistence** — quiz state survives page reloads via `localStorage`
- 🎲 **Shuffled options** — answer order randomizes each load
- 👋 **Welcome modal** — onboarding card on first visit (dismissible, optionally remembered)
- 📱 **Fully responsive** — app-style on mobile, card-style on desktop, tuned for 280px screens
- ♿ **Keyboard friendly** — focus trap in modal, Escape to close, focus-visible rings
- 🎨 **Soft dark theme** — token-driven palette, no harsh blacks

---
