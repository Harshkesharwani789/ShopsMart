output "artifact_bucket_name" {
  description = "S3 bucket with versioning, encryption, and blocked public access enabled."
  value       = aws_s3_bucket.artifacts.bucket
}

output "ecr_repository_url" {
  description = "ECR repository URL used by the Docker build job."
  value       = aws_ecr_repository.backend.repository_url
}

output "ecs_cluster_name" {
  description = "ECS cluster name."
  value       = aws_ecs_cluster.main.name
}

output "ecs_service_name" {
  description = "ECS service name."
  value       = length(aws_ecs_service.backend) > 0 ? aws_ecs_service.backend[0].name : ""
}

output "service_url" {
  description = "Public HTTP endpoint for the ECS service."
  value       = length(aws_lb.backend) > 0 ? "http://${aws_lb.backend[0].dns_name}" : ""
}
