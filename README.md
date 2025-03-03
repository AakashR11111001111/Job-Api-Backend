# Job API Backend

This is a RESTful API for job postings, allowing users to create, list, update, and delete job listings.

## API Endpoints

### 1️⃣ Create a Job (POST API)
**Endpoint:**  
`POST https://job-api-backend-1m17.onrender.com/api/v1/job/create`

**Request Body (JSON Format):**  
```json
{
    "title": "Software Engineer",
    "description": "Develop and maintain web applications.",
    "location": "Bangalore, India",
    "skills": ["JavaScript", "React", "Node.js"],
    "minExperienceRequired": 2,
    "salary": 800000,
    "isVacant": true
}
```

---

### 2️⃣ Get All Jobs (GET API)
**Endpoint:**  
`GET https://job-api-backend-1m17.onrender.com/api/v1/job/list`

📌 **This API returns a list of all job postings.**  

---

### 3️⃣ Edit a Job (PATCH API)
**Endpoint:**  
`PATCH https://job-api-backend-1m17.onrender.com/api/v1/job/edit/:jobId`

**Request Body (Example - Salary Update):**  
```json
{
    "salary": 900000
}
```
📌 **Replace `:jobId` with the actual job ID.**  

---

### 4️⃣ Delete a Job (DELETE API)
**Endpoint:**  
`DELETE https://job-api-backend-1m17.onrender.com/api/v1/job/delete/:jobId`

📌 **Replace `:jobId` with the actual job ID to delete a specific job.**  

---

## 📌 How to Use
1. Use Postman, cURL, or any HTTP client to test these APIs.
2. Replace `:jobId` with the actual Job ID while updating or deleting a job.
3. Ensure that JSON format is correctly followed for `POST` and `PATCH` requests.

🚀 Happy Coding! 🎉
