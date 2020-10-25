import { AboutDoctorComponent } from '../components/about-doctor/about-doctor.component';
import { AboutServicesComponent } from '../components/about-services/about-services.component';
import { AboutTreatmentsComponent } from '../components/about-treatments/about-treatments.component';
import { AboutAchievmentsComponent } from '../components/about-achievments/about-achievments.component';
import { AboutSocialWorkComponent } from '../components/about-social-work/about-social-work.component';

export const ABOUT_US = [
    {
        name: 'About Doctor',
        icon: 'account_box',
        component: AboutDoctorComponent,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        name: 'Social Works',
        icon: 'whatshot',
        component: AboutSocialWorkComponent,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        name: 'Services We Provide',
        icon: 'settings',
        component: AboutServicesComponent,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        name: 'Conditions We Treat',
        icon: 'accessibility',
        component: AboutTreatmentsComponent,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        name: 'Achievements',
        icon: 'emoji_events',
        component: AboutAchievmentsComponent,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
];
