import React, { useState } from 'react';
import { Calendar, Clock, Filter } from 'lucide-react';

type Class = {
  name: string;
  color: string;
};

const CLASSES: Class[] = [
  { name: 'Muay Thai', color: 'bg-red-500' },
  { name: 'Boxe', color: 'bg-blue-500' },
  { name: 'Jiu Jitsu Kids', color: 'bg-green-500' },
  { name: 'MMA', color: 'bg-purple-500' },
  { name: 'Jiu Jitsu', color: 'bg-yellow-500' },
  { name: 'Nogi', color: 'bg-orange-500' },
];

const DAYS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
const HOURS = [
  '07:00', '08:00', '09:00', '16:00', '18:30', '19:30', '20:30'
];

function App() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const getClassForTimeSlot = (day: string, time: string) => {
    const schedule: { [key: string]: { [key: string]: boolean } } = {
      'Muay Thai': {
        'Segunda-07:00': true, 'Quarta-07:00': true, 'Sexta-07:00': true,
        'Segunda-08:00': true, 'Quarta-08:00': true, 'Sexta-08:00': true,
        'Terça-16:00': true, 'Quinta-16:00': true,
        'Segunda-19:30': true, 'Terça-19:30': true, 'Quarta-19:30': true, 'Quinta-19:30': true,
      },
      'Boxe': {
        'Terça-07:00': true, 'Quinta-07:00': true,
        'Segunda-18:30': true, 'Quarta-18:30': true, 'Sexta-18:30': true,
      },
      'Jiu Jitsu Kids': {
        'Terça-09:00': true, 'Quinta-09:00': true,
        'Terça-18:30': true, 'Quinta-18:30': true,
      },
      'MMA': {
        'Segunda-16:00': true, 'Quarta-16:00': true, 'Sexta-16:00': true,
      },
      'Jiu Jitsu': {
        'Segunda-20:30': true, 'Terça-20:30': true, 'Quarta-20:30': true,
      },
      'Nogi': {
        'Quinta-20:30': true,
      },
    };

    return Object.entries(schedule).find(([className, slots]) => 
      slots[`${day}-${time}`] && (!selectedClass || className === selectedClass)
    )?.[0] || null;
  };

  const getClassColor = (className: string) => {
    return CLASSES.find(c => c.name === className)?.color || 'bg-gray-200';
  };

  return (
    <div id="schedule" className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Quadro de Horários
          </h1>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <button
              onClick={() => setSelectedClass(null)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm transition-all duration-200 ${
                !selectedClass 
                ? 'bg-indigo-500 text-white ring-2 ring-indigo-500 ring-offset-2' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Filter size={18} className={!selectedClass ? 'text-white' : 'text-gray-400'} />
              <span className="font-medium">Todas as modalidades</span>
            </button>
            {CLASSES.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedClass(c.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm transition-all duration-200 ${
                  selectedClass === c.name
                  ? `${c.color} bg-opacity-100 text-white ring-2 ring-offset-2 ${c.color.replace('bg-', 'ring-')}`
                  : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className={`w-3 h-3 rounded-full ${
                  selectedClass === c.name ? 'bg-white' : `${c.color} bg-opacity-70`
                }`} />
                <span className="font-medium">{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5 rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      <div className="flex items-center gap-2">
                        <Clock size={20} className="text-gray-500" />
                        Horário
                      </div>
                    </th>
                    {DAYS.map((day) => (
                      <th key={day} scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        <div className="flex items-center gap-2">
                          <Calendar size={20} className="text-gray-500" />
                          {day}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {HOURS.map((time) => (
                    <tr key={time}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {time}
                      </td>
                      {DAYS.map((day) => {
                        const className = getClassForTimeSlot(day, time);
                        return (
                          <td key={`${day}-${time}`} className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {className && (
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getClassColor(className)} bg-opacity-10 text-gray-900`}>
                                {className}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
