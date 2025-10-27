sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /spa
    server-->>browser: HTML page

    browser->>server: GET /main.css
    server-->>browser: CSS file

    browser->>server: GET /spa.js
    server-->>browser: JavaScript file

    Note right of browser: JS fetches notes and renders them

    browser->>server: GET /data.json
    server-->>browser: notes JSON
