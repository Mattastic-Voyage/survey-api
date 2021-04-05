#!/bin/bash

API="http://localhost:4741"
URL_PATH="/cheesewheels"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "cheesewheel" : {
      "variety": "'"${VAR}"'",
      "age": "'"${AGE}"'",
      "health": "'"${HEAL}"'"
    }
  }'
  
  echo
  