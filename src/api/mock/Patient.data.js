// // 這是一個簡單的模擬資料生成函數
// function generateMockData() {
//   // 這裡只是一個簡單的範例，你可以根據FHIR的Patient定義來擴充這個函數
//   function generatePatient() {
//     // 隨機生成名字
//     const names = [
//       'John',
//       'Jane',
//       'Mary',
//       'James',
//       'Emma',
//       'Robert',
//       'Linda',
//       'Michael',
//       'Susan',
//       'William',
//     ]
//     const randomName = names[Math.floor(Math.random() * names.length)]

//     // 隨機生成生日，範圍從現在往回推100年
//     const start = new Date().getFullYear() - 100
//     const end = new Date().getFullYear()
//     const randomYear = Math.floor(Math.random() * (end - start + 1)) + start
//     const randomMonth = Math.floor(Math.random() * 12) + 1
//     const randomDay = Math.floor(Math.random() * 28) + 1 // 為了簡單起見，我們假設每個月都有28天
//     const birthDate = `${randomYear}-${randomMonth
//       .toString()
//       .padStart(2, '0')}-${randomDay.toString().padStart(2, '0')}`

//     return {
//       resourceType: 'Patient',
//       id: Math.floor(Math.random() * 1000000), // 隨機生成ID
//       active: Math.random() > 0.5, // 隨機決定是否活躍
//       name: [
//         {
//           use: 'official',
//           family: randomName,
//           given: [randomName],
//         },
//       ],
//       gender: Math.random() > 0.5 ? 'male' : 'female', // 隨機決定性別
//       birthDate: birthDate,
//     }
//   }

//   let patients = []
//   for (let i = 0; i < 100; i++) {
//     patients.push(generatePatient())
//   }

//   return patients
// }
// 這是一個簡單的模擬資料生成函數
const boyNames = [
  'James',
  'Robert',
  'John',
  'Michael',
  'David',
  'William',
  'Richard',
  'Joseph',
  'Thomas',
  'Christopher',
  'Charles',
  'Daniel',
  'Matthew',
  'Anthony',
  'Mark',
  'Donald',
  'Steven',
  'Andrew',
  'Paul',
  'Joshua',
  'Kenneth',
  'Kevin',
  'Brian',
  'George',
  'Timothy',
]

const girlNames = [
  'Mary',
  'Patricia',
  'Jennifer',
  'Linda',
  'Elizabeth',
  'Barbara',
  'Susan',
  'Jessica',
  'Sarah',
  'Karen',
  'Lisa',
  'Nancy',
  'Betty',
  'Sandra',
  'Margaret',
]
export function GetPatientMock() {
  const resourceType = 'Patient'
  // 這裡只是一個簡單的範例，你可以根據FHIR的Patient定義來擴充這個函數
  function generatePatient(existingIds) {
    const randomName = gender => {
      const names = gender == 'male' ? boyNames : girlNames
      names[Math.floor(Math.random() * names.length)]
    }

    // 隨機生成生日，範圍從現在往回推100年
    const start = new Date().getFullYear() - 100
    const end = new Date().getFullYear()
    const randomYear = Math.floor(Math.random() * (end - start + 1)) + start
    const randomMonth = Math.floor(Math.random() * 12) + 1
    const randomDay = Math.floor(Math.random() * 28) + 1 // 為了簡單起見，我們假設每個月都有28天
    const birthDate = `${randomYear}-${randomMonth
      .toString()
      .padStart(2, '0')}-${randomDay.toString().padStart(2, '0')}`

    // 隨機生成ID，並確保它是唯一的
    let identifier
    do {
      identifier = Math.floor(Math.random() * 1000000)
    } while (existingIds.has(identifier))
    existingIds.add(identifier)

    const gender = Math.random() > 0.5 ? 'male' : 'female' // 隨機決定性別
    const active = Math.random() > 0.5 // 隨機決定是否活躍
    const name = [
      {
        use: 'official',
        family: randomName(gender),
        given: [randomName(gender)],
      },
    ]
    return {
      resourceType,
      identifier,
      active,
      name,
      gender,
      birthDate,
    }
  }

  let patients = []
  let existingIds = new Set()
  for (let i = 0; i < 100; i++) {
    patients.push(generatePatient(existingIds))
  }
  return patients
}
