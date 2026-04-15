import paintingInterior from "../assets/painting-interior.jpg";
import interiorTrim from "../assets/interior-trim.jpg";
import heroGroupBuild from "../assets/hero-group-build.jpg";
import houseExterior from "../assets/house-exterior.jpg";
import porchHammer from "../assets/porch-hammer.jpg";

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  body: string;
}

export const newsItems: NewsItem[] = [
  {
    slug: "painting-and-trim-underway",
    title: "Painting and Trim Underway!",
    date: "January 20, 2026",
    excerpt: "Cabinets and flooring installed — Home #45 is really looking close to done! Interior painting is wrapping up and trim work has begun.",
    image: paintingInterior,
    body: `Home #45 is getting closer to completion every day! The cabinets have been installed and look fantastic, and the flooring is down throughout the house. Our volunteer crews have been busy with interior painting — the rooms are really starting to feel like a home now.

Trim work has begun around the doors and windows, adding the finishing touches that make all the difference. We're incredibly grateful for the dedicated volunteers who show up week after week to make this dream a reality for another Barry County family.

If you'd like to help with the final push, we still need volunteers for finish carpentry, painting touch-ups, and landscaping. Every hand makes a difference!`,
  },
  {
    slug: "construction-update-home-45",
    title: "Construction Update: Home #45",
    date: "December 16, 2025",
    excerpt: "The fourth green inspection sticker has been placed, marking a major milestone in the construction of our newest home.",
    image: interiorTrim,
    body: `We're excited to announce that Home #45 has received its fourth green inspection sticker — a major milestone in the construction process! This means the mechanical, electrical, and plumbing rough-ins have all passed inspection.

The insulation is complete, and drywall installation is underway. The house is really taking shape on the inside now, and it's incredible to see how far we've come since breaking ground.

Our construction supervisor and volunteer crews have done an outstanding job keeping this project on track despite the challenges of winter weather. The goal is to have the home completed and ready for the family by spring 2026.

Thank you to everyone who has donated time, materials, and funds to make this home possible!`,
  },
  {
    slug: "volunteers-rally-for-framing",
    title: "Volunteers Rally for Framing",
    date: "November 8, 2025",
    excerpt: "An incredible turnout of community volunteers came together to help with framing and exterior work on the build site.",
    image: heroGroupBuild,
    body: `What an amazing day on the build site! Over 30 community volunteers showed up to help with framing on Home #45. Teams worked on wall framing, roof trusses, and exterior sheathing — and the progress was incredible.

Several local businesses sent employee teams, and we had volunteers ranging from experienced builders to first-timers. Everyone pitched in, learned new skills, and left with a real sense of accomplishment.

By the end of the day, the house had walls, a roof structure, and was starting to look like a real home. The energy and enthusiasm on site was contagious — this is what community building is all about.

A special thank you to our construction supervisor for coordinating all the volunteers and keeping everyone safe and productive. If your group would like to volunteer on future build days, please reach out!`,
  },
  {
    slug: "house-45-taking-shape",
    title: "House #45 Taking Shape",
    date: "October 30, 2025",
    excerpt: "Exterior siding and roofing are nearly complete. The house is really starting to look like a home!",
    image: houseExterior,
    body: `Home #45 is really starting to look like a home! The exterior siding installation is nearly complete, and the roofing crew has finished their work. From the street, you can now see what this home will look like when it's done — and it looks great.

The windows are installed, the exterior doors are in place, and the house is now weather-tight. This means interior work can proceed regardless of weather conditions, which is crucial as we head into the colder months.

Next up: electrical, plumbing, and HVAC rough-ins will begin, followed by insulation and drywall. We're on track for our target completion date, and the future homeowner family is excited to see the progress!`,
  },
  {
    slug: "lake-trust-gift-received",
    title: "Lake Trust Gift Received",
    date: "March 17, 2025",
    excerpt: "A generous $23,455 donation from Lake Trust Credit Union's Home Loan Giveback program to support our mission.",
    image: porchHammer,
    body: `We are thrilled and grateful to announce that Lake Trust Credit Union has donated $23,455 to Habitat for Humanity Barry County through their Home Loan Giveback program!

This generous gift will go directly toward building homes for families in need in Barry County. Lake Trust Credit Union has been a wonderful partner in our mission, and this donation represents their commitment to helping families achieve the dream of homeownership.

The Home Loan Giveback program donates a portion of home loan proceeds to Habitat for Humanity affiliates across Michigan. It's a perfect alignment of values — helping people build financial stability through homeownership.

Thank you, Lake Trust Credit Union, for your incredible generosity and partnership! Gifts like this make it possible for us to continue building homes, communities, and hope in Barry County.`,
  },
];

export function getNewsItem(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}
