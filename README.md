# **Vehicle Tracker App**

## Project Overview

The Vehicle Tracker App was created to solve the problem of locating vehicles by their Serial Number (SN). When dealing with a fleet of over 500 vehicles, finding a specific vehicle based on its SN was time-consuming and inefficient. The challenge became even more apparent when tasked with identifying where each vehicle was located, especially when needing to service them or monitor vehicle conditions.

After discussing the issue with my manager, a new parking plan was proposed, but it failed to address the crucial problem: how to quickly locate the vehicles that needed servicing. This is where the Vehicle Tracker App comes in.

Problem Statement

The traditional method of locating vehicles based solely on their SN wasn’t effective. I needed an intuitive way to find vehicles that required maintenance or top-ups. I also needed a system that could track various vehicle data, such as fuel and coolant levels, to ensure that the vehicles were in optimal condition.

## Solution

The Vehicle Tracker App allows users to:
	•	Track Vehicle Location: Using the SN, you can now pinpoint the exact location of each vehicle in the parking area.
	•	Monitor Vehicle Health: The app tracks critical vehicle data like fuel and coolant levels, helping you identify which vehicles need a top-up or maintenance.
	•	Service and Maintenance: The app shows vehicles with issues and their parking locations, making it easier for the service team to prioritize and address problems.

With this system, I no longer need to manually search through thousands of vehicles to find one with a problem. I can simply use the app to identify vehicles in need of attention and know exactly where they are parked.

## Features
	•	Real-time Tracking: Get the exact location of any vehicle based on its SN.
	•	Vehicle Health Monitoring: Track fuel levels, coolant levels, and other important metrics.
	•	Service Alerts: Automatically highlight vehicles that require maintenance or refueling.

## Database

Note: For safety and security reasons, the database for vehicle data is not provided in this repository. You will need to set up your own database and connect it to the app for storing vehicle information.

## Showcase Data

Note: The data.js file included in the project is for showcase purposes only. It contains sample data to demonstrate how the app functions, but it should not be used for production purposes. You will need to replace it with your own database connection and real data for full functionality.

Future Improvements
	•	8Tune Integration: The app will soon integrate the 8Tune system for enhanced monitoring.
	•	Expanded Data: Additional vehicle metrics and tracking features will be added.

## Getting Started

To get started with the Vehicle Tracker App, clone this repository and follow the installation instructions.
```bash
git clone https://github.com/yourusername/vehicle-tracker.git
cd vehicle-tracker
npm install
npm start
