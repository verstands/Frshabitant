import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';

const AgendaComponent: React.FC = () => {
    const [calendarEvents] = useState([
        { title: 'Evenement 1', start: '2023-07-15T10:30:00', end: '2023-07-15T12:30:00' },
        { title: 'Evenement 2', start: '2023-07-20T14:00:00', end: '2023-07-20T16:00:00' }
    ]);

    const handleEventClick = (info: any) => {
        alert(`Evenement: ${info.event.title}`);
    };

    const handleDateSelect = () => {
        // Gérer la sélection de date ici
    };

    const handleEventDelete = () => {
        // Gérer la suppression d'événement ici
    };

    const handleEventDrop = () => {
        // Gérer le déplacement d'événement ici
    };

    const handleEventResize = () => {
        // Gérer le redimensionnement d'événement ici
    };

    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView="dayGridMonth"
                events={calendarEvents}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                eventClick={handleEventClick}
                select={handleDateSelect}
                eventRemove={handleEventDelete}
                eventColor="#378006"
                eventTextColor="white"
                eventBorderColor="black"
                locale={frLocale}
                eventDrop={handleEventDrop}
                eventResize={handleEventResize}
            />
        </>
    );
};

export default AgendaComponent;