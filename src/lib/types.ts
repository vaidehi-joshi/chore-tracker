export type Person = {
    id: number;
    img: string;
    name: string;
    age?: number;
    email?: string;
};
export type RoleAssignment = {
    lunchChef: Person,
    dinnerChef: Person,
    cleaner: Person,
}