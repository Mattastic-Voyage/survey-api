curl "http://localhost:4741/responses/${RESPONSE_ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --data '{
    "response": {
      "surveyId": "'"${SURVEY_ID}"'"
    }
  }'
