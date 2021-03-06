# Vibrant Corpse

### A brainstorming app based on randomized word combinations (adjective-noun / adverb-verb) fetched from Words API.

> View live demo **[vibrant-corpse.herokuapp.com](https://vibrant-corpse.herokuapp.com/)**

> View wireframe **[Balsalmiq MVP wireframe](https://balsamiq.cloud/skaraus/pxyxy70/r2278)**

(NB _app under development_)

Vibrant corpse (_cadavre exquis_ in French) is a game invented by the Surrealists aimed at stimulating creative response. The method involves the collection and assemblage of generated words or images, according to an agreed rule (in this case “Adjective-Noun”).

This game seeks to mimic the original by randomly generating lists of words, selected by type (adjective/adverb - noun/verb) and combining the results to create unique combinations. Intriguing combinations may then be chosen for 'workshopping' - with a timer allowing 5 minutes \* of free-flow writing.

### Features

- "random" endpoint on API is used to fetch 3 cycles of words, which the user may select by type - adjective/adverb, noun/verb
- generated word combinations may then be selected for workshopping (may be added or deleted from selected stock)
- words provide associated definitions (appearing as tooltips for desktop)
- timer set on adding word combo to the workshop textarea
- css classes (with animation) indicate when word combo has been added, and when the timer is reaching end (_set to 10s for testing!_)

---

### Installation & setup

- Clone this repo and run `npm install` to download the dependencies.
- Sign up for Words API and get credentials
- Create a `.env` file at the root level of the app folder and add the following variables:

```
WORDS_API=

```

Run `npm run dev` to launch the app and navigate to localhost:3000
This will start the node server at localhost:8080 for the dev environment.

### Tech stack

- React
- Redux
- SCSS
- Express
- Node.js
- Postgresql: **[View schema diagram](https://dbdiagram.io/d/5e0a0637edf08a25543f8004)**
- ES Lint &amp; Prettier

**The app is currently under development:**

- Add Postgresql database plus login, so that users can access and store writing
- Use react-router with pose to create suitable endpoints
- Put, Patch writing for editing
- Add / Delete favourites - and writing, with warning
- Smooth transitions (Post animation)

### Looking forward

- private public function
- Develop writing groups functionality, multiple users in a writing group, voting system (using sockets.io) to co-ordinate which vibrant corpse to work on, enabling allowed access within the group to view writing

- Textarea functionality set to fade… whenever user pauses
- Currently desktop-oriented design; address UX for mobile usage - server a different view for writing

- Develop using GraphQL API approach, with OED
