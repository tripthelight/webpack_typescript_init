export const formData = (from: HTMLFormElement) => {
    const inputs = from.querySelectorAll('input');
    let values: {[prop: string]: string} = {};

    inputs.forEach(input => {
        values[input.id] = input.value;
    });
    return values;
}