# ID="<cheese ID>" VAR="<new variety name>" AGE="<new age>" HEAL="<new health data>" sh curl-scripts/cheesewheel/update-cheesewheel.sh

curl "http://localhost:4741/cheesewheels/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "cheesewheel" : {
      "variety": "'"${VAR}"'",
      "age": "'"${AGE}"'",
      "health": "'"${HEAL}"'"
    }
  }'