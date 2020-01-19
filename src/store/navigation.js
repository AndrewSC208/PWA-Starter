import { push } from 'connected-react-router';

export const Routes = {
    signup:        "/signup",
    login:         "/login",
    counter:       "/counter",
    settings:      "/settings",
    profile:       "/profile",
    mail:          "/mail",
    notifications: "/notifications",
    home:          "/"
};

export const toSignup = () => push(Routes.signup);

export const toLogin = () => push(Routes.login);

export const toMail = () => push(Routes.mail);

export const toCounter = () => push(Routes.counter);

export const toSettings = () => push(Routes.settings);

export const toProfile = () => push(Routes.profile);

export const toNotifications = () => push(Routes.notifications);

export const toHome = () => push(Routes.home);