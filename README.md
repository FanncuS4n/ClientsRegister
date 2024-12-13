# 📦 Web API for Client Registration

## 🌟 Highlights

- Client registration with secured access.
- Implementation of Authorization and Authentication using JWT.
- Repository pattern for clean and scalable code.
- API tested and documented with Postman collections.

## ℹ️ Overview

This Web API enables secure client registration and data management. 
It is designed following best practices such as the repository pattern and DTOs for data abstraction. 
JWT-based Authorization and Authentication ensure secure access to client information. 
Postman collections are included for API testing.

### ✍️ Authors

Hi! I’m Facundo, a backend developer currently working full-time as a software developer, applying my skills and knowledge to real-world projects.

Throughout my educational journey, personal projects, and current professional experience, I have developed a solid foundation in functional programming and object-oriented programming (OOP), along with expertise in database management and backend development frameworks.

- **GitHub Profile** - [Facundo's GitHub](https://github.com/yourusername)
- **LinkedIn** - [Website](www.linkedin.com/in/fancusan)

## 🚀 Usage


```bash
# Example API request using curl:
curl -X POST \
  http://yourapiurl/api/clients/register \
  -H 'Authorization: Bearer <your-token>' \
  -d '{"name": "John Doe", "email": "johndoe@example.com"}'
```

## ⬇️ Installation

Follow these steps to set up the Web API:

```bash
# Clone the repository
git clone https://github.com/yourusername/webapi-client-registration.git

# Navigate to the project directory
cd webapi-client-registration

# Install dependencies
dotnet restore

# Run the application
dotnet run
```

Requirements:
- .NET 6.0 or later.
- A database connection (configured in `appsettings.json`).
- Postman for API testing (optional).

## 💭 Contact
📩 fancus4n@gmail.com
📱 + 54 11 6874-0442
