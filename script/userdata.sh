#!/bin/bash
sudo apt update -y
sudo apt upgrade
sudo apt install nginx -y
sudo systemctl start nginx
