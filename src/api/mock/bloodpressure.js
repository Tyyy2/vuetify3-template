// FHIR observation resource: https://www.hl7.org/fhir/observation.html
// coding system: https://loinc.org/85354-9
function generateObservation(ptid) {
  // 產生隨機的舒張壓和收縮壓
  var diastolic = Math.floor(Math.random() * 60) + 60
  var systolic = Math.floor(Math.random() * 80) + 100

  const code = (code, display) => {
    const system = 'http://loinc.org'
    return { code: { coding: [{ system, code, display }] } }
  }

  const valueQuantity = value => ({
    value,
    unit: 'mmHg',
    system: 'http://unitsofmeasure.org',
    code: 'mm[Hg]',
  })

  // 建立FHIR格式的觀測結果
  var observation = {
    resourceType: 'Observation',
    status: 'final',
    code: code('85354-9', 'Blood pressure panel with all children optional'),
    subject: { identifier: { system: 'https://www.ktgh.com.tw', value: ptid } },
    component: [
      {
        code: code('8462-4', 'Diastolic blood pressure'),
        valueQuantity: valueQuantity(diastolic),
      },
      {
        code: code('8480-6', 'Systolic blood pressure'),
        valueQuantity: valueQuantity(systolic),
      },
    ],
  }

  return observation
}
