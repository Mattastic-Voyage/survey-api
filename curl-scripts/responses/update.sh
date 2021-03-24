curl "http://localhost:4741/reviews/${RESPONSE_ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "response": {
      "response": "'"${RESPONSE}"'",
      "surveyId": "'"${REST_ID}"'",
      "participant": "'"${PARTICIPANT_ID}"'"
    }
  }'
