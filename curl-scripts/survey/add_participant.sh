# SURVEY_ID="SURVEY_ID_HERE" CUSTOMER_ID="CUSTOMER_ID_HERE" sh curl-scripts/restaurants/add_customer.sh

curl "http://localhost:4741/surveys/${SURVEY_ID}/participants" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "survey": {
      "participantId": "'"${PARTICIPANT_ID}"'"
    }
  }'
