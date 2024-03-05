const cashe: number[] = [];

export function climbStairs(n: number): number {
    if(n <= 3) {
        return n;
    } 
    if(!cashe[n]) {
        cashe[n] = climbStairs(n - 2) + climbStairs(n - 1);
    }

    return cashe[n];
};