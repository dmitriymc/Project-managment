export interface User {
    id: number;
    login: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    r_password: string;
    position: number;
    level: number;
    role: number;
    avatar: string;
    dateRegistration: string;
    online: boolean;
}