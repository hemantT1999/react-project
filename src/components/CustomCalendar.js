// src/components/CustomCalendar.js
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Paper,
} from "@mui/material";
import "./CustomCalendar.css"; // Import the custom CSS

function CustomCalendar() {
  const [events, setEvents] = useState([
    { title: "Event 1", date: "2024-06-10" },
    { title: "Event 2", date: "2024-06-15" },
  ]);

  const [open, setOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", date: "" });

  const handleDateClick = (arg) => {
    setNewEvent({ ...newEvent, date: arg.dateStr });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setOpen(false);
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Calendar with Events
      </Typography>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        eventContent={(eventInfo) => (
          <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
          </>
        )}
        eventClick={(eventClickInfo) => {
          alert(`Event ${eventClickInfo.event.title} clicked`);
        }}
        dayMaxEventRows={true}
        editable={true}
        droppable={true}
        selectable={true}
        slotDuration="00:30:00"
        dayCellClassNames={(date) => {
          if (date.isToday) {
            return "fc-day-today"; // Apply the custom CSS class
          }
          return "";
        }}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Event Title"
            type="text"
            fullWidth
            variant="standard"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Event Date"
            type="date"
            fullWidth
            variant="standard"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddEvent}>Add Event</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

export default CustomCalendar;
