#!/bin/bash

echo "[shaka] Enter the Voltage node password:"
read PASSWORD
ENCODED_PASSWORD=`echo -n $PASSWORD | base64`

curl -X POST https://shaka-neutrino-one.m.voltageapp.io:8080/v1/unlockwallet  \
    -d "{ \"wallet_password\":\"$ENCODED_PASSWORD\",\"stateless_init\":true}"