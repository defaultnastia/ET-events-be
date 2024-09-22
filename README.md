# ET Events

## MIDDLE LEVEL OF COMPLEXITY

## Description

ET-events-be is a back-end application written with node.js and express.js. It
handles API requests for the collection of events and guests:

```
interface Event {
    id: string;
    title: string;
    description: string;
    eventDate: Date;
    organizer:string;
    }
```

```
interface Guest {
    id: string;
    eventId: string;
    name: string;
    email: string;
    birthDate: Date;
    }
```

## Routes

- GET /api/events
- GET /api/events/:id/guests
- POST /api/events/:id/guests
