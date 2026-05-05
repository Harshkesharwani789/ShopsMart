variable "aws_region" {
  description = "AWS region used by GitHub Actions and Terraform."
  type        = string
}

variable "project_name" {
  description = "Short project name used as a prefix for AWS resources."
  type        = string
  default     = "shopsmart"
}

variable "artifact_bucket_name" {
  description = "Optional globally unique S3 bucket name. If empty, Terraform creates a unique name."
  type        = string
  default     = ""
}

variable "container_image" {
  description = "Full ECR image URI to deploy to ECS."
  type        = string
  default     = ""
}

variable "enable_ecs_service" {
  description = "Create or update ECS task definition, load balancer, and service after an image has been pushed."
  type        = bool
  default     = true
}

variable "container_port" {
  description = "Port exposed by the backend container."
  type        = number
  default     = 5001
}

variable "desired_count" {
  description = "Number of Fargate tasks to run."
  type        = number
  default     = 2
}

variable "ecs_task_execution_role_name" {
  description = "Existing IAM role name for ECS task execution. AWS Academy labs usually provide LabRole and often block iam:CreateRole."
  type        = string
  default     = "LabRole"
}
