curl "http://localhost:4741/responses/${RESPONSE_ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "response": {
      "response": "'"${RESPONSE}"'",
      "surveyId": "'"${SURVEY_ID}"'",
      "participant": "'"${PARTICIPANT_ID}"'"
    }
  }'
