# sh curl-scripts/index.sh

curl "http://localhost:4741/participants/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "participant": {
      "name": "'"${NAME}"'",
      "hometown": "'"${HOMETOWN}"'"
    }
  }'
