export const itemsArray = [
    {
        id: 1,
        name: "Basic Information",
        fields: [{
            id: "name",
            fieldName: "Name",
            fieldType: "text",
            fieldValue: ""
        }, {
            id: "date_of_birth",
            fieldName: "Date of Birth",
            fieldPlacehoder: "DD/MM/YYYY",
            fieldType: "text",
            fieldValue: ""
        }, {
            id: "gender",
            fieldName: "Gender",
            fieldType: "option",
            fieldValue: "",
            fieldOptions: [
                {
                    optionName: "Female",
                    optionValue: "Female"
                },
                {
                    optionName: "Male",
                    optionValue: "Male"
                },
                {
                    optionName: "Other",
                    optionValue: "Other"
                }
            ]
        }, {
            id: "married",
            fieldName: "Are you married?",
            fieldType: "toggle",
            fieldValue: false
        }, {
            id: "apply_for",
            fieldName: "Job Location",
            fieldType: "text",
            fieldValue: "Bangalore"
        }]
    },
    {
        id: 2,
        name: "Address Details",
        fields: [{
            id: "address_1",
            fieldName: "Address Line 1",
            fieldType: "text",
            fieldValue: ""
        }, {
            id: "address_2",
            fieldName: "Address Line 2",
            fieldType: "text",
            fieldValue: ""
        }, {
            id: "landmark",
            fieldName: "Landmark",
            fieldType: "text",
            fieldValue: ""
        }, {
            id: "country",
            fieldName: "Country",
            fieldType: "option",
            fieldValue: "IND",
            fieldOptions: [
                {
                    optionName: "India",
                    optionValue: "IND"
                },
                {
                    optionName: "United Status of America",
                    optionValue: "USA"
                },
                {
                    optionName: "China",
                    optionValue: "China"
                }
            ]
        }, {
            id: "state",
            fieldName: "State",
            fieldType: "text",
            fieldValue: ""
        }, {
            id: "city",
            fieldName: "City",
            fieldType: "text",
            fieldValue: ""
        }]
    },
    {
        id: 3,
        name: "Contact Details",
        fields: [{
            id: "email_address",
            fieldName: "Email Address",
            fieldType: "text",
            fieldValue: ""
        }, {
            id: "phone_number",
            fieldName: "Phone Number",
            fieldType: "text",
            fieldValue: ""
        }, {
            id: "fax",
            fieldName: "Fax",
            fieldType: "text",
            fieldValue: ""
        }]
    },
    {
        id: 4,
        name: "Geolocation Details",
        fields: []
    },
    {
        id: 5,
        name: "Job Experience",
        fields: [{
            id: "total_year_experience",
            fieldName: "Year of Experience",
            fieldType: "option",
            fieldValue: "",
            fieldOptions: [
                {
                    optionName: "<=2 years",
                    optionValue: 0
                },
                {
                    optionName: ">2 years AND <5 years",
                    optionValue: 2
                },
                {
                    optionName: ">=5 years",
                    optionValue: 5
                }
            ]
        }, {
            id: "current_company",
            fieldName: "Current Company",
            fieldType: "text",
            fieldValue: ""
        }]
    }
];