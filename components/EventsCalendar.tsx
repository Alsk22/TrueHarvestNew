import React, { useState, useMemo } from 'react';
import { EVENTS } from '../services/constants';
import type { Event, Page } from '../types';
import CalendarIcon from './icons/CalendarIcon';
import ShareIcon from './icons/ShareIcon';
import HomeIcon from './icons/HomeIcon';

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = eventDate.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    const shareText = `Join me for "${event.title}" on ${formattedDate} at ${formattedTime}. Find out more on the True Harvest App!`;
     if (navigator.share) {
        navigator.share({
            title: `Event: ${event.title}`,
            text: shareText,
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Event info copied to clipboard!');
        });
    }
  };

  return (
    <div className="flex items-start space-x-4 p-5 bg-slate-800/70 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-700">
      <div className="flex-shrink-0">
        <div className="bg-amber-500 text-white rounded-lg p-3 text-center w-24 shadow-lg">
          <p className="text-md font-bold uppercase">{eventDate.toLocaleString('default', { month: 'short' })}</p>
          <p className="text-4xl font-bold tracking-tight">{eventDate.getDate()}</p>
          <p className="text-sm font-semibold">{eventDate.getFullYear()}</p>
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold font-serif text-white">{event.title}</h3>
        <p className="text-md text-slate-300 font-semibold">{formattedTime}</p>
        <p className="text-sm text-slate-400 mt-1">Location: <span className="font-bold text-slate-300">{event.city}</span></p>
        <p className="text-md text-slate-200 mt-3">{event.description}</p>
      </div>
       <button
          onClick={handleShare}
          className="p-2 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
          aria-label="Share event"
      >
          <ShareIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

interface EventsCalendarProps {
    setCurrentPage: (page: Page) => void;
}

const EventsCalendar: React.FC<EventsCalendarProps> = ({ setCurrentPage }) => {
    const [selectedCity, setSelectedCity] = useState('All');

    const indianMetroCities = ['All', 'Delhi', 'Mumbai', 'Chennai', 'Hyderabad', 'Kolkata'];
    const otherCities = useMemo(() => 
        ['All', ...new Set(EVENTS.map(e => e.city).filter(c => !indianMetroCities.includes(c)))].sort(), 
    []);

    const cities = useMemo(() => {
        const metro = indianMetroCities.filter(c => c === 'All' || EVENTS.some(e => e.city === c));
        const others = otherCities.filter(c => c !== 'All' && EVENTS.some(e => e.city === c));
        return [...metro, ...others];
    }, [otherCities]);
    
    const sortedEvents = useMemo(() => EVENTS.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()), []);

    const filteredEvents = useMemo(() => {
        if (selectedCity === 'All') return sortedEvents;
        return sortedEvents.filter(event => event.city === selectedCity);
    }, [selectedCity, sortedEvents]);

    return (
        <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl p-6 md:p-8 max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                    <div className="text-amber-400"><CalendarIcon /></div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white ml-4 tracking-tight">Upcoming Events</h1>
                </div>
                <button
                    onClick={() => setCurrentPage('home')}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full text-slate-300 bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors duration-300"
                    aria-label="Back to Home"
                >
                    <HomeIcon className="h-5 w-5" />
                    <span className="font-semibold text-sm hidden md:block">Home</span>
                </button>
            </div>

            <div className="mb-8">
                <label htmlFor="city-filter" className="block text-md font-medium text-slate-300 mb-2">Filter by city:</label>
                <select
                    id="city-filter"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full md:w-1/2 lg:w-1/3 pl-3 pr-10 py-2.5 text-base bg-slate-800/80 border border-slate-600 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
                >
                    {cities.map(city => <option key={city} value={city}>{city}</option>)}
                </select>
            </div>

            <div className="space-y-6">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map(event => <EventCard key={event.id} event={event} />)
                ) : (
                    <div className="text-center py-10">
                        <p className="text-slate-400 italic text-lg">No events scheduled for this location.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventsCalendar;