export const formatPlateNumber = (number:Number) => {
    const plateNumber = String(number); // Convert the number to a string
    const formattedNumber = plateNumber.padStart(4, '0'); // Ensure it has 4 digits, padding with zeros to the left if necessary
    return `4167-${formattedNumber}`;
}