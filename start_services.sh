

  cd api-gateway/ || exit
  npm run start:dev &



  cd ../auth-service/ || exit
  npm run start:dev &


# Start User Service

  cd ../user-service/ || exit
  npm run start:dev &


# Start Payment Service

  cd ../payment-service/ || exit
  npm run start:dev &

# Start Notification Service

  cd ../notification-service/ || exit
  npm run start:dev &




  cd ../course-service/ || exit
  npm run start:dev &


# Wait for all background processes to complete
wait


