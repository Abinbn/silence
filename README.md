# SILENCE

> Silence is not empty. It’s protected.

This application is a digital sanctuary designed to provide a space of quiet in a loud online world. It is built on the principle of **power through restraint**. It does not track, analyze, or motivate. It exists only to offer and protect moments of silence.

## The Philosophy

In a world of constant notifications and endless feeds, true silence has become a luxury. This app is an attempt to reclaim that silence, not as a productivity hack, but as a fundamental human right.

*   **Silence is a place, not an activity.** You *enter* silence, you don't "start a session."
*   **Silence has no success state.** There are no streaks, no metrics, and no rewards. Affirmations are optional, because for some, pure absence is the goal.
*   **Silence is a right, not a feature.** You don't have to earn it. It's something you allow.

This app will never read your data, learn from your behavior, or try to sell you anything. Its only goal is to be a reliable, trustworthy tool for finding quiet.

## Features

Every feature is designed to reduce explanation and simplify choice.

*   **Contextual Silence:** Instead of just timers, you can enter silence for user-declared contexts like "Before sleep" or "When overwhelmed."
*   **Indefinite Silence:** A session that lasts until you consciously choose to end it, reinforcing that it's a choice, not a countdown.
*   **No End Screen Mode:** An optional setting to have silence simply fade away, without any concluding message or affirmation.
*   **Tactile Feedback:** A soft, optional vibration at the beginning and end of a session to mark the transition without visual or auditory cues.
*   **Gentle Monthly Reminder:** A single, optional, non-urgent notification per month: “If the internet feels loud today, silence is here.”

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **UI Library:** [React](https://react.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
*   **AI/Generative:** [Genkit](https://firebase.google.com/docs/genkit)

## Getting Started

To run the project locally, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Building for Android (Play Store)

This is a web application, but it can be packaged for the Android Play Store using [Capacitor](https://capacitorjs.com/). Capacitor wraps the web app in a native Android container, allowing it to be submitted to the store.

The current codebase is configured for Capacitor. While this environment cannot generate the final APK, you can do so by following the official Capacitor documentation for adding the Android platform and building the project in Android Studio.
