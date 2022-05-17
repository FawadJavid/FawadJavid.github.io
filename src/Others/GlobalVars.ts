import { OurIcons } from "./OurIcons"
import { NavBottomLinksInterface, TitledListItemInterface } from "./Interfaces"
import { WebImages } from "./Images"

export class GlobalVars {

    static primaryColor = "#00C853"
    static otherColors: Array<string> = [
        '#D50000', '#C51162', '#AA00FF', '#6200EA', '#304FFE',
        '#2962FF', '#0091EA', '#00B8D4', '#00BFA5', '#00C853',
        '#64DD17', '#AEEA00', '#FFD600', '#FFAB00', '#FF6D00',
        '#DD2C00'
    ]
    static myName = 'Fawad Javid'
    static myOccupation = 'Penetration Tester / Red Teamer'
    static myDetails = 'Hello, I am Fawad Javid. I am a Penetration Tester and Red Teamer working as part of the MSSP team for the past 2 years at Systems Ltd. Part Time Bug Bounty Hunter and Cyber security researcher. I have helped many companies secure themselves as a freelancer. I m having experience in Red Teaming, Web Application Security, Mobile Application Security, API Security, Source Code Analysis, Vulnerability Assessment and Penetration Testing and excellent proficiency in some of the best tools like IBM AppScan, Burpsuit, Postman, SoapUI, multiple Kali OS tools and custom scripts.'
    static myLeftAvatarImage = null
    static myRightAvatarImage = null

    static routes: Array<string> = [
        "About",
        "Skills",
        "Projects",
        "Contact",
    ]

    static bottomLinks: Array<NavBottomLinksInterface> = [
        {
            svgPath: OurIcons.linkedin,
            link: 'https://pk.linkedin.com/in/fawad-javid-b25474180'
        },
        {
            svgPath: OurIcons.email,
            link: 'mailto:max.mustermann@example.com?body=My custom mail body"'
        }
    ]

    static skills: Array<TitledListItemInterface> = [
        {
            text: "Primary Skills",
            arr: [
                {
                    title: 'Red Team Assessment',
                    logo: 'https://images-platform.99static.com/8n-YcxzKG1kxSjF2yn1NsIDIgUE=/34x0:959x925/500x500/top/smart/99designs-contests-attachments/89/89741/attachment_89741094'
                },
                {
                    title: 'Web Application Security Assessment',
                    logo: 'https://cdn.dribbble.com/users/1787323/screenshots/14740614/media/f959b318f4744a500919745d3f513f6c.png?compress=1&resize=1000x750&vertical=top'
                },
                {
                    title: 'API Security Assessment',
                    logo: 'https://cdn-icons-png.flaticon.com/512/2164/2164832.png'
                },
                {
                    title: 'Mobile Application Security Assessment',
                    logo: 'https://cdn-icons-png.flaticon.com/512/2097/2097276.png'
                },
                {
                    title: 'Network Security Assessment',
                    logo: 'https://cdn-icons-png.flaticon.com/512/3598/3598209.png'
                },
                {
                    title: 'Azure Sentinal L1 analyst',
                    logo: 'https://cdn-icons-png.flaticon.com/512/873/873143.png'
                },
            ]
        },

        {
            text: "Programming",
            arr: [
                {
                    title: 'C++',
                    logo: 'https://seeklogo.com/images/C/c-logo-1B1817C041-seeklogo.com.png',
                },
                {
                    title: 'Python',
                    logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
                },
                {
                    title: 'SQL',
                    logo: 'https://www.svgrepo.com/show/255832/sql.svg',
                },
                {
                    title: 'Bash/Shell/PowerShell',
                    logo: 'https://docs.microsoft.com/en-us/powershell/media/index/powershell_128.svg',
                },
                {
                    title: 'PHP',
                    logo: 'https://www.vectorlogo.zone/logos/php/php-icon.svg',
                }
                
            ]
        },
        {
            text: "Frameworks",
            arr: [
                {
                    title: 'NIST SP 800-115',
                    logo: 'https://www.vectorlogo.zone/logos/nist/nist-ar21.svg'
                },
                {
                    title: 'Open Source Security Testing Methodology Manual (OSSTMM)',
                    logo: 'https://www.infopulse.com/uploads/media/osstmm.svg'
                },
                {
                    title: 'Open Web Application Security Project (OWASP)',
                    logo: 'https://cdn.freelogovectors.net/svg09/owasp_logo-freelogovectors.net_.svg'
                },
                {
                    title: 'Penetration Testing Execution Standard (PTES)',
                    logo: 'https://www.eyrasecurity.com/wp-content/uploads/2021/04/PTES.png'
                },

            ]
        },
        {
            text: "Human Languages",
            arr: [
                {
                    title: 'English',
                    desc: "Fluent",
                    logo: 'https://www.flaticon.com/premium-icon/icons/svg/3097/3097023.svg',
                },

                {
                    title: 'Urdu',
                    desc: "Conversational",
                    logo: 'https://www.flaticon.com/premium-icon/icons/svg/3097/3097115.svg',
                },

                {
                    title: 'Pashto',
                    desc: "Conversational",
                    logo: 'https://freesvg.org/img/Cyrillic-R.png',
                },
            ]
        },
    ]

    static projects: Array<TitledListItemInterface> = [
        {
            text: "Projects",
            arr: [
                {
                    title: '...',
                    logo: '',
                    desc: '',
                    link: ''
                },
            ]
        },
   ]    
       
    static contacts: Array<TitledListItemInterface> = [
        {
            text: "Contact me",
            arr: [
                {
                    title: 'LinkedIn',
                    logo: 'https://seeklogo.com/images/L/linkedin-in-icon-logo-2E34704F04-seeklogo.com.png',
                    link: 'https://pk.linkedin.com/in/fawad-javid-b25474180'
                },
                {
                    title: 'Email',
                    logo: 'https://seeklogo.com/images/G/google-gmail-logo-620D76A63C-seeklogo.com.png',
                    link: 'Fawadktk28@gmail.com'
                }
            ]
        },
        {
            text: "Website Profiles",
            arr: [
                {
                    title: 'GitHub',
                    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                    link: 'https://fawadjavid.github.io/'
                },
            ]
        },
    ]
}
