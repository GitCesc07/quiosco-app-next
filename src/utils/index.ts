//* formats for currency Nicaragua
export function formatCurrencyNicaragua(value: string): string {
    return new Intl.NumberFormat("es-NI", {
        style: "currency",
        currency: "NIO"
    }).format(parseFloat(value))
}

//* formats for currency USA
export function formatCurrencyUSA(value: string): string {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(parseFloat(value))
}