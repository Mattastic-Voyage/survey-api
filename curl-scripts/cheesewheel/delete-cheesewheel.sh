# ID="<cheese ID>" sh curl-scripts/cheesewheel/delete-cheesewheel.sh

curl "http://localhost:4741/cheesewheels/${ID}" \
  --include \
  --request DELETE \
  