namespace fun {
    /**
    * 计算著名的斐波那契数列！
    */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}
