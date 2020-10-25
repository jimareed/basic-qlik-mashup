# basic-qlik-mashup

Wraps the Qlik mashup tutorial at https://qlik.dev/tutorials/build-a-simple-mashup-using-nebulajs in a docker container to simplify deployment.

## setup
Setup your tenant using the instructions from the tutorial above, setup a web integration, upload an app and determine the required parameters:
- tenant url
- web integration id
- app id
- chart id

Download this repo and run:
```
npm install
```

## run
Set the parameters above as environment variables and then run the app:
```
export MASHUP_URL=https:// -- insert here -- .us.qlikcloud.com
export MASHUP_WEBINTID= -- insert here -- 
export MASHUP_APPID= -- insert here --
export MASHUP_ID= -- insert here --

npm run start
```