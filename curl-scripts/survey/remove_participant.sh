# SURVEY_ID="SURVEY_ID_HERE" PARTICIPANT_ID="PARTICIPANT_ID_HERE" sh curl-scripts/surveys/remove_participant.sh

curl "http://localhost:4741/surveys/${SURVEY_ID}/surveys" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --data '{
    "survey": {
      "surveyId": "'"${PARTICIPANT_ID}"'"
    }
  }'
