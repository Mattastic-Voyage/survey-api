# NAME="John Doe" HOMETOWN="Boston" sh curl-scripts/participants/create.sh

curl 'http://localhost:4741/participants' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "participant": {
      "name": "'"${NAME}"'",
      "hometown": "'"${HOMETOWN}"'"
    }
  }'
