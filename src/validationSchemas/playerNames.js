import * as yup from 'yup'

export const playerNamesValidationSchema = yup.object().shape({
    players: yup.array().of(yup.string())
})