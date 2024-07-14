import PasswGen from "../assets/images/PasswGen.webp"
import Website from "../assets/images/website.webp"
const data = [
    {
        name: "My Portfolio",
        type: "Website  ",
        url: "/",
        github: "https://github.com/fawer5dev/fawer5dev.github.io",
        image: Website,
        slug: "website",
        description: "My Portfolio",
        tech: ['Astro', 'Html', 'JavaScript', 'TypeScript', 'Css']        
    },
    {
        name: "Password Generator",
        type: "WebApp",
        url: "https://calm-creponne-26b379.netlify.app/",
        github: "https://github.com/fawer5dev/password-generator",
        image: PasswGen,
        slug: "password-generator",
        description: "This code is a JavaScript file that generates random passwords based on user preferences, and provides an option to copy the password to the user's clipboard.",
        tech: ['HTML', 'JavaScript', 'Css'],
    },        
]

export function getData(){
    return data;
}