import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
import { AgendaInterface } from '../../Interfaces/AgendaInterface';
import { RepositoryConfigInterface } from '../../Interfaces/RepositoryConfig.interface';
import AgendaService from '../../Services/Agenda.service';
import { Link } from 'react-router-dom';

const AgendaComponent: React.FC = () => {
  const [agenda, setAgenda] = useState<AgendaInterface[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventDetails, setEventDetails] = useState<any>({});
  const [isEditing, setIsEditing] = useState(false);

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const agendaService = new AgendaService(config);

  const getAgenda = async () => {
    try {
      const response = await agendaService.getAgenda();
      if (Array.isArray(response)) {
        setAgenda(response);
      } else {
        console.error("La réponse n'est pas un tableau :", response);
      }
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAgenda();
  }, []);

  const calendarEvents = agenda.map((item) => ({
    title: item.title,
    start: item.start,
    end: item.end,
    id: item.id_postect,
    agents: item.agents,
    pospect: item.pospect 
  }));

  const handleEventClick = (info: any) => {
    setEventDetails(info.event.extendedProps);
    setIsModalOpen(true);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await agendaService.updateAgenda(eventDetails); // Ajoutez la logique pour mettre à jour l'agenda
      getAgenda(); // Rechargez l'agenda après la mise à jour
      setIsEditing(false);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'agenda :", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const Modal: React.FC<{ isOpen: boolean; onClose: () => void; eventDetails: any }> = ({ isOpen, onClose, eventDetails }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-lg">
          <h3 className="text-2xl font-bold mb-4">Détails de rappel</h3>
          <hr />
          <h4 className="text-lg font-semibold mt-4">Détails de l'agent :</h4>
          <p><strong>Nom :</strong> {isEditing ? <input type="text" name="agentNom" defaultValue={eventDetails.agents?.nom} onChange={handleInputChange} /> : eventDetails.agents?.nom}</p>
          <p><strong>Prénom :</strong> {isEditing ? <input type="text" name="agentPrenom" defaultValue={eventDetails.agents?.prenom} onChange={handleInputChange} /> : eventDetails.agents?.prenom}</p>
          <p><strong>Email :</strong> {isEditing ? <input type="text" name="agentEmail" defaultValue={eventDetails.agents?.email} onChange={handleInputChange} /> : eventDetails.agents?.email}</p>
          <h4 className="text-lg font-semibold mt-4">Détails du prospect :</h4>
          <p><strong>Nom :</strong> {isEditing ? <input type="text" name="prospectNom" defaultValue={eventDetails.pospect?.nom} onChange={handleInputChange} /> : eventDetails.pospect?.nom}</p>
          <p><strong>Prénom :</strong> {isEditing ? <input type="text" name="prospectPrenom" defaultValue={eventDetails.pospect?.prenom} onChange={handleInputChange} /> : eventDetails.pospect?.prenom}</p>
          <p><strong>Email :</strong> {isEditing ? <input type="text" name="prospectEmail" defaultValue={eventDetails.pospect?.email} onChange={handleInputChange} /> : eventDetails.pospect?.email}</p>
          <p><strong>Téléphone :</strong> {isEditing ? <input type="text" name="prospectTelephone" defaultValue={eventDetails.pospect?.telephone} onChange={handleInputChange} /> : eventDetails.pospect?.telephone}</p>
          {
            isEditing && (
              <div>
                <br />
                <hr />
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Date
                </label>
                <input
                  type="datetime-local"
                  name="start"
                  onChange={handleInputChange}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            )
          }
          <div className="mt-4 flex gap-3 justify-end">
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onClose}>
              Fermer
            </button>
            {isEditing ? (
              <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSaveClick}>
                Modifier
              </button>
            ) : (
              <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleEditClick}>
                Modifier
              </button>
            )}
            <Link to="/viewProspect" className="bg-green-500 text-white px-4 py-2 rounded" onClick={onClose}>
              Retour aux prospects
            </Link>
          </div>
        </div>
      </div>
    );
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
        locale={frLocale}
        eventContent={renderEventContent}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eventDetails={eventDetails}
      />
    </>
  );
};

const formatDate = (date: string) => {
  const parsedDate = new Date(date);
  return isNaN(parsedDate.getTime()) ? 'Invalid Date' : parsedDate.toLocaleString();
};

const renderEventContent = (eventInfo: any) => { 
  return (
    <div className="bg-blue-400 w-full text-white border border-blue-400 p-2 text-center rounded">
      <span className="text-xs">{eventInfo.event.title}</span>
      <p>{formatDate(eventInfo.event.start)}</p>
    </div>
  );
};

export default AgendaComponent;
