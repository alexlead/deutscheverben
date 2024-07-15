export const levels: ReadonlyArray<string> = [ 'A1' , 'A2' , 'B1' , 'B2' , 'C1' ] as const;

export type selectedLevels = {
    levels: typeof levels[number][];
}

export type verb = {
"id": string;
"level": string;
"verb": string;
"translation": string;
"past": string;
"partizip": string;
"present_singular_3": string;

}
