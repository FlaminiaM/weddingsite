import React from 'react';
import './AttendeesList.scss';
import {attendanceOptions, dietaryRequirementsOptions} from '../../../data/formfields';

function AttendeesList({attendees, isItalian}) {
  console.log("attendees", attendees)
  const attendanceOptionsLang = isItalian ? attendanceOptions["italian"] : attendanceOptions["english"];
  const dietaryRequirementsOptionsLang = isItalian ? dietaryRequirementsOptions["italian"] : dietaryRequirementsOptions["english"];
  return (
    <table className='attendees-table mt-xxl mb-xxl'>
      <thead>
        <tr className='attendees-table-row attendees-table-row--header'>
          <th className='attendees-table-column attendees-table-column--header'>{isItalian ? 'Nome completo' : 'Full Name'}</th>
          <th className='attendees-table-column attendees-table-column--header'>{isItalian ? 'Presenza' : 'Attendance'}</th>
          <th className='attendees-table-column attendees-table-column--header'>{isItalian ? 'Esigenze alimentari' : 'Dietary Requirements'}</th>
        </tr>
      </thead>
      <tbody>
      {attendees.map((attendee, i) => (
          <tr key={i} className='attendees-table-row attendees-table-row--body'>
            <td className='attendees-table-column attendees-table-column--data'>{attendee.firstname} {attendee.lastname}</td>
            <td className='attendees-table-column attendees-table-column--data'>{attendanceOptionsLang.filter(option => option.value === attendee.attendance)[0].label}</td>
            <td className='attendees-table-column attendees-table-column--data'><ul>{attendee.dietaryrequirements.map(req => <li>{dietaryRequirementsOptionsLang.filter(option => option.value === req)[0].label}</li>)}</ul></td>
          </tr>
        ))}
      </tbody>
  </table>
  )
}

export default AttendeesList;