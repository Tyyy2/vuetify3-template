import { GetPatientMock } from './Patient.data'
import { useMockTemplate } from './MockTemplate'

let Patients = GetPatientMock()
export const useMockPatient = useMockTemplate('/api/patient', Patients)
