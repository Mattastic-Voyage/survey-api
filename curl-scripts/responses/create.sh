curl 'http://localhost:4741/responses' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "response": {
      "response": "'"${RESPONSE}"'",
      "surveyId": "'"${REST_ID}"'",
      "participant": "'"${PARTICIPANT_ID}"'"
    }
  }'
