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





[Back to top](#vitality-vault)




#### Business Goals




---




The business goals of Vitality Vault are:





[Back to top](#vitality-vault)




#### User Goals




---




The goals for users would be:





[Back to top](#vitality-vault)




#### User Stories




---




For full Acceptance Criteria and tasks please follow [this link](https://github.com/users/devildex91/projects/8) to the project board for Vitality Vault.













[Back to top](#vitality-vault)




#### Design Choices

---


##### Fonts

---

  <details>
 <summary>logo</summary>




![logo]()




  </details>


 <details>
 <summary>Fonts</summary>


 </details>




[Back to top](#vitality-vault)




##### Colours







[Back to top](#vitality-vault)




##### Styling


---


[back to top](#vitality-vault)




##### Background


---


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










