# Vitality Vault

---

[To view site]()

## Table of Contents

## [UX](#ux-1)

[Primary Goals](#primary-goals)  
[Business Goals](#business-goals)  
[User Goals](#user-goals)  
[User Stories](#user-stories)  
[Design Choices](#design-choices)  
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
- To provide an extensive list of exercises to choose from and simple form with which to build workouts from.
- To show that a gym membership is not required and whatever your fitness level you can work out.
- To get people working out.
- To get users trying new exercises they may not have heard of before.

[Back to top](#vitality-vault)

#### Business Goals

---

The business goals of Vitality Vault are:

- To simplify planning a workout
- Optimise peoples workouts.
- Maximise users experience by making the whole process as streamlined and simple as possible.
- Long term business goals are to provide an all in one experience that users can track progress and upload weights used and get back body composition information as well as calorie tracking.

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

For full Acceptance Criteria and tasks please follow [this link](https://github.com/users/devildex91/projects/8) to the project board for Vitality Vault.

- As a *user tracking my strength, *I can *view the specific details of a previous days workout I completed *so that _I know exactly what Ive been doing to make sure Im not doing the wrong workout ._

- As a _registered fitness user,_ I can _create and save a custom workout routine with a name and a list of exercises _ so that _ I can quickly select it whenever I go to the gym._

- As a _flexible trainee,_ I can _edit the sets and reps of a previously created workout _ so that _ I can keep my workouts fresh and up to date_

-As a _user cleaning up my profile,_ I can _delete an old workout routine that I no longer perform_ so that _my list of active routines stays organised and clutter-free._

[Back to top](#vitality-vault)

#### Design Choices

---

The original design for this project included a workout page a body tracker page and calorie log page along with graphs. The scope of the project meant it was simplified down to a simple app that you can Create, Read, Update, and Delete a workout [(click here for original design)](). This original design is reflected in the User Stories.

The brand identity and colour theme has been chosen to project Strength and trust through the use of the two contrasting themes. The blues and whites of the Nord theme have been chosen to present trust, stability and professionalism. The halloween theme will help users while in dimly lit gyms to reduce eye strain, while the accent colors will help direct the users eyes directly towords the Call to action buttons.

##### Fonts

---

  <details>
 <summary>logo</summary>

![logo dark theme](/frontend/src/assets/images/VV-logo-large.png)
[logo light theme](/frontend/src/assets/images/VV-logo-blue-large.png)

The logo and name have been chosen becuase firstly the name suggests energetic and secure which are both important aspects to convey to the user. THe Logo then helps to back up this claim with a vault within a shield presenting a secure environment to create your workout.

  </details>

 <details>
 <summary>Fonts</summary>

The typography has been chosen using the Daisy UI default font. This helps to increase legibility, which is especially important in a workout setting where fatique may potentially set in so a simple font helps to reduce the cognitive load. Bold fonts have also been used to help add a hierarchy especially when you have a title like monday then the exercise list the bold font helps simplify the process for the user.

 </details>

[Back to top](#vitality-vault)

##### Colours

The colours chosen are the nord theme for the light theme and halloween for the dark theme. The default colours for these themes are
Nord
primary #5E81AC frost blue(updated to #25364B to pass contrast ratios)
base- 100 #ECEFF4 light background
base-200 #E5E9F0 middle light background
base-300 #D8DEE9 darker light background

Halloween
primary #F28C18 jack-o-lantern orange
base- 100 #212121 charcoal black background
base-200 #1a1a1a darker surface panel background
base-300 #121212 deepest background tint

More colour are avaliable for each theme but these are the ones used for the app.

I chose these themes because I felt the contrast reflected suitable dark/light themes, whilst changing the psychological vibe of the app to reflec the users mood. Nords blues and whites provide a crisp, calm clean and clinical environment to lower the heart rate and make the workout fell more managable. Halloween in contrast gives a High intensity and aggressive vibe. The stark contrast between the charcoal and neon oranges, greens and purples help to create an energy boosting high adrenaline atmosphere.

[Back to top](#vitality-vault)

##### Styling

---

The styling has been chosen with efficency of movement in mind. This is shown in the use of the select elements across the app which give the user streamlined movements with less room for error helping both the user and the admin for the site. This reduces interaction cost and effort needed to create your workout and for flow of data. The styling has also been used to soften the app and make it feel more like a trainer than a machine helping user interactivity.

[back to top](#vitality-vault)

##### Background

---

The background colour have been chosen to give the app soft layers drawing you to the content at the centre with use3 from base-100 for the background up to base-300 for the background of the cards with the information for the user. base-200 has been used to almost frame and bridge the gap between base-100 and base-300 across both themes adding for a unform yet softer feel for the user.

[Back to top](#vitality-vault)

##### Images

---

[Back to top](#vitality-vault)

##### Wireframes

---

[Back to top](#vitality-vault)

### Features

---

#### Existing Features

---

[Back to top](#vitality-vault)

### User Goals mapping

---

<details>
<summary>User goals mapping</summary>

- To support the existing features that have been implemented, please see the table below that outlines implemented User Stories and their supporting evidence screenshots.

[Back to top](#vitality-vault)

</details>

#### Features left to implement

---

[Back to top](#vitality-vault)

### User Goals still to implement

---

<details>
<summary>User stories still to implement</summary>

- Please see the table below that shows the User Stores behind the features left to implement along with our reasoning for not implementing them yet.

</details>

[Back to top](#vitality-vault)

### Technologies used

---

| Technology     | Use                                       |
| -------------- | ----------------------------------------- |
| Visual Studios | Primary IDE                               |
| Vite           | Development Server                        |
| React          | Javascript library/component architecture |
| GITHUB         | Hosting and managing repositories         |
| GEMINI         | Supported learning and best practices     |
| GITHUB copilot | Supported learning and best practices     |
| HTML           | Language used                             |
| CSS            | Language used                             |
| Javascript     | Language used                             |
| Django         | Backend Environment                       |
| Django rest    |API linking react and Django/authentication|
| Daisy UI       |React UI                                   |
| Tailwind CSS   | CSS styling                               |

[Back to top](#vitality-vault)

## Testing

---

### Lighthouse tests

---

Note--- all screenshots are of the dark halloween theme but similar tests were carried out for the Nord theme as well which after updating the primary-color for improved contrast ratios yielded the exact same results as the halloween theme.

 <details>

 <summary>Lighthouse test results</summary>


#### mobile content scores

---

| mobile              | performance | Best practices | Accessibility | SEO     | expected/actual |
| ------------------- | ----------- | -------------- | ------------- | ------- | --------------- |
| workout plan/first  | 95/86       | 95/100         | 95/89         | 95/83   |                 |
| workout plan second | 90/91       | 100/100        | 100/100       | 90/92   |                 |
| Homepage            | 90/92       | 95/100         | 95/100        | 95/100  |                 |
| 404 page first      | 95/99       | 95/100         | 95/96         | 95/92   |                 |
| 404 page second     | 100/100     | 100/100        | 100/100       | 100/100 |                 |
| Register            | 95/100      | 95/100         | 100/96        | 100/100 |                 |
| Register second     | 95/100      | 100/100        | 100/100       | 100/100 |                 |
| Login               | 100/100     | 100/100        | 100/100       | 100/100 |                 |

#### Mobile lighthouse notes

---

When first testing the workout plan page for mobiles, I had to add labels to all select/ input elements to imporve accessibility.Aria labels were then added to all link tags and the href tags for all social media links as well as target = blank being added to make sure it opened in an external page. We then found app was being slowed down by quite a lot of unused javascript. To fix this we subsequently deleted all redundent code such as unused imports and old useState. While deleting these we discoverd that MUI icons had been installed but never deleted so also removed this from the codebase. While creating the app I also removed some prop drilling and replaced it with useContext. THis led to some props still being in the codebase which meant we also had to delete all of these redundent props. After all of these had been deleted to improve the SEO score a robots.txt file was added on reccomendation from the lighthouse test. Once all of these improvements had been made the scores increased considerably across the board with everything hitting 90 or above.

After these improvements had been made across the board while testing the workout page, when i came to test the homepage i found that no more imporvements were nescesary as the scores were all hitting 90 or above.

Following on from this we moved onto the register/login pages which both threw up the same error. This error was the fact that the label elements were using a slightly different shade of the primary font which had gone unnoticed until testing. This lighter shade meant that the contrast test failed. I fixed this by styling both of them to match the same shade of font as the rest of the site. Once I had solved this error I realised that I had not tested the nord theme at all which on investigation was failing contrast ratio because the standard primary colour used for the font although passed on Halloween failed on nord, because the background did not have enough contrast with this primary font. I solved this by adding custom styling to change the colour of the primary colour on the nord theme which then passed contrast testing.As this was the only difference between the tests on Nord and the tests on Halloween themes I have chosen not to supply the Nord tests as well as the Halloween tests as I do not feel there is anything to be gained but have providerd both the failed contrast tests and changed colour contrast tests in the relevent section.

The 404 page lighthouse testing showed a dropped accessibility score. This was because of a button element with a link tag within it w causing a saturation and spacing error for best practices. The remedy for this was to remove the button element completely. Then the link tag was styled to look like a button so it worked for both accessibility and appearance.

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

| Desktop             | performance | Best practices | Accessibility | SEO     | expected/actual |
| ------------------- | ----------- | -------------- | ------------- | ------- | --------------- |
| workout plan/first  | 95/97       | 95/77          | 95/90         | 95/83   |                 |
| workout plan second | 97/98       | 77/77          | 100/100       | 90/92   |                 |
| Homepage            | 95/95       | 95/100         | 95/100        | 95/100  |                 |
| 404 page            | 95/100      | 95/100         | 95/100        | 95/100  |                 |
| Login               | 100/100     | 100/100        | 100/100       | 100/100 |                 |
| Register            | 100/100     | 100/100        | 100/100       | 100/100 |                 |
|                     |             |                |               |         |                 |
|                     |             |                |               |         |                 |

#### Desktop lighthouse notes

---

All testing for Desktop sized screens was carried out alongside mobile testing with the only real problem coming from the workoutplan page.
This issue was because the carousel of images only renders itself on tablet screen and above. This led to a previously unforeseen error from third party cookies, because although they are from a linked cloudinary account as the name of the account is a provided name they are being seen as third party cookies. To try to remedy this I added some security patches into the relevent vercel.json this led to more problems and failing to load the images at all. The simplest fix for this would have been to change the name of my cloudinary account but was unable to do so because of the type of account it is. After trying a few different ways around the issue I decided that it was bet to be left as is as we know that it is not a third party and I do not have the relevent plan on cloudinary to fix the issue. As the other scores are all in the 90s and it is only the best practice score lower than I would like I decided the best course of action was to explain the reasoning that hte issue cannot be fixed.

#### Desktop lighthouse tests

---

- ![origninal scores desktop](/frontend/src/assets/images/desktop-original-lighthouse.png)
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

- As the frontend is created using React and JSX, the HTML test to code is limited as JSX does not pass through any automated test. The index.html has been tested and passed with no errors(see screenshot below). Please see automated testing below for extensive testing to make sure alll JSX is behaving as intended 

![html test](/frontend/src/assets/images/html-test.png)

[Back to top](#vitality-vault)

 </details>

### CSS tests

---

<details>
 <summary> CSS testing</summary>

#### index CSS test

All CSS is inline using tailwind CSS so the only code to check within the index.css file is plugins to use tailwind and Daisy UI styles which are not recognised by CSS checkers.

[Back to top](#vitality-vault)

 </details>

#### Python code validation
<details>
<summary>Python validation </summary>
All models.py, serializer.py and views hgave been tested and passed with no syntax errors
![user-model]()



</details>




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

### Automated Testing

<details>
<summary>Automated Testing</summary>


--- 

This project relies on a comprehensive, dual-stack automated testing architecture to guarantee end-to-end data integrity, resilient component states, and absolute multi-tenant security isolation across the entire application using djangos built in testing suite along with vitest for testing the react frontend. 

#### Vitest testing

---

 The frontend was tested using a mixture of Vitest, React Testing Library, and User Event. All tests have been modularized across UI views and components to thoroughly cover form state validations, conditional workflow logic, contextual data bindings, asynchronous API response tracking, and responsive layout adaptations. Please find brief descriptions of all tests run below followed by the results of the test. For in-depth detail, please see the relevant .test.jsx file within the frontend directory.

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
- If it handles selecting a workout and conditionally unlocks subsequent dropdown segments correctly.
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
-  it calculates the day correctly and renders that day's exercises or a relaxing message if no exercises are selected.

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

 Test Files  11 passed (11)
      Tests  26 passed (26)
   Start at  14:22:27
   Duration  9.19s (environment 64%, import 22%, tests 12%, transform 2%)


#### Django testing 

---

The backend was tested using a mixture of Djangos Unit Testing framework and Django Rest Frameworks. All tests have been modularized across applications and cover database constraints, data formatting, serialization, security polocies and endpoint traffc handling. Please find brief descriptions of all tests ran below followed by the results of the test. For in depth detail please see relevent tests.py file within each app.

##### User tests 

---

To test the user models, serializers and views we ran the following tests:
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

To test the workouts models, serializers and view we ran the following tests:
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

While contrast testing I found that one of the default Nord themes i was using for text did not pass the required checks. To resolve this I changed the default primary colour for that theme to a darker blue that did pass. To make sure all the other tests passed i chose a simple solution of combining the same t wo colours across the nord theme and the corrosponding primary and base colours for the halloween theme. This choice gave the app a simplistic but uniform feel which I believed suited the app well and meant that all tests passed contrast testing.

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

[Back to top](#recipe-rescue)

 </details>

### development bugs and fixes

---

<details>
<summary>Development bugs and fixes</summary>

registration not working properly on test so ran through all seperate Auth files and backend and found a missing trailing / on my register api call which was causing it to fail
couldnt access deployed site got 400 errors followed by 500 errors and had to update my middlewar for cors headers and update both my Allowed hosts and run migrations to my heroku backend to fix the database link
changed workout plan section to useContext for picking your workout sas originally was in my current workout section but as the layour changes dramatically on different screen sizes i could no longer access the state from the other screen layouts.

Got GET POST PUT and DELETE working but state was not updating and the values were not showing in any select elements but were in backend to solve this added in a fetchworkoutPlan function and still had issue to discover was being saved to back end but was not registering to the user creating the workout so had to update the serializer to include user.
First lighthouse tests resulted in adding meta description and link preconnect to html to help loading times, labels added to select boxes and forgotten aria labels for betrter accessbility. Images stored locally were also compressed for better contentful paint loading times.

Replaced media query with isMobile state in workout plan and adjusted screen sizes as was causing erratic behavior within the chrome browser as was not switching between screen sizes about 75 percent of the time so adjusted the media queries to suit. The root cause was origianlly their was a tablet view that spanned the middle ground between mobile and desktop which after i had scaled back the app was no longer required as the desktop and tablet view were near identical but as the desktop was already styled i chose to keep that and delete the tablet view.

[Back to top](#vitality-vault)

</details>

### Cross browser testing

---

<details>
<summary> Cross browser testing</summary>

- Table guide
- (Expected result/Actual result )

| Action          | All components render | Form works | Form buttons work | Back to ingredients button work | Recipe cards load correctly | Link from recipe cards work | Images respond as intended |
| --------------- | --------------------- | ---------- | ----------------- | ------------------------------- | --------------------------- | --------------------------- | -------------------------- |
| Browser         | Pass/Pass             | Pass/Pass  | Pass/Pass         | Pass/Pass                       | Pass/Pass                   | Pass/Pass                   | Pass/Pass                  |
| Chrome          | Pass/Pass             | Pass/Pass  | Pass/Pass         | Pass/Pass                       | Pass/Pass                   | Pass/Pass                   | Pass/Pass                  |
| Chrome (mobile) | Pass/Pass             | Pass/Pass  | Pass/Pass         | Pass/Pass                       | Pass/Pass                   | Pass/Pass                   | Pass/Pass                  |
| Safari          | Pass/Pass             | Pass/Pass  | Pass/Pass         | Pass/Pass                       | Pass/Pass                   | Pass/Pass                   | Pass/Pass                  |
| Edge            | Pass/Pass             | Pass/Pass  | Pass/Pass         | Pass/Pass                       | Pass/Pass                   | Pass/Pass                   | Pass/Pass                  |
| Firefox         | Pass/Pass             | Pass/Pass  | Pass/Pass         | Pass/Pass                       | Pass/Pass                   | Pass/Pass                   | Pass/Pass                  |

[Back to top](#vitality-vault)

</details>

### User testing

<details>
<summary>User testing notes</summary>
</details>
#### Issues

#### Solutions

[Back to top](#vitality-vault)

</details>

[Back to top](#vitality-vault)

### Deployment

---

- ##### This app has been hosted as a monorepo with both the backend and frontend within the same repository but hosted differently.

[To view site](https://devildex91.github.io/recipe-rescue/)

#### How to run project

 <details>
 <summary>The backend has been deployed through Heroku by:</summary>

---

1. Make sure you have the Heroku CLI installed on your computer. If not [click here](https://devcenter.heroku.com/articles/heroku-cli)

2. Open git bash and login by typing: heroku login in the terminal.
3. Navigate to the root of your repository and create your Heroku app by typing:  heroku create your-app-name
4. By default, Heroku looks for manage.py in the root folder. Because your backend sits inside a subfolder, you must add the Heroku Subdirectory Buildpack. This isolates the deployment to the backend directory by typing:
heroku buildpacks:set https://github.com
5. So the builpack knows exactly where to look for your django backend add:  heroku config:set PROJECT_PATH=backend(replace backend with your name of your django backend folder)
6. Set your production settings variables on Heroku by typing:
heroku config:set SECRET_KEY="your-production-secret-key"
heroku config:set DEBUG=False
7. Add a production database(Heroku no longer offer a free tier so you will need to find one that suits your needs. I chose neon to host my postgresql database.)
8. Ensure you have the following files created in your backend folder :
 - requirements.txt containing gunicrorn, dj-database-url, psycopg2-binary(may have to change version to psycopg[binary]>=3.1.0 if using latest version of python) and whitenoise.
 - Procfile containing web: gunicorn my_project.wsgi --log-file - 
 9. Deploy to Heroku by navigating into your backend folder and typing:
 git push heroku main and then once its finished building type: heroku run python manage.py migrate
 - 

</details>

<details>
<summary>To deploy the frontend to vercel</summary>

1. Create a vercel.json in your frontend repository and add: 
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
7. Ensure the framework preset dropdown says Vite or Create React App and leave the build command and output directory off.
8. If using and Environment variables like your production backend URL expand the Environment Variables and add them in here making sure to add in your KEY and production value.
9. Click the deploy button at the bottom of the page and your frontend should now be live. 

[Back to top](#vitality-vault)

</details>



 <details>  
 <summary> To download and work on the code yourself locally. </summary>

---

1.  Navigate to [devildex91/vitality-vault](https://github.com/devildex91/vitality-vault)
2.  Click on the green code button
3.  Select download zip
4.  Once downloaded, unpack the zipped file to a location of your choosing, and you can work on and run the code in an IDE of your choosing.
5.  Before running this code, set up your React environment, open a terminal and type npm install. This should download all dependencies needed. For reference see dependencies section at end of README to confirm all have been downloaded.

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

| Credits                                                 | Use                        |
| ------------------------------------------------------- | -------------------------- |
| [VITE documentation](https://vite.dev/)                 | deployment and setup       |
| django                                                  | backend                    |
| [GITHUB documentation](https://docs.github.com/en)      | GITHUB pages setup         |
| [REACT documentation](https://react.dev/)               | JSX elements/best practice |
| Lighthouse                                              | Testing                    |
| [validator.w3](https://validator.w3.org/)               | HTML testing               |
| [webaim](https://webaim.org/resources/contrastchecker/) | contrast testing           |
| [Logo.com](https://logo.com/)                           | Logo and title favicon     |
| [whimsical](https://whimsical.com/)                     | wireframing                |

#### Exercise data credits 

---
[free exercise database](https://yuhonas.github.io/free-exercise-db/)

The exercise data is sourced from the repository linked to the website linked above. The models and serialzers and views were created by myself to make sure the data structure was linked in the best way possible to bring across the exercises. Chat GPT was then used to help me to create the management folder and import ann the exercises. This was done because creating the full command structure was out of the scope of this project . I also felt that as I was only using it to help import the data for me to use rather than creating any actual production code that this was an acceptable use of AI to help fill the exercises section with data.  

##### Please find below a copy of the licence for the free exercise db

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.

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
