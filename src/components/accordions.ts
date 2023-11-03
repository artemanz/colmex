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
      { text: "header.servicePopup.AC Duct Cleaning", icon: dustCleaning },
      { text: "header.servicePopup.AC Repair", icon: repair },
      { text: "header.servicePopup.AC Installation", icon: installation },
      { text: "header.servicePopup.AC Maintenance Service", icon: maintenance },
    ],
  },
  {
    title: "header.services.plumbing",
    content: [
      {
        text: "header.servicePopup.Leakage inspection and repair",
        icon: leakage,
      },
      {
        text: "header.servicePopup.Bathtub installation and repair",
        icon: bathtub,
      },
      {
        text: "header.servicePopup.Fixture installation and repair",
        icon: fixture,
      },
      { text: "header.servicePopup.Water tank cleaning", icon: waterTank },
      { text: "header.servicePopup.Drainage Cleaning", icon: drainage },
    ],
  },
  {
    title: "header.services.painting",
    content: [
      {
        text: "header.servicePopup.Furniture Painting & Polishing",
        icon: furniture,
      },
      { text: "header.servicePopup.House Painting", icon: house },
      { text: "header.servicePopup.Wallpaper Installation", icon: wallpaper },
      { text: "header.servicePopup.Office Painting", icon: office },
    ],
  },
  {
    title: "header.services.handyman",
    content: [
      {
        text: "header.servicePopup.Furniture Assemble",
        icon: furnitureAssemble,
      },
      {
        text: "header.servicePopup.Wallpaper Installation or Removal",
        icon: wallpaperInstallation,
      },
      { text: "header.servicePopup.Curtain Hanging", icon: curtain },
      { text: "header.servicePopup.TV Mounting & Hanging", icon: tv },
      {
        text: "header.servicePopup.Door lock, chandelier, shelves hanging repair",
        icon: doorlock,
      },
      {
        text: "header.servicePopup.Electrical and Lighting Upgrades",
        icon: electrical,
      },
      { text: "header.servicePopup.Staircase Renovation", icon: staircase },
      {
        text: "header.servicePopup.Door and Window Casing Installation",
        icon: doorandwindow,
      },
    ],
  },
];
