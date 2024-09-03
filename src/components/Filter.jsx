import React from 'react'

const diseases = [
  {
    "id": 1,
    "name": "Malaria Treatment"
  },
  {
    "id": 2,
    "name": "Diarrhea"
  },
  {
    "id": 3,
    "name": "Tuber Closis"
  },{
    "id": 4,
    "name": "Pheumonia"
  },{
    "id": 5,
    "name": "Parastic Infections"
  },{
    "id": 6,
    "name": "Family Planning"
  },{
    "id": 7,
    "name": "Nutrition Supplements"
  },{
    "id": 8,
    "name": "Equipments"
  },
]

const Row = ({ id, name}) => (
  <div className='flex justify-start items-center gap-4 w-[350px]' key={id}>
      <input type="radio" name="radio-5" className='radio radio-success'/>
      <span>{name}</span>
  </div>
);

const Filter = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
        <div className='flex gap-8'>
          {
            diseases.map(d => {
              if (d.id < 5) {
              return ( <Row id={d.id} name={d.name} />)
              }
            })
          }
        </div>
        <div className='flex gap-8'>
          {
            diseases.map(d => {
              if (d.id > 4) {
              return ( <Row id={d.id} name={d.name} />)
              }
            })
          }
        </div>
    </div>
  )
}

export default Filter