import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';;

const AgendaDossierUser = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventDetails, setEventDetails] = useState(null);

  const handleEventClick = (clickInfo) => {
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
    <div className='border-white bg-white p-4 rounded-[10px] shadow'>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          right: 'title'
        }}
        
        initialView="dayGridMonth"
        events={calendarEvents}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        eventClick={handleEventClick}
        locale={frLocale}
        eventContent={renderEventContent}
      />
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          eventDetails={eventDetails}
        />
      )}
    </div>
  );
};

export default AgendaDossierUser;

// Note: The Modal component needs to be defined or imported
const Modal = ({ isOpen, onClose, eventDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Event Details</h2>
        <p>{eventDetails ? eventDetails.title : 'No details available'}</p>
      </div>
    </div>
  );
};
