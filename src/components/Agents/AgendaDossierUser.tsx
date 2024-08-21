import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import frLocale from "@fullcalendar/core/locales/fr";

const AgendaDossierUser = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventDetails, setEventDetails] = useState(null);

  const handleEventClick = (clickInfo) => {
    console.log("Event clicked:", clickInfo.event);
    setEventDetails(clickInfo.event);
    setIsModalOpen(true);
  };

  const renderEventContent = (eventInfo) => {
    return (
      <div>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </div>
    );
  };

  return (
    <div className="border-white bg-white p-4 rounded-[10px] shadow">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          right: "title",
        }}
        initialView="dayGridMonth"
        events={calendarEvents}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        eventClick={handleEventClick} // Assurez-vous que cette ligne est bien présente
        locale={frLocale}
        eventContent={renderEventContent}
      />
    </div>
  );
};

export default AgendaDossierUser;

const Modal = ({ isOpen, onClose, eventDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}>
        ddd
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full p-6 z-10">
        <div className="flex justify-end">
          <button
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={onClose}
          >
            &times;ddssssssssssss
          </button>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Event Details</h2>
          <p>{eventDetails ? eventDetails.title : "No details available"}</p>
          {/* Affiche d'autres détails de l'événement ici si nécessaire */}
        </div>
      </div>
    </div>
  );
};
