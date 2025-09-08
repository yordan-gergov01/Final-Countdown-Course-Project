# Timer Challenge Game

A small React + TypeScript project practicing timers, refs, portals, and dialog elements.

## Overview

The app is a simple challenge game:

- Enter your player name.
- Start the timer challenge.
- Try to stop the timer as close as possible to the target time.
- A modal dialog shows your result (score or "You lost!").


## Technologies Used

- React 19
- TypeScript
- Vite


## Features

- Player name input using useRef.
- Timer challenge with start/stop logic.
- Result modal rendered via a React Portal (<dialog> element).
- Custom component handle (useImperativeHandle) to control the modal from parent.
- Styled with basic CSS classes (extendable).


## Hot To Run In Locally

1. Clone repo
git clone https://github.com/your-username/timer-challenge.git
cd timer-challenge

2. Install dependencies
npm install

3. Start dev server
npm run dev
