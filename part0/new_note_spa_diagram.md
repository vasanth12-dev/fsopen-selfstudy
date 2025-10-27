sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes note and clicks Save

    browser->>server: POST /new_note_spa (JSON: {content, date})
    activate server
    server-->>browser: 201 Created
    deactivate server

    Note right of browser: JS updates the notes list dynamically (no page reload)
