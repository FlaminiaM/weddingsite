import React from 'react';
import './AttendeesList.scss';
import {attendanceOptions, dietaryRequirementsOptions} from '../../../data/formfields';

function AttendeesList({attendees, isItalian}) {
  console.log("attendees", attendees)
  const attendanceOptionsLang = isItalian ? attendanceOptions["italian"] : attendanceOptions["english"];
  const dietaryRequirementsOptionsLang = isItalian ? dietaryRequirementsOptions["italian"] : dietaryRequirementsOptions["english"];
  return (
    // <div className='attendees-table mt-xxl'>
    //   <div className='attendees-table-row attendees-table-row--header'>
    //     <div className='attendees-table-column attendees-table-column--header'>Full Name</div>
    //     <div className='attendees-table-column attendees-table-column--header'>Attendance</div>
    //     <div className='attendees-table-column attendees-table-column--header'>Dietary Requirements</div>
    //   </div>
    //   {attendees.map(attendee => 
    //   (
    //     <div className='attendees-table-row attendees-table-row--body'>
    //       <div className='attendees-table-column attendees-table-column--data'>{attendee.firstname} {attendee.lastname}</div>
    //       <div className='attendees-table-column attendees-table-column--data'>{attendanceOptions.filter(option => option.value === attendee.attendance)[0].label}</div>
    //       <div className='attendees-table-column attendees-table-column--data'><ul>{attendee.dietaryrequirements.map(req => <li>{dietaryRequirementsOptions.filter(option => option.value === req)[0].label}</li>)}</ul></div>
    //     </div>
    //   ))}
    // </div>
    <table className='attendees-table mt-xxl mb-xxl'>
      <thead>
        <tr className='attendees-table-row attendees-table-row--header'>
          <th className='attendees-table-column attendees-table-column--header'>Full Name</th>
          <th className='attendees-table-column attendees-table-column--header'>Attendance</th>
          <th className='attendees-table-column attendees-table-column--header'>Dietary Requirements</th>
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