import {
  dustCleaning,
  repair,
  installation,
  maintenance,
  bathtub,
  drainage,
  fixture,
  leakage,
  waterTank,
  furniture,
  house,
  wallpaper,
  office,
  furnitureAssemble,
  wallpaperInstallation,
  curtain,
  tv,
  doorlock,
  electrical,
  staircase,
  doorandwindow,
} from "@/assets/images/Header";

export const accordions = [
  {
    title: "AC SERVICE",
    content: [
      { text: "AC Duct Cleaning", icon: dustCleaning },
      { text: "AC Repair", icon: repair },
      { text: "AC Installation", icon: installation },
      { text: "AC Maintenance Service", icon: maintenance },
    ],
  },
  {
    title: "PLUMBING",
    content: [
      { text: "Leakage inspection and repair", icon: leakage },
      { text: "Bathtub installation and repair", icon: bathtub },
      { text: "Fixture installation and repair", icon: fixture },
      { text: "Water tank cleaning", icon: waterTank },
      { text: "Drainage Cleaning", icon: drainage },
    ],
  },
  {
    title: "PAINTING",
    content: [
      { text: "Furniture Painting & Polishing", icon: furniture },
      { text: "House Painting", icon: house },
      { text: "Wallpaper Installation", icon: wallpaper },
      { text: "Office Painting", icon: office },
    ],
  },
  {
    title: "HANDYMAN",
    content: [
      { text: "Furniture Assemble", icon: furnitureAssemble },
      {
        text: "Wallpaper Installation or Removal",
        icon: wallpaperInstallation,
      },
      { text: "Curtain Hanging", icon: curtain },
      { text: "TV Mounting & Hanging", icon: tv },
      { text: "Door lock, chandelier, shelves hanging repair", icon: doorlock },
      { text: "Electrical and Lighting Upgrades", icon: electrical },
      { text: "Staircase Renovation", icon: staircase },
      { text: "Door and Window Casing Installation", icon: doorandwindow },
    ],
  },
];
