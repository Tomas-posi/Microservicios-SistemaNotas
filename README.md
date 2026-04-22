## Microservices Student Grades System
A simplified student grades platform built to demonstrate the fundamentals of a microservices architecture using Docker. In this system, students can access and review their grades through a frontend application connected to independent backend services.

## Overview

This project was created as an academic and technical exercise to explore how multiple services can work together in a distributed system. The repository is organized into separate components for authentication, grades management, database setup, and frontend delivery.

## Project Goals
- Understand the basics of microservices architecture
- Separate responsibilities across independent services
- Run multiple services together with Docker Compose
- Practice service communication in a modular system
- Build a simple but realistic academic use case
- Architecture

## The project is divided into the following main parts:

- auth-service — handles authentication-related logic
- grades-service — manages grade-related functionality
- frontend — user-facing interface for students
- db — database-related resources
- docker-compose.yml — orchestrates the services in containers
- This separation helps illustrate how each service can focus on a specific responsibility while remaining part of a larger system.

## Tech Stack

Based on the repository structure and detected languages, this project uses:

- HTML
- JavaScript
- Docker
- Docker Compose
- Main Features
- Student-facing interface
- Authentication service separation
- Grades service separation
- Containerized multi-service setup
- Modular project structure for learning microservices concepts

## Running the Project
- Clone the repository
- git clone https://github.com/Tomas-posi/Microservicios-SistemaNotas.git
- Enter the project folder
- cd Microservicios-SistemaNotas
- Start the services with Docker Compose
- docker compose up --build
- Open the frontend in your browser after the containers start
