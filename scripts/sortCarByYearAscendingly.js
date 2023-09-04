function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for(let i = 0; i < cars.length - 1; i++ ){
    if(cars[i].year > cars[i+1].year ){
      cars[i], cars[i+1] = cars[i+1], cars[i]
    }
  }
  // Rubah code ini dengan array hasil sorting secara ascending
  return cars;
}

cars = [
  {
    "available": false,
    "id": "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
    "manufacture": "BMW",
    "model": "X5",
    "options": [
      "Keyless Entry",
      "Power Windows",
      "MP3 (Single Disc)",
      "CD (Multi Disc)",
      "Navigation"
    ],
    "plate": "WXB-3984",
    "specs": [
      "Rear passenger map pockets",
      "Electrochromic rearview mirror",
      "Dual chrome exhaust tips",
      "Locking glove box",
      "Pwr front vented disc/rear drum brakes"
    ],
    "transmission": "Automatic",
    "type": "Convertible",
    "year": 2019
  },
  {
    "available": true,
    "id": "bf6b5c43-1377-4ae0-8908-310c64266f81",
    "manufacture": "Lincoln",
    "model": "MKZ",
    "options": [
      "Bucket Seats",
      "Airbag: Passenger",
      "Airbag: Driver",
      "Power Seats",
      "Airbag: Side",
      "Antilock Brakes",
      "CD (Multi Disc)"
    ],
    "plate": "OSL-4224",
    "specs": [
      "Driver & front passenger map pockets",
      "Direct-type tire pressure monitor system",
      "Cargo area lamp",
      "Glove box lamp",
      "Silver finish interior door handles",
      "Driver & front passenger advanced multistage airbags w/occupant sensors",
      "Silver accent IP trim finisher -inc: silver shifter finisher",
      "Fasten seat belt warning light/chime"
    ],
    "transmission": "Automanual",
    "type": "Sedan",
    "year": 2021
  },
  {
    "available": true,
    "id": "5b67f1d7-92d4-41c7-8577-4435740aadf1",
    "manufacture": "BMW",
    "model": "M5",
    "options": [
      "Alloy Wheels",
      "Power Locks",
      "A/C: Rear",
      "MP3 (Single Disc)",
      "Airbag: Driver",
      "A/C: Front",
      "Tinted Glass",
      "Alloy Wheels",
      "Alarm"
    ],
    "plate": "VPT-9753",
    "specs": [
      "6.1L SRT V8 \"Hemi\" engine",
      "Multi-info display -inc: driving range, average MPG, current MPG, average speed, outside temp, elapsed time, maintenance & diagnostic messages",
      "Front & rear passenger folding assist grips",
      "Electronic throttle control system w/intelligence (ETCS-i)",
      "Pwr tilt/slide moonroof -inc: 1-touch open/close",
      "Acoustic glass windshield"
    ],
    "transmission": "Manual",
    "type": "Hatchback",
    "year": 2018
  },
  {
    "available": false,
    "id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
    "manufacture": "Lincoln",
    "model": "Navigator",
    "options": [
      "CD (Multi Disc)",
      "Cruise Control",
      "Power Locks",
      "Alloy Wheels",
      "Tow Package"
    ],
    "plate": "BHD-3923",
    "specs": [
      "Body color sill extension",
      "Torsion beam rear suspension w/stabilizer bar",
      "Front & rear passenger folding assist grips",
      "Electronic control braking (ECB)",
      "Black windshield molding"
    ],
    "transmission": "Automatic",
    "type": "Minivan",
    "year": 2020
  },
  {
    "available": true,
    "id": "3eead6db-c536-406b-9bc5-85d4c6e38a76",
    "manufacture": "Ford",
    "model": "Fiesta",
    "options": [
      "Leather Interior",
      "A/C: Rear",
      "CD (Multi Disc)",
      "Airbag: Side",
      "MP3 (Multi Disc)"
    ],
    "plate": "JPM-5482",
    "specs": [
      "Tilt steering column",
      "Carpeted cargo area",
      "Tip start system",
      "Leather-wrapped shift knob",
      "Enhanced accident response system unlocks the doors, shuts off the fuel pump and turns on interior lights after airbag deploys",
      "Compact spare tire"
    ],
    "transmission": "Automanual",
    "type": "Hatchback",
    "year": 2016
  },
  {
    "available": false,
    "id": "752685ce-dd39-40e5-9af5-93fdd36dea7e",
    "manufacture": "Honda",
    "model": "Accord",
    "options": [
      "AM/FM Stereo",
      "Power Windows",
      "Power Locks",
      "Power Windows",
      "MP3 (Single Disc)",
      "A/C: Rear"
    ],
    "plate": "BTW-1960",
    "specs": [
      "Silver finish interior door handles",
      "160-amp alternator",
      "Tire pressure monitoring system (TPMS)",
      "Cloth covered headliner",
      "625-amp maintenance-free battery",
      "Torsion beam rear suspension w/stabilizer bar",
      "Impact-dissipating upper interior trim",
      "Dual front 2-stage airbags -inc: passenger occupant classification system w/twin-chamber airbag"
    ],
    "transmission": "Automatic",
    "type": "Sedan",
    "year": 2020
  },
  {
    "available": true,
    "id": "d97e0af5-2728-4ce3-ba7f-9d83a0837db6",
    "manufacture": "Lincoln",
    "model": "Navigator",
    "options": [
      "Fog Lights",
      "Memory Seats",
      "Rear Window Defroster",
      "Integrated Phone",
      "Power Locks",
      "A/C: Rear"
    ],
    "plate": "YHD-4104",
    "specs": [
      "XM satellite radio receiver -inc: 90 day trial subscription",
      "Dual front illuminated visor vanity mirrors",
      "Front door tinted glass",
      "Body color door handles",
      "Chrome bodyside molding"
    ],
    "transmission": "Manual",
    "type": "Regular Cab Pickup",
    "year": 2014
  },
  {
    "available": false,
    "id": "0d5de078-a5fc-456b-9487-47eb450a01c6",
    "manufacture": "Buick",
    "model": "LaCrosse",
    "options": [
      "CD (Multi Disc)",
      "Keyless Entry",
      "Cassette Player",
      "Power Windows",
      "Rear Window Wiper",
      "CD (Single Disc)",
      "Third Row Seats"
    ],
    "plate": "STL-7347",
    "specs": [
      "Rear reading & courtesy lamps",
      "Zone body construction -inc: front/rear crumple zones, hood deformation point",
      "4-wheel/4-channel anti-lock brake system (ABS)",
      "Anti-lock 4-wheel performance disc brakes",
      "200mm front axle",
      "Dual front knee airbags"
    ],
    "transmission": "Automatic",
    "type": "Extended Cab Pickup",
    "year": 2012
  },
  {
    "available": true,
    "id": "6dfa349e-631c-46c0-a037-5c73902ff738",
    "manufacture": "BMW",
    "model": "X5",
    "options": [
      "Third Row Seats",
      "Bucket Seats",
      "Integrated Phone",
      "Navigation",
      "Leather Interior"
    ],
    "plate": "TJW-7622",
    "specs": [
      "Cargo compartment lamp",
      "Body color fascias w/bright insert",
      "Front/rear stabilizer bars",
      "Electrochromic pwr folding heated mirrors w/memory -inc: puddle lamps, integrated turn signals, auto reverse tilt-down",
      "Multi-info display -inc: driving range, average MPG, current MPG, average speed, outside temp, elapsed time, maintenance & diagnostic messages"
    ],
    "transmission": "Manual",
    "type": "Hatchback",
    "year": 2019
  },
  {
    "available": false,
    "id": "803593fb-b857-4a01-adc4-651538217a04",
    "manufacture": "Chevy",
    "model": "Malibu",
    "options": [
      "Alloy Wheels",
      "Power Windows",
      "Alloy Wheels",
      "Alloy Wheels",
      "Alarm",
      "Bucket Seats",
      "Bucket Seats"
    ],
    "plate": "YND-1892",
    "specs": [
      "Cloth covered headliner",
      "Sentry Key theft deterrent system",
      "Air conditioning w/in-cabin microfilter",
      "Driver & front passenger map pockets",
      "Security alarm",
      "Dual bright exhaust tips",
      "Compact spare tire"
    ],
    "transmission": "Automatic",
    "type": "Coupe",
    "year": 2019
  },
  {
    "available": true,
    "id": "e0a96736-a2d5-40ca-87de-64b59cac85d8",
    "manufacture": "BMW",
    "model": "X3",
    "options": [
      "Premium Sound",
      "Fog Lights",
      "Premium Sound",
      "Airbag: Side",
      "Power Seats",
      "Power Steering",
      "Airbag: Driver",
      "Power Steering",
      "Alarm"
    ],
    "plate": "FZQ-1989",
    "specs": [
      "Multi-reflector halogen headlamps",
      "Speed control",
      "Anti-lock brake system (ABS) -inc: electronic brake force distribution (EBD), brake assist",
      "Laminated side window glass",
      "Acoustic glass windshield",
      "Back-up camera",
      "Direct-type tire pressure monitor system",
      "All-position 3-point seat belts -inc: outboard pretensioners & force limiters, dual front pwr shoulder height adjusters, rear outboard emergency auto locking retractors, driver emergency locking retractor"
    ],
    "transmission": "Automanual",
    "type": "Passenger Van",
    "year": 2018
  },
  {
    "available": true,
    "id": "e39f2965-57da-4d8f-afdb-74f6c54e69f0",
    "manufacture": "Chevy",
    "model": "Malibu",
    "options": [
      "Memory Seats",
      "Cassette Player",
      "Alarm",
      "Power Steering",
      "Keyless Entry"
    ],
    "plate": "GAG-1943",
    "specs": [
      "Leather-wrapped shift knob",
      "Dual front illuminated visor vanity mirrors",
      "Battery saver",
      "Driver & front passenger map pockets",
      "Deluxe insulation group"
    ],
    "transmission": "CVT",
    "type": "SUV",
    "year": 2017
  },
  {
    "available": false,
    "id": "c18a5545-2ce2-4330-aa3b-1bbcf6247519",
    "manufacture": "Chevy",
    "model": "Malibu",
    "options": [
      "Bucket Seats",
      "Power Seats",
      "CD (Multi Disc)",
      "Bucket Seats",
      "Navigation",
      "Rear Window Defroster",
      "Fog Lights"
    ],
    "plate": "CVO-9549",
    "specs": [
      "Front/rear side curtain airbags",
      "Front & rear side curtain airbags",
      "Body color front license plate brow",
      "Rear body-color spoiler",
      "Reversible/waterproof cargo storage",
      "Front & rear side curtain airbags"
    ],
    "transmission": "Manual",
    "type": "Regular Cab Pickup",
    "year": 2020
  },
  {
    "available": true,
    "id": "72530cba-051d-49d8-822b-deaf2e5330ca",
    "manufacture": "Lincoln",
    "model": "MKS",
    "options": [
      "Third Row Seats",
      "CD (Single Disc)",
      "Alloy Wheels",
      "A/C: Front",
      "Power Windows",
      "A/C: Front",
      "Memory Seats",
      "Cruise Control",
      "CD (Single Disc)"
    ],
    "plate": "JWU-8459",
    "specs": [
      "Remote fuel lid release",
      "Electronic parking brake",
      "Daytime running lights (DRL)",
      "Silver finish interior door handles",
      "Back-up camera",
      "Highline door trim panel",
      "Pwr front vented disc/rear drum brakes"
    ],
    "transmission": "Automanual",
    "type": "Regular Cab Pickup",
    "year": 2017
  },
  {
    "available": true,
    "id": "79cc327b-2b0f-4042-acdf-78386b2f8ebd",
    "manufacture": "Chevy",
    "model": "Silverado",
    "options": [
      "Leather Interior",
      "Alloy Wheels",
      "MP3 (Single Disc)",
      "Airbag: Driver",
      "Cruise Control",
      "Cassette Player"
    ],
    "plate": "VOS-8183",
    "specs": [
      "Rear window defroster",
      "High performance suspension",
      "1.8L DOHC 16-valve I4 engine -inc: engine cover",
      "Air conditioning w/in-cabin microfilter",
      "4-wheel ventilated pwr disc brakes -inc: brake override system"
    ],
    "transmission": "Automanual",
    "type": "Convertible",
    "year": 2021
  },
  {
    "available": false,
    "id": "22c969a7-04ce-4efb-a479-7ab3bc094cb9",
    "manufacture": "Lincoln",
    "model": "MKS",
    "options": [
      "Alarm",
      "Airbag: Passenger",
      "Cassette Player",
      "Moonroof/Sunroof",
      "Moonroof/Sunroof",
      "Antilock Brakes"
    ],
    "plate": "ENW-7713",
    "specs": [
      "Energy absorbing steering column",
      "3-point ELR/ALR front passenger seat belt w/pretensioner & load limiter",
      "HomeLink universal transceiver",
      "Battery saver",
      "(2) aux 12V pwr outlets -inc: (1) in center console, (1) w/cigarette lighter",
      "LATCH-ready child seat anchor system",
      "Passenger assist handles",
      "XM satellite radio receiver -inc: 90 day trial subscription"
    ],
    "transmission": "Automanual",
    "type": "Regular Cab Pickup",
    "year": 2015
  },
  {
    "available": false,
    "id": "1bfda124-5175-4b90-bee7-d66affdbcc66",
    "manufacture": "Dodge",
    "model": "Ram",
    "options": [
      "Moonroof/Sunroof",
      "Cassette Player",
      "Antilock Brakes",
      "Antilock Brakes",
      "Memory Seats",
      "MP3 (Single Disc)",
      "Leather Interior",
      "CD (Single Disc)"
    ],
    "plate": "TPM-8174",
    "specs": [
      "3-point ELR/ALR front passenger seat belt w/pretensioner & load limiter",
      "Rear passenger map pockets",
      "Black roof molding",
      "Anti-lock brake system (ABS) -inc: electronic brake force distribution (EBD), brake assist",
      "Variable intermittent windshield wipers w/mist function",
      "Roof mounted antenna"
    ],
    "transmission": "CVT",
    "type": "Sedan",
    "year": 2014
  },
  {
    "available": false,
    "id": "08cbd537-497f-4305-b7b4-e7493c703a2c",
    "manufacture": "Ford",
    "model": "F150",
    "options": [
      "CD (Single Disc)",
      "Airbag: Driver",
      "Antilock Brakes",
      "CD (Single Disc)",
      "A/C: Rear",
      "Memory Seats",
      "Third Row Seats"
    ],
    "plate": "ZAG-8112",
    "specs": [
      "All-position 3-point seat belts -inc: outboard pretensioners & force limiters, dual front pwr shoulder height adjusters, rear outboard emergency auto locking retractors, driver emergency locking retractor",
      "Body color door handles",
      "Front & rear passenger folding assist grips",
      "Rear-window defogger w/auto-off timer",
      "160-amp alternator",
      "Body color door handles",
      "Battery saver",
      "First aid kit",
      "Immobilizer system"
    ],
    "transmission": "Automatic",
    "type": "Convertible",
    "year": 2021
  },
  {
    "available": false,
    "id": "950575d6-958c-422e-a46b-c3ed2e1315ed",
    "manufacture": "Audi",
    "model": "A4",
    "options": [
      "Navigation",
      "Rear Window Wiper",
      "Tow Package",
      "MP3 (Multi Disc)",
      "Bucket Seats"
    ],
    "plate": "MRQ-2982",
    "specs": [
      "Pwr accessory delay",
      "Tire pressure monitoring system (TPMS)",
      "Tilt/telescoping steering column",
      "Electronic throttle control system w/intelligence (ETCS-i)",
      "Front/rear crumple zones",
      "Rear door child safety locks",
      "Child safety rear door locks"
    ],
    "transmission": "Automatic",
    "type": "Crew Cab Pickup",
    "year": 2012
  },
  {
    "available": false,
    "id": "b89117fc-69e1-4366-ba21-9d6a0b2bfb04",
    "manufacture": "Dodge",
    "model": "Durango",
    "options": [
      "Memory Seats",
      "Integrated Phone",
      "Airbag: Driver",
      "Leather Interior",
      "Cassette Player",
      "Airbag: Passenger"
    ],
    "plate": "ACT-6027",
    "specs": [
      "Floor carpeting",
      "Electric speed-sensitive variable-assist pwr steering",
      "Dana 44/226mm rear axle",
      "Roof mounted antenna",
      "Fixed long mast antenna"
    ],
    "transmission": "Manual",
    "type": "SUV",
    "year": 2013
  },
  {
    "available": false,
    "id": "fc1d3297-ab17-40a9-a79c-ca7307ed5faa",
    "manufacture": "Audi",
    "model": "S5",
    "options": [
      "Memory Seats",
      "Power Locks",
      "Fog Lights",
      "Tinted Glass",
      "Rear Window Wiper",
      "Airbag: Passenger",
      "Power Locks",
      "Tow Package"
    ],
    "plate": "LSI-6227",
    "specs": [
      "Pwr front vented disc/rear drum brakes",
      "Pwr windows -inc: 1-touch open/close",
      "Cloth covered headliner",
      "Foldable front door storage pockets",
      "Dual-stage front airbags w/occupant classification system",
      "Battery saver",
      "20\" x 9.0\" front & 20\" x 10.0\" rear aluminum wheels",
      "Cargo compartment lamp"
    ],
    "transmission": "Automatic",
    "type": "Coupe",
    "year": 2020
  },
  {
    "available": true,
    "id": "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    "manufacture": "Ford",
    "model": "F150",
    "options": [
      "Cruise Control",
      "Tinted Glass",
      "Tinted Glass",
      "Tinted Glass",
      "AM/FM Stereo"
    ],
    "plate": "DBH-3491",
    "specs": [
      "Brake assist",
      "Leather-wrapped shift knob",
      "Glove box lamp",
      "Air conditioning w/in-cabin microfilter",
      "Body color folding remote-controlled pwr mirrors",
      "Dual-stage front airbags w/occupant classification system"
    ],
    "transmission": "Automatic",
    "type": "Sedan",
    "year": 2022
  },
  {
    "available": false,
    "id": "432d9ed1-e330-4953-ac33-f51a60a5799b",
    "manufacture": "Toyota",
    "model": "Camry",
    "options": [
      "Rear Window Defroster",
      "MP3 (Single Disc)",
      "Power Steering",
      "Antilock Brakes",
      "Tow Package",
      "Fog Lights",
      "AM/FM Stereo",
      "Alarm"
    ],
    "plate": "OAI-9575",
    "specs": [
      "Intermittent rear wiper w/washer",
      "Energy absorbing front/rear bumpers",
      "Engine mounts -inc: (2) solid, (1) liquid-filled",
      "Tire pressure monitoring display",
      "Foldable front door storage pockets",
      "Child safety rear door locks",
      "Front/rear aluminum multi-link double joint suspension w/coil springs",
      "Laminated side window glass",
      "Silver accent IP trim finisher -inc: silver shifter finisher"
    ],
    "transmission": "Automatic",
    "type": "Extended Cab Pickup",
    "year": 2022
  },
  {
    "available": false,
    "id": "e76e884b-8f3e-4b90-a717-9239676d0191",
    "manufacture": "Honda",
    "model": "Civic",
    "options": [
      "CD (Single Disc)",
      "Airbag: Passenger",
      "A/C: Front",
      "Power Locks",
      "Navigation",
      "Rear Window Defroster",
      "Rear Window Defroster",
      "MP3 (Single Disc)",
      "Airbag: Side"
    ],
    "plate": "IDN-5442",
    "specs": [
      "Electric speed-sensitive variable-assist pwr steering",
      "Steel side-door impact beams",
      "Dual bright exhaust tips",
      "Remote fuel lid release",
      "Traveler/mini trip computer"
    ],
    "transmission": "CVT",
    "type": "Wagon",
    "year": 2015
  },
  {
    "available": false,
    "id": "32e7e56f-1a00-455f-bf4b-dbd2c8c4daaf",
    "manufacture": "Nissan",
    "model": "Pathfiner",
    "options": [
      "Moonroof/Sunroof",
      "Power Seats",
      "CD (Single Disc)",
      "Airbag: Passenger",
      "Alarm",
      "Power Seats",
      "Cruise Control"
    ],
    "plate": "NHI-3883",
    "specs": [
      "200mm front axle",
      "Roof mounted antenna",
      "Cargo compartment cover",
      "Rear bench seat -inc: (3) adjustable headrests",
      "Front/rear aluminum multi-link double joint suspension w/coil springs",
      "Reclining front bucket seats -inc: active head restraints, double-thickness foam in front seats"
    ],
    "transmission": "Automatic",
    "type": "Sedan",
    "year": 2022
  }
]

console.log(sortCarByYearAscendingly(cars))