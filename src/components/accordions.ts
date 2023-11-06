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
    title: "header.services.ac_service",
    content: [
      { text: "services.AC Duct Cleaning", icon: dustCleaning },
      { text: "services.AC Repair", icon: repair },
      { text: "services.AC Installation", icon: installation },
      { text: "services.AC Maintenance Service", icon: maintenance },
    ],
  },
  {
    title: "header.services.plumbing",
    content: [
      {
        text: "services.Leakage inspection and repair",
        icon: leakage,
      },
      {
        text: "services.Bathtub installation and repair",
        icon: bathtub,
      },
      {
        text: "services.Fixture installation and repair",
        icon: fixture,
      },
      { text: "services.Water tank cleaning", icon: waterTank },
      { text: "services.Drainage Cleaning", icon: drainage },
    ],
  },
  {
    title: "header.services.painting",
    content: [
      {
        text: "services.Furniture Painting & Polishing",
        icon: furniture,
      },
      { text: "services.House Painting", icon: house },
      { text: "services.Wallpaper Installation", icon: wallpaper },
      { text: "services.Office Painting", icon: office },
    ],
  },
  {
    title: "header.services.handyman",
    content: [
      {
        text: "services.Furniture Assemble",
        icon: furnitureAssemble,
      },
      {
        text: "services.Wallpaper Installation or Removal",
        icon: wallpaperInstallation,
      },
      { text: "services.Curtain Hanging", icon: curtain },
      { text: "services.TV Mounting & Hanging", icon: tv },
      {
        text: "services.Door lock, chandelier, shelves hanging repair",
        icon: doorlock,
      },
      {
        text: "services.Electrical and Lighting Upgrades",
        icon: electrical,
      },
      { text: "services.Staircase Renovation", icon: staircase },
      {
        text: "services.Door and Window Casing Installation",
        icon: doorandwindow,
      },
    ],
  },
];
