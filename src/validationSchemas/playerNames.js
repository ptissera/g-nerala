import * as yup from 'yup'

export const playerNamesValidationSchema = yup.object().shape({
    player1: yup
    .string()
    .when('disabled', {
        is: false, 
        then: yup.string().required('clinic required')
      }),
    player2: yup
    .string()
    .when('disabled', {
        is: false, 
        then: yup.string().required('clinic required')
      }),
    player3: yup
    .string()
    .when('disabled', {
        is: false, 
        then: yup.string().required('clinic required')
      }),
    player4: yup
    .string()
    .when('disabled', {
        is: false, 
        then: yup.string().required('clinic required')
      }),
    player5: yup
    .string()
    .when('disabled', {
        is: false, 
        then: yup.string().required('clinic required')
      }),
    player6: yup
    .string()
    .when('disabled', {
        is: false, 
        then: yup.string().required('clinic required')
      }),
    player7: yup
    .string()
    .when('disabled', {
        is: false, 
        then: yup.string().required('clinic required')
      }),
})