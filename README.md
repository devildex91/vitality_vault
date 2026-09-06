# Vitality Vault




---




[To view site]()


registration not working properly on test so ran through all seperate Auth files and backend and found a missing trailing / on my register api call which was causing it to fail
couldnt access deployed site got 400 errors followed by 500 errors and had to update my middlewar for cors headers and update both my Allowed hosts and run migrations to my heroku backend to fix the database link
changed workout plan section to useContext for picking  your workout sas originally was in my current workout section but as the layour changes dramatically on different screen sizes i could no longer access the state from the other screen layouts.

Got GET POST PUT and DELETE working but state was not updating and the values were not showing in any select elements but were in backend to solve this added in a fetchworkoutPlan function and still had issue to discover was being saved to back end but was not registering to the user creating the workout so had to update the serializer to include user.
First lighthouse tests resulted in adding meta description and link preconnect to html to help loading times, labels added to select boxes and forgotten aria labels for betrter accessbility. Images stored locally were also compressed for better contentful paint loading times. 
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
[JSX tests](#jsx-tests)  
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

- As a *user tracking my strength, *I can *view the specific details  of a previous days  workout I completed  *so that *I know exactly what Ive been doing to make sure Im not doing the wrong workout  .*

- As a *registered fitness user,* I can *create and save a custom workout routine with a name and a list of exercises * so that * I can quickly select it whenever I go to the gym.*

- As a *flexible trainee,* I can *edit the sets  and reps of a previously  created workout * so that * I can keep my workouts fresh and up to date*

-As a *user cleaning up my profile,* I can *delete an old workout routine that I no longer perform* so that *my list of active routines stays organised and clutter-free.*













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
primary #5E81AC frost blue
secondary #81A1C1 arctic blue
accent #88C0D0 ice cyan
base- 100 #ECEFF4 light background
base-200 #E5E9F0 middle light background
base-300 #D8DEE9 darker light background

Halloween 
primary #F28C18 jack-o-lantern orange
secondary #6D3A9C spooky purple
accent #51A800 poson green
base- 100 #212121 charcoal black background
base-200 #1a1a1a darker surface panel background
base-300 #121212 deepest background tint

More colour are avaliable for each theme but these are the ones used for the app.

I chose these themes because I felt the contrast reflected suitable dark/light themes, whilst changing the psychological vibe of the app to reflec the users mood. Nords blues and whites provide a crisp, calm clean and clinical environment to lower the heart rate and make the workout fell more managable. Halloween in contrast gives a High intensity and aggressive vibe. The stark contrast between the charcoal and neon oranges, greens and purples help to create an energy boosting high adrenaline atmosphere. 







[Back to top](#vitality-vault)




##### Styling


---

The styling has been chosen with efficency of movement in mind. This is shown in the use of the select elements across the app which give the user streamlined movements with less room for error helping both the user and the admin for the site. This reduces interaction cost and effort needed to create your workout and for flow of data. The styling has also been used  to soften the app and make it feel more like a trainer than a machine helping user interactivity.

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
| Technology      | Use                                        |
|---------------- |------------------------------------------- |
| Visual Studios  | Primary IDE                                |
|  Vite           | Development Server                         |
| React           | Javascript library/component architecture  |
| GITHUB          | Hosting and managing repositories          |
| GEMINI          | Supported learning and best practices      |
| GITHUB copilot  | Supported learning and best practices      |
| HTML            | Language used                              |
| CSS             | Language used                              |
|Javascript       | Language used                              |
|Django           | Backend Environment                        |
|Ninja API        | API linking react and Django               | 








[Back to top](#vitality-vault)




## Testing




---




### Lighthouse tests
---




 <details>




 <summary>Lighthouse test results</summary>




#### main content scores

Table of results goes here expected/actual 


#### Mobile lighthouse notes










#### Desktop lighthouse notes






#### 404 lighthouse scores


Table of results goes here 


#### Mobile 404 notes





#### Desktop 404 notes




[Back to top](#vitality-vault)




 </details>




### HTML tests
---




 <details>
 <summary> HTML tests</summary>




- HTML code tested, and all pages passed with no errors or warnings.




#### Main content HTML check




#### 404-page HTML check









[Back to top](#vitality-vault)




 </details>




### CSS tests
---




<details>
 <summary> CSS testing</summary>




#### index CSS test




- CSS validates as CSS level 3 + SVG.


[Back to top](#vitality-vault)


 </details>


### JSX tests
---


<details>
<summary>JSX testing</summary>


##### Navbar




##### Header
##### Footer
##### Main

[Back to top](#vitality-vault)


</details>




### Contrast tests
---




 <details>
 <summary> Contrast testing </summary>




#### Contrast testing


[Back to top](#vitality-vault)


 </details>




### Keyboard Accessibility tests
---




 <details>
 <summary>Keyboard Accessibility</summary>


[Back to top](#recipe-rescue)




 </details>




### development bugs and fixes
---


<details>
<summary>Development bugs and fixes</summary>

Table of bugs and fixes goes here
 [Back to top](#vitality-vault)




</details>


### Cross browser testing
---
<details>
<summary> Cross browser testing</summary>




- Table guide
- (Expected result/Actual result )




| Action          | All components render    | Form works   | Form buttons work  | Back to ingredients button work   | Recipe cards load correctly    | Link from recipe cards work    | Images respond as intended  |
|---------------- |-----------------------   |------------  |------------------- |---------------------------------  |------------------------------  |-----------------------------   |---------------------------- |
| Browser         | Pass/Pass                | Pass/Pass    | Pass/Pass          | Pass/Pass                         | Pass/Pass                      | Pass/Pass                      | Pass/Pass                   |
| Chrome          | Pass/Pass                | Pass/Pass    | Pass/Pass          | Pass/Pass                         | Pass/Pass                      | Pass/Pass                      | Pass/Pass                   |
| Chrome (mobile)    | Pass/Pass                | Pass/Pass    | Pass/Pass          | Pass/Pass                         | Pass/Pass                      | Pass/Pass                      | Pass/Pass                   |
| Safari          | Pass/Pass                | Pass/Pass    | Pass/Pass          | Pass/Pass                         | Pass/Pass                      | Pass/Pass                      | Pass/Pass                   |
| Edge            | Pass/Pass                | Pass/Pass    | Pass/Pass          | Pass/Pass                         | Pass/Pass                      | Pass/Pass                      | Pass/Pass                   |
| Firefox         | Pass/Pass                | Pass/Pass    | Pass/Pass          | Pass/Pass                         | Pass/Pass                      | Pass/Pass                      | Pass/Pass                   |








[Back to top](#vitality-vault)
</details>


### User testing


<details>
<summary>User testing notes</summary>


#### Issues



#### Solutions


[Back to top](#vitality-vault)
</details>


[Back to top](#vitality-vault)




### Deployment




---




- ##### Note for anybody working on this code React and Vite has been to develop this app so will need to be used to work with this code please see credits for a full list of dependencies and versions




[To view site](https://devildex91.github.io/recipe-rescue/)




#### How to run project




 <details>
 <summary>Site has been deployed through GITHUB pages by:</summary>




---




1.  Set up a Vite project by opening up your IDE and opening a terminal.
2.  Type:  
    npm create vite@latest<br>  
    and follow the prompts making sure to select React and javascript.
3.  Once set up open vite.config.js and replace the code with:




    import { defineConfig } from 'vite'




import react from '@vitejs/plugin-react'




export default defineConfig({  
plugins: [react()],  
base: "/your-repo-name/", // Replace with your exact repository name
})




1. In the terminal again type :  
   npm install gh-pages --save-dev




2. Update package.json by adding the following:  
   {  
   "name": "my-vite-app",  
   "homepage": "<https://your-github-username.github.io/your-repo-name>",  
   "scripts": {  
   "dev": "vite",  
   "build": "vite build",  
   "lint": "eslint .",  
   "preview": "vite preview",  
   "predeploy": "npm run build",  
   "deploy": "gh-pages -d dist"  
   }  
   }




- Note: Vite builds into a folder named dist (unlike Create React App which used build), so ensure the script says -d dist.




1. Run:  
   npm run deploy  
   This will:




- Run npm run build to create a production-ready dist folder.
- Create a new branch in your GitHub repository called gh-pages.
- Push the contents of dist to that branch.




1. Enable GITHUB pages by:




- Go to your repository on GITHUB.
- Click Settings > Pages in the left sidebar.
- Under Build and deployment, ensure the Source is set to "Deploy from a branch."
- Under Branch, select gh-pages and the /(root) folder.
- Click Save.




###### Your site should now be live at <https://your-username.github.io/your-repo-name/>




 </details>




 <details>  
 <summary> To download and work on the code yourself locally. </summary>




---




1.  Navigate to [devildex91/vitality-vault](https://github.com/devildex91/vitality-vault)
2.  Click on the green code button
3.  Select download zip
4.  Once downloaded, unpack the zipped file to a location of your choosing, and you can work on and run the code in an IDE of your choosing.
5. Before running this code, set up your React environment, open a terminal and type npm install. This should download all dependencies needed. For reference see dependencies section at end of README to confirm all have been downloaded.




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
| Credits               | Use                         |
|---------------------- |---------------------------- |
| [React Icons](https://react-icons.github.io/react-icons/)             | All Icons                   |
| [Google fonts](https://fonts.google.com/)           | fonts                       |
| [getcssscan](https://getcssscan.com/)            | box-shadow property         |
| [VITE documentation](https://vite.dev/)    | deployment and setup        |
| [GITHUB documentation](https://docs.github.com/en)  | GITHUB pages setup          |
| [REACT documentation](https://react.dev/)     | JSX elements/best practice  |
| [Spoonacular](https://spoonacular.com/food-api)           |  API                        |
| [SQUOOSH](https://squoosh.app/)               | Image compression           |
| [Pexels](https://squoosh.app/)                | Image sourcing              |
| Lighthouse            | Testing                     |
| [validator.w3](https://validator.w3.org/)           | HTML testing                |
| [jigsaw.w3](https://jigsaw.w3.org/css-validator/)               | CSS testing                 |
| [json table](https://jsontotable.org/)              | JSX testing                 |
| [webaim](https://webaim.org/resources/contrastchecker/)                  | contrast testing            |
|[Logo.com](https://logo.com/)               | Logo and title favicon      |
|[whimsical](https://whimsical.com/)         | wireframing                 |
| [colorhunt](https://colorhunt.co/)         | Colour palete               |
  



###### All code was written by myself apart from code for deployment which was based on instruction from Vite documentation and GITHUB documentation.




[Back to top](#vitality-vault)




#### dependencies for React/Vite




---



 [Back to top](#vitality-vault)











