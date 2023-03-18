export const valueFunction = (distance, type) => {
    const multiType = {
        "Básico": 1,
        "Intermediário": 2,
        "Luxo": 4
    };

    let value = distance * 0.0005 * multiType[type];
    return value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}