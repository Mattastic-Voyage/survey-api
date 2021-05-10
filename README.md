# Bonus Alterations
> | Contents |  |
> |--|--|
> | [About](https://github.com/mmmoore1313/survey-api#about-app) | [Technologies Used](https://github.com/mmmoore1313/survey-api#technologies-employed) |
> | [Routes](https://github.com/mmmoore1313/survey-api#catalogue-of-routes) | [Future Iterations]() |
> | [ERD](https://github.com/mmmoore1313/survey-api#entity-relationship-diagram) | [Links](https://github.com/mmmoore1313/survey-api#links) |
> |  |  |
>
> ## About App
> This api contains the bonus alterations made to the SurveyUs app for my resubmission to General Assembly.
>> ### Requirements
>>> For successfull submission of this bonus, this api must have:
>>>> 1) A new resource with a relationship to the User
>>>> 2) 4 RESTful routes for handling [GET](), [POST](), [PUT/PATCH](), and [DELETE]()
>>>> 3) Actions that can change data are to be owned by the User performing the change
>
> ## Catalogue of Routes
>> ### CheeseWheel Routes 
>>> | HTTP Method | URL Path | Action | CRUD |
>>> |--|--|--|--|
>>> | POST | /cheesewheels | create | (C)reate |
>>> | GET | /cheesewheels | index or list | (R)ead |
>>> | GET | /cheesewheels/:id | show or retrieve | (R)ead |
>>> | PATCH | /cheesewheels/:id | update | (U)pdate |
>>> | DELETE | /cheesewheels/:id | destroy | (D)elete |
>>>
>>> #### Curl-Scripts
>>> | Action | JSON | Command | Success | Failure | 
>>> |--|--|--|--|--|
>>> | create cheesewheel | ``'{ "cheesewheel" : { "variety": "'"${VAR}"'", "age": "'"${AGE}"'", "health": "'"${HEAL}"'" } }'`` | ``TOKEN="<user token>" VAR="<string>" AGE="<num>" HEAL="<num>" sh curl-scripts/cheesewheel/create-cheesewheel.sh`` | `201 Created` | `401 Not Found` |
>>> | index cheesewheels |  | ``sh curl-scripts/cheesewheel/index.sh`` | `201 Created` | `401 Not Found` |
>>> | show cheesewheel |  | ``ID="cheese ID" sh curl-scripts/cheesewheel/show-cheesewheel.sh`` | `201 Created` | `401 Not Found` |
>>> | update cheesewheel | ``'{ "cheesewheel" : { "variety": "'"${VAR}"'", "age": "'"${AGE}"'", "health": "'"${HEAL}"'" } }'`` | ``ID="<cheese ID>" VAR="<new variety name>" AGE="<new age>" HEAL="<new health data>" sh curl-scripts/cheesewheel/update-cheesewheel.sh`` | `201 Created` | `401 Not Found` |
>>> | destroy cheesewheel |  | ``ID="<cheese ID>" sh curl-scripts/cheesewheel/delete-cheesewheel.sh`` | `201 Created` | `401 Not Found` |
>
> ###### [(Return to top)](https://github.com/mmmoore1313/survey-api#bonus-alterations)
>
> ## Entity Relationship Diagram
> ![ERD](https://media.git.generalassemb.ly/user/33705/files/e1488700-9b39-11eb-932e-71e3cd6e9a5e)
>
>
> ###### [(Return to top)](https://github.com/mmmoore1313/survey-api#bonus-alterations)
>
> ## Technologies Employed
>> | **General Development** | **[Client](https://github.com/mmmoore1313/survey-client) Development** | **[API](https://github.com/Mattastic-Voyage/survey-api) Development** | **Deployment** |
>> |--|--|--|--|
>> | [Technology Name](docs) | [Technology Name](docs) | [Technology Name](docs) | [Technology Name](docs) |
>
>
> ###### [(Return to top)](https://github.com/mmmoore1313/survey-api#bonus-alterations)
>
> ## Links
>> | | **Deployed Sites** | **Repositories** |
>> |--|--|--|
>> | Front End App: | [mmmoore1313.github.io/survey-client/](mmmoore1313.github.io/survey-client/) | [Survey-client](https://github.com/mmmoore1313/survey-client)|
>> | Database App | [https://safe-escarpment-34442.herokuapp.com/](https://safe-escarpment-34442.herokuapp.com/) | [Survey-API](https://github.com/Mattastic-Voyage/survey-api) |
>
> ###### [(Return to top)](https://github.com/mmmoore1313/survey-api#bonus-alterations)
>

