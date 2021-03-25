# SurveyUs API
> | Contents | |
> |-----|-----|
> | [About]() | [Technologies Used]() |
> | [Routes]() | [Future Iterations]() |
> | [ERD]() | [Links]() |
> | [Planning]()| |
>
> ## About SurveyUs
> The _SurveyUs_ API is the backend connection between the [_SurveyUs_](https://github.com/Mattastic-Voyage/survey-client) client side and the [MongoDB](https://www.mongodb.com/) database. This API utilizes multiple models: a User model and a Survey model. The _SurveyUs_ App will allow users to signup/signin and create surveys which are then publicly available to non-users to participate in.
> 
> ## Catalogue of Routes
>> ### Auth Routes
>>> | HTTP Method | URL Path | Action | CRUD |
>>> |--|--|--|--|
>>> | POST | /sign-up | create | (C)reate |
>>> | POST | /sign-in | create | (C)reate |
>>> | DELETE | /sign-out | destroy | (D)elete |
>>> | PATCH | /change-password | update | (U)pdate |
>>>
>>> #### Curl-Scripts
>>>> | Action | JSON | Command | Success | Failure |
>>>> |--|--|--|--|--|
>>>> | sign-up | ``{ "credentials": { "email": "'"${EMAIL}"'", "password": "'"${PASSWORD}"'", "password_confirmation": "'"${PASSWORD}"'" } }`` | ``EMAIL='<email>' PASSWORD='<password>' PASSWORD='<password>' sh curl-scripts/auth/sign-up`` | `201 Created` | `404 Not Found` |
>>>> | sign-in | `{ "credentials": { "email": "'"${EMAIL}"'", "password": "'"${PASSWORD}"'" } }` | `EMAIL="<email>" PASSWORD="<password>" sh curl-scripts/auth/sign-in` | `201 Created` | `404 Not Found`
>>>> | sign-out |  | `TOKEN="<token>" sh curl-scripts/auth/sign-out` | `201 No Content` |  |
>>>> | change-password | ``{ "passwords": { "old": "'"${OLDPW}"'", "new": "'"${NEWPW}"'" } }`` | `204 No Content` | `401 Not Found` | 
>> 
>> ### Survey Routes 
>>> | HTTP Method | URL Path | Action | CRUD |
>>> |--|--|--|--|
>>> | POST |  | create | (C)reate |
>>> | GET |  | index or list | (R)ead |
>>> | GET |  | show or retrieve | (R)ead |
>>> | PATCH |  | update | (U)pdate |
>>> | DELETE |  | destroy | (D)elete |
>>>
>>> #### Curl-Scripts
>>> | Action | JSON | Command | Success | Failure | 
>>> |--|--|--|--|--|
>>> |  |  |  |  |  |
> ## Entity Relationship Diagram
> ![ERD](https://media.git.generalassemb.ly/user/33705/files/ee2d2700-8bda-11eb-84db-4a4ec188d15a)
> 
> ## Planning
>> The planning and breakdown of this project happened over the course of several long form conversations. A special thanks to [Matt Eder](https://github.com/mjeder) for the organization and itemization of requirements.
>>
>>> | | **Day 2: Back-End API Sprint** | **Day 3: Back-End API Sprint (continued)** |
>>> |--|--|--|
>>> | Description | - The morning of Day 2 consisted of conversing about the model construction, as well as the crafting of the ERD for reference when building out the API itself.<br />- We 'mob programmed' the production of the API, while clearing through the smaller clerical/admin tasks. | - We worked late the night 2 crafting the Create and Update routes, ending with a functioning route for both.<br />- [Eric Howard](https://github.com/EricHoward27) tested our work using [Postman](https://www.postman.com/) on the morning of Day3, providing us the windfall of success to roll through the crafting of the remaining routes.<br />- Day 3 continued our mob session where one person drove the coding and the other three contributed through conversation articulating what to do/how it works/ramifications of code. | 
>>> | [Matt Eder](https://github.com/mjeder) | - Downloaded the templates<br />- Initiated GH repositories for both the [Client](https://github.com/Mattastic-Voyage/survey-client) and [API](https://github.com/Mattastic-Voyage/survey-api)<br />- Main point of contact with instructors for communicating up our questions and securing conference times  | - Point of contact for our communication with instructors<br />- Ran point on workflow organization and appropriate version control  |
>>> | [Eric howard](https://github.com/EricHoward27) | - Tested the [API](https://github.com/Mattastic-Voyage/survey-api) with [Postman](https://www.postman.com/)<br />- Hard coded the [API](https://github.com/Mattastic-Voyage/survey-api) using [VS Code](https://code.visualstudio.com/)<br />- Translated our models into the appropriate schema and routes | - [Postman](https://www.postman.com/) champion in residence<br />- Identified and modified work from day prior to produce clean and functional Create/Update/Index requests |
>>> | [Ken Cox](https://github.com/xpertimage) | - Drew up the ERD<br />- Spearheaded the conversation to articulate the <br />structure of the [API](https://github.com/Mattastic-Voyage/survey-api)<br />- Provided examples of previous successes to help inform the sculpting of the [API](https://github.com/Mattastic-Voyage/survey-api) | - API coding driver of the Day<br />- Identified similarities between previous experience and what our design would be |
>>> | [Matt Moore](https://github.com/mmmoore1313) |  - Drew up the Wireframe<br />- Did the initial deployment of the [Client](https://github.com/Mattastic-Voyage/survey-client) to [GH-Pages](https://mattastic-voyage.github.io/survey-client/)<br />- Drafted the README.md | - Annotated README.md<br />- Guided Version Control best practices |
>
> ## Technologies Employed
>> | **General Development** | **[Client](https://github.com/Mattastic-Voyage/survey-client) Development** | **[API](https://github.com/Mattastic-Voyage/survey-api) Development** | **Deployment** |
>> |---|---|---|---|
>> | [GitHub](https://github.com/) | [React](https://reactjs.org/) | [Express](https://expressjs.com) | [GH Pages](https://pages.github.com/) |
>> | [Atom](https://atom.io/) | [React-Bootstrap](https://react-bootstrap.github.io/) | [Postman](https://www.postman.com/) | [Heroku](https://www.heroku.com) |
>> | [VS Code](https://code.visualstudio.com/) | [Semantic UI React](https://react.semantic-ui.com/) | [MongoDB](https://www.mongodb.com/) | |
>> | [GoogleSheets](https://docs.google.com/spreadsheets/d/1kJRGhsgKEV9xVL3lXtyz6cqBWf14lm6JuXD02uneldA/edit#gid=0) | | | |
>> | [Google](https://www.google.com/) | | | |
>> | [MDN Web Docs](https://developer.mozilla.org/en-US/) | | | |
>> | [JavaScript](https://www.javascript.com/) | | | |
>> | [CSS](https://www.w3schools.com/css/) | | | |
>> | [SCSS](https://sass-lang.com/) | | | |
>
> ## Future Iterations
>> - Greater range of question/response types
>>> - Currently the response types are limited to Boolean true or false
>>>> - We would like to extend that to Numbers (numerical rating system), multiple choice (String type), or short answers
>>>
>>> - There is no block to a surveyed individual retaking surveys and spamming answers/results
>>>> - The current plan is to provide front end logic to prevent this; however a long term solution would be to code in a `isUnique` filter for responses as well as surveys
> 
> ## Links:
>> | | **Deployed Sites** | **Repositories** |
>> |--|--|--|
>> | Front End App: | [https://mattastic-voyage.github.io/survey-client/](https://mattastic-voyage.github.io/survey-client/) | [Client](https://github.com/Mattastic-Voyage/survey-client) |
>> | Back End API: | [https://frozen-thicket-25455.herokuapp.com/](https://frozen-thicket-25455.herokuapp.com/) | [API](https://github.com/Mattastic-Voyage/survey-api) |
>> | Team Home: | | [Mattastic-Voyage](https://github.com/Mattastic-Voyage) |

