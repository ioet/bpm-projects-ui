#!/bin/bash
response=$(curl -u secret:secret https://bpm-projects-api.azurewebsites.net/login);
token=$(expr $response : "{\"token\":\"\(.*\)\"}");
export REACT_APP_BPM_PROJECTS_ACCESS_TOKEN=$token;
echo "done";

#Created By Lukas Ziefle
