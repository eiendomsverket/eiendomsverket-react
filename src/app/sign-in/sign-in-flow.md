## Sign-In Flow – Dokumentasjon

Denne filen dokumenterer innloggingsflyten for applikasjonen. Den er ment 
som et hjelpemiddel for å forstå hvordan autentisering fungerer.




Filen inkluderer to visualiseringer:

1. **Flytskjema**: Viser de overordnede trinnene i innloggingsprosessen.
```mermaid
flowchart TD
    A[Start] --> B[User enters email and password]
    B --> C{Are credentials valid?}
    C -- Yes --> D[Log in user]
    C -- No --> E[Show error message]
    D --> F[Redirect to dashboard]
    E --> B
````
2. **Sekvensdiagram**: Viser detaljene i autentiseringsprosessen, inkludert interaksjoner mellom applikasjonen, API-et og sesjonen.

```mermaid
sequenceDiagram
    participant App
    participant API
    participant Session

    App->>App: Validate inputs

    alt Inputs invalid
        App-->>App: Show error message
    else Inputs valid
        App->>API: Send credentials
        API-->>App: Return JWT / error

        alt Authentication success
            App->>Session: Store access token
            App->>Session: Decode JWT & check role
        else Authentication failure
            App-->>App: Show error message
        end
    end
```
