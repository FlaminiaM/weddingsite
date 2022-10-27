export const attendanceOptions =[
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

export const dietaryRequirementsOptions = [
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
        labelText : "Attendance",
        isMandatory : true,
        inputType : "select",
        inputName : "attendance",
        isFullWidth:true,
        isMulti:false,
        options: attendanceOptions,
    },
    {
        labelText : "Dietary requirements",
        isMandatory : false,
        inputType : "select",
        inputName : "dietaryrequirements",
        isFullWidth:true,
        isMulti:true,
        options: dietaryRequirementsOptions
    },
    {
        labelText : "Anything else you want to let us know?",
        isMandatory : false,
        inputType : "textarea",
        inputName : "notes",
        isFullWidth:true,
    }
]