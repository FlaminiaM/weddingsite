export const attendanceOptions = {
    italian:[
        {
            label: "Ci saro'",
            value: "yes"
        },
        {
            label: "Non posso",
            value: "no"
        },
        {
            label: "Solo cerimonia",
            value: "churchonly"
        },
        {
            label: "Solo ricevimento",
            value: "receptiononly"
        }
    ],
    english:[
        {
            label: "I'll be there",
            value: "yes"
        },
        {
            label: "I can't attend",
            value: "no"
        },
        {
            label: "Church only",
            value: "churchonly"
        },
        {
            label: "Reception only",
            value: "receptiononly"
        }
    ]
}

export const dietaryRequirementsOptions = {
    italian:[
        {
            label: "Senza Glutine",
            value: "glutenfree"
        },
        {
            label: "Vegetariano",
            value: "vegeterian"
        },
        {
            label: "Vegano",
            value: "vegan"
        },
        {
            label: "Allergia arachidi",
            value: "nutallergy"
        }
    ],
    english:[
        {
            label: "Gluten free",
            value: "glutenfree"
        },
        {
            label: "Vegetarian",
            value: "vegeterian"
        },
        {
            label: "Vegan",
            value: "vegan"
        },
        {
            label: "Nut allergy",
            value: "nutallergy"
        }
    ]
}

export const formFieldsData = {
    italian: [
        {
            labelText : "Nome",
            isMandatory : true,
            inputType : "text",
            inputName : "firstname",
            isFullWidth:false,
            errorMessages: {
                empty: "Campo obbligatorio"
            }
        },
        {
            labelText : "Cognome",
            isMandatory : true,
            inputType : "text",
            inputName : "lastname",
            isFullWidth:false,
            errorMessages: {
                empty: "Campo obbligatorio"
            }
        },
        {
            labelText : "Presenza",
            isMandatory : true,
            inputType : "select",
            inputName : "attendance",
            isFullWidth:true,
            isMulti:false,
            options: attendanceOptions.italian,
            errorMessages: {
                empty: "Campo obbligatorio"
            }
        },
        {
            labelText : "Allergie o ?",
            isMandatory : false,
            inputType : "select",
            inputName : "dietaryrequirements",
            isFullWidth:true,
            isMulti:true,
            options: dietaryRequirementsOptions.italian
        },
        {
            labelText : "Note",
            isMandatory : false,
            inputType : "textarea",
            inputName : "notes",
            isFullWidth:true,
        }
    ],
    english: [
        {
            labelText : "First Name",
            isMandatory : true,
            inputType : "text",
            inputName : "firstname",
            isFullWidth:false,
            errorMessages: {
                empty: "Please fill this in"
            }
        },
        {
            labelText : "Last Name",
            isMandatory : true,
            inputType : "text",
            inputName : "lastname",
            isFullWidth:false,
            errorMessages: {
                empty: "Please fill this in"
            }
        },
        {
            labelText : "Attendance",
            isMandatory : true,
            inputType : "select",
            inputName : "attendance",
            isFullWidth:true,
            isMulti:false,
            options: attendanceOptions.english,
            errorMessages: {
                empty: "Please fill this in"
            }
        },
        {
            labelText : "Dietary requirements",
            isMandatory : false,
            inputType : "select",
            inputName : "dietaryrequirements",
            isFullWidth:true,
            isMulti:true,
            options: dietaryRequirementsOptions.english
        },
        {
            labelText : "Anything else you want to let us know?",
            isMandatory : false,
            inputType : "textarea",
            inputName : "notes",
            isFullWidth:true,
        }
    ]
}