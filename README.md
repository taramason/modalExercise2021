# Design System - Questions

### What are the necessary predefined rules? (These will evolve over time) 
- Compiled CSS files? CSS in Javascript?
- Do we have a “voice” that it we want to use in the display/demo of the library.

### Theming- how will you provide custom style theming? 
- Are there designs that we are matching or is it more loose?
- predefined colors or totally custom
- naming conventions
- Does the company already have consistent rules/system around how colors are used?

### What is the grid system?
- Assume a 12 grid system
- Does this need to be defined or is there one already in place?
- How will components follow this system? (rules)

### Typography- 
- How will it scale?
- Maintain consistency?
- Will you allow any font style or are there specific options? 
- Probably good to have predefined “safe” fonts and a “use at your own discretion” fonts with tools/helpers to adjust spacing, etc.﻿ 
- Naming Convention
- Does one exist, use a convention, use own?
- Is there an Icon Library?
- How and where is it hosted?
- How will developers pull them into library components?
- Do you need to create one?

### How will the Design System library and rules be displayed?
- Storybook seems to be popular.
- Do you need to look into alternatives?
- Are there needs not addressed in current use?
- Wishlist items from people who have used current/other system?

### How will users/developers pull in the system components?
- Copy/paste
- Linking a package
- Other options?

### Versioning
- How will versioning work? 
- Do we need a lab?
- Version by component?
- Or Package versioning?
- Use semantic versioning for major minor patch updates, encourage designers to use versioning in their updates.
- Breaking.feature.fix to clear ambiguity
- Breaking versions- explain what is breaking about the version in detail so that devs know what will be involved when they upgrade
- Encourage not automatically updating to the latest package version.
- How deprecate quickly and easily if you find a major flaw?
- Blog post for latest explanations on versions?

### Testing
- Library should have its own set of tests that are developed as it is built out
- Should components have built-in ids or a prop (for React) that will enable them to add a data-test attribute?


### Localization?
- Are there behavioral or visual patterns that are different in other parts of the world that need to be taken into consideration?
- Do you need to provide a way for users to specify a language or translations?

### Accessibility?
- In a component-based system, each component needs to provide all the need accessibility options so that it can be a functional part of the entire page from an accessibility standpoint. It can be hard to see all of the possible scenarios when building a small piece that will be used as part of a page.
- Visual - contrast, font size
- Keyboard - can it be navigated with a keyboard
- Focus - if there is something that should be focused, is it? Will probably need to enable removing focus for caveat/edge case situations.
- Screen readers - Can you navigate correctly with a screen reader? Do images need descriptions? Are background images properly added?
- Dynamic Titles and Descriptions
- Do you need to provide education to developers?
- Do you have an automatic Accessibility check system?
- What level of rating are we shooting for?
- Build in custom lint rules to help developers.
- Do you need to build in constraints or just suggestions?
- Tools for text contrast?
- Component-based libraries will need to be flexible enough to render to the DOM the appropriate semantic hierarchy
- Aria labels?

### How will we develop a feedback loop from developers?
- Ticketing System where devs can personally write up a ticket, PO’s can prioritize
- Direct contact is great but often allows issues to fall through the crack, hard to manage

### What is the process for acceptance? 
- Design review
- working "In the wild” review

### Other:


