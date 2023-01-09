import * as yup from 'yup'


export const playerNamesValidationSchema = yup.object({
    players: yup.array()
    .required("You can't leave this blank.")
    .nullable()
})