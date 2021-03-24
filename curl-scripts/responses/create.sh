curl 'http://localhost:4741/responses' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "response": {
      "response": "'"${RESPONSE}"'",
      "surveyId": "'"${SURVEY_ID}"'",
      "participant": "'"${PARTICIPANT_ID}"'"
    }
  }'
