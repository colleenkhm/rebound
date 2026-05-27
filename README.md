# Rebound

A browser-based paddle-and-ball game built with vanilla HTML, CSS, and JavaScript. Keep the ball bouncing — don't let it fall past your paddle!

## How to Play

Open `index.html` in any modern browser. No build step or dependencies required.

**Move the paddle:**
- **Mouse / Touch** — click and drag anywhere in the playing area
- **Keyboard** — `←` / `A` to move left, `→` / `D` to move right

The ball speeds up automatically as your score climbs. The game ends when the ball passes the paddle.

**Scoring:** +1 point each time the ball bounces off the paddle.

## Settings

Click the **⚙** gear icon to open the settings panel (the game pauses while it's open).

| Setting | Options | Effect |
|---|---|---|
| New Game | button | Resets ball position and score |
| Difficulty | Easy / Medium / Hard | Changes ball speed and paddle step size |
| Sound Effects | checkbox | Toggles wall/paddle/game-over beeps |
| Music | checkbox | Toggles looping background music (Darude - Sandstorm) |

## Difficulty

| Level | Ball speed (`dy`) | Keyboard step (`pdx`) |
|---|---|---|
| Easy | 2 | 48 px |
| Medium | 4 | 32 px |
| Hard | 6 | 16 px |

Speed increases further by 2 every 1 000 points regardless of difficulty.

## Paddle Physics

Where the ball hits the paddle affects its horizontal bounce angle:

- **Center zone** — ball continues at normal speed (`dx = ±2`)
- **Left / Right edges** — ball angles sharply away (`dx = ±8`)

## Project Structure

```
rebound/
├── index.html      # Game markup and layout
├── rebound.js      # Game logic (movement, collision, scoring, audio)
├── rebound.css     # Styles for the playing area, paddle, ball, and HUD
└── sounds/
    ├── beepX.mp3        # Wall bounce (horizontal)
    ├── beepY.mp3        # Wall bounce (vertical)
    ├── beepPaddle.mp3   # Paddle hit
    ├── beepGameOver.mp3 # Game over
    └── darude-sandstorm.mp3  # Background music
```
