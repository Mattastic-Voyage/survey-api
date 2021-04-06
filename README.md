# Bonus Alterations
> | Contents |  |
> |--|--|
> | [About]() |  |
>
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
>>> | destroy cheesewheel |  |  | `201 Created` | `401 Not Found` |
>
> ###### [(Return to top)]()
>
> ## Entity Relationship Diagram
> ![ERD](linkToErd)
>
>
> ###### [(Return to top)]()
>
> ## Technologies Employed
>> | **General Development** | **[Client]() Development** | **[API]() Development** | **Deployment** |
>> |--|--|--|--|
>> | [Technology Name](docs) | [Technology Name](docs) | [Technology Name](docs) | [Technology Name](docs) |
>
>
> ###### [(Return to top)]()
>
> ## Future Iterations
> <!-- Desctiption -->
>
>
> ###### [(Return to top)]()
>
> ## Links
>> | | **Deployed Sites** | **Repositories** |
>> |--|--|--|
>> | Front End App: | [appUrl](appUrl) | [appRepositoryUrl](appRepositoryUrl)|
>> | Database App | [dbUrl](dbUrl) | [dbRepositoryUrl](dbRepositoryUrl) |
>
> ###### [(Return to top)]()
>

