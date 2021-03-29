# SurveyUs API
> | Contents | |
> |-----|-----|
> | [About](https://github.com/Mattastic-Voyage/survey-api#about-surveyus) | [Technologies Used](https://github.com/Mattastic-Voyage/survey-api#technologies-employed) |
> | [Routes](https://github.com/Mattastic-Voyage/survey-api#catalogue-of-routes) | [Future Iterations](https://github.com/Mattastic-Voyage/survey-api#future-iterations) |
> | [ERD](https://github.com/Mattastic-Voyage/survey-api#entity-relationship-diagram) | [Links](https://github.com/Mattastic-Voyage/survey-api#links) |
> | [Planning](https://github.com/Mattastic-Voyage/survey-api#planning)| |
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
>> ###### [(Return to top)](https://github.com/Mattastic-Voyage/survey-api#surveyus-api)
>>
>> ### Survey Routes 
>>> | HTTP Method | URL Path | Action | CRUD |
>>> |--|--|--|--|
>>> | POST | /surveys | create survey | (C)reate |
>>> | POST | /surveys/:id/participants | create participant | (C)reate |
>>> | GET | /surveys | index or list | (R)ead |
>>> | GET | /surveys/:id | show or retrieve | (R)ead |
>>> | PATCH | /surveys/:id | update | (U)pdate |
>>> | DELETE | /surveys/:id | destroy | (D)elete |
>>> | DELETE | /surveys/:id/surveys | destroy participant | (D)elete |
>>>
>>> #### Curl-Scripts
>>> | Action | JSON | Command | Success | Failure | 
>>> |--|--|--|--|--|
>>> | create participant | `{ "survey": { "participantId": "'"${PARTICIPANT_ID}"'" } }` | `SURVEY_ID="SURVEY_ID_HERE" CUSTOMER_ID="CUSTOMER_ID_HERE" sh curl-scripts/survey/add_participants.sh` | `201 Created` | `401 Not Found` |
>>> | create survey | ``{ "survey": { "title": "'"${TITLE}"'", "question": "'"${QUESTION}"'" } }`` | ``TITLE='TITLE' QUESTION='QUESTION' sh curl-scripts/survey/create-survey.sh`` | `201 Created` | `401 Not Found` |
>>> | index surveys |  | `sh curl-scripts/surveys/index.sh` | `201 Created` | `401 Not Found` |
>>> | show survey |  | `sh curl-scripts/surveys/index.sh` | `201 Created` | `401 Not Found` |
>>> | update survey | ```{ "survey": { "title": "'"${TITLE}"'", "question": "'"${QUESTION}"'" } }``` | `TITLE='TITLE' QUESTION='QUESTION' sh curl-scripts/survey/update-survey.sh` | `201 Created` | `401 Not Found` |
>>> | delete participant | ```{ "survey": { "surveyId": "'"${PARTICIPANT_ID}"'" } }``` | ```SURVEY_ID="SURVEY_ID_HERE" PARTICIPANT_ID="PARTICIPANT_ID_HERE" sh curl-scripts/surveys/remove_participant.sh``` | `201 Created` | `401 Not Found` |
>>> | delete survey |  | `sh curl-sctipts/surveys/destroy.sh` | `201 Created` | `401 Not Found` |
>>>
>>
>> ###### [(Return to top)](https://github.com/Mattastic-Voyage/survey-api#surveyus-api)
>>
>> ### Participant Routes 
>>> | HTTP Method | URL Path | Action | CRUD |
>>> |--|--|--|--|
>>> | POST | /participants | create | (C)reate |
>>> | GET | /participants | index or list | (R)ead |
>>> | GET | /participants/:id | show or retrieve | (R)ead |
>>> | PATCH | /participants/:id | update | (U)pdate |
>>> | DELETE | /participants/:id | destroy | (D)elete |
>>>
>>> #### Curl-Scripts
>>> | Action | JSON | Command | Success | Failure | 
>>> |--|--|--|--|--|
>>> | create participant | ```{ "participant": { "name": "'"${NAME}"'", "hometown": "'"${HOMETOWN}"'" } }``` | ```NAME="John Doe" HOMETOWN="Boston" sh curl-scripts/participants/create.sh``` | `201 Created` | `401 Not Found` |
>>> | index participants |  | `sh curl-scripts/participant/index.sh` | `201 Created` | `401 Not Found` |
>>> | show participant |  | `sh curl-scripts/participant/show.sh` | `201 Created` | `401 Not Found` |
>>> | update participant | ```{ "participant": { "name": "'"${NAME}"'", "hometown": "'"${HOMETOWN}"'" } }``` | `sh curl-scripts/participant/update.sh` | `201 Created` | `401 Not Found` |
>>> | destroy participant |  | `sh curl-scripts/participant/destroy.sh` | `201 Created` | `401 Not Found` |
>>>
>> ###### [(Return to top)](https://github.com/Mattastic-Voyage/survey-api#surveyus-api)
>>
>> ### Response Routes 
>>> | HTTP Method | URL Path | Action | CRUD |
>>> |--|--|--|--|
>>> | POST | /responses | create | (C)reate |
>>> | PATCH | /responses/:id | update | (U)pdate |
>>> | DELETE | /responses/:id | destroy | (D)estroy |
>>>
>>> #### Curl-Scripts
>>> | Action | JSON | Command | Success | Failure | 
>>> |--|--|--|--|--|
>>> | create response | ```{ "response": { "response": "'"${RESPONSE}"'", "surveyId": "'"${SURVEY_ID}"'", "participant": "'"${PARTICIPANT_ID}"'" } }``` | `sh curl-scripts/responses/create.sh` | `201 Created` | `401 Not Found` |
>>> | update response | ```{ "response": { "response": "'"${RESPONSE}"'", "surveyId": "'"${SURVEY_ID}"'", "participant": "'"${PARTICIPANT_ID}"'" } }``` | `sh curl-scripts/responses/update.sh` | `201 Created` | `401 Not Found` |
>>> | delete response | ```{ "response": { "surveyId": "'"${SURVEY_ID}"'" } }``` | `sh curl-scripts/responses/destroy.sh` | `201 Created` | `401 Not Found` |
>>
>> ###### [(Return to top)](https://github.com/Mattastic-Voyage/survey-api#surveyus-api)
>>
> ## Entity Relationship Diagram
> ![ERD](https://user-images.githubusercontent.com/77598048/112877456-c33c4a80-9094-11eb-8bcc-86791829b434.png)

> ###### [(Return to top)](https://github.com/Mattastic-Voyage/survey-api#surveyus-api)
>
> ## Planning
>> The planning and breakdown of this project happened over the course of several long form conversations. A special thanks to [Matt Eder](https://github.com/mjeder) for the organization and itemization of requirements.[Project Requirements Checklist](https://docs.google.com/spreadsheets/d/1kJRGhsgKEV9xVL3lXtyz6cqBWf14lm6JuXD02uneldA/edit?usp=sharing).
>>
>>> | | **Day 2: Back-End API Sprint** | **Day 3: Back-End API Sprint (continued)** |
>>> |--|--|--|
>>> | Description | - The morning of Day 2 consisted of conversing about the model construction, as well as the crafting of the ERD for reference when building out the API itself.<br />- We 'mob programmed' the production of the API, while clearing through the smaller clerical/admin tasks. | - We worked late the night 2 crafting the Create and Update routes, ending with a functioning route for both.<br />- [Eric Howard](https://github.com/EricHoward27) tested our work using [Postman](https://www.postman.com/) on the morning of Day3, providing us the windfall of success to roll through the crafting of the remaining routes.<br />- Day 3 continued our mob session where one person drove the coding and the other three contributed through conversation articulating what to do/how it works/ramifications of code. | 
>>> | [Matt Eder](https://github.com/mjeder) | - Downloaded the templates<br />- Initiated GH repositories for both the [Client](https://github.com/Mattastic-Voyage/survey-client) and [API](https://github.com/Mattastic-Voyage/survey-api)<br />- Main point of contact with instructors for communicating up our questions and securing conference times  | - Point of contact for our communication with instructors<br />- Ran point on workflow organization and appropriate version control  |
>>> | [Eric howard](https://github.com/EricHoward27) | - Tested the [API](https://github.com/Mattastic-Voyage/survey-api) with [Postman](https://www.postman.com/)<br />- Hard coded the [API](https://github.com/Mattastic-Voyage/survey-api) using [VS Code](https://code.visualstudio.com/)<br />- Translated our models into the appropriate schema and routes | - [Postman](https://www.postman.com/) champion in residence<br />- Identified and modified work from day prior to produce clean and functional Create/Update/Index requests |
>>> | [Ken Cox](https://github.com/xpertimage) | - Drew up the ERD<br />- Spearheaded the conversation to articulate the <br />structure of the [API](https://github.com/Mattastic-Voyage/survey-api)<br />- Provided examples of previous successes to help inform the sculpting of the [API](https://github.com/Mattastic-Voyage/survey-api) | - API coding driver of the Day<br />- Identified similarities between previous experience and what our design would be |
>>> | [Matt Moore](https://github.com/mmmoore1313) |  - Drew up the Wireframe<br />- Did the initial deployment of the [Client](https://github.com/Mattastic-Voyage/survey-client) to [GH-Pages](https://mattastic-voyage.github.io/survey-client/)<br />- Drafted the README.md | - Annotated README.md<br />- Guided Version Control best practices |
>
> ###### [(Return to top)](https://github.com/Mattastic-Voyage/survey-api#surveyus-api)
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
> ###### [(Return to top)](https://github.com/Mattastic-Voyage/survey-api#surveyus-api)
>
> ## Future Iterations
>> - Greater range of question/response types
>>> - Currently the response types are limited to Boolean true or false
>>>> - We would like to extend that to Numbers (numerical rating system), multiple choice (String type), or short answers
>>>
>>> - There is no block to a surveyed individual retaking surveys and spamming answers/results
>>>> - The current plan is to provide front end logic to prevent this; however a long term solution would be to code in a `isUnique` filter for responses as well as surveys
> 
> ###### [(Return to top)](https://github.com/Mattastic-Voyage/survey-api#surveyus-api)
>
> ## Links:
>> | | **Deployed Sites** | **Repositories** |
>> |--|--|--|
>> | Front End App: | [https://mattastic-voyage.github.io/survey-client/](https://mattastic-voyage.github.io/survey-client/) | [Client](https://github.com/Mattastic-Voyage/survey-client) |
>> | Back End API: | [https://frozen-thicket-25455.herokuapp.com/](https://frozen-thicket-25455.herokuapp.com/) | [API](https://github.com/Mattastic-Voyage/survey-api) |
>> | Team Home: | | [Mattastic-Voyage](https://github.com/Mattastic-Voyage) |
>
> ###### [(Return to top)](https://github.com/Mattastic-Voyage/survey-api#surveyus-api)

