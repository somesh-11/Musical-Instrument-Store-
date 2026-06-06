## AWS Static Website Deployment using VPC, EC2 & Auto Scaling Group

##Architecture
![Architecture](Architecture/Architecture-dg.png)
Project Overview

This project demonstrates the deployment of a static website on AWS infrastructure created from scratch using AWS Free Tier services.

The infrastructure includes:

Custom Virtual Private Cloud (VPC)
Public Subnet
Internet Gateway
Route Tables
Security Groups
EC2 Instance
Launch Template
Auto Scaling Group (ASG)

The static website files are hosted on an EC2 instance running a web server, and the Auto Scaling Group ensures instance availability and scalability.

##AWS Services Used
  
- Service	Purpose
VPC	Network isolation
Public Subnet	Hosts web server
Internet Gateway	Internet access
Route Table	Traffic routing
Security Group	Access control
EC2	Web server hosting
Launch Template	EC2 configuration
Auto Scaling Group	Instance management
Features
Custom VPC configuration
Public subnet with internet access
Security Group allowing HTTP and SSH access
Static website hosted on EC2
Auto Scaling Group deployment
AWS Free Tier compatible setup
Infrastructure deployment documentation included
Deployment Steps
1. Create VPC
Create a custom VPC
Configure CIDR block
Enable DNS hostnames
2. Create Public Subnet
Create subnet within VPC
Associate route table
3. Configure Internet Gateway
Attach Internet Gateway to VPC
Add default route (0.0.0.0/0)
4. Create Security Group

Allow:

HTTP (80)
SSH (22)
5. Launch EC2 Instance
Amazon Linux 2
t2.micro (Free Tier)
Associate public IP
6. Install Web Server

Example:

sudo yum update -y
sudo yum install httpd -y
sudo systemctl start httpd
sudo systemctl enable httpd
7. Deploy Website Files
sudo cp -r website-files/* /var/www/html/
8. Create Launch Template

Configure:

AMI
Instance Type
Security Group
User Data
9. Create Auto Scaling Group
Attach Launch Template
Select VPC and subnet
Configure desired capacity

Verification

Website successfully served through EC2 instance:

http://<EC2-Public-IP>

Auto Scaling Group configured to maintain instance availability.

Learning Outcomes

Through this project I gained hands-on experience with:

AWS Networking (VPC, Subnets, Route Tables)
EC2 Instance Management
Security Groups
Web Server Configuration
Auto Scaling Groups
Static Website Hosting
AWS Free Tier Resource Management

