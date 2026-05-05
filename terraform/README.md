# ShopSmart AWS Infrastructure

This Terraform configuration supports the project rubric by provisioning:

- A globally unique S3 bucket for artifacts
- S3 versioning
- S3 server-side encryption
- S3 public access blocking
- ECR repository for the backend Docker image
- ECS Fargate cluster, task definition, service, security groups, and public Application Load Balancer
- Existing IAM role lookup for ECS task execution. AWS Academy labs commonly use `LabRole` and block new IAM role creation.

The GitHub Actions workflow applies base infrastructure first with `enable_ecs_service=false`, pushes the Docker image to ECR, then applies the ECS service with `enable_ecs_service=true`.

Required GitHub Actions secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_SESSION_TOKEN`
- `AWS_REGION`

Manual deployment example:

```bash
terraform init
terraform validate
terraform plan -var="aws_region=us-east-1" -var="enable_ecs_service=false"
terraform apply -var="aws_region=us-east-1" -var="enable_ecs_service=false"
```

If your AWS account uses a different pre-created ECS task execution role, pass it with:

```bash
terraform apply -var="aws_region=us-east-1" -var="ecs_task_execution_role_name=YourRoleName"
```
