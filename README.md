# Vitality Vault

---

[To view site](https://vitality-vault-omega.vercel.app/)

## Table of Contents

## [UX](#ux-1)

[Primary Goals](#primary-goals)  
[Business Goals](#business-goals)  
[User Goals](#user-goals)  
[User Stories](#user-stories)  
[Design Choices](#design-choices)  
[ERD Diagram](#erd-diagram)
[Wireframes](#wireframes)

## [Features](#features-1)

[Existing features](#existing-features)  
[User Goals mapping](#user-goals-mapping)  
[Features left to implement](#features-left-to-implement)  
[User Goals still to implement](#user-goals-still-to-implement)

## [Technologies used](#technologies-used-1)

## [Testing](#testing-1)

[Lighthouse tests](#lighthouse-tests)  
[HTML tests](#html-tests)  
[CSS tests](#css-tests)  
[Python code validation](#python-code-validation)
[API Testing](#api-testing)
[Security](#security)
[Automated Testing](#automated-testing)
[Contrast tests](#contrast-tests)  
[Keyboard Accessibility tests](#keyboard-accessibility-tests)  
[Development bugs and fixes](#development-bugs-and-fixes)  
[Cross browser testing](#cross-browser-testing)  
[User Testing](#user-testing)

## [Deployment](#deployment-1)

[How to run this project](#how-to-run-project)

## [Credits](#credits-1)

[Content/Media/Code/Acknowledgements](#contentmediacodeacknowledgements)  
[dependencies](#dependencies-for-reactvite)

### UX

---

#### Primary Goals

---

The primary goals of Vitality Vault are:

- To help simplify working out.
- To provide an extensive list of exercises to choose from and a simple form with which to build workouts.
- To show that a gym membership is not required and that, whatever your fitness level, you can work out.
- To get people working out.
- To get users trying new exercises they may not have heard of before.

[Back to top](#vitality-vault)

#### Business Goals

---

The business goals of Vitality Vault are:

- To simplify planning a workout
- To optimise people's workouts.
- To maximise users experience by making the whole process as streamlined and simple as possible.
- Long term business goals include providing an all-in-one experience where users can track progress and upload weights used, and get back body composition information as well as calorie tracking.

[Back to top](#vitality-vault)

#### User Goals

---

The goals for users would be:

- Save time looking for the perfect workout
- Reduce time wasted by creating a personalised workout that suits their lifestyle
- Avoid injuries by providing images so they know exactly what to do.
- Find inspiration from new exercises.

[Back to top](#vitality-vault)

#### User Stories

---

For full Acceptance Criteria and tasks please follow [this link](https://github.com/users/devildex91/projects/9) to the project board for Vitality Vault.

- As a *user tracking my strength, *I can *view the specific details of a previous days workout I completed *so that I know exactly what Ive been doing to make sure I’m not doing the wrong workout.

- As a registered fitness user, I can create and save a custom workout routine with a name and a list of exercises  so that  I can quickly select it whenever I go to the gym.

- As a flexible trainee, I can edit the sets and reps of a previously created workout  so that  I can keep my workouts fresh and up to date

- As a user cleaning up my profile, I can delete an old workout routine that I no longer perform so that my list of active routines stays organised and clutter-free.

[Back to top](#vitality-vault)

#### Design Choices

---

The original design for this project included a workout page, a body tracker page, and a calorie log page along with graphs. The scope of the project meant it was simplified down to a simple app where you can Create, Read, Update, and Delete a workout.
[click here for original design](/frontend/src/assets/images/original-tablet-design.png).
This original design is reflected in the user stories.

The brand identity and colour themes have been chosen to project strength and trust through the use of two contrasting themes. The blues and whites of the Nord theme present trust, stability, and professionalism. The Halloween theme helps users in dimly lit gyms by reducing eye strain, while accent colours help direct users eyes towards the call‑to‑action buttons.

##### Fonts

---

  <details>
 <summary>logo</summary>

![logo dark theme](/frontend/src/assets/images/VV-logo-large.png)
[logo light theme](/frontend/src/assets/images/VV-logo-blue-large.png)

The logo and name have been chosen because firstly the name suggests it is energetic and secure, which are both important aspects to convey to the user. The Logo then helps to back up this claim with a vault within a shield presenting a secure environment to create your workout.

  </details>

 <details>
 <summary>Fonts</summary>

The typography uses the DaisyUI default font. This increases legibility, which is especially important in a workout setting where fatigue may set in, so a simple font helps reduce cognitive load. Bold fonts add hierarchy, especially when you have a title like “Monday” followed by an exercise list.

 </details>

[Back to top](#vitality-vault)

##### Colours

The colours chosen are the Nord theme for the light theme and Halloween for the dark theme. The default colours for these themes are
Nord
---
primary #5E81AC frost blue(updated to #25364B to pass contrast ratios)
base- 100 #ECEFF4 light background
base-200 #E5E9F0 middle light background
base-300 #D8DEE9 darker light background

Halloween
---
primary #F28C18 jack-o-lantern orange
base- 100 #212121 charcoal black background
base-200 #1a1a1a darker surface panel background
base-300 #121212 deepest background tint

More colours are available for each theme but these are the ones used for the app.

I chose these themes because I felt the contrast reflected suitable dark/light themes, whilst changing the psychological vibe of the app to reflect the users mood. Nords blues and whites provide a crisp, calm clean and clinical environment to lower the heart rate and make the workout feel more manageable. Halloween in contrast gives a High intensity and aggressive vibe. The stark contrast between the charcoal and neon oranges, greens and purples help to create an energy boosting high adrenaline atmosphere.

[Back to top](#vitality-vault)

##### Styling

---

The styling has been chosen with efficiency of movement in mind. This is shown in the use of select elements across the app, which give the user streamlined interactions with less room for error, helping both the user and the admin. This reduces interaction cost and effort needed to create a workout and improves data flow. The styling also softens the app and makes it feel more like a trainer than a machine, improving user interactivity.

[back to top](#vitality-vault)

##### Background

---

The background colours have been chosen to give the app soft layers, drawing you to the content at the centre. Base‑100 is used for the background up to Base‑300 for the cards containing user information. Base‑200 acts as a bridge between Base‑100 and Base‑300 across both themes, adding a uniform yet softer feel for the user.

[Back to top](#vitality-vault)

##### Images

---

All images for the project were sourced from the same database as the exercise data, and there are two images for every exercise. They are all stored in Cloudinary to improve load times while keeping quality high.

[Back to top](#vitality-vault)

##### ERD diagram 
---
Please see below diagram of the flow of data through this app.  

![ERD diagram](/frontend/src/assets/images/ERD-diagram.png)

##### Wireframes

---
###### Mobile Wireframes 

<details>
<summary>Homepage</summary>

![homepage](/frontend/src/assets/images/mobile-homepage-wireframe.png)

The mobile homepage initially displays the company logo, which fades away after a couple of seconds. The main content then fades in between the navbar and footer, which act as familiar constants throughout the app. The main content includes a paragraph explaining the app’s purpose and a button linking to the login page, along with a drop-down displaying login and register links.

</details>

<details>
<summary>Login/ Register pages</summary>

![login page](/frontend/src/assets/images/mobile-login-register-wireframe.png)

These pages are designed to be near identical for ease of use. They both contain text in the top corner that will either say Please login or please register below. The forms are both identical as well, the only difference being that the content of the buttons switches between login and register depending on your current location. The drop-down links at the top also change slightly depending on location. So for example if you are on the login page it will say register and vice versa for the register page. Other than this both pages are identical on all screen sizes.  
</details>

<details>
<summary>Workout plan</summary>

![workout plan page](/frontend/src/assets/images/mobile-workoutplan-wireframe.png)

The workout page is designed to have all the information at hand without drawing the user's focus. The first thing available to the user is a drop-down to select the current workout this will then be logged to the user profile. This is done so that when you click on the other tabs available on the page the information will already have been fetched so that it is readily available to the user. Below this you will have tabs for create, current and edit plan tabs. The default selection create plan renders a form to create your workout before submitting it to the backend. The next tab along edit plan will render a form which means you can select any workout that you have created to make changes to individual days or delete days exercises and even delete them entirely. The final tab current plan renders four separate tabs below it which are Today, Previous, Tomorrow or Full Plan which gives you the options to separate the content of your workout however you want. Full plan renders your workout in full with Today's tab separating your workout to just display the workout you have planned for today. previous brings you yesterday's workout so you can check what you have been doing. Tomorrow's workout brings you tomorrows workout plan so you can prepare or set up in advance for tomorrows workout.
    
</details>

###### Desktop/tablet view wireframes

- Originally an elaborate design with tablet view and desktop view being entirely different with extra columns in the grid appearing on larger screens. After the size of the app was downscaled along with the features to a simple Workout planner app this was no longer required. As the desktop design was implemented first the four grid column system was kept in place and the tablet view removed from the app. This is reflected in the wireframes only showing desktop view below. 

<details>
<summary> Homepage</summary>

![Homepage view](/frontend/src/assets/images/Desktop-view-homepage-wireframe.png)

 The same effects described in the mobile section are relevant for the desktop view as well with everything being near identical at this stage of the app to the mobile section.
</details>

<details>
<summary>login/register page</summary>

![login page](/frontend/src/assets/images/Desktop-view-login-register-wireframe.png)

As the page is identical on all screen sizes please see description in Mobile wireframes for full description of the page.
</details>

<details>

<summary>Workout plan page</summary>

![workout plan](/frontend/src/assets/images/Desktop-view-workoutplan-wireframe.png)

The tablet and desktop views render slightly different the start of the page is the same with the same drop-down to select your current workout. Following on from this the right hand side of the page renders the same Today’s, Full, Previous and Tomorrows plans. The left hand side of the page has two tabs for the Create and Edit plan forms. Below this is where the view changes from the mobile view and depending on what today’s workout is an Exercise Carousel will render displaying pictures of the exercises in your current workout or a default image of the company logo if the day is a rest day.  
</details>

[Back to top](#vitality-vault)

### Features

---

#### Existing Features
---
- Dynamic Homepage explaining the site and how it can help you.
- Create workout form with extensive list of exercises to choose from.
- Edit workout form with ability to change/update or even delete the workout. 
- Ability to single out yesterdays, tomorrows or even the full workout plan for viewing. 
- On larger screens a carousel of images displaying pictures of the workout you have planned for the day.
- Ability to change the theme of the website to suit your own personal preferences which saves so can continue where you left off the next time you log in. 

[Back to top](#vitality-vault)

### User Goals mapping

---

<details>
<summary>User goals mapping</summary>

- To support the existing features that have been implemented, please see the table below that outlines implemented User Stories and their supporting evidence screenshots.

| User Story                                                                                                                                                                                                  | Supporting screenshot                                                     |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |-------------------------------------------------------------------------  |
| As a user tracking my strength I can view the specific <br>details of a previous days workout I completed so that <br>I know exactly what Ive been doing to make sure I am <br>not doing the wrong workout  | [previous plan](/frontend/src/assets/images/previous-plan-evidence.png)   |
| As a registered fitness user, I can create and save a <br>custom workout routine with a name and a list of exercises<br> so that I can quickly select it whenever I go to the gym.                          | [create plan](/frontend/src/assets/images/create-plan-evidence.png)       |
| As a flexible trainee, I can edit the sets and reps of a previously <br>created workout so that I can keep my workouts up to date.                                                                          | [edit plan](/frontend/src/assets/images/edit-plan-evidence.png)           |
| As a user cleaning up my profile, I can delete an old workout routine<br>that I no longer perform so that my list of active routines stays <br> organised and clutter free                                 | [edit plan](/frontend/src/assets/images/edit-plan-evidence.png)           |

[Back to top](#vitality-vault)

</details>

#### Features left to implement

---
- Body tracker page.
- Calorie Log page.
- Ability to log calories.
- Graphs to show your progress.
- Ability to add weights you used to a workout.

[Back to top](#vitality-vault)

### User Goals still to implement

---

<details>
<summary>User stories still to implement</summary>

For full list of User Stories still to implement  please follow [this link](https://github.com/users/devildex91/projects/9) to the project board for Vitality Vault. These represent the original scope before the app was downscaled. 
</details>

[Back to top](#vitality-vault)

### Technologies used

---

| Technology     | Use                                       |
| -------------- | ----------------------------------------- |
| Visual Studios | Primary IDE                               |
| Vite           | Development Server                        |
| React          | Javascript library/component architecture |
| GITHUB         | Hosting and managing repositories         |
| GEMINI         | Supported learning and best practices     |
| CHAT-GPT       | Supported adding exercises to database    |
| GITHUB copilot | Supported learning and best practices     |
| HTML           | Language used                             |
| CSS            | Language used                             |
| Javascript     | Language used                             |
| Python         | Language used                             |
| Django         | Backend Environment                       |
| Django rest    |API linking react and Django/authentication|
| Daisy UI       |React UI                                   |
| Tailwind CSS   | CSS styling                               |

[Back to top](#vitality-vault)

## Testing

---

### Lighthouse tests

---

Note--- all screenshots are of the dark Halloween theme but similar tests were carried out for the Nord theme as well. Apart from having to update the primary-colour for improved contrast ratios yielded the exact same results as the Halloween theme.

 <details>

 <summary>Lighthouse test results</summary>

#### mobile content scores

---

| mobile              | performance | Best practices | Accessibility | SEO     | expected/actual |
| ------------------- | ----------- | -------------- | ------------- | ------- | --------------- |
| workout plan/first  | 95/86       | 95/100         | 95/89         | 95/83   |                 |
| workout plan second | 90/91       | 100/100        | 100/100       | 90/92   |                 |
| Homepage            | 90/92       | 95/100         | 95/100        | 95/100  |                 |
| 404 page first      | 95/99       | 95/100         | 95/96         | 95/92   |                 |
| 404 page second     | 100/100     | 100/100        | 100/100       | 100/100 |                 |
| Register            | 95/100      | 95/100         | 100/96        | 100/100 |                 |
| Register second     | 95/100      | 100/100        | 100/100       | 100/100 |                 |
| Login               | 100/100     | 100/100        | 100/100       | 100/100 |                 |

#### Mobile lighthouse notes

---

When first testing the workout plan page for mobiles, I had to add labels to all select and input elements to improve accessibility. Aria‑labels were then added to all link tags, and the href tags for all social media links, as well as target="_blank" to make sure they opened in an external page. We then found the app was being slowed down by quite a lot of unused JavaScript. To fix this, we subsequently deleted all redundant code, such as unused imports and old useState values. While deleting these, we discovered that MUI icons had been installed but never removed, so these were also taken out of the codebase.

While creating the app, I also removed some prop drilling and replaced it with useContext. This led to some props still being present in the codebase, which meant we also had to delete all of these redundant props. After all of these had been deleted, a robots.txt file was added — on recommendation from the Lighthouse test — to improve the SEO score. Once all of these improvements had been made, the scores increased considerably across the board, with everything hitting 90 or above.

After these improvements had been made across the board while testing the workout page, when I came to test the homepage, I found that no further improvements were necessary, as the scores were all hitting 90 or above.

Following on from this, we moved on to the register/login pages, which both produced the same error. This error was caused by the label elements using a slightly different shade of the primary font, which had gone unnoticed until testing. This lighter shade meant that the contrast test failed. I fixed this by styling both labels to match the same shade of font used across the rest of the site.

Once I had solved this error, I realised that I had not tested the Nord theme at all, which — upon investigation — was failing contrast ratio checks. The standard primary colour used for the font, although passing on Halloween, failed on Nord because the background did not have enough contrast with this primary font. I solved this by adding custom styling to change the primary colour on the Nord theme, which then passed contrast testing. As this was the only difference between the tests on Nord and the tests on Halloween, I have chosen not to supply the Nord tests as well as the Halloween tests, as I do not feel there is anything to be gained, but I have provided both the failed contrast tests and the corrected contrast tests in the relevant section.

The 404 page Lighthouse testing showed a drop in the accessibility score. This was because a button element containing a link tag was causing a saturation and spacing error for best practices. The remedy for this was to remove the button element completely, and then style the link tag to look like a button so that it worked for both accessibility and appearance.
#### Mobile lighthouse tests

---

- ![original scores mobile](/frontend/src/assets/images/mobile-original-lighthouse.png)
- ![final test mobile](/frontend/src/assets/images/mobile-second-lighthouse.png)
- ![404 first test](/frontend/src/assets/images/404-page-original-lighthouse.png)
- ![404 second test](/frontend//src/assets/images/404-page-mobile.png)
- ![homepage](/frontend/src/assets/images/homepage-mobile-lighthouse-original.png)
- ![register first](/frontend/src/assets/images/mobile-register-first-lighthouse.png)
- ![register second](/frontend/src/assets/images/mobile-register-lighthouse.png)
- ![login](/frontend/src/assets/images/login-mobile-lighthouse.png)


#### desktop lighthouse scores

---

| Desktop             | performance | Best practices | Accessibility | SEO     | expected/actual |
| ------------------- | ----------- | -------------- | ------------- | ------- | --------------- |
| workout plan/first  | 95/97       | 95/77          | 95/90         | 95/83   |                 |
| workout plan second | 97/98       | 77/77          | 100/100       | 90/92   |                 |
| Homepage            | 95/95       | 95/100         | 95/100        | 95/100  |                 |
| 404 page            | 95/100      | 95/100         | 95/100        | 95/100  |                 |
| Login               | 100/100     | 100/100        | 100/100       | 100/100 |                 |
| Register            | 100/100     | 100/100        | 100/100       | 100/100 |                 |
|                     |             |                |               |         |                 |
|                     |             |                |               |         |                 |

#### Desktop lighthouse notes

---

All testing for desktop‑sized screens was carried out alongside mobile testing, with the only real issue occurring on the workout plan page. This problem arose because the carousel of images only renders on tablet screens and above. This led to a previously unforeseen error relating to third‑party cookies, because although the images come from a linked Cloudinary account, the account name is treated as a third‑party source.

To try to remedy this, I added some security patches to the relevant vercel.json, but this introduced further problems and caused the images to fail to load entirely. The simplest fix would have been to change the name of my Cloudinary account, but I was unable to do so because of the type of account I have. After trying several different approaches, I decided it was best to leave the issue as it is, as we know the images are not truly third‑party, and I do not have the relevant Cloudinary plan to resolve the warning.

As all other scores were in the 90s, and only the best‑practice score was lower than desired, I decided the most appropriate course of action was to document the reasoning and explain why the issue cannot be fixed.

#### Desktop lighthouse tests

---

- ![original scores desktop](/frontend/src/assets/images/desktop-original-lighthouse.png)
- ![second desktop test](/frontend//src/assets/images/desktop-second-lighthouse.png)
- ![404 mobile test](/frontend/src/assets/images/404-page-mobile.png)
- ![homepage](/frontend/src/assets/images/homepage-mobile-lighthouse-original.png)
- ![register mobile](/frontend/src/assets/images/mobile-register-first-lighthouse.png)
- ![register second](/frontend/src/assets/images/mobile-register-lighthouse.png)
- ![login mobile](/frontend/src/assets/images/login-mobile-lighthouse.png)

[Back to top](#vitality-vault)

 </details>

### HTML tests

---

[html test](/frontend/src/assets/images/html-test.png)

 <details>
 <summary> HTML tests</summary>

- As the frontend is created using React and JSX, the HTML test to code is limited as JSX does not pass through any automated test. The index.html has been tested and passed with no errors(see screenshot below). Please see automated testing below for extensive testing to make sure all JSX is behaving as intended 

![html test](/frontend/src/assets/images/html-test.png)

[Back to top](#vitality-vault)

 </details>

### CSS tests

---

<details>
 <summary> CSS testing</summary>

#### index CSS test

All CSS is inline using tailwind CSS so the only code to check within the index.css file is plug-ins to use tailwind and Daisy UI styles which are not recognised by CSS checkers. This was used to add the ability to style components inline making their reusability easier following best practices for react. 

[Back to top](#vitality-vault)

 </details>

#### Python code validation
<details>
<summary>Python validation </summary>

All models.py, serializer.py and views have been tested and passed with no syntax errors
![user-models](/frontend/src/assets/images/user-models.py-validation.png)
![user-serializer](/frontend//src/assets/images/user-serializers.py-validation.png)
![user-views](/frontend/src/assets/images/user-views.py-validation.png)
![workouts-models](/frontend/src/assets/images/workouts-models.py-validation.png)
![workouts-serializer](/frontend/src/assets/images/workouts-serializer.py-validation.png)
![workouts-views](/frontend/src/assets/images/workouts-views.py-validation.png)

</details>

[Back to top](#vitality-vault)

### API Testing 

<details>
 <summary> API Testing</summary>

---

Please find screenshots of all API routes tested to confirm working(Most of the API require authentication but have screenshot the screen to show that they are up and running where possible due to authentication.)

![api token](/frontend/src/assets/images/POST-api-token.png)
![api-token refresh](/frontend/src/assets/images/token-refresh.png)
![api-register](/frontend/src/assets/images/api-register.png)
![api-profile](/frontend/src/assets/images/api-profile.png)
![api-exercises](/frontend/src/assets/images/get-api-exercises.png)
![api-exerciseimage](/frontend/src/assets/images/get-exercise-images.png)
![api-createworkout](/frontend/src/assets/images/create-workout.png)
![api-fetchworkout](/frontend/src/assets/images/fetch-user-workout.png)
![api-update-workout](/frontend/src/assets/images/update-workout.png)

[Back to top](#vitality-vault)

</details>

### Security 
<details>
<summary>Security </summary>

![first security test](/frontend/src/assets/images/security-test-first.png)

Following the first security test we found that although a low risk we were getting an error relating to a missing security header. To fix this we have updated our vercel.json to include the new security header.

![second test](/frontend/src/assets/images/security-test-second.png)

Following on from the second security test, we fixed the missing security header but still had issues with the Referrer‑Policy not being included, as well as the presence of a robots.txt file which, although not a security risk in itself, still flags up because it has the potential to be misused. Another issue identified was that details of the server software and technology were exposed, which could be used to tailor‑make programmes designed to target specific attacks on our app.

The final security issue found was that the Content‑Security‑Policy (CSP) header configured for the web application included unsafe directives. To fix these, we added object-src 'none' to the CSP string to prevent the exploitation of legacy plug-ins such as Flash or Silverlight. We also added base-Uri 'self' to the CSP string to prevent malicious actors from injecting custom HTML. In addition, we added a Referrer-Policy: strict-origin header to protect user privacy.

![last security](/frontend/src/assets/images/security-test-last.png)

Although three low‑risk errors occurred in the final test, these were informational rather than warnings. The robots.txt warning appears because, when it is used, teams can accidentally place sensitive information in it, potentially exposing it to attackers — however, our file does not contain anything of that nature. The second warning appears because Vercel automatically injects minimal headers on the plan I am using, but this is considered low risk as Vercel clears the directory on each build.

As all of these issues are informational, we have checked that we have done everything possible to prevent them, and we have already carried out all the steps available to resolve them as effectively as possible within the frameworks and plans we are using.

</details>

[Back to top](#vitality-vault)

### Automated Testing

<details>
<summary>Automated Testing</summary>

--- 

This project relies on a comprehensive, dual-stack automated testing architecture to guarantee end-to-end data integrity, resilient component states, and absolute multi-tenant security isolation across the entire application using djangos built in testing suite along with vitest for testing the react frontend. 

#### Vitest testing

---

The frontend was tested using a mixture of Vitest, React Testing Library, and User Event. All tests were modularised across UI views and components to thoroughly cover form‑state validation, conditional workflow logic, contextual data bindings, asynchronous API response tracking, and responsive layout adaptations. Below is a brief description of all tests carried out, followed by the corresponding results. For in‑depth detail, please refer to the relevant .test.jsx files within the frontend directory.

##### Create.jsx

---

For create.jsx we tested that it:
-adds an exercise, sets and reps to Monday's workout.
- submits a workout plan

##### Current.jsx

---

For current.jsx we checked whether:
- It displayed all four tab components
- It displayed the content from those tabs. 

##### DesktopView.jsx

---

The tests for desktopview were very similar to current in the fact that we had to tested:
- That both the tab components were displayed.
- That their content were being displayed.

##### Edit.jsx

---

When testing edit.jsx we first tested:
- Whether it renders form elements and maps initial selection options correctly
- If it handles selecting a workout and conditionally unlocks subsequent drop-down segments correctly.
- Whether it triggers a PUT request payload and alerts user when saving standard changes.
- Whether it executes an API DELETE call when removing an entire routine selection.

##### Full.jsx

---

To test full.jsx we had to test that:
- It renders days chronologically and displays exercise details or rest days correctly.
- It handles empty or unselected routines gracefully without breaking runtime.

##### MobileView.jsx

---

For MobileView.jsx we tested whether:
 - It renders the three tabs and their components when required
 - It displays create workout as default.
 - All tabs were within the same radio group. 

##### Previous.jsx

---

When testing previous.jsx we tested:
- Whether it calculates yesterday correctly and renders that day's exercises.

##### Today.jsx

---

Similarly to testing previous.jsx the test was whether:
-  it calculates the day correctly and renders that day's exercises or a relaxing message if no exercises are selected.

##### Tomorrow.jsx

---

For tomorrow.jsx we tested if:
- It can correctly work out the right day
- It renders those exercises or a message if no exercises are selected.

##### WorkoutPlan.jsx

---

When testing workout plan we tested:
- That it fetches exercise data, workout plans, and user profile.

##### HomePage.jsx

---

For the homepage tests we tested: 
- It renders layout structural elements like Navbar and Footer
- It displays the welcome message and login button text
- That the correct images display depending which theme is selected.

##### Test results

 ---

 ✓ src/pages/workout-page/Today.test.jsx (2 tests) 280ms
 ✓ src/pages/workout-page/Full.test.jsx (2 tests) 309ms
   ✓ FullPlan Component (2)
     ✓ renders days chronologically and displays exercise details or rest days correctly 302ms
 ✓ src/pages/workout-page/Edit.test.jsx (4 tests) 622ms
   ✓ EditPlan Component (4)
     ✓ renders form elements and maps initial selection options correctly 320ms
Not implemented: Window's alert() method
 ✓ src/pages/workout-page/Create.test.jsx (2 tests) 1418ms
   ✓ CreatePlan (2)
     ✓ adds an exercise to Monday's workout 810ms
     ✓ submits a workout plan 605ms
 ✓ src/pages/workout-page/WorkoutPlan.test.jsx (1 test) 232ms
 ✓ src/pages/workout-page/Previous.test.jsx (1 test) 276ms
 ✓ src/pages/workout-page/Tomorrow.test.jsx (2 tests) 310ms
   ✓ TomorrowsPlan Component (2)
     ✓ calculates tomorrow's weekday accurately and renders those exercises 302ms
 ✓ src/pages/workout-page/MobileView.test.jsx (4 tests) 84ms
 ✓ src/pages/HomePage.test.jsx (4 tests) 64ms
 ✓ src/pages/workout-page/DesktopVIew.test.jsx (2 tests) 71ms
 ✓ src/pages/workout-page/Current.test.jsx (2 tests) 49ms

 Test Files  11 passed (11)
      Tests  26 passed (26)
   Start at  14:22:27
   Duration  9.19s (environment 64%, import 22%, tests 12%, transform 2%)

[Back to top](#vitality-vault)
#### Django testing 

---

The backend was tested using a mixture of Django’s Unit Testing framework and Django REST Framework’s testing utilities. All tests were modularised across applications and covered database constraints, data formatting, serialisation, security policies, and endpoint traffic handling. Below is a brief description of all tests carried out, followed by the corresponding results. For in‑depth detail, please refer to the relevant tests.py file within each app.

##### User tests 

---

To test the user models, serialisers and views we ran the following tests:
- Verify that an anonymous user can sign up successfully via POST.
- Verify an authenticated user can retrieve their own details.
- Verify unauthenticated requests are blocked from user details.
-Verify the view automatically gets or creates a user profile on the fly.

##### User Test results

---

Found 4 test(s).
Creating test database for alias 'default'...
System check identified no issues (0 silenced).
....
----------------------------------------------------------------------
Ran 4 tests in 2.063s

OK
##### Workout tests

---

To test the workouts models, serialisers and view we ran the following tests:
- Verify __str__ methods return user-friendly outputs.
- Verify on_delete=models.PROTECT blocks category deletion if exercises exist.
- Verify a workout plan cannot have two of the same days (e.g., duplicate Mondays).
- Verify an exercise cannot have duplicate step numbers for instructions.
- Verify a user cannot add the exact same exercise twice to a single workout day.
- Verify that deleting a plan wipes out days and related exercise selections.

##### Workout Test results

---

Found 6 test(s).
Creating test database for alias 'default'...
System check identified no issues (0 silenced).
......
----------------------------------------------------------------------
Ran 6 tests in 1.036s

OK

[Back to top](#vitality-vault)

</details>

### Contrast tests

---

 <details>
 <summary> Contrast testing </summary>

#### nord tests

![failed-test](/frontend/src/assets/images/failed-contrast-test.png)

![primary-base-300](/frontend/src/assets/images/nord-primary-contrast.png)

![base-300-primary](/frontend/src/assets/images/base-text-primary-bg-nord.png)

#### halloween tests

![primary-base](/frontend//src/assets/images/primary-base-300-halloween.png)

![base-primary](/frontend//src/assets/images/base-300-primary-halloween.png)

#### Contrast testing

While contrast testing I found that one of the default Nord themes i was using for text did not pass the required checks. To resolve this I changed the default primary colour for that theme to a darker blue that did pass. To make sure all the other tests passed i chose a simple solution of combining the same two colours across the nord theme and the corresponding primary and base colours for the Halloween theme. This choice gave the app a simplistic but uniform feel which I believed suited the app well and meant that all tests passed contrast testing.

[Back to top](#vitality-vault)

 </details>

### Keyboard Accessibility tests

---

 <details>
 <summary>Keyboard Accessibility</summary>

![select-box](/frontend/src/assets/images/keyboard-test-select-element.png)
![navbar](/frontend/src/assets/images/keyboard-test-dropdown.png)
![button](/frontend/src/assets/images/keyboard-test-button.png)
![tab-navigation](/frontend//src/assets/images/keyboard-test-tab-navigation.png)
![tab](/frontend/src/assets/images/keyboard-test-tabs.png)

All keyboard accessibility has been tested with screenshots above of navigation around and the different elements when selected.

[Back to top](#vitality-vault)

 </details>

### development bugs and fixes

---

<details>
<summary>Development bugs and fixes</summary>

| Development Bugs/Issues                             	| Cause                                                              	| Fix                                                                                       	|
|-----------------------------------------------------	|--------------------------------------------------------------------	|-------------------------------------------------------------------------------------------	|
| User Registration fails to complete                 	| Missing trailing slash(/) on endpoint string                       	| Corrected the registration API string                                                     	|
| Production site returns 400/500 errors              	| Misconfigured CORS origins and missing Heroku database migrations  	| Adjusted middleware settings and updated ALLOWED_HOSTS and ran database updates           	|
| Complicated data passing across workout sections    	| High component hierarchy nesting led to unstable data pipelines    	| Refactored form state into shared useContext layer                                        	|
| API calls complete successfully but state is empty  	| Workouts were saved anonymously without user relationships binding 	| Updated backend serialization classes to require user profiles                            	|
| Layout transformations behave erratically on Chrome 	| Media queries collided with outdated tablet vieweport              	| Migrated to an isMobile state controller and streamlined responsive design break points.  	|




[Back to top](#vitality-vault)

</details>

### Cross browser testing

---

<details>
<summary> Cross browser testing</summary>

- Table guide
- (Expected result/Actual result )

| Action          | All components render | Form works | Form buttons work | all tabs work correctly | site updates plans when user edits workout | External links work correctly | Images load as intended |
| --------------- | --------------------- | ---------- | ----------------- | ------------------------------- | --------------------------- | --------------------------- | -------------------------- |
| Browser         | Pass/Pass             | Pass/Pass  | Pass/Pass         | Pass/Pass                       | Pass/Pass                   | Pass/Pass                   | Pass/Pass                  |
| Chrome          | Pass/Pass             | Pass/Pass  | Pass/Pass         | Pass/Pass                       | Pass/Pass                   | Pass/Pass                   | Pass/Pass                  |
| Chrome (mobile) | Pass/Pass             | Pass/Pass  | Pass/Pass         | Pass/Pass                       | Pass/Pass                   | Pass/Pass                   | Pass/Pass                  |
| Safari          | Pass/Pass             | Pass/Pass  | Pass/Pass         | Pass/Pass                       | Pass/Pass                   | Pass/Pass                   | Pass/Pass                  |
| Edge            | Pass/Pass             | Pass/Pass  | Pass/Pass         | Pass/Pass                       | Pass/Pass                   | Pass/Pass                   | Pass/Pass                  |
| Firefox         | Pass/Pass             | Pass/Pass  | Pass/Pass         | Pass/Pass                       | Pass/Pass                   | Pass/Pass                   | Pass/Pass                  |

[Back to top](#vitality-vault)

</details>

### User testing

<details>
<summary>User testing notes</summary>

</details>

#### Issues
1. On user testing it was noted how in full plan the tables were slightly too close together and Monday was being cut off fully on smaller screens and partially on larger screens 
2. Another issue was that the buttons in editplan were slightly too close together down the centre.
3. Another issue raised in user testing was that the select workout box was not clear enough before creating a workout as it is at the top of the page.
4. This led to the same issue in edit plan where you select an exercise to edit but if none exist nothing was appearing.
#### Solutions
1. removed justify centre from the container div and added mb-6 to all apart from last table to fix the issue
2. To fix the buttons issue a margin was added pushing all of the buttons to stack. This worked well and received positive user feedback.
3. To fix this issue we added a conditional statement that when no workouts have been selected a message telling you you do not have any workouts created will appear instead.
4. Another message was added if exercises.length = 0 to say you needed to add an exercise first.
[Back to top](#vitality-vault)

</details>

[Back to top](#vitality-vault)

### Deployment

---

- ##### This app has been hosted as a mono-repo with both the backend and frontend within the same repository but hosted differently.

[To view site](https://vitality-vault-omega.vercel.app/)

#### How to run project

 <details>
 <summary>The backend has been deployed through Heroku by:</summary>

---

1. Make sure you have the Heroku CLI installed on your computer. If not [click here](https://devcenter.heroku.com/articles/heroku-cli)

2. Open git bash and login by typing: heroku login in the terminal.
3. Navigate to the root of your repository and create your Heroku app by typing:  heroku create your-app-name
4. By default, Heroku looks for manage.py in the root folder. Because your backend sits inside a subfolder, you must add the Heroku Subdirectory Buildpack. This isolates the deployment to the backend directory by typing:
heroku buildpacks:set https://github.com
5. So the builpack knows exactly where to look for your django backend add:  heroku config:set PROJECT_PATH=backend (replace backend with your name of your django backend folder)
6. Set your production settings variables on Heroku by typing:
heroku config:set SECRET_KEY="your-production-secret-key"
heroku config:set DEBUG=False
7. Add a production database(Heroku no longer offer a free tier so you will need to find one that suits your needs. I chose neon to host my postgresql database.)
8. Ensure you have the following files created in your backend folder :
 - requirements.txt containing gunicorn, dj-database-url, psycopg2-binary(may have to change version to psycopg[binary]>=3.1.0 if using latest version of python) and whitenoise.
 - Procfile containing web: gunicorn my_project.wsgi --log-file - 
 9. Deploy to Heroku by navigating into your backend folder and typing:
 git push heroku main and then once its finished building type: heroku run python manage.py migrate
 - 

</details>

<details>
<summary>To deploy the frontend to vercel</summary>

1. Create a vercel.json in your frontend directory and add: 
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
2. Import your project to vercel by logging into the [vercel dashboard](https://vercel.com).
3. Click the add new button and select Project.
4. Under Import Git Repository find your project repository and click Import.
5. On the Configure Project screen you must tell vercel to look inside the frontend subfolder by looking inside the root directory setting. 
6. Once inside the root directory settings click the edit button next to it and select the frontend folder and click continue. 
7. Ensure the framework preset drop-down says Vite or Create React App and leave the build command and output directory off.
8. If using any Environment variables like your production backend URL expand the Environment Variables and add them in here making sure to add in your KEY and production value.
9. Click the deploy button at the bottom of the page and your frontend should now be live. 

[Back to top](#vitality-vault)

</details>

 <details>  
 <summary> To download and work on the code yourself locally. </summary>

---

1.  Navigate to [devildex91/vitality-vault](https://github.com/devildex91/vitality-vault)
2.  Click on the green code button
3.  Select download zip
4.  Once downloaded, unpack the zipped file to a location of your choosing, and you can work on and run the code in an IDE of your choosing.
5.  Before running this code, set up your React environment, open a terminal and type npm install. This should download all dependencies needed. For reference see dependencies section at end of README to confirm all have been downloaded.

  </details>

  <details>  
 <summary> To fork a repository.</summary>

---

- please see [github docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) for more detailed and an easier to follow guide than I can produce but remember to navigate to [devildex91/vitality-vault](https://github.com/devildex91/vitality-vault) to fork this repository.

 </details>

[Back to top](#vitality-vault)

### Credits

---

#### Content/Media/Code/Acknowledgements

---

| Credits                                                 | Use                        |
| ------------------------------------------------------- | -------------------------- |
| [VITE documentation](https://vite.dev/)                 | deployment and setup       |
| django                                                  | backend                    |
| [GITHUB documentation](https://docs.github.com/en)      | GITHUB pages setup         |
| [REACT documentation](https://react.dev/)               | JSX elements/best practice |
| Lighthouse                                              | Testing                    |
| [validator.w3](https://validator.w3.org/)               | HTML testing               |
| [webaim](https://webaim.org/resources/contrastchecker/) | contrast testing           |
| [Logo.com](https://logo.com/)                           | Logo and title favicon     |
| [whimsical](https://whimsical.com/)                     | wireframing                |
| [Pentest tools](https://app.pentest-tools.com/)         | Security testing           |
| [Python testing](https://pythonium.net/linter)          | Python validation          |

[Back to top](#vitality-vault)
#### Exercise data credits 

---
[free exercise database](https://yuhonas.github.io/free-exercise-db/)

The exercise data is sourced from the repository linked to the website above. The models, serializers, and views were created by me to ensure the data structure was organised in the best way possible to bring the exercises across correctly. ChatGPT was then used to help me create the management folder and import all the exercises. This was done because building the full command structure was outside the scope of this project. I also felt that, as I was only using it to assist with importing the data rather than generating any production code, this was an acceptable use of AI to help populate the exercises section with the required data. 

##### Please find below a copy of the licence for the free exercise db

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

In jurisdictions that recognise copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to https://unlicense.org

###### All code was written by myself apart from the credits for the exercise data which is explained above.
[Back to top](#vitality-vault)

#### dependencies for React/Vite
---

"dependencies": {
    "@tailwindcss/vite": "^4.3.3",
    "@vitejs/plugin-react": "^6.0.5",
    "axios": "^1.18.1",
    "daisyui": "^5.7.4",
    "jwt-decode": "^4.0.0",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "react-router": "^8.3.0",
    "tailwind-animations": "^1.0.2",
    "tailwindcss": "^4.3.3",
    "vite": "^8.1.1"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^7.0.1",
    "@testing-library/react": "^16.3.3",
    "@testing-library/user-event": "^14.6.7",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "jsdom": "^29.1.1",
    "oxlint": "^1.71.0",
    "vitest": "^5.0.0"
  }

[Back to top](#vitality-vault)

#### dependencies for django 
---

asgiref==3.12.1
certifi==2026.7.22
cffi==2.1.0
charset-normalizer==3.4.9
cloudinary==1.45.0
cryptography==49.0.0
dj-database-url==3.1.2
Django==6.0.7
django-allauth==65.18.0
django-cors-headers==4.9.0
djangorestframework==3.17.1
djangorestframework_simplejwt==5.5.1
gunicorn==26.0.0
idna==3.18
oauthlib==3.3.1
packaging==26.2
psycopg2-binary==2.9.12
pycparser==3.0
PyJWT==2.13.0
python-decouple==3.8
requests==2.34.2
six==1.17.0
sqlparse==0.5.5
tzdata==2026.3
urllib3==2.7.0
whitenoise==6.12.0

[Back to top](#vitality-vault)

