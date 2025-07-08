## Sign-up Flow – Dokumentasjon

Denne filen dokumenterer registreringsflyten for applikasjonen. Den er ment som et hjelpemiddel for å forstå hvordan brukere registrerer seg.


Filen inkluderer to visualiseringer:
1. **Flytskjema**: Viser de overordnede trinnene i registreringsprosessen.
```mermaid
flowchart TD
    A[Start: User write form data] --> B[Check if company exists]
    B --> C{Company exists?}
    C -- Yes --> D[Check if user exists]
    C -- NO --> E[If user role is leader]
    E --> J["Create user with form data"]
    J --> K["create company with form data"]
    K -->I 
    E -- No --> I[Show alert: Company does not exist]
    D --> F{User exists?}
F -- Yes --> G[Show alert: User already exists]
F -- No --> H[Create user with form data]
H --> I[End: User created successfully]
```

2. **Sekvensdiagram**: Viser detaljene i registreringsprosessen, inkludert interaksjoner mellom applikasjonen, API-et og databasen.

```mermaid
sequenceDiagram
    participant App
    participant API
    participant Database

    App->>App: Validate form inputs

    alt Inputs invalid
        App-->>App: Show error message
    else Inputs valid
        App->>API: Check if company exists
        API-->>App: Return company status

        alt Company does not exist
            App-->>App: Show alert: Company does not exist
        else Company exists
            App->>API: Check if user exists
            API-->>App: Return user status

            alt User already exists
                App-->>App: Show alert: User already exists
            else User does not exist
                App->>API: Create user with form data
                API-->>Database: Insert new user record
                Database-->>API: Confirm user creation
            end
        end
    end
```