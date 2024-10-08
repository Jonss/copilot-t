import { capitalize } from "lodash";

export const toCapital = (s: string) => {
    const splitted = s.split("-");
    if (splitted.length == 1) {
        return capitalize(s);
    }
    return splitted.map(ss => capitalize(ss)).join("-")
}