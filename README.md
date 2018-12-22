# Exquisite Corpse

Exquisite corpse (_cadavre exquis_ in French) is a game invented by the Surrealists aimed at stimulating creative response. The method involves the collection and assemblage of generated words or images, according to an agreed rule (in this case “Adjective-Noun”).

This game seeks to mimic the original by randomly generating lists of words, selected by type (adjective/adverb - noun/verb) and combining the results to create unique combinations. Intriguing combinations may then be chosen for 'workshopping' - with a timer allowing 5 minutes \* of free-flow writing.

### Features

- "random" endpoint on API is used to fetch 3 cycles of words, which the user may select by type - adjective/adverb, noun/verb
- local storage is used to select generatedword combinations for workshopping (may be added or deleted from selected stock)
- timer set on adding word combo to the workshop textarea
- css classes (with animation) indicate when word combo has been added, and when the timer is reaching end

**The app is currently under development:**

- Add descriptions as tooltips to generated word lists - this requires rebuild of word list arrays as objects with keys word: and definition, so as to pull in definition with Fetch.
- Textarea functionality set to fade… whenever user pauses
- Currently desktop-oriented design; address UX for mobile usage - server a different view for writing
- Resets required for select menus

### Looking forward

- Develop using GraphQL API approach, with OED

\* set to 10s for testing!
