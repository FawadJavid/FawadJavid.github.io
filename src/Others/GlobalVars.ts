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
            text: "University Projects",
            arr: [
                {
                    title: 'Desplash',
                    logo: 'https://lh3.googleusercontent.com/ILrto9KguXlr-clbhYKUonpnHszgNp_N5Qvc8_u9QaM71oaqNKcYql2sV3sqZ7nqzsc=s180',
                    desc: 'Automatic Free High Quality Wallpapers powered by Unsplash.com',
                    link: 'https://apkpure.com/desplash-beautiful-automatic-unsplash-wallpapers/p32929.desplash'
                },
                {
                    title: 'BirthdayBot',
                    logo: 'https://image.flaticon.com/icons/svg/415/415587.svg',
                    desc: 'Birthday wishing apps, made for individual people...',
                    link: ''
                },
            ]
        },
        {
            text: "Personal Scripts",
            arr: [
                {
                    title: 'IndecisionApp',
                    logo: 'https://image.flaticon.com/icons/svg/2762/2762575.svg',
                    desc: 'My first ReactJS app',
                    link: 'https://p32929.github.io/IndecisionApp'
                },

            ]
        },
   ]    
       
    static contacts: Array<TitledListItemInterface> = [
        {
            text: "Contact me",
            arr: [
                {
                    title: 'Skype',
                    logo: 'https://image.flaticon.com/icons/svg/174/174869.svg',
                    desc: 'p32929',
                    link: 'skype:p32929?chat'
                },
                {
                    title: 'WhatsApp',
                    logo: 'https://image.flaticon.com/icons/svg/733/733585.svg',
                    link: 'https://api.whatsapp.com/send?phone=8801796306262'
                },
                {
                    title: 'Facebook',
                    logo: 'https://image.flaticon.com/icons/svg/124/124010.svg',
                    link: 'https://www.facebook.com/p32929'
                },
                {
                    title: 'Anywhere on the internet',
                    logo: 'https://image.flaticon.com/icons/png/512/364/364089.png',
                    link: '@p32929'
                }
            ]
        },
        {
            text: "Website Profiles",
            arr: [
                {
                    title: 'GitHub',
                    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                    link: 'https://github.com/p32929/'
                },
                {
                    title: 'Wordpress',
                    logo: 'https://lh3.googleusercontent.com/FKoZImII3S1CKxDwudC2k1EW8NMDi8FyWRk0_AufAQcixOd-kdll5H32L2lKvGIbVWIB',
                    link: 'https://p32929.wordpress.com/'
                },
                {
                    title: 'YouTube',
                    logo: 'https://lh3.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc',
                    link: 'https://www.youtube.com/channel/UCFucp3uZ96IBYxG8755AniQ'
                },
                {
                    title: 'Google Play',
                    logo: 'https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg',
                    link: 'https://play.google.com/store/apps/developer?id=Rich+IT&hl=en'
                },
            ]
        },
        {
            text: "Apps I rarely use",
            arr: [
                {
                    title: 'LinkedIn',
                    logo: 'https://image.flaticon.com/icons/svg/174/174857.svg',
                    link: 'https://www.linkedin.com/in/p32929/'
                },
                {
                    title: 'Reddit',
                    logo: 'https://image.flaticon.com/icons/svg/174/174866.svg',
                    link: 'https://www.reddit.com/user/p32929'
                },
                {
                    title: 'Twitter',
                    logo: 'https://image.flaticon.com/icons/svg/733/733579.svg',
                    link: 'https://twitter.com/p32929'
                },
                {
                    title: 'Instagram',
                    logo: 'https://image.flaticon.com/icons/svg/2111/2111463.svg',
                    link: 'https://www.instagram.com/p32929/'
                },
                {
                    title: 'Fiverr',
                    logo: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/fiverr-2018.png?auto=format&q=60&fit=max&w=200',
                    link: 'https://www.fiverr.com/users/fayazbinsalam/'
                },
                {
                    title: "Freelancer",
                    logo: "https://lh3.googleusercontent.com/EXMdy4ai6HHl_Ze8vxC7pdQzfS0HFiZ70F2IdPq_VuYropTkrUFyPPlftbPKEbhISg",
                    link: "https://www.freelancer.com/u/p32929"
                }
            ]
        },
        {
            text: "Thank you for visiting my portfolio",
            arr: [
                {
                    title: "Click on the link button",
                    desc: 'To create your own portfolio. It will only take 3 minutes',
                    logo: WebImages.giftIcon,
                    link: 'https://github.com/p32929/p32929.github.io/'
                }
            ]
        }
    ]
}
