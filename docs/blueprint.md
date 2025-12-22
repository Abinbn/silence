# **App Name**: Silence

## Core Features:

- Accessibility Interceptor: Blocks infinite scroll, autoplay, and feed refresh loops based on UI patterns, without reading text or identifying apps.
- Overlay Mask Renderer: Draws a semi-transparent black overlay on feed regions during silence sessions to limit visual stimulation.
- Notification Muter: Temporarily silences notifications without reading their content, restoring normal behavior after the silence period.
- Timer Engine: Local timer to manage silence session durations, displayed with decreasing opacity.
- Subscription Gate: Implements a subscription model to offer unlimited silence, custom durations, and emergency silence features.

## Style Guidelines:

- Primary color: Dark gray (#333333) to create a sense of calm and absence.
- Background color: Almost-black (#1A1A1A) to reinforce the dark-first theme.
- Accent color: Muted light gray (#A9A9A9) for timer display, ensuring readability without distraction.
- Font: 'Inter', a grotesque-style sans-serif with a neutral look for both timer display and any text (such as end screen and settings).
- Minimalist icons only where necessary such as the settings page
- Fullscreen dark interface for silence sessions, with a faded timer display.
- Fading animation for the timer display during silence sessions, reducing visual noise.