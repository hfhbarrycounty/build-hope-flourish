// ============================================================================
// NEWS ARTICLES
// ============================================================================
//
// HOW TO ADD A NEW ARTICLE:
// -------------------------
// 1. Add your image to src/assets/ (e.g. news6.jpg)
// 2. Import it at the top of this file:
//        import news6 from "../assets/news6.jpg";
// 3. Copy the TEMPLATE block below and paste it at the TOP of the newsItems
//    array (newest articles go first — they show up first on the site).
// 4. Fill in the fields. That's it!
//
// TEMPLATE — copy everything between the /* and */ markers:
/*
  {
    slug: "your-article-url-slug",          // URL-friendly, lowercase, hyphens only
    title: "Your Article Title Here",       // Shown as the headline
    date: "Month DD, YYYY",                 // e.g. "March 15, 2026"
    excerpt: "A short 1-2 sentence summary that appears on the home page card.",
    image: news6,                           // The image you imported above
    body: `First paragraph of your article goes here. Write naturally.

Second paragraph — separate paragraphs with a blank line (two line breaks).

Third paragraph, and so on. You can have as many paragraphs as you like.`,
  },
*/
// ============================================================================

import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";
import news4 from "../assets/news4.jpg";
import news5 from "../assets/news5.jpg";
import newsTrimWork from "../assets/news-trim-work.jpg";
import newsDedication from "../assets/news-dedication.jpg";
import newsDriveway from "../assets/news-driveway.jpg";

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  body: string;
}

export const newsItems: NewsItem[] = [
  // ⬇️ Newest article goes here (at the top of the list)

  {
    slug: "driveway-poured-house-45",
    title: "Finishing Touches: The Driveway is Finally Poured at House #45",
    date: "April 17, 2026",
    excerpt: "After weeks of waiting for warm, dry weather, the concrete driveway and entry walk at House #45 are finally complete.",
    image: newsDriveway,
    body: `Katelin and her family have been living in their Habitat for Humanity Barry County home since February 26th, 2026 — but one big task had to wait for Mother Nature to cooperate. This April, the weather finally turned warm and dry enough to pour the concrete driveway and entry walk, completing the last major piece of house #45.

A huge thank you goes to Matt Gilbert of Matthew's Concrete for making it happen. It's a detail that Katelin's family has been patiently waiting for, and after weeks of mud, the end result is well worth the wait.

It's a good reminder that building a Habitat home is rarely a straight line from start to finish. Weather, seasons, and logistics all play a role — but the commitment to finishing the job right never wavers. House #45 is now fully functional! There is just some landscaping that is scheduled to happen on Friday April 24th.`,
  },
  {
    slug: "home-45-dedication",
    title: "A Dream Realized: Habitat for Humanity Barry County Dedicates Home #45",
    date: "February 25, 2026",
    excerpt: "Surrounded by supporters, volunteers, and community members, we officially dedicated our 45th home in Barry County.",
    image: newsDedication,
    body: `On Wednesday, February 25th, 2026, Habitat for Humanity Barry County reached a milestone that never gets old — a home dedication. Surrounded by supporters, volunteers, and community members, we officially dedicated our 45th home in Barry County, welcoming a family into a place they can truly call their own. And the very next day, February 26th, Katelin and her family walked through the door and moved in.

A home dedication is more than a ribbon-cutting. It is the culmination of countless volunteer hours, generous donations, skilled trade partnerships, and the determined hard work of the homeowner family themselves. Every room trimmed, every coat of paint applied, every small detail lovingly finished — it all leads to this moment.

House #45 stands as a testament to what a community can accomplish when it comes together around a shared belief: that everyone deserves a decent place to live. To everyone who played a role — volunteers, donors, trade partners, and neighbors — thank you. You made this possible. And to Katelin and her family, welcome home. We are so proud to have built alongside you.

If you would like to be part of the next chapter for Habitat for Humanity Barry County, we would love to have you. Visit our website to learn how you can volunteer, donate, or get involved.`,
  },
  {
    slug: "trim-work-house-45",
    title: "The Details Make the Difference: Trim Work Underway at House #45",
    date: "February 13, 2026",
    excerpt: "Volunteers worked room by room to give House #45 the polished, finished look that every family deserves — including motion sensor closet lights in Carter's room.",
    image: newsTrimWork,
    body: `Anyone who has ever tackled building a home knows that trim work is one of those tasks that takes far longer than expected — but the results are absolutely worth it. The volunteers at Habitat for Humanity Barry County worked room by room to give house #45 the polished, finished look that every family deserves.

One of the highlights along the way was completing the trim in Carter's room. A few touch-up paint spots remained, but the room was nearly picture-perfect — and it came with a special feature. Katelin's dad, the electrician on the project, installed motion sensor lights in the closet. It's exactly the kind of personal touch that makes a Habitat house feel like a home before the family even moves in.

We are so excited to be finishing up the small details! The home dedication will be held Feb 25th!`,
  },
  {
    slug: "painting-and-trim-underway",
    title: "Painting and Trim Underway!",
    date: "January 20, 2026",
    excerpt: "Cabinets and flooring installed — Home #45 is really looking close to done! Interior painting is wrapping up and trim work has begun.",
    image: news1,
    body: `Home #45 is getting closer to completion every day! The cabinets have been installed and look fantastic, and the flooring is down throughout the house. Our volunteer crews have been busy with interior painting — the rooms are really starting to feel like a home now.

Trim work has begun around the doors and windows, adding the finishing touches that make all the difference. We're incredibly grateful for the dedicated volunteers who show up week after week to make this dream a reality for another Barry County family.

If you'd like to help with the final push, we still need volunteers for finish carpentry, painting touch-ups, and landscaping. Every hand makes a difference!`,
  },
  {
    slug: "construction-update-home-45",
    title: "Construction Update: Home #45",
    date: "December 16, 2025",
    excerpt: "The fourth green inspection sticker has been placed, marking a major milestone in the construction of our newest home.",
    image: news2,
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
    image: news3,
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
    image: news4,
    body: `Home #45 is really starting to look like a home! The exterior siding installation is nearly complete, and the roofing crew has finished their work. From the street, you can now see what this home will look like when it's done — and it looks great.

The windows are installed, the exterior doors are in place, and the house is now weather-tight. This means interior work can proceed regardless of weather conditions, which is crucial as we head into the colder months.

Next up: electrical, plumbing, and HVAC rough-ins will begin, followed by insulation and drywall. We're on track for our target completion date, and the future homeowner family is excited to see the progress!`,
  },
  {
    slug: "lake-trust-gift-received",
    title: "Lake Trust Gift Received",
    date: "March 17, 2025",
    excerpt: "A generous $23,455 donation from Lake Trust Credit Union's Home Loan Giveback program to support our mission.",
    image: news5,
    body: `We are thrilled and grateful to announce that Lake Trust Credit Union has donated $23,455 to Habitat for Humanity Barry County through their Home Loan Giveback program!

This generous gift will go directly toward building homes for families in need in Barry County. Lake Trust Credit Union has been a wonderful partner in our mission, and this donation represents their commitment to helping families achieve the dream of homeownership.

The Home Loan Giveback program donates a portion of home loan proceeds to Habitat for Humanity affiliates across Michigan. It's a perfect alignment of values — helping people build financial stability through homeownership.

Thank you, Lake Trust Credit Union, for your incredible generosity and partnership! Gifts like this make it possible for us to continue building homes, communities, and hope in Barry County.`,
  },

  // ⬆️ Oldest article is at the bottom
];

export function getNewsItem(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}
