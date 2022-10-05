export const formFields = [
    {
        labelText : "First Name",
        isMandatory : true,
        inputType : "text",
        inputName : "firstname",
        isFullWidth:false,
    },
    {
        labelText : "Last Name",
        isMandatory : true,
        inputType : "text",
        inputName : "lastname",
        isFullWidth:false,
    },
    {
        labelText : "Email Address",
        isMandatory : true,
        inputType : "email",
        inputName : "email",
        isFullWidth:true,
    },
    {
        labelText : "Attendance",
        isMandatory : true,
        inputType : "select",
        inputName : "attendance",
        isFullWidth:true,
        isMulti:false,
        options: [
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
        ],
    },
    {
        labelText : "Dietary requirements",
        isMandatory : false,
        inputType : "select",
        inputName : "dietaryrequirements",
        isFullWidth:true,
        isMulti:true,
        options: [
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
    },
    {
        labelText : "Anything else you want to let us know?",
        isMandatory : false,
        inputType : "textarea",
        inputName : "notes",
        isFullWidth:true,
    }
]