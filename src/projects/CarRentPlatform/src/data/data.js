import vwPassat from "../assets/img/vw-passat/vw-passat.jpg";
import vwPassatDashboard from "../assets/img/vw-passat/vw-passat-dashboard.jpg";
import vwPassatTrunk from "../assets/img/vw-passat/vw-passat-trunk.jpg";
import opelInsignia from "../assets/img/opel-insignia/opel-insignia.jpg";
import opelInsigniaDashboard from "../assets/img/opel-insignia/opel-insignia-dashboard.jpg";
import opelInsigniaTrunk from "../assets/img/opel-insignia/opel-insignia-trunk.jpg";
import skodaSuperb from "../assets/img/skoda-superb/skoda-superb.jpg";
import skodaSuperbDashboard from "../assets/img/skoda-superb/skoda-superb-dashboard.jpg";
import skodaSuperbTrunk from "../assets/img/skoda-superb/skoda-superb-trunk.jpg";

const cars = [
  {
    carModel: "VW Passat",
    features: {
      fuelType: "Gasoline",
      fuelConsumption: "5-6l/100km",
      gearbox: "Automatic",
      doors: "5 doors",
      seats: "4 seats",
      bags: "5 bags",
    },
    equipment: [
      "ABS",
      "Electric windows",
      "Air conditioning",
      "Stereo sound system",
      "Central Locking",
      "Cruise control",
      "Airbag",
      "Power steering",
    ],
    periods: [
      {
        days: "1-2",
        price: "27",
      },
      {
        days: "3-5",
        price: "26",
      },
      {
        days: "6-8",
        price: "24",
      },
      {
        days: "9-14",
        price: "23",
      },
      {
        days: "15-29",
        price: "21",
      },
      {
        days: "30-365",
        price: "18",
      },
      {
        days: "Deposit",
        price: "280",
      },
    ],
    photos: [vwPassat, vwPassatDashboard, vwPassatTrunk],
  },
  {
    carModel: "Opel Insignia",
    features: {
      fuelType: "Diesel",
      fuelConsumption: "6-7l/100km",
      gearbox: "Mechanic",
      doors: "5 doors",
      seats: "5 seats",
      bags: "6 bags",
    },
    equipment: [
      "ABS",
      "Electric windows",
      "Air conditioning",
      "Stereo sound system",
      "Central Locking",
      "Cruise control",
      "Airbag",
      "Power steering",
    ],
    periods: [
      {
        days: "1-2",
        price: "25",
      },
      {
        days: "3-5",
        price: "24",
      },
      {
        days: "6-8",
        price: "22",
      },
      {
        days: "9-14",
        price: "21",
      },
      {
        days: "15-29",
        price: "19",
      },
      {
        days: "30-365",
        price: "16",
      },
      {
        days: "Deposit",
        price: "200",
      },
    ],
    photos: [opelInsignia, opelInsigniaDashboard, opelInsigniaTrunk],
  },
  {
    carModel: "Skoda Superb",
    features: {
      fuelType: "Diesel",
      fuelConsumption: "4-5l/100km",
      gearbox: "Automatic",
      doors: "5 doors",
      seats: "5 seats",
      bags: "4 bags",
    },
    equipment: [
      "ABS",
      "Electric windows",
      "Air conditioning",
      "Stereo sound system",
      "Central Locking",
      "Cruise control",
      "Airbag",
      "Power steering",
    ],
    periods: [
      {
        days: "1-2",
        price: "26",
      },
      {
        days: "3-5",
        price: "25",
      },
      {
        days: "6-8",
        price: "23",
      },
      {
        days: "9-14",
        price: "22",
      },
      {
        days: "15-29",
        price: "20",
      },
      {
        days: "30-365",
        price: "17",
      },
      {
        days: "Deposit",
        price: "240",
      },
    ],
    photos: [skodaSuperb, skodaSuperbDashboard, skodaSuperbTrunk],
  },
];

export default cars;
